import React from 'react';

const AnimatedBlob = ({ 
  color = 'primary', 
  size = 'md', 
  position = 'top-left',
  delay = '0',
  blur = 'sm'
}) => {
  // Color variants with gradients
  const colorVariants = {
    primary: 'from-primary to-primary-dark',
    secondary: 'from-secondary to-secondary-dark',
    accent: 'from-accent to-accent-dark',
    mixed: 'from-primary via-secondary to-accent',
  };

  // Size variants
  const sizeVariants = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80',
  };

  // Position variants
  const positionVariants = {
    'top-left': '-top-16 -left-16',
    'top-right': '-top-16 -right-16',
    'bottom-left': '-bottom-16 -left-16',
    'bottom-right': '-bottom-16 -right-16',
    'center-left': 'top-1/2 -translate-y-1/2 -left-24',
    'center-right': 'top-1/2 -translate-y-1/2 -right-24',
  };

  // Blur variants
  const blurVariants = {
    none: 'blur-none',
    sm: 'blur-xl',
    md: 'blur-2xl',
    lg: 'blur-3xl',
  };

  // Animation delay classes
  const delayClasses = {
    '0': '',
    '2000': 'animation-delay-2000',
    '4000': 'animation-delay-4000',
    '6000': 'animation-delay-6000',
  };

  return (
    <div
      className={`
        absolute
        ${positionVariants[position]}
        ${sizeVariants[size]}
        bg-gradient-to-br
        ${colorVariants[color]}
        rounded-full
        opacity-60
        ${blurVariants[blur]}
        animate-blob
        ${delayClasses[delay]}
        pointer-events-none
      `}
    />
  );
};

export default AnimatedBlob;
