import { useEffect, useState } from 'react';

/**
 * The site follows the visitor's device language the same way it follows
 * their light/dark setting: if their first preferred language is Arabic they
 * get the Arabic, right-to-left version, otherwise English.
 *
 * `?lang=ar` or `?lang=en` overrides detection for the rest of the tab's
 * session, which is handy for previewing or sharing a specific version.
 */

export type Locale = 'en' | 'ar';

const OVERRIDE_KEY = 'jj:lang';

const isLocale = (value: unknown): value is Locale => value === 'en' || value === 'ar';

const readOverride = (): Locale | null => {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  try {
    if (isLocale(fromUrl)) {
      sessionStorage.setItem(OVERRIDE_KEY, fromUrl);
      return fromUrl;
    }
    const stored = sessionStorage.getItem(OVERRIDE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    // Storage can be blocked (private mode, strict settings); the URL still works
    return isLocale(fromUrl) ? fromUrl : null;
  }
};

const fromDevice = (): Locale => {
  const preferred = navigator.languages?.length ? navigator.languages[0] : navigator.language;
  return preferred?.toLowerCase().startsWith('ar') ? 'ar' : 'en';
};

export const detectLocale = (): Locale => readOverride() ?? fromDevice();

/** Sets `lang` and `dir` on <html> so CSS, fonts and screen readers follow. */
export const applyLocale = (locale: Locale) => {
  const root = document.documentElement;
  root.lang = locale;
  root.dir = locale === 'ar' ? 'rtl' : 'ltr';
};

/** Current locale, updated live if the visitor changes their device language. */
export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>(detectLocale);

  useEffect(() => {
    const sync = () => setLocale(detectLocale());
    window.addEventListener('languagechange', sync);
    return () => window.removeEventListener('languagechange', sync);
  }, []);

  useEffect(() => applyLocale(locale), [locale]);

  return locale;
}
