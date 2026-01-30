
import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project, isFullscreen]);

  const gallery = project.galleryImages || [project.imageUrl];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev + 1) % gallery.length);
  };
  
  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-[#030712] overflow-y-auto scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-30 glass border-b border-[#025147]/30 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </button>
          <div className="text-sm font-bold gradient-text uppercase tracking-widest">{project.category} Case Study</div>
        </div>
      </nav>

      {/* Fullscreen Overlay */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setIsFullscreen(false)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <div className="relative w-full max-w-6xl flex items-center justify-center h-full">
            <button onClick={prevImage} className="absolute left-0 z-10 p-4 glass rounded-full hover:bg-white/10 text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <img 
              src={gallery[activeImage]} 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in duration-500" 
              onClick={(e) => e.stopPropagation()}
              alt="Dashboard Preview"
            />
            <button onClick={nextImage} className="absolute right-0 z-10 p-4 glass rounded-full hover:bg-white/10 text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          
          <div className="absolute bottom-8 text-white/50 font-mono tracking-tighter">
            FRAME {activeImage + 1} / {gallery.length}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-[#2B9B78]/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#2B9B78]/30 text-[#2B9B78]">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 text-offwhite leading-none">{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-24">
            
            {/* Overview Section */}
            <section className="animate-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-3xl font-bold mb-8 text-[#0F4C81] flex items-center gap-3">
                <span className="w-8 h-1 bg-[#0F4C81]"></span>
                Project Context
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                {project.description}
              </p>
            </section>

            {/* Premium Gallery Section */}
            {project.galleryImages && (
              <section className="space-y-8 animate-in slide-in-from-bottom-12 duration-1000">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-[#0F4C81]">Dashboard Architecture</h2>
                    <p className="text-gray-500 text-sm mt-1">Interactive visualization layer built on enterprise data streams.</p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={prevImage}
                      className="w-12 h-12 flex items-center justify-center glass rounded-full hover:bg-white/5 transition-all border border-white/10 text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="w-12 h-12 flex items-center justify-center glass rounded-full hover:bg-white/5 transition-all border border-white/10 text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>

                <div 
                  className="relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden glass border border-white/10 shadow-3xl bg-black/40 cursor-zoom-in"
                  onClick={() => setIsFullscreen(true)}
                >
                  <div className="aspect-video relative overflow-hidden group">
                    <img 
                      key={activeImage}
                      src={gallery[activeImage]} 
                      alt={`Dashboard frame ${activeImage + 1}`} 
                      className="w-full h-full object-contain animate-in fade-in zoom-in duration-1000"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0F4C81]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gallery Overlays */}
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 bg-black/40 backdrop-blur-xl rounded-full text-[10px] font-bold text-[#2B9B78] border border-[#2B9B78]/40 tracking-widest uppercase">
                      Insight Layer 0{activeImage + 1}
                    </span>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {gallery.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setActiveImage(idx); }}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === activeImage ? 'w-12 bg-[#2B9B78]' : 'w-4 bg-white/10 hover:bg-white/30'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Enhanced Thumbnails Row */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {gallery.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative shrink-0 w-32 md:w-48 aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-300 ${idx === activeImage ? 'border-[#2B9B78] scale-105 ring-8 ring-[#2B9B78]/10' : 'border-transparent opacity-40 hover:opacity-100'}`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      {idx === activeImage && (
                        <div className="absolute inset-0 bg-[#2B9B78]/10"></div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            )}
            
            {/* Deep Dive Narrative */}
            <section className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-10 text-[#0F4C81] flex items-center gap-3">
                <span className="w-8 h-1 bg-[#0F4C81]"></span>
                Implementation Deep Dive
              </h2>
              <div className="text-gray-400 text-lg leading-relaxed space-y-8 font-light whitespace-pre-wrap">
                {project.longDescription}
              </div>
            </section>

            {/* Metrics & Impact Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              <div className="glass p-10 rounded-[2.5rem] border-[#0F4C81]/20 group hover:border-[#0F4C81]/50 transition-all duration-500">
                <div className="w-16 h-16 bg-[#0F4C81]/10 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#0F4C81]/20 group-hover:rotate-12 transition-all">
                  <svg className="w-8 h-8 text-[#0F4C81]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="text-[#0F4C81] font-bold mb-4 uppercase tracking-[0.2em] text-xs">Strategic Vision</h4>
                <p className="text-gray-400 leading-relaxed">Faced with a highly fragmented data landscape, the core challenge was creating a unified source of truth that could provide real-time competitive intelligence at a global scale.</p>
              </div>
              <div className="glass p-10 rounded-[2.5rem] border-[#2B9B78]/20 group hover:border-[#2B9B78]/50 transition-all duration-500">
                <div className="w-16 h-16 bg-[#2B9B78]/10 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#2B9B78]/20 group-hover:-rotate-12 transition-all">
                  <svg className="w-8 h-8 text-[#2B9B78]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-[#2B9B78] font-bold mb-4 uppercase tracking-[0.2em] text-xs">Measurable Success</h4>
                <p className="text-gray-400 leading-relaxed">The resulting ecosystem became the benchmark for large-scale event reporting, providing stakeholders with instantaneous access to over 100 years of performance data.</p>
              </div>
            </section>
          </div>

          {/* Persistent Sidebar Info */}
          <div className="lg:col-span-4 space-y-10">
            <div className="glass p-10 rounded-[2.5rem] sticky top-28 border-white/5 shadow-2xl space-y-12">
              <div>
                <h3 className="text-xl font-bold mb-8 text-offwhite flex items-center justify-between">
                  Project Specs
                  <span className="w-10 h-px bg-white/20"></span>
                </h3>
                <div className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Category</span>
                    <span className="text-gray-200 font-medium">
                      {project.category === 'Data' ? 'Business Intelligence & Data Eng' : 
                       project.category === 'Martech' ? 'Martech Orchestration' : 
                       project.category === 'AI' ? 'Applied Generative AI' : 'Web Architecture'}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Deployment Regions</span>
                    <span className="text-gray-200 font-medium">GCC, South Africa, EMEA</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Primary Stack</span>
                    <span className="text-[#2B9B78] font-bold">{project.tags.join(' • ')}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-3 w-full bg-[#0F4C81] text-white py-5 rounded-[1.5rem] font-bold hover:bg-[#025147] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#0F4C81]/20 group"
                  >
                    View Live Dashboard
                    <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                )}
                <button 
                  onClick={() => setIsFullscreen(true)}
                  className="flex items-center justify-center gap-3 w-full glass py-5 rounded-[1.5rem] font-bold text-offwhite hover:bg-white/10 transition-all transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  Inspect Screenshots
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-transparent to-[#2B9B78]/10 py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-offwhite leading-tight">
            Inspired by this <br /> 
            <span className="gradient-text">implementation?</span>
          </h2>
          <button 
            onClick={onBack}
            className="bg-[#2B9B78] px-16 py-5 rounded-full font-bold text-white hover:bg-[#025147] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#2B9B78]/40 text-lg"
          >
            Let's Discuss Your Vision
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
