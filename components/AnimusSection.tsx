import React, { useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { ANIMUS_TRACKS, ANIMUS_INTRO } from '../constants.creative';
import { Track } from '../types';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';

const embedUrl = (trackId: string) => `https://open.spotify.com/embed/track/${trackId}?theme=0`;

/** The ANIMUS EP: nine animals, one player. Clicking a released track loads it into the player. */
const AnimusSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Track>(
    () => ANIMUS_TRACKS.find((t) => t.spotifyTrackId) ?? ANIMUS_TRACKS[0]
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('.track-cell').forEach((cell, i) => {
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
    { scope: sectionRef }
  );

  const handleSelect = (track: Track) => {
    if (track.spotifyTrackId) setActive(track);
  };

  return (
    <section ref={sectionRef} id="animus" className="px-6 md:px-10 py-24 md:py-36 scroll-mt-16">
      <SectionHeading index="01" label="The Animus EP" title="Nine Animals" intro={ANIMUS_INTRO} />

      {/* One player, swapped per track */}
      {active.spotifyTrackId && (
        <div className="mb-16 md:mb-20 max-w-3xl">
          <p className="mono-label text-muted mb-4">
            Now playing <span className="text-accent">{active.title}</span>
          </p>
          <iframe
            key={active.spotifyTrackId}
            src={embedUrl(active.spotifyTrackId)}
            width="100%"
            height={152}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`Spotify player: ${active.title} by JAMO`}
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
        {ANIMUS_TRACKS.map((track, idx) => {
          const released = Boolean(track.spotifyTrackId);
          const isActive = released && track.spotifyTrackId === active.spotifyTrackId;
          const Cell: React.ElementType = released ? 'button' : 'div';
          return (
            <Cell
              key={track.title}
              {...(released
                ? { type: 'button', onClick: () => handleSelect(track), 'aria-pressed': isActive }
                : {})}
              className={`track-cell relative border-b border-r border-line p-8 md:p-10 min-h-[220px] md:min-h-[260px] flex flex-col justify-between overflow-hidden group text-left ${
                released ? 'cursor-pointer' : ''
              } ${isActive ? 'bg-surface' : ''}`}
            >
              <span
                className={`absolute -bottom-8 -right-2 display-heading text-[7rem] md:text-[9rem] transition-colors duration-500 select-none ${
                  isActive ? 'text-accent/10' : 'text-paper/5 group-hover:text-accent/10'
                }`}
                aria-hidden="true"
              >
                0{idx + 1}
              </span>
              <div className="flex justify-between items-baseline relative z-10">
                <span className="mono-label text-accent">
                  {isActive ? 'Now Playing' : released ? 'Out Now' : 'Coming Soon'}
                </span>
              </div>
              <div className="relative z-10 mt-8">
                <h4
                  className={`display-heading text-xl md:text-2xl transition-colors ${
                    isActive ? 'text-accent' : released ? 'text-paper group-hover:text-accent' : 'text-paper/60'
                  }`}
                >
                  {track.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed mt-3 max-w-xs">{track.concept}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
                  {track.mood.map((word) => (
                    <span key={word} className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted/70">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </Cell>
          );
        })}
      </div>
    </section>
  );
};

export default AnimusSection;
