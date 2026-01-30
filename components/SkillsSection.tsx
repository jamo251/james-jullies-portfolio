
import React from 'react';
import { SKILLS } from '../constants';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const SKILL_ICONS: Record<string, React.ReactNode> = {
  'Python': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v10m0 0v10m0-10h10m-10 0H2" />
    </svg>
  ),
  'JavaScript': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 15h3c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H3m14-4h3m-3 4h3m-3-8h3m-3-4h3M7 9h10" />
    </svg>
  ),
  'PHP': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  'Generative AI': (
    <svg className="w-5 h-5 text-[#2B9B78]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  'Machine Learning': (
    <svg className="w-5 h-5 text-[#0F4C81]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41" />
    </svg>
  ),
  'Braze (Certified)': (
    <svg className="w-5 h-5 text-[#2B9B78]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  'DOMO (Certified)': (
    <svg className="w-5 h-5 text-[#0F4C81]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  'Amplitude': (
    <svg className="w-5 h-5 text-[#0F4C81]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  'Digital Transformation': (
    <svg className="w-5 h-5 text-[#2B9B78]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  'Solutions Architecture': (
    <svg className="w-5 h-5 text-[#0F4C81]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'GTM / Analytics': (
    <svg className="w-5 h-5 text-[#2B9B78]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  'WordPress / Shopify': (
    <svg className="w-5 h-5 text-[#0F4C81]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

const SkillsSection: React.FC = () => {
  const radarData = SKILLS.filter(s => s.category === 'AI/ML' || s.category === 'Langs').map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-offwhite">Mastering the <span className="gradient-text">Stack</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Expertise spanning from advanced generative AI models to scalable cloud-native architectures.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[400px] glass rounded-3xl p-6">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#025147" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#0F4C81"
                  fill="#2B9B78"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-8">
            {categories.map(cat => (
              <div key={cat}>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#2B9B78] font-bold mb-4">{cat}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <div key={skill.name} className="group glass px-4 py-3 rounded-2xl flex items-center justify-between hover:border-[#2B9B78]/40 transition-all cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="text-gray-400 group-hover:text-[#2B9B78] transition-colors">
                          {SKILL_ICONS[skill.name] || (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                          )}
                        </div>
                        <span className="font-medium text-sm text-offwhite">{skill.name}</span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="w-12 h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#0F4C81] rounded-full group-hover:bg-[#2B9B78] transition-all duration-1000" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] text-gray-500 font-bold">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
