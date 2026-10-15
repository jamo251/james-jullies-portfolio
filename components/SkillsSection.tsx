import React, { useRef } from 'react';
import { SKILL_GROUPS } from '../data/content';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';
import SectionHeading from './SectionHeading';

const SkillsSection: React.FC = () => {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('.skill-group').forEach((group) => {
          gsap.from(group.querySelectorAll('.skill-tag'), {
            opacity: 0,
            y: 16,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.04,
            scrollTrigger: { trigger: group, start: 'top 90%', once: true },
          });
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
        intro="From pre-sales discovery and customer data architecture to production GenAI tooling built on the Claude API and MCP."
      />

      <div className="border-t border-line">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.name}
            className="skill-group grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 py-8 md:py-10 border-b border-line"
          >
            <h3 className="md:col-span-3 mono-label text-accent md:pt-3">{group.name}</h3>
            <ul className="md:col-span-9 flex flex-wrap gap-2.5 md:gap-3">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="skill-tag border border-line px-4 py-2.5 text-sm md:text-base text-paper leading-snug"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
