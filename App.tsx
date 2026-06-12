import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactForm from './components/ContactForm';
import AiAssistant from './components/AiAssistant';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee';
import SectionHeading from './components/SectionHeading';
import MagneticButton from './components/MagneticButton';
import { PROJECTS, CERTIFICATIONS } from './constants';
import { Project } from './types';
import { useLenis, getLenis } from './hooks/useLenis';
import { gsap, useGSAP, MOTION_OK, ScrollTrigger, prefersReducedMotion } from './lib/gsap';

const MARQUEE_WORDS = ['Martech', 'AI', 'Data', 'Strategy'];

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showPreloader] = useState(
    () =>
      typeof window !== 'undefined' &&
      !prefersReducedMotion() &&
      !sessionStorage.getItem('jj-intro')
  );
  const [introDone, setIntroDone] = useState(!showPreloader);
  const certsRef = useRef<HTMLElement>(null);

  useLenis();

  // The detail view is a fixed overlay with native scrolling — pause Lenis underneath
  useEffect(() => {
    const lenis = getLenis();
    if (selectedProject) {
      lenis?.stop();
    } else {
      lenis?.start();
      ScrollTrigger.refresh();
    }
  }, [selectedProject]);

  useGSAP(
    () => {
      if (selectedProject) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('.cert-cell').forEach((cell, i) => {
          gsap.from(cell, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
            delay: (i % 3) * 0.1,
            scrollTrigger: { trigger: cell, start: 'top 90%', once: true },
          });
        });
      });
    },
    { scope: certsRef, dependencies: [selectedProject] }
  );

  const resetSelection = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-ink text-paper noise relative">
      {showPreloader && !introDone && <Preloader onComplete={() => setIntroDone(true)} />}
      <Cursor />
      <Navbar onNavClick={resetSelection} />

      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={resetSelection} />
      ) : (
        <main>
          <Hero introDelay={showPreloader && !introDone ? 2.1 : 0.2} />

          {/* Ticker strip dividing hero from work */}
          <Marquee duration={22} className="border-y border-line py-4 md:py-6">
            {Array.from({ length: 3 }).flatMap((_, rep) =>
              MARQUEE_WORDS.map((word, i) => (
                <span
                  key={`${rep}-${i}`}
                  className="display-heading text-2xl md:text-4xl text-paper px-6 md:px-10 flex items-center gap-6 md:gap-10"
                >
                  {word}
                  <span className="text-accent" aria-hidden="true">—</span>
                </span>
              ))
            )}
          </Marquee>

          {/* Projects */}
          <section id="projects" className="px-6 md:px-10 py-24 md:py-36 scroll-mt-16">
            <SectionHeading
              index="01"
              label="Selected Work"
              title="Core Impact"
              intro="Proven expertise in architecting and implementing enterprise-scale customer engagement platforms."
            />
            <ProjectList projects={PROJECTS} onSelect={setSelectedProject} />
          </section>

          <SkillsSection />

          {/* Certifications */}
          <section ref={certsRef} className="px-6 md:px-10 py-24 md:py-36 border-t border-line">
            <SectionHeading index="03" label="Accreditations" title="Global Accreditations" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="cert-cell relative border-b border-r border-line p-8 md:p-10 min-h-[180px] md:min-h-[220px] flex flex-col justify-between overflow-hidden group"
                >
                  <span
                    className="absolute -bottom-8 -right-2 display-heading text-[7rem] md:text-[9rem] text-paper/5 group-hover:text-accent/10 transition-colors duration-500 select-none"
                    aria-hidden="true"
                  >
                    0{idx + 1}
                  </span>
                  <p className="mono-label text-accent relative z-10">{cert.issuer}</p>
                  <h4 className="display-heading text-xl md:text-2xl text-paper relative z-10 mt-8">
                    {cert.name}
                  </h4>
                </div>
              ))}
            </div>
          </section>

          <ExperienceTimeline />
          <ContactForm />
        </main>
      )}

      {!selectedProject && (
        <footer className="border-t border-line overflow-hidden">
          <Marquee duration={24} className="py-8 md:py-14">
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className="display-heading text-[clamp(3.5rem,9vw,8rem)] text-paper px-8 md:px-12 flex items-center gap-8 md:gap-12"
              >
                James Jullies
                <span className="text-accent" aria-hidden="true">—</span>
              </span>
            ))}
          </Marquee>
          <div className="border-t border-line px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              © {new Date().getFullYear()} Senior Solutions Consultant. Bahrain.
            </div>
            <div className="flex gap-8">
              <MagneticButton>
                <a
                  href="https://www.linkedin.com/in/james-jullies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mono-label text-paper hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  LinkedIn
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="mailto:james.jullies@gmail.com"
                  className="group mono-label text-paper hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  Email
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </footer>
      )}

      <AiAssistant />
    </div>
  );
};

export default App;
