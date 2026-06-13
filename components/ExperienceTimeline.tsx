import React, { useRef } from 'react';
import { EXPERIENCE } from '../constants';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';
import SectionHeading from './SectionHeading';

const ExperienceTimeline: React.FC = () => {
  const rootRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from('.exp-progress', {
          scaleY: 0,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: true,
          },
        });
        gsap.utils.toArray<HTMLElement>('.exp-item').forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 85%', once: true },
          });
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      id="experience"
      className="px-6 md:px-10 py-24 md:py-36 border-t border-line scroll-mt-16"
    >
      <SectionHeading index="04" label="Timeline" title="Career Journey" />

      <div ref={listRef} className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-line hidden md:block" aria-hidden="true" />
        <div className="exp-progress absolute left-0 top-0 bottom-0 w-px bg-accent hidden md:block" aria-hidden="true" />

        {EXPERIENCE.map((exp, idx) => (
          <div
            key={idx}
            className="exp-item grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-14 border-t border-line first:border-t-0 md:pl-10"
          >
            <div className="md:col-span-4">
              <div className="md:sticky md:top-24">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent block">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted block mt-2">
                  {exp.location}
                </span>
              </div>
            </div>
            <div className="md:col-span-8">
              <h3 className="display-heading text-2xl md:text-4xl text-paper">{exp.role}</h3>
              <p className="mono-label text-muted mt-3">{exp.company}</p>
              <ul className="mt-6 space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted text-sm md:text-base leading-relaxed flex items-start gap-3">
                    <span className="mt-2.5 w-4 h-px bg-accent shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
