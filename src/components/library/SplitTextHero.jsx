'use client';

import React, { useEffect, useRef } from 'react';

/**
 * SplitTextHero — animates heading words in one by one on load.
 * Ported from Vortex Component Library SplitText.
 */
const SplitTextHero = ({
  children,
  className = '',
  tag: Tag = 'h1',
  stagger = 0.08,
  duration = 0.8,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const words = containerRef.current?.querySelectorAll('.split-word');
    if (!words) return;

    words.forEach((word, i) => {
      word.style.opacity = '0';
      word.style.transform = 'translateY(110%)';
      word.style.display = 'inline-block';
    });

    const timer = setTimeout(() => {
      words.forEach((word, i) => {
        setTimeout(() => {
          word.style.transition = `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1), opacity ${duration * 0.6}s ease`;
          word.style.transform = 'translateY(0)';
          word.style.opacity = '1';
        }, i * stagger * 1000);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [stagger, duration]);

  // Split text into word spans — start hidden so no hydration flash
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <Tag ref={containerRef} className={`${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span
            className="split-word inline-block"
            style={{ opacity: 0, transform: 'translateY(110%)' }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitTextHero;
