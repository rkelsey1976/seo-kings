'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SectionDivider from './SectionDivider';

const accent = '#E8715A';

// Placeholder monthly data — REPLACE with real GBP Insights monthly numbers.
// Bars are scaled to the max value in the series, so the highest month always reaches 100%.
const caseStudies = [
  {
    business: 'Peachy Cleans',
    trade: 'Cleaning',
    location: 'Midsomer Norton',
    gbpClicks: '229',
    gbpPeriod: '5 months',
    gbpPeak: '↑ 52 clicks in May alone',
    footnote: '#1 on Google · fully booked',
    slug: 'peachy-cleans',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    monthly: [0, 8, 24, 47, 52], // TODO: replace with real numbers
  },
  {
    business: 'New Decorating',
    trade: 'Decorating',
    location: 'Bath & BANES',
    gbpClicks: '72',
    gbpPeriod: '5 months',
    gbpPeak: '↑ Started from zero',
    footnote: 'Top 3 Map Pack · Bath',
    slug: 'new-decorating',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    monthly: [0, 5, 14, 22, 31], // TODO: replace with real numbers
  },
  {
    business: 'Aurelian Massage',
    trade: 'Massage',
    location: 'Bath City Centre',
    gbpClicks: '75',
    gbpPeriod: '3 months',
    gbpPeak: '↑ 32 clicks in May',
    footnote: 'New business · ranking Bath',
    slug: 'aurelian-massage',
    months: ['Mar', 'Apr', 'May'],
    monthly: [11, 32, 32], // TODO: replace with real numbers
  },
];

const Tag = ({ children }) => (
  <span style={{
    display: 'inline-block',
    fontFamily: 'var(--font-mono, ui-monospace, monospace)',
    fontSize: '9px',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: accent,
    background: `${accent}18`,
    border: `1px solid ${accent}30`,
    borderRadius: '99px',
    padding: '3px 10px',
    marginBottom: '10px',
  }}>{children}</span>
);

