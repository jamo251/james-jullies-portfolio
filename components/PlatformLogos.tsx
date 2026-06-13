import React from 'react';
import Marquee from './Marquee';

interface Platform {
  name: string;
  /** Path to a single-colour SVG silhouette, served from /public. */
  src?: string;
  /** Brand colour revealed on hover. */
  color: string;
}

const ASSET = import.meta.env.BASE_URL;

/**
 * Platforms James works with. HubSpot and Google Tag Manager use their official
 * brand glyphs (single-colour SVGs in public/assets/images/logos). The other
 * four render as typographic stand-ins — to swap in an official logo, drop a
 * single-colour SVG into that same folder and point `src` at it.
 */
const PLATFORMS: Platform[] = [
  { name: 'Braze', color: 'var(--color-accent)' },
  { name: 'OneSignal', color: 'var(--color-accent)' },
  { name: 'Amplitude', color: 'var(--color-accent)' },
  { name: 'DOMO', color: 'var(--color-accent)' },
  { name: 'HubSpot', src: `${ASSET}assets/images/logos/hubspot.svg`, color: '#FF7A59' },
  {
    name: 'Google Tag Manager',
    src: `${ASSET}assets/images/logos/google-tag-manager.svg`,
    color: '#246FDB',
  },
];

const LogoItem: React.FC<{ platform: Platform }> = ({ platform }) => (
  <span
    className="logo-item inline-flex items-center px-8 md:px-12"
    style={{ '--brand': platform.color } as React.CSSProperties}
  >
    {platform.src ? (
      <span
        className="logo-mark h-7 w-7 md:h-9 md:w-9"
        style={{
          WebkitMaskImage: `url("${platform.src}")`,
          maskImage: `url("${platform.src}")`,
        }}
      />
    ) : (
      <span className="logo-wordmark display-heading text-2xl md:text-3xl">{platform.name}</span>
    )}
  </span>
);

const PlatformLogos: React.FC = () => {
  // Repeat the set so the strip stays full on wide screens; Marquee then
  // mirrors the whole row to make the loop seamless.
  const row = Array.from({ length: 2 }).flatMap((_, rep) =>
    PLATFORMS.map((platform) => <LogoItem key={`${rep}-${platform.name}`} platform={platform} />)
  );

  return (
    <section aria-label="Platforms I work with">
      <div aria-hidden="true">
        <Marquee duration={28} className="py-2">
          {row}
        </Marquee>
      </div>
      {/* Accessible, non-visual list so the names are announced once. */}
      <ul className="sr-only">
        {PLATFORMS.map((platform) => (
          <li key={platform.name}>{platform.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default PlatformLogos;
