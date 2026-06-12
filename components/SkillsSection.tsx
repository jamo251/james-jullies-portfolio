import React, { useRef } from 'react';
import { SKILLS } from '../constants';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';
import SectionHeading from './SectionHeading';

const SkillsSection: React.FC = () => {
  const rootRef = useRef<HTMLElement>(null);
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('.skill-row').forEach((row) => {
          gsap.from(row, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 90%', once: true },
          });
          const bar = row.querySelector('.skill-bar');
          if (bar) {
            gsap.from(bar, {
              scaleX: 0,
              transformOrigin: 'left center',
              duration: 1.2,
              ease: 'power3.inOut',
              delay: 0.15,
              scrollTrigger: { trigger: row, start: 'top 90%', once: true },
            });
          }
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      id="skills"
      className="px-6 md:px-10 py-24 md:py-36 border-t border-line scroll-mt-16"
    >
      <SectionHeading
        index="02"
        label="Expertise"
        title="Mastering the Stack"
        intro="Expertise spanning from advanced generative AI models to scalable cloud-native architectures."
      />

      <div className="space-y-16 md:space-y-20">
        {categories.map((cat) => (
          <div key={cat} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-3">
              <h3 className="mono-label text-accent md:sticky md:top-24">{cat}</h3>
            </div>
            <div className="md:col-span-9">
              {SKILLS.filter((s) => s.category === cat).map((skill) => (
                <div
                  key={skill.name}
                  className="skill-row flex items-center gap-6 md:gap-10 py-5 md:py-6 border-b border-line"
                >
                  <span className="display-heading text-xl md:text-3xl text-paper w-1/2 md:w-2/5 shrink-0">
                    {skill.name}
                  </span>
                  <div className="flex-1 h-0.5 bg-line relative overflow-hidden">
                    <div
                      className="skill-bar absolute inset-y-0 left-0 bg-accent"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-muted w-10 text-right shrink-0">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
