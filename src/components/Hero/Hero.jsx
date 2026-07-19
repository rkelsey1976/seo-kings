'use client';

import React from 'react';
import Link from 'next/link';
import MagneticButton from '../library/MagneticButton';
import SplitTextHero from '../library/SplitTextHero';

const Hero = ({
  title = 'Is Your Website Actually Getting You Calls?',
  subtitle = 'Most trades in Bath & Bristol are missing leads because their site doesn\'t rank. We build sites that do. From £250, live in 2 weeks.',
  primaryCta = { href: '/contact', text: 'Get Your Free Audit' },
  secondaryCta = { href: 'tel:07702264921', text: '07702 264 921' },
} = {}) => {
  const results = [
    {
      business: 'Peachy Cleans',
      keyword: '"cleaning Midsomer Norton"',
      result: '#1 Map Pack',
      stat: '40+ calls/month',
      color: '#10B981',
    },
    {
      business: 'New Decorating',
      keyword: '"painter Bath"',
      result: 'Top 3 Map Pack',
      stat: 'First inquiry within a week',
      color: '#F59E0B',
    },
    {
      business: 'Bath Painter',
      keyword: '"painter & decorator Bath"',
      result: 'Live in 1 week',
      stat: 'Fully booked 2 months in',
      color: '#8B5CF6',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
      {/* Background: Gradient with accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #0B1324 0%, #1A1F3A 50%, #0E1628 100%)',
        }}
      />

      {/* Accent gradient — top right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #E8715A 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Accent gradient — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, #4A90A4 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Tagline */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 backdrop-blur-md bg-primary/[0.12] border border-primary/40 rounded-full text-primary font-bold text-[11px] tracking-[0.15em] uppercase shadow-lg shadow-primary/10">
                Web Design + Local SEO
              </span>
            </div>

            {/* Headline */}
            <SplitTextHero
              tag="h2"
              className="text-[clamp(3rem,6.5vw,4.75rem)] font-black leading-[1.08] tracking-tight text-white mb-6"
            >
              {title}
            </SplitTextHero>

            {/* Subtitle — clean, no random colors */}
            <p className="text-lg text-gray-300 leading-[1.7] mb-10 max-w-lg font-medium">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
              <MagneticButton
                as={Link}
                href={primaryCta.href}
                strength={0.35}
                className="inline-flex items-center justify-center text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 bg-primary hover:bg-primary-dark shadow-lg hover:shadow-[0_12px_32px_rgba(232,113,90,0.4),0_0_24px_rgba(232,113,90,0.25)] hover:scale-105"
              >
                {primaryCta.text}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 border border-white/20 hover:border-white/50 hover:bg-white/[0.08] hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {secondaryCta.text}
              </Link>
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">✓</span>
                <span className="text-gray-300">From £250</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">✓</span>
                <span className="text-gray-300">Live in 2 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold">✓</span>
                <span className="text-gray-300">4.9★ Google</span>
              </div>
            </div>
          </div>

          {/* Right: Results Stack */}
          <div className="hidden lg:block relative">
            <div className="space-y-4">
              {results.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.1] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                  style={{
                    borderLeftWidth: '3px',
                    borderLeftColor: item.color,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm mb-1">{item.business}</p>
                      <p className="text-gray-400 text-xs mb-2">{item.keyword}</p>
                      <p className="text-gray-500 text-xs">Search term</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        className="text-lg font-bold"
                        style={{ color: item.color }}
                      >
                        {item.result.split(' ')[0]}
                      </div>
                      <p className="text-gray-400 text-xs mt-1">{item.result.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                  {/* Quantified outcome */}
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-gray-300 flex items-center gap-1">
                      <span style={{ color: item.color }}>→</span>
                      <span className="font-semibold">{item.stat}</span>
                    </p>
                  </div>

                  {/* Subtle hover accent */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${item.color}15, transparent)`,
                    }}
                  />
                </div>
              ))}

              {/* Trust badge */}
              <div className="pt-4 flex items-center gap-2 text-xs text-gray-400">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                All results verified and tracked
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
