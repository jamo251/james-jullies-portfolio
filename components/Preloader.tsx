import React, { useEffect, useRef } from 'react';
import { gsap, useGSAP, ScrollTrigger } from '../lib/gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const NAME = 'JAMES JULLIES';

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    sessionStorage.setItem('jj-intro', '1');
  }, []);

  useGSAP(
    () => {
      const counter = { value: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.refresh();
          onComplete();
        },
      });

      tl.from('.preloader-char', {
        yPercent: 110,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.035,
      }, 0.1)
        .to(counter, {
          value: 100,
          duration: 1.2,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = String(Math.round(counter.value)).padStart(3, '0');
            }
          },
        }, 0)
        .to('.preloader-char', {
          yPercent: -110,
          duration: 0.5,
          ease: 'power3.in',
          stagger: 0.02,
        }, '+=0.15')
        .to(rootRef.current, {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.7,
          ease: 'power4.inOut',
        }, '-=0.25');
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] bg-ink flex flex-col justify-between p-6 md:p-10"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
      aria-hidden="true"
    >
      <div className="mono-label text-muted">Portfolio — 2026</div>

      <div className="display-heading text-[clamp(2.5rem,9vw,8rem)] text-paper">
        {NAME.split('').map((char, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <span className="preloader-char inline-block">
              {char === ' ' ? ' ' : char}
            </span>
          </span>
        ))}
      </div>

      <div className="flex items-end justify-between">
        <div className="mono-label text-muted">Martech &amp; AI Architect</div>
        <span ref={counterRef} className="font-mono text-4xl md:text-6xl text-accent">
          000
        </span>
      </div>
    </div>
  );
};

export default Preloader;
