import React from 'react';
import Marquee from './Marquee';

interface Platform {
  name: string;
  /** SVG served from /public, rendered as a single-colour silhouette via mask. */
  src: string;
  /** Brand colour revealed on hover. */
  color: string;
  /** width / height of the source artwork, so each logo keeps its proportions. */
  ratio: number;
}

const ASSET = import.meta.env.BASE_URL;
const logo = (file: string) => `${ASSET}assets/images/logos/${file}`;

/**
 * Platforms James works with. Every logo is drawn from its official SVG and
 * rendered as a single-colour silhouette (off-white by default, brand colour on
 * hover) via CSS masking, so the strip stays visually consistent and legible on
 * the dark background regardless of each source file's own colours.
 */
const PLATFORMS: Platform[] = [
  { name: 'Braze', src: logo('braze-logo.svg'), color: 'var(--color-accent)', ratio: 2.14 },
  { name: 'OneSignal', src: logo('onesignal-logo.svg'), color: 'var(--color-accent)', ratio: 4.51 },
  { name: 'Amplitude', src: logo('amplitude-logo.svg'), color: 'var(--color-accent)', ratio: 4.8 },
  { name: 'DOMO', src: logo('domo-logo.svg'), color: 'var(--color-accent)', ratio: 3.53 },
  { name: 'HubSpot', src: logo('hubspot.svg'), color: '#FF7A59', ratio: 1 },
  { name: 'Google Tag Manager', src: logo('google-tag-manager.svg'), color: '#246FDB', ratio: 1 },
];

const LogoItem: React.FC<{ platform: Platform }> = ({ platform }) => (
  <span
    className="logo-item inline-flex items-center px-5 md:px-10"
    style={{ '--brand': platform.color } as React.CSSProperties}
  >
    <span
      className="logo-mark h-6 md:h-8"
      style={{
        aspectRatio: String(platform.ratio),
        WebkitMaskImage: `url("${platform.src}")`,
        maskImage: `url("${platform.src}")`,
      }}
    />
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
