
import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      onClick={() => onSelect(project)}
      className="group relative glass rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#0F4C81]/40 transition-all duration-500 h-full flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F4C81]/10 active:scale-[0.98]"
    >
      <div className="relative h-64 overflow-hidden bg-gray-900 flex items-center justify-center">
        {!hasError ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            onError={(e) => {
              console.error(`ProjectCard: Failed to load ${project.imageUrl} from ${window.location.href}`);
              setHasError(true);
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-600 gap-2">
            <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="text-[10px] font-mono tracking-tighter opacity-40 uppercase">Asset Missing</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        
        <div className="absolute top-4 left-4 flex gap-2">
          {project.tags.slice(0, 2).map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-[#0F4C81]/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 text-offwhite transform group-hover:scale-110 transition-transform duration-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col relative">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-2xl font-bold transition-all duration-500 group-hover:text-[#2B9B78] text-offwhite leading-tight">
            {project.title}
          </h3>
          <div className="w-2 h-2 rounded-full bg-[#0F4C81] mt-2 group-hover:bg-[#2B9B78] group-hover:scale-150 transition-all duration-500"></div>
        </div>
        
        <p className="text-gray-400 text-sm mb-8 flex-1 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex gap-4">
            {project.github && (
              <div className="text-gray-400 hover:text-[#0F4C81] transition-colors p-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-[#0F4C81] group-hover:text-[#2B9B78] transition-all duration-300">
            View Case Study
            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
