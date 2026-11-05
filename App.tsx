import React, { useCallback, useEffect, useRef, useState } from 'react';
import HomePage from './components/HomePage';
import ProjectDetail from './components/ProjectDetail';
import AiAssistant from './components/AiAssistant';
import { Project } from './types';
import { PROJECTS } from './data/content';
import { localizeProject } from './data/content.ar';
import { STRINGS } from './data/strings';
import { usePathname, navigate } from './hooks/useRoute';
import { useLocale } from './hooks/useLocale';

const projectFromPath = (pathname: string): Project | null => {
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  return match ? PROJECTS.find((p) => p.slug === match[1]) ?? null : null;
};

const App: React.FC = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = STRINGS[locale];
  const selectedProject = projectFromPath(pathname);
  const project = selectedProject && localizeProject(selectedProject, locale);
  const projectTitle = project?.title;
  const [aiOpen, setAiOpen] = useState(false);
  const askAiRef = useRef<HTMLButtonElement>(null);

  // Unknown paths fall back to the home page
  useEffect(() => {
    if (pathname !== '/' && !selectedProject) navigate('/', { replace: true });
  }, [pathname, selectedProject]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProject]);

  useEffect(() => {
    document.title = projectTitle ? `${projectTitle}${t.projectTitleSuffix}` : t.homeTitle;
  }, [projectTitle, t]);

  const closeAi = useCallback(() => {
    setAiOpen(false);
    askAiRef.current?.focus();
  }, []);

  return (
    <>
      {project ? (
        <ProjectDetail project={project} locale={locale} />
      ) : (
        <HomePage locale={locale} onAskAi={() => setAiOpen(true)} askAiRef={askAiRef} />
      )}
      <AiAssistant locale={locale} open={aiOpen} onClose={closeAi} />
    </>
  );
};

export default App;
