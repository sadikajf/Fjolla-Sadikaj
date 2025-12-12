import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Terminal as TerminalIcon, Minimize2, Maximize2, Loader2, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { PROFILE } from '../data';

const TerminalChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Initialize system...\nTarget: ${PROFILE.name} Portfolio.\nStatus: ${PROFILE.status}.\n\nHello! I am the AI assistant. Ask me about my cloud skills, Terraform experience, or Kubernetes projects.` }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const stream = await sendMessageToGemini(userMessage);
      
      let fullResponse = "";
      setMessages((prev) => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === 'model') {
            lastMessage.text = fullResponse;
          }
          return newMessages;
        });
        scrollToBottom();
      }

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: 'Error: Connection to backend lost. Please check API configuration.', isError: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-slate-800 hover:bg-slate-700 text-cyan-400 p-4 rounded-full shadow-lg border border-cyan-500/30 transition-all hover:scale-105 group"
      >
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
        <TerminalIcon className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-xs px-2 py-1 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Launch Assistant
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-[90vw] md:w-96 bg-slate-950 rounded-lg shadow-2xl border border-slate-700 flex flex-col font-mono text-sm overflow-hidden h-[500px]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 cursor-move">
        <div className="flex items-center space-x-2 text-slate-400">
          <TerminalIcon className="h-4 w-4" />
          <span className="text-xs font-bold">root@portfolio:~/chat</span>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setMessages([{role: 'model', text: 'Terminal cleared.'}])} 
            title="Clear Terminal"
            className="text-slate-500 hover:text-white"
          >
            <RefreshCw className="h-3 w-3" />
          </button>
          <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white">
            <Minimize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/95">
        {messages.map((msg, idx) => (
          <div key={idx} className={`${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded max-w-[85%] ${
              msg.role === 'user' 
                ? 'bg-slate-800 text-cyan-50 border border-slate-700' 
                : 'text-green-400'
            }`}>
              <span className="block opacity-50 text-[10px] mb-1 font-bold">
                {msg.role === 'user' ? '> USER' : '> SYSTEM'}
              </span>
              <div className="whitespace-pre-wrap leading-relaxed">
                {msg.text}
              </div>
            </div>
            {msg.isError && <span className="block text-red-500 text-xs mt-1">Command failed</span>}
          </div>
        ))}
        {isLoading && (
          <div className="text-left">
            <span className="text-green-400 inline-flex items-center gap-2">
              {'>'} Processing <Loader2 className="h-3 w-3 animate-spin" />
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-slate-900 border-t border-slate-800">
        <div className="flex items-center space-x-2 bg-slate-950 border border-slate-700 rounded px-3 py-2 focus-within:ring-1 focus-within:ring-cyan-500/50">
          <span className="text-green-500 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="echo 'Hello world'..."
            className="flex-1 bg-transparent border-none focus:outline-none text-slate-200 placeholder-slate-600"
            autoComplete="off"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="text-slate-400 hover:text-cyan-400 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerminalChat;