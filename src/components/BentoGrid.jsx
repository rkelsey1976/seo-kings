/**
 * BentoGrid v5 — Full-bleed photo cards, cinematic overlays, hover zoom.
 * No SVGs. No clip-art. Real images, top-end agency feel.
 */
'use client';
import Image from 'next/image';
import TiltCard from './library/TiltCard';

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const BentoGrid = ({ cells, gap = 'md', className = '' }) => {
  const gapClass = { sm: 'gap-3', md: 'gap-4', lg: 'gap-5' }[gap];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${gapClass} ${className}`}>
      {cells.map((cell, i) => {
        const Tag = cell.href ? 'a' : 'div';
        const colSpan = cell.colSpan === 2 ? 'md:col-span-2' : '';
        const isFeatured = cell.featured;
        const accent = cell.accentColor || '#E8715A';

        return (
          <TiltCard
            key={i}
            maxRotation={10}
            perspective={900}
            className={`${colSpan} ${isFeatured ? 'md:row-span-2' : ''}`}
          >
            <Tag
              href={cell.href}
              className={`
                group relative overflow-hidden rounded-2xl
                flex flex-col h-full cursor-pointer
                ${isFeatured ? 'min-h-[420px] md:min-h-[540px]' : 'min-h-[280px] md:min-h-[320px]'}
              `}
              aria-label={cell.href && cell.heading ? cell.heading : undefined}
            >
              {/* ── Photo background ── */}
              {cell.imageBg && (
                <div className="absolute inset-0 z-[1] transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={cell.imageBg}
                    alt={cell.heading || `${cell.tag || 'Service'} — SEO Kings`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: cell.imageFocus || 'center' }}
                    sizes={cell.colSpan === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              )}

              {/* ── Cinematic dark overlay ── */}
              <div
                className="absolute inset-0 z-[2]"
                style={{
                  background: isFeatured
                    ? `linear-gradient(180deg, rgba(11,19,36,0.20) 0%, rgba(11,19,36,0.55) 35%, rgba(11,19,36,0.88) 65%, rgba(11,19,36,0.98) 100%)`
                    : cell.lightBg
                      ? `linear-gradient(180deg, rgba(11,19,36,0.50) 0%, rgba(11,19,36,0.72) 40%, rgba(11,19,36,0.94) 75%, rgba(11,19,36,0.99) 100%)`
                      : `linear-gradient(180deg, rgba(11,19,36,0.15) 0%, rgba(11,19,36,0.50) 40%, rgba(11,19,36,0.90) 75%, rgba(11,19,36,0.98) 100%)`,
                }}
              />

              {/* ── Vignette ── */}
              <div
                className="absolute inset-0 z-[3] pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 120px 40px rgba(11,19,36,0.6)',
                }}
              />

              {/* ── Edge darkening for text safe-zone ── */}
              <div
                className="absolute inset-0 z-[3] pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 100%, rgba(11,19,36,0.4) 0%, transparent 70%)`,
                }}
              />

              {/* ── Top accent bar ── */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-[5]"
                style={{
                  background: `linear-gradient(90deg, transparent 5%, ${accent} 50%, transparent 95%)`,
                  opacity: 0.7,
                }}
              />

              {/* ── Content ── */}
              <div className={`relative z-10 flex flex-col justify-between h-full p-6 lg:p-8`} aria-hidden="true">
                {/* Top: tag */}
                <div>
                  {cell.tag && (
                    <span
                      className="inline-block text-[10px] font-semibold tracking-[0.14em] uppercase font-mono px-3 py-1.5 rounded-full backdrop-blur-sm"
                      style={{
                        color: accent,
                        backgroundColor: `${accent}18`,
                        border: `1px solid ${accent}30`,
                      }}
                    >
                      {cell.tag}
                    </span>
                  )}
                </div>

                {/* Middle: stat (featured only) */}
                {cell.stat && (
                  <div className="flex-1 flex flex-col justify-center my-4">
                    <p
                      className="font-bold leading-none tracking-tighter"
                      style={{
                        color: accent,
                        fontSize: isFeatured ? 'clamp(4rem, 10vw, 7rem)' : 'clamp(2.5rem, 5vw, 4rem)',
                        textShadow: `0 0 80px ${accent}35`,
                      }}
                    >
                      {cell.stat}
                    </p>
                    {cell.statLabel && (
                      <p className="text-[10px] tracking-[0.18em] uppercase mt-3 text-white/40 font-medium">
                        {cell.statLabel}
                      </p>
                    )}
                  </div>
                )}

                {/* Bottom: heading + body + link */}
                <div>
                  {cell.heading && (
                  <h3
                    id={cell.heading ? `bento-heading-${i}` : undefined}
                    className={`font-semibold leading-snug text-white ${isFeatured ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'}`}
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
                  >
                      {cell.heading}
                    </h3>
                  )}
                  {cell.body && (
                    <p className="text-sm leading-relaxed mt-3" style={{ color: 'rgba(255,255,255,0.60)' }}>
                      {cell.body}
                    </p>
                  )}
                  {cell.href && (
                    <div
                      className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      style={{ color: accent }}
                      aria-hidden="true"
                    >
                      View details
                      <ArrowRight />
                    </div>
                  )}
                </div>
              </div>

              {/* ── Bottom glow line on hover ── */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[1px] z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                }}
              />
            </Tag>
          </TiltCard>
        );
      })}
    </div>
  );
};

export default BentoGrid;
