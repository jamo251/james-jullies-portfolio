import { useEffect, useState } from 'react';

/**
 * Minimal History API router. The site only has two kinds of page, the
 * portfolio at "/" and case studies at "/work/<slug>", so a router library
 * would be overkill.
 */

const ROUTE_EVENT = 'jj:navigate';

export const workPath = (slug: string) => `/work/${slug}`;

/** Push a new path; `fromHome` marks entries we can safely go back from. */
export const navigate = (path: string, opts: { replace?: boolean } = {}) => {
  if (path === window.location.pathname) return;
  const state = { fromHome: window.location.pathname === '/' };
  if (opts.replace) {
    history.replaceState(state, '', path);
  } else {
    history.pushState(state, '', path);
  }
  window.dispatchEvent(new Event(ROUTE_EVENT));
};

/** True when the current entry was opened from the portfolio in this tab. */
export const cameFromHome = () => Boolean(history.state?.fromHome);

/** Current pathname, kept in sync with pushState and back/forward. */
export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const sync = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', sync);
    window.addEventListener(ROUTE_EVENT, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(ROUTE_EVENT, sync);
    };
  }, []);

  return pathname;
}
