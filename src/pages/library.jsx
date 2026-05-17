import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// We need to import components dynamically or inline them for the library page
// since the library components themselves are in /library/

const LibraryPage = () => {
  return (
    <>
      <Head>
        <title>Component Library | SEO Kings</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-[#0B1324]">
        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 pt-24 pb-12">
          <div className="mb-4">
            <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase" style={{ color: '#E8715A' }}>
              Component Library
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            SEO Kings Components
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Reusable, premium components used across the site. Dark theme, GSAP-powered, accessible.
          </p>
        </header>

        <main className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 pb-32 space-y-24">

          {/* ── GrainTexture ── */}
          <section id="grain">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#E8715A]/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8715A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">GrainTexture</h2>
            </div>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Subtle film-grain overlay across the entire page. Adds that expensive darkroom texture.
              Animated drift by default. Respects prefers-reduced-motion.
            </p>

            <div className="rounded-2xl border border-white/[0.06] bg-[#0E1628]/60 p-8">
              <div className="flex items-center justify-center h-40 rounded-xl border border-white/[0.06] bg-[#0B1324] relative overflow-hidden">
                <GrainDemo />
                <span className="text-sm relative z-10" style={{ color: 'rgba(255,255,255,0.3)' }}>Grain overlay active (zoom in to see)</span>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <Prop name="opacity" type="number" default="0.04" desc="Grain intensity" />
              <Prop name="blendMode" type="string" default="multiply" desc="CSS mix-blend-mode" />
              <Prop name="animated" type="boolean" default="false" desc="Drift animation" />
            </div>

            <CodeBlock code={`import GrainTexture from './library/GrainTexture';

<GrainTexture opacity={0.04} blendMode="multiply" animated zIndex={9999} />`} />
          </section>

          {/* ── TiltCard ── */}
          <section id="tilt">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#E8715A]/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8715A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">TiltCard</h2>
            </div>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              3D perspective tilt on hover with cursor-following light glare. Feels physical.
              Spring snapback on mouseleave. 12° max rotation, 800px perspective.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <TiltCardDemo className="h-48" title="Card A" accent="#E8715A">
                Hover to see 3D tilt + glare follow cursor.
              </TiltCardDemo>

              <TiltCardDemo className="h-48" title="Card B (subtle)" accent="#E8715A" maxRot={8} persp={600}>
                maxRotation: 8, perspective: 600. Gentler feel.
              </TiltCardDemo>

              <TiltCardDemo className="h-48" title="Card C (dramatic)" accent="#E8715A" maxRot={20} persp={1000}>
                maxRotation: 20, perspective: 1000. High drama.
              </TiltCardDemo>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <Prop name="maxRotation" type="number" default="12" desc="Tilt angle in degrees" />
              <Prop name="perspective" type="number" default="800" desc="CSS perspective px" />
              <Prop name="className" type="string" default="''" desc="Wrapper classes" />
            </div>

            <CodeBlock code={`import TiltCard from './library/TiltCard';

<TiltCard maxRotation={12} perspective={800}>
  <div className="rounded-2xl border border-white/10 p-6">Your content</div>
</TiltCard>`} />
          </section>

          {/* ── MagneticButton ── */}
          <section id="magnetic">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#E8715A]/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8715A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">MagneticButton</h2>
            </div>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Cursor-pull with elastic snapback. The button subtly follows your mouse before snapping back.
              Works on &lt;Link&gt; or &lt;button&gt; via the `as` prop.
            </p>

            <div className="rounded-2xl border border-white/[0.06] bg-[#0E1628]/60 p-12 flex flex-wrap items-center justify-center gap-6">
              <MagneticButtonDemo strength={0.35} className="px-8 py-4 rounded-full bg-[#E8715A] text-white font-semibold text-sm">
                Pull me (0.35)
              </MagneticButtonDemo>

              <MagneticButtonDemo strength={0.6} className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm">
                Strong pull (0.6)
              </MagneticButtonDemo>

              <MagneticButtonDemo strength={0.15} className="px-8 py-4 rounded-full bg-[#E8715A] text-white font-semibold text-sm">
                Gentle (0.15)
              </MagneticButtonDemo>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <Prop name="strength" type="number" default="0.35" desc="Pull multiplier (0–1)" />
              <Prop name="as" type="string" default="button" desc="'button' or 'a' / Link" />
              <Prop name="className" type="string" default="''" desc="Button classes" />
            </div>

            <CodeBlock code={`import MagneticButton from './library/MagneticButton';

<MagneticButton as={Link} href="/contact" strength={0.35}
  className="px-6 py-3 rounded-full bg-coral text-white"
>
  Get Started
</MagneticButton>`} />
          </section>

          {/* ── SplitTextHero ── */}
          <section id="split">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#E8715A]/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8715A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">SplitTextHero</h2>
            </div>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Film-title word-by-word entrance animation. Each word slides up from below with staggered timing.
              Respects prefers-reduced-motion. Great for hero headlines.
            </p>

            <div className="rounded-2xl border border-white/[0.06] bg-[#0E1628]/60 p-12">
              <SplitTextDemo
                tag="h3"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
                stagger={0.08}
                duration={0.8}
              >
                Words that build trust
              </SplitTextDemo>
              <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Reload the page to see the entrance again.
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Prop name="tag" type="string" default="h1" desc="HTML tag wrapper" />
              <Prop name="stagger" type="number" default="0.08" desc="Delay between words (s)" />
              <Prop name="duration" type="number" default="0.8" desc="Animation duration (s)" />
              <Prop name="className" type="string" default="''" desc="Wrapper classes" />
            </div>

            <CodeBlock code={`import SplitTextHero from './library/SplitTextHero';

<SplitTextHero tag="h1" stagger={0.08} duration={0.8}
  className="text-4xl font-bold text-white"
>
  Websites That Get You Calls
</SplitTextHero>`} />
          </section>

          {/* Footer note */}
          <div className="pt-12 border-t border-white/[0.06]">
            <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Ported from Vortex Component Library · GSAP-powered · prefers-reduced-motion supported
            </p>
          </div>

        </main>
      </div>
    </>
  );
};

/* ── Demo implementations (inline so the page works standalone) ── */

const GrainDemo = () => (
  <div
    aria-hidden="true"
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: 0.06,
      mixBlendMode: 'multiply',
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '256px 256px',
      animation: 'grain-shift 0.5s steps(10) infinite',
    }}
  />
);

