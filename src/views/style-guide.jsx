import Head from 'next/head';
import Link from 'next/link';
import GrainTexture from '../components/library/GrainTexture';

/* ── Color swatches ─────────────────────────── */
const colors = [
  { name: 'Navy', hex: '#0B1324', text: '#F8FAFC' },
  { name: 'Navy Lighter', hex: '#121C2C', text: '#F8FAFC' },
  { name: 'Card BG', hex: '#0E1628', text: '#F8FAFC' },
  { name: 'Coral', hex: '#E8715A', text: '#FFF' },
  { name: 'Coral Light', hex: '#F0856E', text: '#FFF' },
  { name: 'Coral Dark', hex: '#C95E48', text: '#FFF' },
  { name: 'Teal', hex: '#E8715A', text: '#FFF' },
  { name: 'Teal Light', hex: '#5EA3B6', text: '#FFF' },
  { name: 'Teal Dark', hex: '#3A7A8C', text: '#FFF' },
  { name: 'Text Muted', hex: 'rgba(255,255,255,0.55)', text: '#0B1324' },
  { name: 'Text Subtle', hex: 'rgba(255,255,255,0.40)', text: '#0B1324' },
  { name: 'Border', hex: 'rgba(255,255,255,0.06)', text: '#F8FAFC' },
];

/* ── Spacing tokens ─────────────────────────── */
const spacingTokens = [
  { name: 'XS', value: '4px' },
  { name: 'SM', value: '8px' },
  { name: 'MD', value: '16px' },
  { name: 'LG', value: '24px' },
  { name: 'XL', value: '32px' },
  { name: 'XXL', value: '48px' },
  { name: 'Section', value: '112px' },
];

/* ── Rounded tokens ─────────────────────────── */
const roundedTokens = [
  { name: 'SM', value: '6px' },
  { name: 'MD', value: '12px' },
  { name: 'LG', value: '16px' },
  { name: 'XL', value: '20px' },
  { name: 'Full', value: '9999px' },
];

