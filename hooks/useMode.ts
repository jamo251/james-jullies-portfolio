import { useLayoutEffect, useState } from 'react';
import { SiteMode } from '../types';

const STORAGE_KEY = 'jj-mode';

const TITLES: Record<SiteMode, string> = {
  architect: 'James Jullies | Martech & AI Architect',
  artist: 'JAMO | ANIMUS',
};

/** URL param wins (shareable links), then the remembered choice, then the professional side. */
const getInitialMode = (): SiteMode => {
  if (typeof window === 'undefined') return 'architect';
  const param = new URLSearchParams(window.location.search).get('side');
  if (param === 'artist' || param === 'architect') return param;
  return localStorage.getItem(STORAGE_KEY) === 'artist' ? 'artist' : 'architect';
};

/** Owns the architect/artist mode: theming attribute, title, URL param, and persistence. */
export function useMode() {
  const [mode, setMode] = useState<SiteMode>(getInitialMode);

  useLayoutEffect(() => {
    document.documentElement.dataset.mode = mode;
    document.title = TITLES[mode];
    localStorage.setItem(STORAGE_KEY, mode);

    const url = new URL(window.location.href);
    if (mode === 'artist') {
      url.searchParams.set('side', 'artist');
    } else {
      url.searchParams.delete('side');
    }
    history.replaceState(null, '', url);
  }, [mode]);

  return { mode, setMode };
}
