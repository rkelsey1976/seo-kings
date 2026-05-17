'use client';

import { useEffect, useRef, useState, useId } from 'react';
import Image from 'next/image';

/**
 * StepsScroll — ported from Vortex Components (Astro → React)
 * Desktop: sticky image panel crossfades as you scroll through steps.
 * Mobile: steps show their own inline images.
 */
const StepsScroll = ({ steps, accentColor = '#C4732C', className = '' }) => {
  const rootId = useId();
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);
  const imgRefs = useRef([]);
  const dotRefs = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = itemRefs.current;
    const images = imgRefs.current;
    const dots = dotRefs.current;

    if (!items.length) return;

    const activate = (index) => {
      if (index === active) return;
      // Crossfade images
      images[active]?.style?.setProperty('opacity', '0');
      images[index]?.style?.setProperty('opacity', '1');
      // Update dots
      dots[active]?.style?.setProperty('background', 'rgba(255,255,255,0.25)');
      dots[active]?.style?.removeProperty('transform');
      dots[index]?.style?.setProperty('background', accentColor);
      dots[index]?.style?.setProperty('transform', 'scale(1.5)');
      setActive(index);
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.stepIndex, 10);
            activate(idx);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    items.forEach((item) => item && observerRef.current.observe(item));

    return () => observerRef.current?.disconnect();
  }, [accentColor, active]);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div id={rootId} className={`relative grid grid-cols-1 lg:grid-cols-2 ${className}`}>
      {/* Sticky image panel (desktop) */}
      <div className="hidden lg:block relative">
        <div className="sticky top-28 h-[calc(100vh-8rem)] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { imgRefs.current[i] = el; }}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <Image
                src={step.image}
                alt={step.imageAlt ?? step.heading}
                fill
                sizes="(min-width: 1024px) 50vw, 0vw"
                className="object-cover"
                priority={i === 0}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/40 to-transparent" />
              {/* Step counter watermark */}
              <div className="absolute bottom-8 left-8">
                <span
                  className="font-bold leading-none tabular-nums"
                  style={{ fontSize: '7rem', color: 'white', opacity: 0.08 }}
                  aria-hidden="true"
                >
                  {pad(step.number ?? i + 1)}
                </span>
              </div>
            </div>
          ))}

          {/* Progress dots */}
          <div className="absolute top-1/2 right-5 -translate-y-1/2 flex flex-col gap-2.5 z-10" aria-hidden="true">
            {steps.map((_, i) => (
              <div
                key={i}
                ref={(el) => { dotRefs.current[i] = el; }}
                className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                style={
                  i === 0
                    ? { background: accentColor, transform: 'scale(1.5)' }
                    : { background: 'rgba(255,255,255,0.25)' }
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Steps panel */}
      <div className="py-20 lg:py-32 lg:pl-16 space-y-0">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="steps-scroll-item py-16 border-b border-white/5 last:border-0"
            data-step-index={i}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-5xl font-bold leading-none tabular-nums"
                style={{ color: accentColor, opacity: 0.45 }}
                aria-hidden="true"
              >
                {pad(step.number ?? i + 1)}
              </span>
              {step.tag && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-white/10 tracking-wide" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {step.tag}
                </span>
              )}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: '#F4F3EE' }}>
              {step.heading}
            </h3>
            <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {step.description}
            </p>
            {/* Mobile image */}
            <div className="mt-8 rounded-xl overflow-hidden lg:hidden" style={{ height: 260 }}>
              <Image
                src={step.image}
                alt={step.imageAlt ?? step.heading}
                width={600}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default StepsScroll;
