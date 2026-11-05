import { ChatMessage } from '../types';
import type { Locale } from '../hooks/useLocale';

export const MAX_QUESTION_CHARS = 500;
export const MAX_QUESTIONS = 6;

// The API's own error messages are English, so Arabic visitors get these instead
const ARABIC_ERRORS = {
  busy: 'طرحت أسئلة كثيرة خلال وقت قصير، أو أن الدليل مشغول حاليًا. يُرجى المحاولة بعد بضع دقائق.',
  unavailable: 'الدليل غير متاح حاليًا.',
  offline: 'تعذّر الوصول إلى الدليل. تحقّق من اتصالك وحاول مرة أخرى.',
};

/** Sends the conversation (minus the greeting) to the /api/chat function. */
export const askPortfolioGuide = async (
  history: ChatMessage[],
  locale: Locale = 'en'
): Promise<{ reply: string } | { error: string }> => {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history, locale }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || typeof data.reply !== 'string') {
      if (locale === 'ar') {
        return { error: res.status === 429 || res.status === 503 ? ARABIC_ERRORS.busy : ARABIC_ERRORS.unavailable };
      }
      return { error: data.error || 'The guide is unavailable right now.' };
    }
    return { reply: data.reply };
  } catch {
    return {
      error: locale === 'ar' ? ARABIC_ERRORS.offline : 'Could not reach the guide. Check your connection and try again.',
    };
  }
};
