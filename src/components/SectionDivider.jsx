import React from 'react';

/** Same as tailwind dark / dark-lighter */
const FILLS = {
  dark: '#070B14',
  'dark-lighter': '#0F1420',
};

/**
 * Paint-style SVG divider that overlaps the section above.
 * Uses the same background colour so the next section appears to "paint over" the previous one.
 * Place at the top of a section; negative margin pulls the SVG up so it overlaps.
 */
const SectionDivider = ({ className = '', flip = false, fill = 'dark' }) => {
  const fillColor = FILLS[fill] ?? FILLS.dark;
  return (
    <div
      className={`relative w-full overflow-visible pointer-events-none -mt-20 md:-mt-28 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`block w-full ${flip ? 'rotate-180' : ''}`}
        style={{ height: 'clamp(80px, 10vw, 140px)', minHeight: 80 }}
      >
        <path
          d="M0,60 C360,0 480,100 720,55 C960,10 1080,90 1440,50 L1440,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
