import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import TerminalChat from './components/TerminalChat';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { PROFILE } from './data';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer: React.FC = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} {PROFILE.name} Portfolio. Deployed via GitHub & Cloudflare.</p>
      <p className="mt-2 text-xs">Powered by React & Gemini AI</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
        <TerminalChat />
      </div>
    </Router>
  );
};

export default App;