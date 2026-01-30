
import React from 'react';
import { EXPERIENCE } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-offwhite">Career <span className="gradient-text">Journey</span></h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#025147]/20 -translate-x-1/2 hidden md:block"></div>
              
              <div className={`flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className={`glass p-8 rounded-3xl relative ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="absolute top-8 w-4 h-4 bg-[#2B9B78] rounded-full border-4 border-[#030712] -left-10 md:left-auto md:right-auto md:-translate-x-1/2 md:left-1/2 hidden md:block"></div>
                    
                    <span className="text-[#2B9B78] text-xs font-bold tracking-widest uppercase mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold mb-1 text-offwhite">{exp.role}</h3>
                    <p className="text-gray-400 font-medium mb-4">{exp.company} • {exp.location}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-[#0F4C81] rounded-full shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
