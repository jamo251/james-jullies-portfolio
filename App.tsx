import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProfessionalSite from './components/ProfessionalSite';
import AiAssistant from './components/AiAssistant';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import { Project } from './types';
import { useLenis, getLenis } from './hooks/useLenis';
import { ScrollTrigger, prefersReducedMotion } from './lib/gsap';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showPreloader] = useState(
    () =>
      typeof window !== 'undefined' &&
      !prefersReducedMotion() &&
      !sessionStorage.getItem('jj-intro')
  );
  const [introDone, setIntroDone] = useState(!showPreloader);

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

  const introDelay = showPreloader && !introDone ? 2.1 : 0.2;

  return (
    <div className="min-h-screen bg-ink text-paper noise relative">
      {showPreloader && !introDone && <Preloader onComplete={() => setIntroDone(true)} />}
      <Cursor />
      <Navbar onNavClick={resetSelection} />

      <ProfessionalSite
        selectedProject={selectedProject}
        onSelectProject={setSelectedProject}
        onBack={resetSelection}
        introDelay={introDelay}
      />

      <AiAssistant />
    </div>
  );
};

export default App;
