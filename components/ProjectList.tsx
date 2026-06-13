import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { gsap, useGSAP, MOTION_OK, FINE_POINTER_MOTION_OK } from '../lib/gsap';

interface ProjectListProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

/** Editorial full-width rows with a cursor-following image preview on hover. */
const ProjectList: React.FC<ProjectListProps> = ({ projects, onSelect }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FINE_POINTER_MOTION_OK, () => {
        const float = floatRef.current;
        const root = rootRef.current;
        if (!float || !root) return;

        const xTo = gsap.quickTo(float, 'x', { duration: 0.55, ease: 'power3' });
        const yTo = gsap.quickTo(float, 'y', { duration: 0.55, ease: 'power3' });
        const rTo = gsap.quickTo(float, 'rotation', { duration: 0.5, ease: 'power3' });
        let lastX = 0;

        const onMove = (e: MouseEvent) => {
          const rect = root.getBoundingClientRect();
          xTo(e.clientX - rect.left);
          yTo(e.clientY - rect.top);
          rTo(gsap.utils.clamp(-7, 7, (e.clientX - lastX) * 0.4));
          lastX = e.clientX;
        };

        root.addEventListener('mousemove', onMove);
        return () => root.removeEventListener('mousemove', onMove);
      });

      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('.project-row').forEach((row) => {
          gsap.from(row, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 88%', once: true },
          });
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="relative">
      {/* Floating hover preview — desktop fine-pointer only */}
      <div
        ref={floatRef}
        className={`hidden lg:block absolute top-0 left-0 z-20 w-[420px] xl:w-[480px] aspect-[4/3] pointer-events-none overflow-hidden transition-opacity duration-300 ${
          hovered !== null ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ translate: '-50% -50%' }}
        aria-hidden="true"
      >
        {projects.map((p, i) => (
          <img
            key={p.id}
            src={p.imageUrl}
            alt=""
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              hovered === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="border-y border-line divide-y divide-line">
        {projects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            data-cursor="view"
            onClick={() => onSelect(project)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="project-row group block w-full text-left py-8 md:py-12"
          >
            <div className="flex items-baseline gap-5 md:gap-10 transition-transform duration-500 ease-out lg:group-hover:translate-x-6">
              <span className="font-mono text-xs text-muted shrink-0 translate-y-[-0.5em]">
                0{i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="display-heading text-[clamp(1.9rem,5vw,4.5rem)] text-paper group-hover:text-accent transition-colors duration-300 break-words">
                  {project.title}
                </h3>
                <p className="hidden md:block mt-4 max-w-xl text-muted text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="hidden md:flex flex-col items-end gap-2 shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                <span className="text-accent">{project.category}</span>
                <span>{project.tags.slice(0, 2).join(' · ')}</span>
              </div>
            </div>

            {/* Mobile / touch fallback: static thumbnail + description */}
            <div className="mt-5 lg:hidden">
              <div className="aspect-video overflow-hidden bg-surface border border-line">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="md:hidden mt-4 text-muted text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
