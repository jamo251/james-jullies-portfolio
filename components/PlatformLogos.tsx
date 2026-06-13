import React from 'react';
import Marquee from './Marquee';

interface Platform {
  name: string;
  /** SVG served from /public, rendered in its own colours. */
  src: string;
}

const ASSET = import.meta.env.BASE_URL;
const logo = (file: string) => `${ASSET}assets/images/logos/${file}`;

/**
 * Platforms James works with, shown as their actual brand logos. Braze and
 * OneSignal ship as white marks and DOMO as its light-blue mark; HubSpot and
 * Google Tag Manager carry their official brand colours so every logo stays
 * legible on the dark background.
 */
const PLATFORMS: Platform[] = [
  { name: 'Braze', src: logo('braze-logo.svg') },
  { name: 'OneSignal', src: logo('onesignal-logo-white.svg') },
  { name: 'Amplitude', src: logo('amplitude-logo.svg') },
  { name: 'DOMO', src: logo('domo-logo2.svg') },
  { name: 'HubSpot', src: logo('hubspot.svg') },
  { name: 'Google Tag Manager', src: logo('google-tag-manager.svg') },
];

const LogoItem: React.FC<{ platform: Platform }> = ({ platform }) => (
  <span className="logo-item inline-flex items-center px-6 md:px-12">
    <img className="logo-img h-6 md:h-8 w-auto" src={platform.src} alt="" loading="lazy" />
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
        <Marquee duration={28} className="logo-marquee py-2">
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
