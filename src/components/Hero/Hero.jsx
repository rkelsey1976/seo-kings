'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MagneticButton from '../library/MagneticButton';
import SplitTextHero from '../library/SplitTextHero';

const Hero = ({
  title = 'Websites That Get You Calls',
  subtitle = 'A fast local website and Google Business Profile, built for trades in Bath & BANES. Live in under 2 weeks. From £399.',
  primaryCta = { href: '/contact', text: 'Get Your Free Audit' },
  secondaryCta = { href: 'tel:07702264921', text: '07702 264 921' },
} = {}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32">
      {/* ══════ HERO BACKGROUND IMAGE — neon laptop ══════ */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-laptop.webp"
          alt="Web designer working on a laptop — SEO Kings, Bath"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Background image — very light overlay, image highly visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(11,19,36,0.55) 0%, rgba(11,19,36,0.30) 40%, rgba(11,19,36,0.15) 70%, rgba(11,19,36,0.08) 100%)',
        }}
      />

      {/* Left text safe-zone — minimal darkness, photo still shows */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: 'linear-gradient(90deg, rgba(11,19,36,0.45) 0%, rgba(11,19,36,0.08) 55%, transparent 80%)',
        }}
      />

      {/* Ultra-soft vignette — edges barely darkened */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(11,19,36,0.30) 100%)',
        }}
      />

      {/* Subtle dot grid for texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left Content — 3 cols */}
          <div className="lg:col-span-3">
            {/* Tagline */}
            <div className="mb-6">
              <span className="text-coral font-medium tracking-wide uppercase text-[12px] md:text-[13px]">
                Website Design + Local SEO<br />Bath & North East Somerset
              </span>
            </div>

            {/* Headline — split text entrance */}
            <SplitTextHero
              tag="h1"
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight text-white mb-5"
            >
              {title}
            </SplitTextHero>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mb-8">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
              <MagneticButton
                as={Link}
                href={primaryCta.href}
                strength={0.35}
                className="inline-flex items-center justify-center text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-colors duration-200 btn-coral"
              >
                {primaryCta.text}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center text-gray-300 hover:text-white px-7 py-3.5 rounded-lg font-medium text-[15px] transition-colors border border-white/10 hover:border-white/20"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {secondaryCta.text}
              </Link>
            </div>

            {/* Minimal social proof row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-semibold">From £399</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-semibold">Live in 2 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-semibold">4.9★</span>
                <span>Google rating</span>
              </div>
            </div>
          </div>

          {/* Right — floating result card on the neon background (2 cols) */}
          <div className="lg:col-span-2 relative hidden lg:flex items-end justify-start pb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-xs text-gray-400">"cleaner Midsomer Norton" </span>
                  <span className="text-xs text-coral font-semibold ml-auto">#1</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
