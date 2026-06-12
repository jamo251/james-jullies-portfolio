import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

/** Infinite horizontal strip — content is duplicated so the loop is seamless. */
const Marquee: React.FC<MarqueeProps> = ({ children, className = '', duration = 30 }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="marquee-track inline-flex w-max"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
