import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

let lenis: Lenis | null = null;

export const getLenis = () => lenis;

/** Scroll to an anchor (e.g. '#projects'), respecting smooth scroll when active. */
export const scrollToSection = (target: string) => {
  if (lenis) {
    lenis.scrollTo(target, { offset: -72 });
  } else {
    document.querySelector(target)?.scrollIntoView();
  }
};

/** Mounts a Lenis smooth-scroll instance wired into GSAP's ticker. */
export function useLenis() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      lenis?.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}
