import React, { useCallback, useEffect, useRef, useState } from 'react';
import HomePage from './components/HomePage';
import ProjectDetail from './components/ProjectDetail';
import AiAssistant from './components/AiAssistant';
import { Project } from './types';
import { PROJECTS } from './data/content';
import { usePathname, navigate } from './hooks/useRoute';

const HOME_TITLE = 'James Jullies | Martech & AI Architect';

const projectFromPath = (pathname: string): Project | null => {
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  return match ? PROJECTS.find((p) => p.slug === match[1]) ?? null : null;
};

const App: React.FC = () => {
  const pathname = usePathname();
  const selectedProject = projectFromPath(pathname);
  const [aiOpen, setAiOpen] = useState(false);
  const askAiRef = useRef<HTMLButtonElement>(null);

  // Unknown paths fall back to the home page
  useEffect(() => {
    if (pathname !== '/' && !selectedProject) navigate('/', { replace: true });
  }, [pathname, selectedProject]);

  useEffect(() => {
    document.title = selectedProject ? `${selectedProject.title} | James Jullies` : HOME_TITLE;
    window.scrollTo(0, 0);
  }, [selectedProject]);

  const closeAi = useCallback(() => {
    setAiOpen(false);
    askAiRef.current?.focus();
  }, []);

  return (
    <>
      {selectedProject ? (
        <ProjectDetail project={selectedProject} />
      ) : (
        <HomePage onAskAi={() => setAiOpen(true)} askAiRef={askAiRef} />
      )}
      <AiAssistant open={aiOpen} onClose={closeAi} />
    </>
  );
};

export default App;