/* ── Animation tokens ───────────────────────── */
const animationTokens = [
  { name: 'Card lift', curve: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', duration: '0.3s' },
  { name: 'Magnetic pull', curve: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)', duration: '0.3s' },
  { name: 'Split text', curve: 'cubic-bezier(0.16, 1, 0.3, 1)', duration: '0.8s' },
  { name: 'Image zoom', curve: 'ease-out', duration: '0.7s' },
  { name: 'Fade-in-up', curve: 'ease-out', duration: '0.7s' },
];

export default function StyleGuide() {
  return (
    <>
      <Head>
        <title>Style Guide – SEO Kings</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-[#0B1324] text-[#F8FAFC] font-sans">
        <GrainTexture opacity={0.03} blendMode="multiply" animated zIndex={5} />

        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-[#0B1324]/80 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-coral font-semibold tracking-tight flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              SEOKings
            </Link>
            <span className="text-xs font-mono tracking-widest uppercase text-white/40">Style Guide</span>
            <Link href="/library.html" className="text-sm text-white/50 hover:text-coral transition-colors">
              Component Library →
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

          {/* ===== 1. INTRO ===== */}
          <section>
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">001</span>
            <h1 className="text-4xl sm:text-5xl font-semibold mt-3 tracking-tight">SEO Kings Design System</h1>
            <p className="text-lg mt-4 max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Dark, premium, no-fluff. Coral and teal on deep navy. Space Grotesk for everything. This document locks down every token so the site stays consistent across all pages.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#colour" className="text-sm text-white/40 hover:text-coral transition-colors">Colour</a>
              <span className="text-white/20">·</span>
              <a href="#typography" className="text-sm text-white/40 hover:text-coral transition-colors">Typography</a>
              <span className="text-white/20">·</span>
              <a href="#spacing" className="text-sm text-white/40 hover:text-coral transition-colors">Spacing</a>
              <span className="text-white/20">·</span>
              <a href="#shape" className="text-sm text-white/40 hover:text-coral transition-colors">Shape</a>
              <span className="text-white/20">·</span>
              <a href="#components" className="text-sm text-white/40 hover:text-coral transition-colors">Components</a>
              <span className="text-white/20">·</span>
              <a href="#animation" className="text-sm text-white/40 hover:text-coral transition-colors">Animation</a>
            </div>
          </section>

          <hr className="border-white/[0.06]" />

          {/* ===== 2. COLOUR ===== */}
          <section id="colour">
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">002</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Colour</h2>
            <p className="mt-3 text-white/55 max-w-xl">
              Navy is the only background. Coral = urgency/CTA. Teal = trust/proof. White text dims to 55% for body copy.
            </p>

            {/* Palette grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {colors.map((c) => (
                <div key={c.name} className="rounded-2xl overflow-hidden border border-white/[0.06] group card-lift bg-[#0E1628]">
                  <div className="h-20" style={{ backgroundColor: c.hex }} />
                  <div className="p-4">
                    <p className="font-semibold text-sm">{c.name}</p>
                    <code className="text-[11px] text-white/40 font-mono mt-1 block">{c.hex}</code>
                  </div>
                </div>
              ))}
            </div>

            {/* Colour-by-component */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.06] p-6 bg-[#0E1628]">
                <h3 className="text-sm font-semibold text-white/80 mb-4">Accent Assignment</h3>
                <dl className="space-y-3">
                  {[
                    ['Website Design card', '#E8715A', 'Core service = urgency'],
                    ['Rankings / Proof card', '#E8715A', 'Data = trust'],
                    ['GBP card', '#E8715A', 'Google = blue brand'],
                    ['Local SEO card', '#E8715A', 'Upsell = warmth'],
                    ['Coverage card', '#E8715A', 'Geography = calm'],
                  ].map(([name, hex, reason]) => (
                    <div key={name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: hex }} />
                        <span className="text-sm text-white/70">{name}</span>
                      </div>
                      <span className="text-[11px] text-white/40">{reason}</span>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl border border-white/[0.06] p-6 bg-[#0E1628]">
                <h3 className="text-sm font-semibold text-white/80 mb-4">Text Levels</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span style={{ color: '#F8FAFC' }}>Headings</span>
                    <code className="text-[11px] text-white/40 font-mono">#F8FAFC (100%)</code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: 'rgba(255,255,255,0.70)' }}>Subheadings</span>
                    <code className="text-[11px] text-white/40 font-mono">70% white</code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: 'rgba(255,255,255,0.55)' }}>Body copy</span>
                    <code className="text-[11px] text-white/40 font-mono">55% white</code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span style={{ color: 'rgba(255,255,255,0.40)' }}>Captions / microcopy</span>
                    <code className="text-[11px] text-white/40 font-mono">40% white</code>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <hr className="border-white/[0.06]" />

          {/* ===== 3. TYPOGRAPHY ===== */}
          <section id="typography">
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">003</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Typography</h2>
            <p className="mt-3 text-white/55 max-w-xl">
              Space Grotesk for everything. JetBrains Mono for tags, labels, and microcopy only. No serif pairing. Weight 600 for headings, 400 for body.
            </p>

            <div className="mt-8 space-y-8">
              {/* Scale */}
              {[
                { label: 'Display / Hero H1', size: '3rem', weight: '600', ls: '-0.03em', lh: '1.1', demo: 'Websites That Get You Calls' },
                { label: 'H2', size: '2.25rem', weight: '600', ls: '-0.02em', lh: '1.2', demo: 'What You Get' },
                { label: 'H3', size: '1.5rem', weight: '600', ls: '-0.02em', lh: '1.3', demo: 'Website Design for Trades' },
                { label: 'Body', size: '1rem', weight: '400', ls: 'normal', lh: '1.65', demo: 'Mobile-first. Fast-loading. Built to rank.' },
                { label: 'Tag / Mono', size: '0.6875rem', weight: '500', ls: '0.14em', lh: '1.0', demo: 'CORE SERVICE', mono: true },
                { label: 'Eyebrow', size: '0.75rem', weight: '500', ls: '0.12em', lh: '1.0', demo: 'SERVICES', mono: true },
              ].map((t) => (
                <div key={t.label} className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 pb-6 border-b border-white/[0.06]">
                  <div className="w-28 shrink-0">
                    <p className="text-[11px] font-mono text-white/40 uppercase tracking-wider">{t.label}</p>
                    <p className="text-[10px] text-white/30 mt-1">{t.size} / {t.weight} / {t.ls}</p>
                  </div>
                  <p
                    className={t.mono ? 'font-mono uppercase' : ''}
                    style={{ fontSize: t.size, fontWeight: t.weight, letterSpacing: t.ls, lineHeight: t.lh, color: t.label === 'Body' ? 'rgba(255,255,255,0.55)' : '#F8FAFC' }}
                  >
                    {t.demo}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-white/[0.06]" />

          {/* ===== 4. SPACING ===== */}
          <section id="spacing">
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">004</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Spacing</h2>
            <p className="mt-3 text-white/55 max-w-xl">
              4px base unit. Sections get 112px vertical. Grids get 16px gaps. Everything in betweendrops to one of these tokens.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {spacingTokens.map((s) => (
                <div key={s.name} className="rounded-2xl border border-white/[0.06] p-4 flex flex-col items-center text-center bg-[#0E1628]">
                  <div className="w-full rounded-lg bg-white/[0.06] mb-3" style={{ height: s.value }} />
                  <p className="font-semibold text-sm">{s.name}</p>
                  <code className="text-[11px] text-white/40 font-mono mt-1">{s.value}</code>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-white/[0.06]" />

          {/* ===== 5. SHAPE ===== */}
          <section id="shape">
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">005</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Shape</h2>
            <p className="mt-3 text-white/55 max-w-xl">
              16px for cards. Full-round for primary CTAs. 12px for tags and secondary buttons. Consistent across every surface.
            </p>

            <div className="mt-8 flex flex-wrap gap-8 items-end">
              {roundedTokens.map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-2xl bg-coral flex items-center justify-center text-white font-semibold text-sm" style={{ borderRadius: r.value === '9999px' ? '20px' : r.value }}>
                    {r.name}
                  </div>
                  <code className="text-[11px] text-white/40 font-mono">{r.value}</code>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-coral flex items-center justify-center text-white font-semibold text-sm">
                  CTA
                </div>
                <code className="text-[11px] text-white/40 font-mono">rounded-full</code>
              </div>
            </div>
          </section>

          <hr className="border-white/[0.06]" />

          {/* ===== 6. COMPONENTS ===== */}
          <section id="components">
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">006</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Components</h2>

            <div className="mt-10 space-y-14">
              {/* Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-white/90 mt-10">Buttons</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="bg-coral text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-coral-light transition-colors">
                    Primary CTA
                  </button>
                  <button className="bg-white/[0.08] text-white border border-white/[0.12] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/[0.12] transition-colors">
                    Secondary Button
                  </button>
                  <button className="bg-coral text-white px-6 py-2.5 rounded-full font-semibold text-sm opacity-50 cursor-not-allowed">
                    Disabled
                  </button>
                </div>
                <div className="mt-4 rounded-xl bg-[#0E1628] border border-white/[0.06] p-4 font-mono text-[11px] text-white/40 whitespace-pre-wrap">
{`<button className="bg-coral text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-coral-light transition-colors">
  Primary CTA
</button>`}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-white/90 mt-10">Tags / Eyebrows</h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase font-mono px-3 py-1.5 rounded-full" style={{ color: '#E8715A', backgroundColor: '#E8715A18', border: '1px solid #E8715A30' }}>
                    Core Service
                  </span>
                  <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase font-mono px-3 py-1.5 rounded-full" style={{ color: '#E8715A', backgroundColor: '#E8715A18', border: '1px solid #E8715A30' }}>
                    Results
                  </span>
                  <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase font-mono px-3 py-1.5 rounded-full" style={{ color: '#E8715A', backgroundColor: '#E8715A18', border: '1px solid #E8715A30' }}>
                    Add-on
                  </span>
                  <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase font-mono px-3 py-1.5 rounded-full" style={{ color: '#E8715A', backgroundColor: '#E8715A18', border: '1px solid #E8715A30' }}>
                    Coverage
                  </span>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="text-lg font-semibold text-white/90 mt-10">Cards</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {/* Standard card */}
                  <div className="rounded-2xl border border-white/[0.06] p-6 bg-[#0E1628] shadow-border card-lift">
                    <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase font-mono px-3 py-1.5 rounded-full mb-4" style={{ color: '#E8715A', backgroundColor: '#E8715A18', border: '1px solid #E8715A30' }}>
                      Results
                    </span>
                    <h3 className="text-xl font-semibold text-white">Rankings You Can Verify</h3>
                    <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      Exact keywords. Exact positions. No rank-tracking screenshots—search Google yourself.
                    </p>
                  </div>
                  {/* Card with photo */}
                  <div className="rounded-2xl overflow-hidden relative min-h-[220px] group cursor-pointer border border-white/[0.06]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1324]/20 via-[#0B1324]/60 to-[#0B1324]/95 z-[2]" />
                    <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 80px 30px rgba(11,19,36,0.5)' }} />
                    <div className="relative z-10 p-6 flex flex-col justify-end h-full min-h-[220px]">
                      <span className="inline-block w-fit text-[11px] font-semibold tracking-[0.14em] uppercase font-mono px-3 py-1.5 rounded-full mb-3" style={{ color: '#E8715A', backgroundColor: '#E8715A18', border: '1px solid #E8715A30' }}>
                        Core Service
                      </span>
                      <h3 className="text-xl font-semibold text-white">Website Design for Trades</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-lg font-semibold text-white/90 mt-10">Navigation</h3>
                <div className="mt-4 rounded-2xl border border-white/[0.06] bg-[#0B1324]/80 backdrop-blur-xl p-4 flex items-center justify-between h-16">
                  <div className="flex items-center gap-2 text-coral font-semibold">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    SEOKings
                  </div>
                  <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
                    <span>Services</span>
                    <span>Areas</span>
                    <span>Case Studies</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                  <span className="bg-coral text-white text-sm font-semibold px-5 py-2 rounded-full">Get Started</span>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-white/[0.06]" />

          {/* ===== 7. ANIMATION ===== */}
          <section id="animation">
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">007</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Animation</h2>
            <p className="mt-3 text-white/55 max-w-xl">
              All animations respect <code className="text-coral">prefers-reduced-motion</code>. Durations are short and snappy—never sluggish.
            </p>

            <div className="mt-8 space-y-3">
              {animationTokens.map((a) => (
                <div key={a.name} className="flex items-center justify-between rounded-xl border border-white/[0.06] p-4 bg-[#0E1628]">
                  <div>
                    <p className="font-semibold text-sm text-white/80">{a.name}</p>
                    <p className="text-[11px] text-white/40 font-mono mt-0.5">{a.duration} · {a.curve}</p>
                  </div>
                  <div className="w-12 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full bg-coral rounded-full animate-pulse" style={{ width: '60%' }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-white/[0.06]" />

          {/* ===== 8. DOS AND DONTS ===== */}
          <section>
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">008</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Do’s and Don’ts</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/[0.06] p-6">
                <h3 className="text-sm font-semibold text-teal mb-4 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Do
                </h3>
                <ul className="space-y-2 text-sm text-white/55">
                  <li>• Use real photography with heavy dark overlays</li>
                  <li>• Keep body copy at 55% white (never 100%)</li>
                  <li>• Use Coral for CTAs, Teal for proof/rankings</li>
                  <li>• Stick to Space Grotesk for everything</li>
                  <li>• Use rounded-2xl for all cards</li>
                  <li>• Add white/[0.06] hairline dividers between sections</li>
                  <li>• Respect prefers-reduced-motion</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/[0.06] p-6">
                <h3 className="text-sm font-semibold text-coral mb-4 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  Don't
                </h3>
                <ul className="space-y-2 text-sm text-white/55">
                  <li>• Add gradient fades or curved section dividers</li>
                  <li>• Use clip-art or icons on photo cards</li>
                  <li>• Use more than 2 accent colours per page</li>
                  <li>• Use drop shadows on dark cards (they disappear)</li>
                  <li>• Use generic stock-photo smiley people</li>
                  <li>• Make buttons smaller than 44px touch target</li>
                  <li>• Use blurry backdrop on cards (nav only)</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-white/[0.06]" />

          {/* ===== 9. TOKEN QUICK REF ===== */}
          <section>
            <span className="text-[11px] font-mono font-medium tracking-[0.14em] uppercase text-coral">009</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Token Quick Reference</h2>
            <p className="mt-3 text-white/55 max-w-xl">
              Copy-paste these values directly into Tailwind classes or inline styles.
            </p>
            <div className="mt-6 rounded-2xl bg-[#0E1628] border border-white/[0.06] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06] text-xs text-white/40 font-mono uppercase tracking-wider">
                      <th className="px-4 py-3">Token</th>
                      <th className="px-4 py-3">Value</th>
                      <th className="px-4 py-3">Tailwind</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    <tr><td className="px-4 py-3 text-white/70">Background</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">#0B1324</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">bg-[#0B1324]</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Card BG</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">#0E1628</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">bg-[#0E1628]</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Primary accent</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">#E8715A</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">text-coral / bg-coral</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Secondary accent</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">#E8715A</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">text-teal / bg-[#E8715A]</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Text body</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">rgba(255,255,255,0.55)</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">text-white/55</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Border</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">rgba(255,255,255,0.06)</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">border-white/[0.06]</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Border hover</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">rgba(232,113,90,0.25)</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">border-coral/25</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Card overlay</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">linear-gradient(180deg, rgba(11,19,36,0.15) ...)</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">—</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Nav backdrop</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">rgba(11,19,36,0.80)</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">bg-[#0B1324]/80</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Nav blur</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">16px</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">backdrop-blur-xl</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Section padding</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">112px</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">py-28 / lg:py-32</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">Card radius</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">16px</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">rounded-2xl</td></tr>
                    <tr><td className="px-4 py-3 text-white/70">CTA radius</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">9999px</td><td className="px-4 py-3 font-mono text-[11px] text-white/40">rounded-full</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-xs text-white/30 py-8 border-t border-white/[0.06]">
            SEO Kings Design System · Built for consistency across all pages · <Link href="/" className="text-coral hover:underline">Back to site →</Link>
          </footer>
        </main>
      </div>
    </>
  );
}
