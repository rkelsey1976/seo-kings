import React from 'react';

/** Same as tailwind dark / dark-lighter */
const FILLS = {
  dark: '#070B14',
  'dark-lighter': '#0F1420',
};

/** Flat section divider — no curves, no waves. Clean straight line. */
const SectionDivider = ({ className = '', flip = false, fill = 'dark' }) => {
  return (
    <div className={`w-full h-px ${className}`} aria-hidden="true" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }} />
  );
};

export default SectionDivider;
