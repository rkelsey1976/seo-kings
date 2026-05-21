'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import FAQAccordion from '../components/FAQAccordion';
import PricingModal from '../components/PricingModal';

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const BG_DARK = '#07080D';
const BG_SURFACE = '#0D0F17';
const BORDER = 'rgba(255,255,255,0.055)';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const results = [
  { client: 'Peachy Cleans', outcome: '#1', detail: 'Map Pack · "cleaning Midsomer Norton"', slug: 'peachy-cleans' },
  { client: 'New Decorating', outcome: 'Top 3', detail: 'Map Pack · "exterior painter Bath"', slug: 'new-decorating' },
  { client: 'Aurelian Massage', outcome: 'Ranked', detail: 'Local search · "massage Bath"', slug: 'aurelian-massage' },
];

const included = [
  'Click-to-call button — front and centre on mobile',
  'Quote request form',
  'Services section — what you do, where you do it',
  'Area coverage page or section',
  'Google Maps embed',
  'SEO foundations — meta, schema, sitemap, robots',
  'Mobile-first, tested on real devices',
  'Fast load — no bloated page builders',
  'SSL certificate + UK hosting setup',
  '30 days of post-launch support',
];

const pricing = [
  {
    name: 'One-page site',
    price: '£250',
    desc: 'One service, one area. Everything a sole trader needs to get found and get called.',
    items: ['Contact form + click-to-call', 'Services + area section', 'SEO basics from day one', 'Live in 2 weeks'],
  },
  {
    name: 'Multi-page site',
    price: 'From £350',
    desc: '£250 base + £50 per additional page. Build it to your exact scope — nothing more, nothing less.',
    items: ['All one-page features', 'Separate pages per service', 'Gallery or portfolio option', 'Scales with your business'],
    featured: true,
  },
  {
    name: 'GBP optimisation',
    price: '£100',
    desc: 'One-off add-on to any website build. Get into the Map Pack — the top 3 local results.',
    items: ['Categories + keywords set up', 'Service areas configured', 'Photos + description', 'Done once, works forever'],
  },
];

const steps = [
  {
    n: '01',
    head: 'Free audit — 10 minutes.',
    body: 'We check where you rank, what your competitors are doing, and exactly what\'s stopping you getting calls. No obligation. The report is yours either way.',
  },
  {
    n: '02',
    head: 'Live in 2 weeks.',
    body: 'Mobile-first, fast, built for "[your trade] near me" searches from day one. Click-to-call, quote form, SEO foundations — all in from the start.',
  },
  {
    n: '03',
    head: 'The calls come in.',
    body: 'Monthly ranking report — exact keywords, exact positions. Most clients see movement within the first 30 days.',
  },
];

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'From £250 for a one-page trade site with contact form, click-to-call, area info and SEO basics. Multi-page sites are £250 base + £50 per page — so a 3-page site is £350, a 5-page site is £450. GBP optimisation is a £100 add-on. No hidden fees.',
  },
  {
    q: 'How long does it take?',
    a: 'Most one-page sites are live within 2 weeks. Multi-page sites typically take 3–4 weeks depending on content. We keep you updated throughout.',
  },
  {
    q: 'Do you do one-page websites?',
    a: 'Yes — and for most sole traders, a one-page site is exactly what you need. One page from £250 covers everything: services, contact, area info, click-to-call. Add GBP optimisation for £100 and you\'re showing up on Maps too.',
  },
  {
    q: 'Do you work across Bath and North East Somerset?',
    a: 'Yes. Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Timsbury and the surrounding villages. We also serve Trowbridge and Wiltshire.',
  },
  {
    q: 'Will it work on mobile?',
    a: 'All our sites are built mobile-first. Over 60% of local searches happen on a phone — your site will look sharp and load fast on every device.',
  },
  {
    q: 'What if I already have a website?',
    a: 'We can rebuild it from scratch on the same domain so you keep your rankings. See our website redesign service.',
  },
  {
    q: 'Do you provide hosting?',
    a: 'Yes. We set up UK hosting as part of every build. After the first year, hosting is £15/month.',
  },
  {
    q: 'What add-ons are available?',
    a: 'Once your site is live: GBP optimisation (£100 one-off), ongoing local SEO (£150/month). Everything is optional — no bundles, no lock-in.',
  },
];

