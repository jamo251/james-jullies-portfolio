
import React, { useState, useRef, useEffect } from 'react';
import { chatWithPortfolioAI } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm an AI assistant trained on James's professional experience. Ask me anything about his projects or certifications!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user' as const, content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    const history = messages
      .filter((m, i) => i > 0)
      .map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

    const response = await chatWithPortfolioAI(userMsg, history);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 glass rounded-2xl shadow-2xl overflow-hidden mb-4 border border-[#2B9B78]/30 flex flex-col h-[500px]">
          <div className="p-4 bg-[#0F4C81] flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2 text-white">
              <span className="w-2 h-2 bg-[#2B9B78] rounded-full animate-pulse"></span>
              Expert AI Guide
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[#0F4C81] text-white rounded-tr-none' : 'bg-gray-800 text-gray-200 rounded-tl-none border border-[#2B9B78]/10'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-400 px-4 py-2 rounded-2xl rounded-tl-none text-xs italic">
                  Analyzing profile...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about James's stack..." 
              className="flex-1 bg-gray-900 border border-[#2B9B78]/20 rounded-full px-4 py-2 text-sm text-offwhite focus:outline-none focus:border-[#2B9B78]"
            />
            <button 
              onClick={handleSend}
              className="bg-[#2B9B78] p-2 rounded-full hover:bg-[#025147] transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0F4C81] rounded-full flex items-center justify-center shadow-lg hover:bg-[#025147] hover:scale-105 transition-all group border border-[#2B9B78]/20"
      >
        <svg className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default AiAssistant;
