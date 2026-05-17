'use client';
import React, { useEffect, useRef } from 'react';

const TestimonialPullquote = ({
  quote,
  name,
  role,
  avatar,
  stars,
  variant = 'full',
  className = '',
}) => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (!quoteRef.current) return;
    const el = quoteRef.current;
    const text = el.querySelector('.testimonial-text');
    const attribution = el.querySelector('.testimonial-attribution');
    const starEls = el.querySelector('.testimonial-stars');

    const targets = [starEls, text, attribution].filter(Boolean);
    if (targets.length === 0) return;

    targets.forEach((t) => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(16px)';
      t.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          targets.forEach((t, i) => {
            setTimeout(() => {
              t.style.opacity = '1';
              t.style.transform = 'translateY(0)';
            }, i * 120);
          });
          observer.disconnect();
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const StarRating = ({ count }) => (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
          style={{ color: i < count ? '#C4732C' : 'rgba(255,255,255,0.1)' }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  if (variant === 'full') {
    return (
      <blockquote
        ref={quoteRef}
        className={`relative px-8 py-24 md:py-32 text-center ${className}`}
      >
        <span
          className="absolute top-4 left-1/2 -translate-x-1/2 text-[12rem] leading-none select-none pointer-events-none"
          style={{ color: 'rgba(196,115,44,0.15)' }}
          aria-hidden="true"
        >"</span>

        {stars && (
          <div className="testimonial-stars flex justify-center gap-1 mb-8">
            <StarRating count={stars} />
          </div>
        )}

        <p className="testimonial-text text-2xl md:text-4xl leading-relaxed max-w-4xl mx-auto relative z-10" style={{ color: '#F5F3EF' }}>
          {quote}
        </p>

        <footer className="testimonial-attribution mt-10">
          <div className="flex items-center justify-center gap-4">
            {avatar && (
              <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full object-cover border border-white/10"
                loading="lazy"
              />
            )}
            <div className="text-left">
              <p className="font-medium text-sm" style={{ color: '#F5F3EF' }}>{name}</p>
              {role && <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{role}</p>}
            </div>
          </div>
        </footer>
      </blockquote>
    );
  }

  if (variant === 'card') {
    return (
      <blockquote
        ref={quoteRef}
        className={`relative p-8 rounded-2xl border border-white/10 ${className}`}
        style={{ backgroundColor: '#0B1D3A' }}
      >
        {stars && (
          <div className="testimonial-stars flex gap-1 mb-5">
            <StarRating count={stars} />
          </div>
        )}

        <span className="text-5xl leading-none block mb-2" style={{ color: 'rgba(196,115,44,0.30)' }} aria-hidden="true">"</span>

        <p className="testimonial-text text-xl leading-relaxed mb-6" style={{ color: '#F5F3EF' }}>
          {quote}
        </p>

        <footer className="testimonial-attribution flex items-center gap-3">
          {avatar && (
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover border border-white/10" loading="lazy" />
          )}
          <div>
            <p className="font-medium text-sm" style={{ color: '#F5F3EF' }}>{name}</p>
            {role && <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{role}</p>}
          </div>
        </footer>
      </blockquote>
    );
  }

  return null;
};

export default TestimonialPullquote;
