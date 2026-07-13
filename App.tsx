import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import ProfessionalSite from './components/ProfessionalSite';
import CreativeSite from './components/CreativeSite';
import AiAssistant from './components/AiAssistant';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import { Project, SiteMode } from './types';
import { useLenis, getLenis } from './hooks/useLenis';
import { useMode } from './hooks/useMode';
import { gsap, ScrollTrigger, prefersReducedMotion } from './lib/gsap';

const App: React.FC = () => {
  const { mode, setMode } = useMode();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showPreloader] = useState(
    () =>
      typeof window !== 'undefined' &&
      !prefersReducedMotion() &&
      !sessionStorage.getItem('jj-intro')
  );
  const [introDone, setIntroDone] = useState(!showPreloader);
  const wipeRef = useRef<HTMLDivElement>(null);
  const switching = useRef(false);

  useLenis();

  // The detail view is a fixed overlay with native scrolling - pause Lenis underneath
  useEffect(() => {
    const lenis = getLenis();
    if (selectedProject) {
      lenis?.stop();
    } else {
      lenis?.start();
      ScrollTrigger.refresh();
    }
  }, [selectedProject]);

  const resetSelection = () => {
    setSelectedProject(null);
  };

  const scrollHome = () => {
    getLenis()?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  };

  // Flip persona behind a full-screen accent wipe; instant when motion is reduced
  const switchMode = (next: SiteMode) => {
    if (next === mode || switching.current) return;

    if (prefersReducedMotion() || !wipeRef.current) {
      setSelectedProject(null);
      setMode(next);
      scrollHome();
      return;
    }

    switching.current = true;
    const el = wipeRef.current;
    gsap
      .timeline({
        onComplete: () => {
          switching.current = false;
          ScrollTrigger.refresh();
        },
      })
      .set(el, { visibility: 'visible', pointerEvents: 'auto', transformOrigin: 'left center', scaleX: 0 })
      .to(el, { scaleX: 1, duration: 0.5, ease: 'power4.inOut' })
      .add(() => {
        setSelectedProject(null);
        setMode(next);
        scrollHome();
      })
      .set(el, { transformOrigin: 'right center' }, '+=0.15')
      .to(el, { scaleX: 0, duration: 0.5, ease: 'power4.inOut' })
      .set(el, { visibility: 'hidden', pointerEvents: 'none' });
  };

  const introDelay = showPreloader && !introDone ? 2.1 : 0.2;

  return (
    <div className="min-h-screen bg-ink text-paper noise relative">
      {showPreloader && !introDone && <Preloader onComplete={() => setIntroDone(true)} />}
      <Cursor />
      <Navbar mode={mode} onSwitchMode={switchMode} onNavClick={resetSelection} />

      {mode === 'artist' ? (
        <CreativeSite introDelay={introDelay} />
      ) : (
        <ProfessionalSite
          selectedProject={selectedProject}
          onSelectProject={setSelectedProject}
          onBack={resetSelection}
          introDelay={introDelay}
        />
      )}

      <AiAssistant />

      {/* Persona-switch wipe: sweeps in as one side, sweeps out as the other */}
      <div
        ref={wipeRef}
        className="fixed inset-0 z-[120] bg-accent invisible pointer-events-none"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />
    </div>
  );
};

export default App;
