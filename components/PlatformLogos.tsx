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
 * OneSignal ship as white marks and DOMO as its light-blue mark; the icon-only
 * marks carry their official brand colours. InsiderOne's dark wordmark is
 * rendered white (its gradient mark is kept) and Make uses its lighter
 * gradient purple, so every logo stays legible on the dark background.
 */
const PLATFORMS: Platform[] = [
  { name: 'Braze', src: logo('braze-logo.svg') },
  { name: 'OneSignal', src: logo('onesignal-logo-white.svg') },
  { name: 'InsiderOne', src: logo('insiderone.svg') },
  { name: 'Amplitude', src: logo('amplitude-logo.svg') },
  { name: 'Mixpanel', src: logo('mixpanel.svg') },
  { name: 'DOMO', src: logo('domo-logo2.svg') },
  { name: 'HubSpot', src: logo('hubspot.svg') },
  { name: 'Google Tag Manager', src: logo('google-tag-manager.svg') },
  { name: 'Claude (Anthropic)', src: logo('claude.svg') },
  { name: 'Make', src: logo('make.svg') },
  { name: 'WhatsApp', src: logo('whatsapp.svg') },
  { name: 'WordPress', src: logo('wordpress.svg') },
];

const LogoItem: React.FC<{ platform: Platform }> = ({ platform }) => (
  <span className="logo-item inline-flex items-center px-6 md:px-12">
    <img className="logo-img h-6 md:h-8 w-auto" src={platform.src} alt={`${platform.name} logo`} loading="lazy" />
  </span>
);

const PlatformLogos: React.FC = () => {
  // One pass of the set is wide enough to fill the strip; Marquee mirrors
  // the row to make the loop seamless.
  const row = PLATFORMS.map((platform) => <LogoItem key={platform.name} platform={platform} />);

  return (
    <section aria-label="Platforms I work with">
      <div aria-hidden="true">
        <Marquee duration={30} className="logo-marquee py-2">
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
