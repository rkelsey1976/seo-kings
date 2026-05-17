'use client';

import React, { useRef, useCallback } from 'react';

/**
 * TiltCard — 3D perspective tilt on hover with cursor-following glare.
 * Ported from Vortex Component Library.
 */
const TiltCard = ({
  children,
  maxRotation = 12,
  perspective = 800,
  className = '',
}) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `perspective(${perspective}px) rotateY(${x * maxRotation}deg) rotateX(${-y * maxRotation}deg)`;
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

    if (glare) {
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.08), transparent 60%)`;
    }
  }, [maxRotation, perspective]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;
    card.style.transform = 'perspective(${perspective}px) rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
    if (glare) {
      glare.style.opacity = '0';
    }
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none rounded-inherit opacity-0 transition-opacity duration-300"
        style={{ borderRadius: 'inherit' }}
      />
    </div>
  );
};

export default TiltCard;
