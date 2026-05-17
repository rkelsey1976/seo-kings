'use client';
import React, { useEffect, useRef } from 'react';

const StatsCounter = ({ stats = [], duration = 1800, threshold = 0.5, columns, className = '' }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const numbers = gridRef.current.querySelectorAll('[data-target]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        const end = parseInt(target.dataset.target ?? '0');
        const suffix = target.dataset.suffix ?? '';
        const prefix = target.dataset.prefix ?? '';
        const idx = parseInt(target.closest('[data-index]')?.dataset.index ?? '0');
        const delay = idx * 80;
        const startTime = performance.now();

        const tick = (now) => {
          const t = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          target.textContent = prefix + Math.round(eased * end) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };

        setTimeout(() => requestAnimationFrame(tick), delay);
        observer.unobserve(target);
      });
    }, { threshold });

    numbers.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [duration, threshold]);

  const cols = columns ?? Math.min(stats.length, 4);
  const gridClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  }[cols] ?? 'grid-cols-2 md:grid-cols-4';

  return (
    <div ref={gridRef} className={`grid gap-8 ${gridClass} ${className}`}>
      {stats.map((stat, i) => (
        <div key={i} className="text-center" data-index={i}>
          <p
            className="text-5xl md:text-6xl font-bold leading-none mb-3"
            style={{ color: '#C4732C' }}
            data-target={stat.value}
            data-suffix={stat.suffix ?? ''}
            data-prefix={stat.prefix ?? ''}
          >
            {stat.prefix ?? ''}{stat.value}{stat.suffix ?? ''}
          </p>
          <p className="text-gray-400 text-sm tracking-widest uppercase">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
