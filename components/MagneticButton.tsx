import React, { useRef } from 'react';
import { gsap, useGSAP, FINE_POINTER_MOTION_OK } from '../lib/gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/** Pulls its children toward the pointer on hover, springs back on leave. */
const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(FINE_POINTER_MOTION_OK, () => {
        const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' });
        const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });

        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          xTo((e.clientX - rect.left - rect.width / 2) * strength);
          yTo((e.clientY - rect.top - rect.height / 2) * strength);
        };
        const onLeave = () => {
          gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
        };

        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        return () => {
          el.removeEventListener('mousemove', onMove);
          el.removeEventListener('mouseleave', onLeave);
        };
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};

export default MagneticButton;
