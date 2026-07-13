import React, { useRef } from 'react';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';
import { scrollToSection } from '../hooks/useLenis';
import { HeroContent } from '../types';
import MagneticButton from './MagneticButton';

interface HeroProps {
  introDelay?: number;
  content?: HeroContent;
}

const ARCHITECT_HERO: HeroContent = {
  eyebrow: 'Strategic Technology Leader | Bahrain | EMEA',
  lines: [
    { text: 'James Jullies' },
    { text: 'Martech & AI', accent: true },
    { text: 'Architect.' },
  ],
  bio: 'Driving digital transformation across fintech, telecommunications, and retail for 12+ years. Expertly architecting high-growth platforms powered by data and intelligence.',
  ctas: [
    { label: 'Explore Achievements', href: '#projects' },
    { label: 'Career Journey', href: '#experience' },
  ],
};

const Hero: React.FC<HeroProps> = ({ introDelay = 0.2, content = ARCHITECT_HERO }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ delay: introDelay });
        tl.from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.7, ease: 'power3.out' })
          .from(
            '.hero-line',
            { yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: 0.12 },
            0.1
          )
          .from('.hero-bio', { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .from('.hero-cta', { opacity: 0, y: 16, duration: 0.6, ease: 'power3.out', stagger: 0.08 }, '-=0.55')
          .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.3');

        gsap.to(headingRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  const handleCta = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center md:justify-end px-6 md:px-10 pt-24 md:pt-32 pb-12 overflow-hidden"
    >
      <p className="hero-eyebrow mono-label text-accent mb-8 md:mb-12">
        {content.eyebrow}
      </p>

      <h1 ref={headingRef} className="display-heading text-[clamp(3rem,12vw,11rem)] text-paper">
        {content.lines.map((line) => (
          <span key={line.text} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
            <span className={`hero-line block ${line.accent ? 'text-accent' : ''}`}>
              {line.text}
            </span>
          </span>
        ))}
      </h1>

      <div className="mt-10 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 order-2 md:order-1">
          {content.ctas.map((cta, i) => (
            <MagneticButton key={cta.href} className="hero-cta">
              <a
                href={cta.href}
                onClick={(e) => handleCta(e, cta.href)}
                className={`group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] pb-2 hover:border-accent hover:text-accent transition-colors border-b ${
                  i === 0 ? 'text-paper border-paper/30' : 'text-muted border-paper/20'
                }`}
              >
                {cta.label}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
              </a>
            </MagneticButton>
          ))}
        </div>

        <p className="hero-bio max-w-md text-muted text-base md:text-lg leading-relaxed order-1 md:order-2 md:text-right">
          {content.bio}
        </p>
      </div>

      <div className="hero-scroll absolute top-1/3 right-6 md:right-10 hidden lg:flex flex-col items-center gap-3">
        <span className="mono-label text-muted [writing-mode:vertical-rl]">Scroll</span>
        <span className="w-px h-12 bg-accent animate-pulse" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;