const TiltCardDemo = ({ children, title, accent, className = '', maxRot = 12, persp = 800 }) => {
  const cardRef = React.useRef(null);
  const glareRef = React.useRef(null);

  const onMove = (e) => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `perspective(${persp}px) rotateY(${x * maxRot}deg) rotateX(${-y * maxRot}deg)`;
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

    if (glare) {
      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.08), transparent 60%)`;
    }
  };

  const onLeave = () => {
    const card = cardRef.current;
    const glare = glareRef.current;
    if (!card) return;
    card.style.transform = `perspective(${persp}px) rotateY(0deg) rotateX(0deg)`;
    card.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
    if (glare) glare.style.opacity = '0';
  };

  return (
    <div className={className}>
      <div
        ref={cardRef}
        className="h-full rounded-2xl border border-white/[0.06] bg-[#0E1628]/60 p-6 flex flex-col justify-between relative overflow-hidden"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: accent }}>{title}</span>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{children}</p>
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
          style={{ borderRadius: 'inherit' }}
        />
      </div>
    </div>
  );
};

const MagneticButtonDemo = ({ children, strength = 0.35, className = '' }) => {
  const ref = React.useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    el.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
    el.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
  };

  return (
    <button
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  );
};

const SplitTextDemo = ({ children, className = '', tag: Tag = 'h1', stagger = 0.08, duration = 0.8 }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const words = containerRef.current?.querySelectorAll('.split-word');
    if (!words) return;

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

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="split-word inline-block" style={{ opacity: 0, transform: 'translateY(110%)' }}>{word}</span>
        </span>
      ))}
    </Tag>
  );
};

const Prop = ({ name, type, default: def, desc }) => (
  <div className="rounded-lg border border-white/[0.06] bg-[#0E1628]/40 p-4">
    <div className="flex items-center gap-2 mb-1">
      <code className="text-sm font-mono text-white">{name}</code>
      <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ background: 'rgba(232,113,90,0.15)', color: '#E8715A' }}>{type}</span>
    </div>
    <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{desc}</p>
    <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>default: {def}</p>
  </div>
);

const CodeBlock = ({ code }) => (
  <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#080c14] overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/[0.06]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#E8715A]/40" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#E8715A]/40" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
      <span className="ml-auto text-[10px] font-mono uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.2)' }}>Usage</span>
    </div>
    <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
      <code style={{ color: 'rgba(255,255,255,0.6)' }}>{code}</code>
    </pre>
  </div>
);

export default LibraryPage;
