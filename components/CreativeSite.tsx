import React, { useRef } from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import SectionHeading from './SectionHeading';
import AnimusSection from './AnimusSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { ARTIST_HERO, ARTIST_MARQUEE_WORDS, OTHER_RELEASES } from '../constants.creative';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';

interface CreativeSiteProps {
  introDelay: number;
}

/** The artist side: JAMO, the ANIMUS EP, and what's next. */
const CreativeSite: React.FC<CreativeSiteProps> = ({ introDelay }) => {
  const releasesRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('.release-cell').forEach((cell, i) => {
          gsap.from(cell, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
            delay: (i % 3) * 0.1,
            scrollTrigger: { trigger: cell, start: 'top 90%', once: true },
          });
        });
      });
    },
    { scope: releasesRef }
  );

  return (
    <>
      <main>
        <Hero introDelay={introDelay} content={ARTIST_HERO} />

        {/* Ticker strip dividing hero from the EP */}
        <Marquee duration={22} className="border-y border-line py-4 md:py-6">
          {Array.from({ length: 3 }).flatMap((_, rep) =>
            ARTIST_MARQUEE_WORDS.map((word, i) => (
              <span
                key={`${rep}-${i}`}
                className="display-heading text-2xl md:text-4xl text-paper px-6 md:px-10 flex items-center gap-6 md:gap-10"
              >
                {word}
                <span className="text-accent" aria-hidden="true">—</span>
              </span>
            ))
          )}
        </Marquee>

        <AnimusSection />

        {/* Upcoming and in-progress work */}
        <section ref={releasesRef} id="releases" className="px-6 md:px-10 py-24 md:py-36 border-t border-line scroll-mt-16">
          <SectionHeading
            index="02"
            label="Next Up"
            title="In The Works"
            intro="Beyond the EP: what's on the studio desk right now."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
            {OTHER_RELEASES.map((release, idx) => (
              <div
                key={release.title}
                className="release-cell relative border-b border-r border-line p-8 md:p-10 min-h-[220px] flex flex-col justify-between overflow-hidden group"
              >
                <span
                  className="absolute -bottom-8 -right-2 display-heading text-[7rem] md:text-[9rem] text-paper/5 group-hover:text-accent/10 transition-colors duration-500 select-none"
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>
                <p className="mono-label text-accent relative z-10">{release.status}</p>
                <div className="relative z-10 mt-8">
                  <h4 className="display-heading text-xl md:text-2xl text-paper">{release.title}</h4>
                  <p className="text-muted text-sm leading-relaxed mt-3 max-w-xs">{release.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer name="JAMO" tagline="JAMO. Music by James Jullies. Bahrain." />
    </>
  );
};

export default CreativeSite;