const areaLinks = [
  { label: 'Website designer Bath', href: '/website-designer-bath' },
  { label: 'Website designer Keynsham', href: '/website-designer-keynsham' },
  { label: 'Website designer Midsomer Norton', href: '/website-designer-midsomer-norton' },
  { label: 'Website designer Radstock', href: '/website-designer-radstock' },
  { label: 'Website designer Peasedown St John', href: '/website-designer-peasedown-st-john' },
  { label: 'Website designer Saltford', href: '/website-designer-saltford' },
  { label: 'Website designer Trowbridge', href: '/website-designer-trowbridge' },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function WebDesign() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="min-h-[90vh] flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-36 pb-20"
        style={{ background: BG_DARK }}
      >
        <div className="max-w-6xl w-full">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-12"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Website Design · Bath & Somerset
          </p>

          <h1
            className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-10"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            Someone just<br />
            searched for<br />
            <span style={{ color: '#E8715A' }}>your trade.</span>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed mb-12 max-w-xl"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Did they find you — or your competitor? We build fast, local websites
            for trades across Bath & BANES. From £250. Live in 2 weeks.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Get a free quote
            </button>
            <a
              href="tel:+447702264921"
              className="px-7 py-3.5 text-white font-semibold rounded-lg text-sm transition-colors"
              style={{ border: `1px solid ${BORDER}` }}
            >
              Call 07702 264 921
            </a>
          </div>
        </div>

        {/* Credential strip */}
        <div
          className="max-w-6xl w-full pt-16 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-10"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          {[
            { value: '22', label: 'Years experience' },
            { value: '2 wks', label: 'Typical turnaround' },
            { value: '£250', label: 'Starting price' },
            { value: '3', label: 'Verified client results' },
          ].map((c) => (
            <div key={c.label}>
              <div className="text-2xl sm:text-3xl font-bold text-white">{c.value}</div>
              <div className="text-xs mt-1.5 tracking-wide" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-32"
        style={{ background: BG_SURFACE }}
      >
        <div className="max-w-6xl">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-16"
            style={{ color: '#E8715A' }}
          >
            Verified results
          </p>

          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="group grid py-8 sm:py-10 transition-opacity hover:opacity-70"
                style={{
                  borderBottom: `1px solid ${BORDER}`,
                  gridTemplateColumns: '10rem 1fr auto',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                <div
                  className="font-bold text-white leading-none tracking-[-0.04em] whitespace-nowrap"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  {r.outcome}
                </div>
                <div>
                  <div className="text-base font-semibold text-white">{r.client}</div>
                  <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{r.detail}</div>
                </div>
                <div
                  className="text-xs group-hover:text-primary transition-colors hidden sm:block"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  View case study →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-32"
        style={{ background: BG_DARK }}
      >
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 mb-20 items-end">
            <div>
              <p
                className="text-[10px] font-mono tracking-[0.22em] uppercase mb-6"
                style={{ color: '#E8715A' }}
              >
                Every build includes
              </p>
              <h2
                className="font-bold text-white leading-[0.92] tracking-[-0.04em]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                No extras.<br />No surprises.
              </h2>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Every site we build — at every price point — ships with all of this.
              Nothing is stripped out to hit the starting price.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-0" style={{ borderTop: `1px solid ${BORDER}` }}>
            {included.map((item) => (
              <div
                key={item}
                className="py-5 text-sm"
                style={{
                  borderBottom: `1px solid ${BORDER}`,
                  color: 'rgba(255,255,255,0.65)',
                }}
              >
                <span style={{ color: '#E8715A', marginRight: '0.75rem' }}>→</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-32"
        style={{ background: BG_SURFACE }}
      >
        <div className="max-w-6xl">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-6"
            style={{ color: '#E8715A' }}
          >
            Pricing
          </p>
          <h2
            className="font-bold text-white leading-[0.92] tracking-[-0.04em] mb-20"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Simple.<br />No lock-in.
          </h2>

          <div className="grid md:grid-cols-3 gap-px" style={{ background: BORDER }}>
            {pricing.map((p) => (
              <div
                key={p.name}
                className="p-8 flex flex-col gap-6"
                style={{
                  background: p.featured ? '#0F111C' : BG_SURFACE,
                  outline: p.featured ? `1px solid rgba(232,113,90,0.25)` : 'none',
                }}
              >
                <div>
                  <div
                    className="text-[10px] font-mono tracking-[0.18em] uppercase mb-3"
                    style={{ color: p.featured ? '#E8715A' : 'rgba(255,255,255,0.3)' }}
                  >
                    {p.name}
                  </div>
                  <div className="text-4xl font-bold text-white tracking-[-0.04em]">{p.price}</div>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {p.desc}
                  </p>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {p.items.map((item) => (
                    <li key={item} className="text-sm flex gap-2.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      <span style={{ color: '#E8715A', flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 text-sm font-semibold rounded-lg transition-colors"
                  style={
                    p.featured
                      ? { background: '#E8715A', color: '#fff' }
                      : { border: `1px solid ${BORDER}`, color: 'rgba(255,255,255,0.6)' }
                  }
                >
                  Get a quote
                </button>
              </div>
            ))}
          </div>

          <p className="text-xs mt-8" style={{ color: 'rgba(255,255,255,0.25)' }}>
            All prices exclude VAT. Hosting included for year one. After that, £15/month.
            No contracts on website builds.
          </p>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-32"
        style={{ background: BG_DARK }}
      >
        <div className="max-w-6xl">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-6"
            style={{ color: '#E8715A' }}
          >
            How it works
          </p>
          <h2
            className="font-bold text-white leading-[0.92] tracking-[-0.04em] mb-24"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Three steps.<br />No drama.
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {steps.map((s) => (
              <div key={s.n}>
                <div
                  className="font-bold leading-none mb-8 tracking-[-0.04em]"
                  style={{ fontSize: 'clamp(4rem, 7vw, 6rem)', color: 'rgba(255,255,255,0.06)' }}
                >
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{s.head}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY CALLOUT ───────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-32"
        style={{ background: BG_SURFACE, borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className="text-[10px] font-mono tracking-[0.22em] uppercase mb-6"
              style={{ color: '#E8715A' }}
            >
              Case study
            </p>
            <h2
              className="font-bold text-white leading-[0.92] tracking-[-0.04em] mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              From nothing to<br />#1 in the Map Pack.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.42)' }}>
              Peachy Cleans had no website and no Google presence. We built the site,
              optimised the Google Business Profile, and within days they were ranking
              in the Map Pack for "cleaning Midsomer Norton." They&apos;re still there.
            </p>
            <Link
              href="/case-studies/peachy-cleans"
              className="text-sm font-semibold text-white hover:text-primary transition-colors"
            >
              Read the full case study →
            </Link>
          </div>

          <div
            className="rounded-lg overflow-hidden"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <div className="p-6" style={{ background: BG_DARK }}>
              <p className="text-[10px] font-mono tracking-[0.18em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Google Maps · "cleaning midsomer norton"
              </p>
              <div className="space-y-3">
                {['Peachy Cleans — 4.9★ (38 reviews)', 'Commercial Cleaning Somerset Ltd', 'Mac with a Vac'].map((r, i) => (
                  <div
                    key={r}
                    className="flex items-center gap-3 py-3 px-4 rounded-md"
                    style={{
                      background: i === 0 ? 'rgba(232,113,90,0.08)' : 'rgba(255,255,255,0.03)',
                      border: i === 0 ? '1px solid rgba(232,113,90,0.2)' : `1px solid ${BORDER}`,
                    }}
                  >
                    <span
                      className="text-xs font-bold w-5 text-center"
                      style={{ color: i === 0 ? '#E8715A' : 'rgba(255,255,255,0.2)' }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm" style={{ color: i === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)' }}>
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-24"
        style={{ background: BG_DARK, borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-8"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            Areas covered
          </p>
          <div className="flex flex-wrap gap-2">
            {areaLinks.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="text-xs px-4 py-2 rounded-full transition-colors hover:text-white"
                style={{
                  border: `1px solid ${BORDER}`,
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                {a.label}
              </Link>
            ))}
            <Link
              href="/website-designer-near-me"
              className="text-xs px-4 py-2 rounded-full transition-colors hover:text-white"
              style={{ border: `1px solid rgba(232,113,90,0.3)`, color: '#E8715A' }}
            >
              All areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-32"
        style={{ background: BG_SURFACE }}
      >
        <div className="max-w-6xl">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-6"
            style={{ color: '#E8715A' }}
          >
            FAQ
          </p>
          <h2
            className="font-bold text-white leading-[0.92] tracking-[-0.04em] mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Common questions.
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-32"
        style={{ background: BG_DARK, borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl">
          <h2
            className="font-bold text-white leading-[0.88] tracking-[-0.04em] mb-16"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            Ready<br />to rank?
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Get a free quote
            </button>
            <a
              href="tel:+447702264921"
              className="px-7 py-3.5 text-white font-semibold rounded-lg text-sm transition-colors"
              style={{ border: `1px solid ${BORDER}` }}
            >
              Call 07702 264 921
            </a>
            <Link
              href="/contact"
              className="px-7 py-3.5 font-semibold rounded-lg text-sm transition-colors"
              style={{ border: `1px solid ${BORDER}`, color: 'rgba(255,255,255,0.5)' }}
            >
              Free audit — no obligation
            </Link>
          </div>
        </div>
      </section>

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
