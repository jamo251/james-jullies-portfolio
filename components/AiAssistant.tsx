import React, { useState, useRef, useEffect } from 'react';
import { askPortfolioGuide, MAX_QUESTION_CHARS, MAX_QUESTIONS } from '../services/chatService';
import { ChatMessage } from '../types';
import { gsap, prefersReducedMotion } from '../lib/gsap';

const GREETING: ChatMessage = {
  role: 'assistant',
  content: "Hi, I'm a guide to James's work, running on Claude. Ask me about his projects, experience or certifications.",
};

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const questionsAsked = messages.filter((m) => m.role === 'user').length;
  const limitReached = questionsAsked >= MAX_QUESTIONS;
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
    const question = input.trim();
    if (!question || isLoading || limitReached) return;

    setInput('');
    setError(null);
    const conversation = [...messages, { role: 'user' as const, content: question }];
    setMessages(conversation);
    setIsLoading(true);

    const result = await askPortfolioGuide(conversation.slice(1));
    if ('reply' in result) {
      setMessages((prev) => [...prev, { role: 'assistant', content: result.reply }]);
    } else {
      // Drop the unanswered question so the history stays valid for a retry
      setMessages(messages);
      setInput(question);
      setError(result.error);
    }
    setIsLoading(false);
  };

  const resetChat = () => {
    setMessages([GREETING]);
    setError(null);
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
              AI Guide
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
                  <span className="whitespace-pre-wrap">{msg.content}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-ink text-muted border border-line px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em]">
                  Thinking...
                </div>
              </div>
            )}
            {error && (
              <div role="alert" className="border border-accent/40 bg-ink px-4 py-3 text-sm text-paper">
                {error}{' '}
                <a href="#contact" onClick={() => setIsOpen(false)} className="text-accent underline underline-offset-2">
                  Contact James directly
                </a>
              </div>
            )}
            {limitReached && !isLoading && (
              <div className="text-xs text-muted">
                That's the limit for this conversation.{' '}
                <button onClick={resetChat} className="text-accent underline underline-offset-2">
                  Start a new one
                </button>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-line flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              maxLength={MAX_QUESTION_CHARS}
              disabled={limitReached}
              aria-label="Your question"
              placeholder="Ask about James's work..."
              className="flex-1 bg-ink border border-line px-4 py-2.5 text-sm text-paper placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || limitReached || !input.trim()}
              className="disabled:opacity-50 bg-accent text-ink px-4 font-mono text-xs uppercase tracking-[0.1em] hover:bg-paper transition-colors"
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
