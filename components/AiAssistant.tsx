import React, { useState, useRef, useEffect } from 'react';
import { chatWithPortfolioAI } from '../services/geminiService';
import { ChatMessage } from '../types';
import { gsap, prefersReducedMotion } from '../lib/gsap';

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
      if (!prefersReducedMotion()) {
        const last = scrollRef.current.lastElementChild;
        if (last) {
          gsap.from(last, { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' });
        }
      }
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
    <div className="fixed bottom-6 right-6 z-[96] flex flex-col items-end">
      {isOpen && (
        <div
          data-lenis-prevent
          className="w-80 md:w-96 bg-surface border border-line shadow-2xl overflow-hidden mb-4 flex flex-col h-[500px]"
        >
          <div className="p-4 border-b border-line flex justify-between items-center bg-ink">
            <h3 className="mono-label text-paper flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent animate-pulse" aria-hidden="true"></span>
              Expert AI Guide
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="mono-label text-muted hover:text-accent transition-colors"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-accent text-ink'
                      : 'bg-ink text-paper border border-line'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-ink text-muted border border-line px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em]">
                  Analyzing profile...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-line flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about James's stack..."
              className="flex-1 bg-ink border border-line px-4 py-2.5 text-sm text-paper placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              onClick={handleSend}
              className="bg-accent text-ink px-4 font-mono text-xs uppercase tracking-[0.1em] hover:bg-paper transition-colors"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-12 px-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] border transition-colors ${
          isOpen
            ? 'bg-ink text-paper border-line hover:border-accent'
            : 'bg-accent text-ink border-accent hover:bg-paper hover:border-paper'
        }`}
        aria-label="Toggle AI assistant"
      >
        <span className={`w-1.5 h-1.5 ${isOpen ? 'bg-accent' : 'bg-ink'} animate-pulse`} aria-hidden="true"></span>
        Ask AI
      </button>
    </div>
  );
};

export default AiAssistant;
