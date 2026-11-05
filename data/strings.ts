import type { Locale } from '../hooks/useLocale';

/** Interface text that isn't part of the published content. */
export const STRINGS = {
  en: {
    homeTitle: 'James Jullies | Martech & AI Architect',
    projectTitleSuffix: ' | James Jullies',
    backToHome: '← James Jullies',
    viewProject: 'View project',
    imageAlt: (title: string, n: number, total: number) => `${title}, image ${n} of ${total}`,
    chat: {
      greeting:
        "Hi, I'm a guide to James's work, running on Claude. Ask me about his projects, experience or certifications.",
      title: "Ask an AI about James's work",
      close: 'Close',
      closeLabel: 'Close chat',
      thinking: 'Thinking…',
      emailDirectly: 'Email James directly',
      limitReached: "That's the limit for this conversation.",
      startNew: 'Start a new one',
      inputLabel: 'Your question',
      placeholder: "Ask about James's work…",
      send: 'Send',
    },
  },
  ar: {
    homeTitle: 'جيمس جوليز | مهندس حلول تقنيات التسويق والذكاء الاصطناعي',
    projectTitleSuffix: ' | جيمس جوليز',
    // In right-to-left text "back" points right
    backToHome: '→ جيمس جوليز',
    viewProject: 'عرض المشروع',
    imageAlt: (title: string, n: number, total: number) => `${title}، الصورة ${n} من ${total}`,
    chat: {
      greeting:
        'مرحبًا، أنا دليل إلى أعمال جيمس، وأعمل بتقنية Claude. اسألني عن مشاريعه أو خبراته أو شهاداته.',
      title: 'اسأل الذكاء الاصطناعي عن أعمال جيمس',
      close: 'إغلاق',
      closeLabel: 'إغلاق المحادثة',
      thinking: 'جارٍ التفكير…',
      emailDirectly: 'راسل جيمس مباشرةً',
      limitReached: 'هذا هو الحد الأقصى لهذه المحادثة.',
      startNew: 'ابدأ محادثة جديدة',
      inputLabel: 'سؤالك',
      placeholder: 'اسأل عن أعمال جيمس…',
      send: 'إرسال',
    },
  },
} satisfies Record<Locale, unknown>;
