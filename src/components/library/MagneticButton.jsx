'use client';

import React, { useRef, useCallback } from 'react';

/**
 * MagneticButton — cursor-pull with elastic snapback.
 * Ported from Vortex Component Library.
 */
const MagneticButton = ({
  children,
  strength = 0.35,
  className = '',
  as: Tag = 'button',
  ...props
}) => {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    el.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
    el.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
  }, []);

  return (
    <Tag
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default MagneticButton;
