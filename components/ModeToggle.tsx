import React from 'react';
import { SiteMode } from '../types';

interface ModeToggleProps {
  mode: SiteMode;
  onSwitch: (mode: SiteMode) => void;
  className?: string;
}

const SIDES: { value: SiteMode; label: string }[] = [
  { value: 'architect', label: 'Architect' },
  { value: 'artist', label: 'Artist' },
];

/** Two-state persona switch: the professional side vs the JAMO side. */
const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onSwitch, className = '' }) => {
  return (
    <div
      role="group"
      aria-label="Choose a side"
      className={`inline-flex border border-line ${className}`}
    >
      {SIDES.map((side) => (
        <button
          key={side.value}
          type="button"
          aria-pressed={mode === side.value}
          onClick={() => onSwitch(side.value)}
          className={`mono-label px-3 py-2 transition-colors ${
            mode === side.value
              ? 'bg-accent text-ink'
              : 'text-muted hover:text-paper'
          }`}
        >
          {side.label}
        </button>
      ))}
    </div>
  );
};

export default ModeToggle;
