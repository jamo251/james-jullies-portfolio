import React, { useState, useRef, useEffect } from 'react';
import { askPortfolioGuide, MAX_QUESTION_CHARS, MAX_QUESTIONS } from '../services/chatService';
import { ChatMessage } from '../types';
import { CONTACT_LINKS } from '../data/content';

const GREETING: ChatMessage = {
  role: 'assistant',
  content: "Hi, I'm a guide to James's work, running on Claude. Ask me about his projects, experience or certifications.",
};

const EMAIL_HREF = CONTACT_LINKS.find((l) => l.label === 'Email')?.href ?? '';

interface AiAssistantProps {
  open: boolean;
  onClose: () => void;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ open, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const questionsAsked = messages.filter((m) => m.role === 'user').length;
  const limitReached = questionsAsked >= MAX_QUESTIONS;
  const scrollRef = useRef<HTMLOListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
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

  if (!open) return null;

  return (
    <section className="chat" role="dialog" aria-labelledby="chat-title">
      <div className="chat-header">
        <h2 id="chat-title">Ask an AI about James's work</h2>
        <button type="button" className="link-button" onClick={onClose} aria-label="Close chat">
          Close
        </button>
      </div>

      <ol ref={scrollRef} className="chat-log" aria-live="polite">
        {messages.map((msg, i) => (
          <li key={i} className={`chat-msg${msg.role === 'user' ? ' user' : ''}`}>
            {msg.content}
          </li>
        ))}
        {isLoading && <li className="chat-note">Thinking…</li>}
        {error && (
          <li role="alert">
            {error} <a href={EMAIL_HREF}>Email James directly</a>
          </li>
        )}
        {limitReached && !isLoading && (
          <li className="chat-note">
            That's the limit for this conversation.{' '}
            <button type="button" className="link-button" onClick={resetChat}>
              Start a new one
            </button>
          </li>
        )}
      </ol>

      <form className="chat-form" onSubmit={handleSend}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={MAX_QUESTION_CHARS}
          disabled={limitReached}
          aria-label="Your question"
          placeholder="Ask about James's work…"
        />
        <button type="submit" disabled={isLoading || limitReached || !input.trim()}>
          Send
        </button>
      </form>
    </section>
  );
};

export default AiAssistant;
