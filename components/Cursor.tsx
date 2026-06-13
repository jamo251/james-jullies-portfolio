import React, { useRef, useState } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState(false);
  const [enabled] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !prefersReducedMotion()
  );

  useGSAP(() => {
    if (!enabled || !dotRef.current || !ringRef.current) return;

    gsap.set([dotRef.current, ringRef.current], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const dotX = gsap.quickTo(dotRef.current, 'x', { duration: 0.12, ease: 'power3' });
    const dotY = gsap.quickTo(dotRef.current, 'y', { duration: 0.12, ease: 'power3' });
    const ringX = gsap.quickTo(ringRef.current, 'x', { duration: 0.45, ease: 'power3' });
    const ringY = gsap.quickTo(ringRef.current, 'y', { duration: 0.45, ease: 'power3' });

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setView(!!target.closest?.('[data-cursor="view"]'));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[160] pointer-events-none w-2 h-2 rounded-full bg-accent mix-blend-difference transition-opacity duration-200 ${view ? 'opacity-0' : 'opacity-100'}`}
      />
      <div ref={ringRef} className="fixed top-0 left-0 z-[160] pointer-events-none">
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
            view
              ? 'w-20 h-20 bg-accent text-ink'
              : 'w-9 h-9 border border-paper/30 bg-transparent'
          }`}
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <span
            className={`font-mono text-[10px] tracking-[0.2em] transition-opacity duration-200 ${view ? 'opacity-100' : 'opacity-0'}`}
          >
            VIEW
          </span>
        </div>
      </div>
    </>
  );
};

export default Cursor;
