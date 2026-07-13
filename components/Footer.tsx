import React from 'react';
import Marquee from './Marquee';
import MagneticButton from './MagneticButton';

interface FooterProps {
  name: string;
  tagline: string;
}

const Footer: React.FC<FooterProps> = ({ name, tagline }) => {
  return (
    <footer className="border-t border-line overflow-hidden">
      <Marquee duration={24} className="py-8 md:py-14">
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="display-heading text-[clamp(3.5rem,9vw,8rem)] text-paper px-8 md:px-12 flex items-center gap-8 md:gap-12"
          >
            {name}
            <span className="text-accent" aria-hidden="true">—</span>
          </span>
        ))}
      </Marquee>
      <div className="border-t border-line px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
          © {new Date().getFullYear()} {tagline}
        </div>
        <div className="flex gap-8">
          <MagneticButton>
            <a
              href="https://www.linkedin.com/in/james-jullies/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mono-label text-paper hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              LinkedIn
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="mailto:james.jullies@gmail.com"
              className="group mono-label text-paper hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              Email
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
