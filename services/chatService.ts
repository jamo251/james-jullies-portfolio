import { ChatMessage } from '../types';

export const MAX_QUESTION_CHARS = 500;
export const MAX_QUESTIONS = 6;

/** Sends the conversation (minus the greeting) to the /api/chat function. */
export const askPortfolioGuide = async (
  history: ChatMessage[]
): Promise<{ reply: string } | { error: string }> => {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || typeof data.reply !== 'string') {
      return { error: data.error || 'The guide is unavailable right now.' };
    }
    return { reply: data.reply };
  } catch {
    return { error: 'Could not reach the guide. Check your connection and try again.' };
  }
};
