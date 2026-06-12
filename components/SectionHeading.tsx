import React, { useRef } from 'react';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  intro?: React.ReactNode;
  className?: string;
}

/** Mono index/label row + oversized masked-word heading, revealed on scroll. */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  label,
  title,
  intro,
  className = '',
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from('.sh-meta', {
          opacity: 0,
          y: 16,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: rootRef.current, start: 'top 85%', once: true },
        });
        gsap.from('.sh-word', {
          yPercent: 110,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.07,
          scrollTrigger: { trigger: rootRef.current, start: 'top 82%', once: true },
        });
        if (rootRef.current?.querySelector('.sh-intro')) {
          gsap.from('.sh-intro', {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.25,
            scrollTrigger: { trigger: rootRef.current, start: 'top 82%', once: true },
          });
        }
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className={`mb-14 md:mb-20 ${className}`}>
      <div className="sh-meta flex items-center gap-4 mb-6 md:mb-10">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="w-10 h-px bg-line" aria-hidden="true" />
        <span className="mono-label text-muted">{label}</span>
      </div>
      <h2 className="display-heading text-[clamp(2.5rem,7vw,6rem)] text-paper">
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <span className="sh-word inline-block">
              {word}
              {i < title.split(' ').length - 1 ? ' ' : ''}
            </span>
          </span>
        ))}
      </h2>
      {intro && (
        <p className="sh-intro mt-6 md:mt-8 max-w-xl text-muted text-base md:text-lg leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
