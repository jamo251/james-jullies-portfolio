
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactForm from './components/ContactForm';
import AiAssistant from './components/AiAssistant';
import { PROJECTS, CERTIFICATIONS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const resetSelection = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen relative selection:bg-[#2B9B78]/30">
      <Navbar onNavClick={resetSelection} />

      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={resetSelection}
        />
      ) : (
        <main className="animate-in fade-in duration-500">
          <Hero />

          {/* Project Section */}
          <section id="projects" className="py-24 container mx-auto px-6 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-offwhite">Core <span className="gradient-text">Impact</span></h2>
                <p className="text-gray-400 max-w-xl">Proven expertise in architecting and implementing enterprise-scale customer engagement platforms.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </section>

          <SkillsSection />

          {/* Certifications Section */}
          <section className="py-24 glass">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center underline decoration-[#0F4C81]/50 underline-offset-8 text-offwhite">Global <span className="gradient-text">Accreditations</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2B9B78]/30 transition-all text-center">
                    <p className="text-[#2B9B78] text-[10px] font-bold uppercase mb-2 tracking-tighter">{cert.issuer}</p>
                    <h4 className="text-[11px] sm:text-sm font-semibold text-offwhite leading-tight break-words">{cert.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ExperienceTimeline />
          <ContactForm />
        </main>
      )}

      {!selectedProject && (
        <footer className="py-12 border-t border-white/5 bg-[#030712]">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold gradient-text">JAMES JULLIES</div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Senior Solutions Consultant. Bahrain.
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/james-jullies/" target="_blank" className="text-gray-400 hover:text-[#0F4C81] transition-colors">LinkedIn</a>
              <a href="mailto:james.jullies@gmail.com" className="text-gray-400 hover:text-[#0F4C81] transition-colors">Email</a>
            </div>
          </div>
        </footer>
      )}

      <AiAssistant />
    </div>
  );
};

export default App;