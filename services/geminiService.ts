import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { GENERATE_SYSTEM_PROMPT } from "../data";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: GENERATE_SYSTEM_PROMPT(),
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = initializeChat();
  
  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    // Generator function to yield chunks of text
    async function* textGenerator() {
      for await (const chunk of resultStream) {
         const c = chunk as GenerateContentResponse;
         if (c.text) {
           yield c.text;
         }
      }
    }
    
    return textGenerator();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};