const BarChart = ({ months, values, active }) => {
  const max = Math.max(...values, 1);
  return (
    <div style={{ marginTop: '12px', marginBottom: '8px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${values.length}, 1fr)`,
          gap: '6px',
          height: '72px',
          alignItems: 'flex-end',
        }}
      >
        {values.map((v, i) => {
          const heightPct = max > 0 ? (v / max) * 100 : 0;
          const isLast = i === values.length - 1;
          return (
            <div
              key={i}
              style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              {/* Value label above bar (only for highest + last) */}
              <div
                style={{
                  fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                  fontSize: '9px',
                  fontWeight: 600,
                  color: isLast ? accent : 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.04em',
                  marginBottom: '4px',
                  height: '11px',
                  lineHeight: '11px',
                }}
              >
                {v > 0 ? v : ''}
              </div>
              {/* Bar */}
              <div
                style={{
                  width: '100%',
                  height: active ? `${heightPct}%` : '0%',
                  background: isLast
                    ? `linear-gradient(180deg, ${accent} 0%, ${accent}CC 100%)`
                    : `linear-gradient(180deg, ${accent}AA 0%, ${accent}55 100%)`,
                  borderRadius: '3px 3px 0 0',
                  boxShadow: isLast ? `0 0 16px ${accent}66` : 'none',
                  transition: `height 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
                  minHeight: v > 0 ? '3px' : '0px',
                }}
              />
            </div>
          );
        })}
      </div>
      {/* Month labels */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${values.length}, 1fr)`,
          gap: '6px',
          marginTop: '6px',
        }}
      >
        {months.map((m, i) => {
          const isLast = i === months.length - 1;
          return (
            <div
              key={i}
              style={{
                fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                fontSize: '8px',
                color: isLast ? accent : 'rgba(255,255,255,0.35)',
                letterSpacing: '0.06em',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: isLast ? 600 : 400,
              }}
            >
              {m}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CaseStudyCard = ({ study, index }) => {
  const cardRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl flex flex-col"
      style={{
        background: '#0E1628',
        border: '1px solid rgba(255,255,255,0.06)',
        padding: '20px',
        minHeight: '320px',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent 5%, ${accent} 50%, transparent 95%)`,
        opacity: 0.7,
      }} />
      {/* Inset vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        boxShadow: 'inset 0 0 60px 20px rgba(11,19,36,0.5)',
      }} />

      <Tag>{study.trade}</Tag>
      <div className="text-white font-semibold text-sm mb-0.5" style={{ letterSpacing: '-0.01em' }}>
        {study.business}
      </div>
      <div
        className="font-mono text-[10px] mb-3"
        style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}
      >
        {study.location}
      </div>

      {/* Big number */}
      <div style={{
        fontSize: '52px', fontWeight: 700, color: accent, lineHeight: 1,
        letterSpacing: '-0.04em',
        textShadow: `0 0 60px ${accent}35`,
        marginBottom: '4px',
      }}>
        {study.gbpClicks}
      </div>

      <div
        className="font-mono text-[10px] mb-1"
        style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}
      >
        Maps clicks · {study.gbpPeriod}
      </div>
      <div
        className="font-mono text-[10px] mb-1"
        style={{ color: '#6EE7A0' }}
      >
        {study.gbpPeak}
      </div>

      {/* Bar chart — the visual story of growth */}
      <BarChart months={study.months} values={study.monthly} active={active} />

      <div
        className="font-mono text-[9px] mt-2"
        style={{ color: 'rgba(255,255,255,0.25)' }}
      >
        {study.footnote}
      </div>

      <div className="mt-auto pt-4">
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-1 text-xs font-mono transition-colors"
          style={{ color: `${accent}99`, letterSpacing: '0.06em' }}
        >
          Read case study →
        </Link>
      </div>
    </div>
  );
};

const Results = () => (
  <section id="results" className="py-24 relative overflow-hidden">
    <SectionDivider />

    {/* Dot grid texture */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      opacity: 0.025,
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">Verified results</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 tracking-tight" style={{ letterSpacing: '-0.04em' }}>
          Real clients.{' '}
          <span style={{ color: accent, textShadow: `0 0 40px ${accent}40` }}>Real Google data.</span>
        </h2>
        <p className="text-white/40 mt-4 max-w-xl font-mono text-sm" style={{ letterSpacing: '0.04em' }}>
          Three local businesses · zero ad spend · just Google Maps
        </p>
      </div>

      {/* Bento client cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={i} study={study} index={i} />
        ))}
      </div>

      {/* Total row */}
      <div
        className="relative overflow-hidden rounded-2xl flex flex-col sm:flex-row items-start sm:items-end gap-4 mb-4"
        style={{
          background: '#0E1628',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '28px 32px',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent 5%, ${accent} 50%, transparent 95%)`,
          opacity: 0.7,
        }} />
        <div style={{
          fontSize: 'clamp(4rem,10vw,6rem)', fontWeight: 700, color: accent,
          letterSpacing: '-0.05em', lineHeight: 1,
          textShadow: `0 0 80px ${accent}40`,
        }}>376</div>
        <div className="pb-1 sm:pb-2">
          <div className="text-white font-semibold mb-1" style={{ letterSpacing: '-0.02em' }}>total Google Maps website clicks</div>
          <div className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em', lineHeight: 1.8 }}>
            Jan–May 2026 · three clients · zero ad spend · Bath &amp; BANES
          </div>
        </div>
      </div>

      {/* CTA row */}
      <div
        className="rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{
          border: `1px solid ${accent}30`,
          background: `${accent}08`,
          padding: '20px 28px',
        }}
      >
        <div>
          <div className="text-white font-semibold" style={{ letterSpacing: '-0.01em' }}>
            Want results like these for your trade business?
          </div>
          <div className="font-mono text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
            Free audit · no card needed · results tracked monthly
          </div>
        </div>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold transition-colors whitespace-nowrap"
          style={{
            color: accent,
            border: `1px solid ${accent}40`,
            borderRadius: '99px',
            padding: '10px 18px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          View all case studies →
        </Link>
      </div>

    </div>
  </section>
);

export default Results;
