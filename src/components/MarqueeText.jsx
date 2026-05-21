'use client';
import React from 'react';

const MarqueeText = ({
  items = [],
  separator = '✦',
  speed = 45,
  direction = 'left',
  pauseOnHover = true,
  size = 'text-sm',
  className = '',
}) => {
  const allItems = [...items, ...items];
  const animDir = direction === 'right' ? 'marquee-right' : 'marquee-left';

  return (
    <div
      className={`overflow-hidden select-none ${className}`}
      style={{ '--marquee-speed': `${speed}s` }}
    >
      <div
        className={`marquee-track flex whitespace-nowrap ${animDir}${pauseOnHover ? ' pause-on-hover' : ''}`}
        aria-hidden="true"
      >
        {allItems.map((item, i) => (
          <span key={i} className={`flex items-center gap-4 px-4 ${size} font-medium tracking-widest uppercase text-gray-300`}>
            {item}
            <span className="text-primary">{separator}</span>
          </span>
        ))}
      </div>
      {/* Accessible hidden list for screen readers */}
      <ul className="sr-only">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MarqueeText;
