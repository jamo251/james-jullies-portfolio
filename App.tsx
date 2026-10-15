import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import ProfessionalSite from './components/ProfessionalSite';
import AiAssistant from './components/AiAssistant';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import { Project } from './types';
import { PROJECTS } from './data/content';
import { useLenis, getLenis } from './hooks/useLenis';
import { usePathname, navigate, workPath, cameFromHome } from './hooks/useRoute';
import { ScrollTrigger, prefersReducedMotion } from './lib/gsap';

const HOME_TITLE = 'James Jullies | Martech & AI Architect';

const projectFromPath = (pathname: string): Project | null => {
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  return match ? PROJECTS.find((p) => p.slug === match[1]) ?? null : null;
};

const App: React.FC = () => {
  const pathname = usePathname();
  const selectedProject = projectFromPath(pathname);
  const [showPreloader] = useState(
    () =>
      typeof window !== 'undefined' &&
      !prefersReducedMotion() &&
      !sessionStorage.getItem('jj-intro') &&
      // Deep links go straight to the case study
      window.location.pathname === '/'
  );
  const [introDone, setIntroDone] = useState(!showPreloader);
  // Last scroll position on the portfolio; null until the visitor has seen it
  const homeScroll = useRef<number | null>(null);
  const skipRestore = useRef(false);
  const wasOnProject = useRef(Boolean(selectedProject));

  useLenis();

  useEffect(() => {
    history.scrollRestoration = 'manual';
  }, []);

  // Unknown paths fall back to the portfolio
  useEffect(() => {
    if (pathname !== '/' && !selectedProject) navigate('/', { replace: true });
  }, [pathname, selectedProject]);

  useEffect(() => {
    document.title = selectedProject ? `${selectedProject.title} | James Jullies` : HOME_TITLE;
  }, [selectedProject]);

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

  useEffect(() => {
    if (selectedProject) return;
    const track = () => {
      // Ignore the scroll reset when the portfolio unmounts
      if (document.getElementById('projects')) homeScroll.current = window.scrollY;
    };
    window.addEventListener('scroll', track, { passive: true });
    return () => window.removeEventListener('scroll', track);
  }, [selectedProject]);

  // Coming back from a case study (button or browser back): return to where
  // the visitor was, or to the work list if they arrived on the case study directly
  useLayoutEffect(() => {
    const leavingProject = wasOnProject.current && !selectedProject;
    wasOnProject.current = Boolean(selectedProject);
    if (!leavingProject) return;
    if (skipRestore.current) {
      skipRestore.current = false;
      return;
    }
    const projects = document.getElementById('projects');
    const y = homeScroll.current ?? (projects ? projects.getBoundingClientRect().top + window.scrollY - 72 : 0);
    const lenis = getLenis();
    lenis?.start();
    lenis?.resize();
    lenis?.scrollTo(y, { immediate: true, force: true });
    window.scrollTo(0, y);
  }, [selectedProject]);

  const openProject = (project: Project) => navigate(workPath(project.slug));

  const closeProject = () => {
    if (cameFromHome()) {
      history.back();
    } else {
      navigate('/');
    }
  };

  // Nav links scroll to their own section, so they skip the scroll restore
  const goHome = () => {
    if (selectedProject) skipRestore.current = true;
    navigate('/');
  };

  const introDelay = showPreloader && !introDone ? 2.1 : 0.2;

  return (
    <div className="min-h-screen bg-ink text-paper noise relative">
      {showPreloader && !introDone && <Preloader onComplete={() => setIntroDone(true)} />}
      <Cursor />
      <Navbar onNavClick={goHome} />

      <ProfessionalSite
        selectedProject={selectedProject}
        onSelectProject={openProject}
        onBack={closeProject}
        introDelay={introDelay}
      />

      <AiAssistant />
    </div>
  );
};

export default App;
