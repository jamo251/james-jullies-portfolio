
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0F4C81]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#2B9B78]/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-[#2B9B78] font-semibold tracking-widest uppercase mb-4 text-sm">Strategic Technology Leader | Bahrain | EMEA</h2>
        <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-tight text-offwhite">
          James Jullies <br />
          <span className="gradient-text">Martech & AI</span> <br />
          Architect.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Driving digital transformation across fintech, telecommunications, and retail for 12+ years. 
          Expertly architecting high-growth platforms powered by data and intelligence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-[#0F4C81] text-white px-10 py-4 rounded-full font-bold hover:bg-[#025147] transition-all transform hover:-translate-y-1">
            Explore Achievements
          </a>
          <a href="#experience" className="glass px-10 py-4 rounded-full font-bold hover:bg-white/5 text-offwhite transition-all transform hover:-translate-y-1">
            Career Journey
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-1 h-6 bg-[#2B9B78] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
