'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PricingModal from '../components/PricingModal';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const results = [
  {
    outcome: 'Top 3',
    qualifier: 'Map Pack',
    keyword: '"exterior painter Bath"',
    client: 'New Decorating',
    slug: 'new-decorating',
  },
  {
    outcome: 'Top 3',
    qualifier: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    client: 'Peachy Cleans',
    slug: 'peachy-cleans',
  },
  {
    outcome: 'Ranked',
    qualifier: 'Local Search',
    keyword: '"massage Bath"',
    client: 'Aurelian Massage',
    slug: 'aurelian-massage',
  },
  {
    outcome: '40 pages',
    qualifier: 'From Instagram',
    keyword: '"builders Bath"',
    client: 'Aspect Builds',
    slug: 'aspect-builds',
  },
];

const services = [
  {
    name: 'Website Design',
    price: 'From £250',
    href: '/web-design',
    desc: 'Mobile-first, fast-loading, built to rank for your trade locally. Live in under two weeks.',
  },
  {
    name: 'Website Redesign',
    price: 'From £250',
    href: '/website-redesign',
    desc: 'Full rebuild from scratch — same domain, completely new site. Rankings protected throughout.',
  },
  {
    name: 'Google Business Profile',
    price: '£100 one-off',
    href: '/google-business-profile',
    desc: 'One-off optimisation. Categories, keywords, service area. Show up in the Map Pack.',
  },
  {
    name: 'Local SEO',
    price: 'From £150/mo',
    href: '/local-seo',
    desc: 'Monthly keyword tracking, on-page work, local citations. No long-term contracts.',
  },
];

const steps = [
  {
    n: '01',
    head: 'Free audit.',
    body: "We check where you rank, what your competitors are doing, and exactly where you're losing calls. Takes 10 minutes. The report is yours either way.",
  },
  {
    n: '02',
    head: 'Live in two weeks.',
    body: 'Mobile-first, fast, built for "[your trade] near me" searches. Click-to-call, quote form, SEO foundations in from day one.',
  },
  {
    n: '03',
    head: 'The calls come in.',
    body: 'Monthly ranking report — exact keywords, exact positions. Most clients see movement within the first 30 days.',
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

const BG_DARK = '#07080D';
const BG_SURFACE = '#0D0F17';
const BORDER = 'rgba(255,255,255,0.055)';

export default function HomepageNew() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-32 pb-20"
        style={{ background: BG_DARK }}
      >
        {/* Main content */}
        <div className="max-w-6xl w-full">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-12"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Keynsham · Bath · Somerset
          </p>

          <h1
            className="font-bold text-white leading-[0.9] tracking-[-0.04em] mb-10"
            style={{ fontSize: 'clamp(3.75rem, 11vw, 9.5rem)' }}
          >
            Websites<br />that rank.
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed mb-12 max-w-xl"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            22 years of craft. We build fast, local-search-optimised websites
            for trades and businesses across Bath and North East Somerset.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Get a quote
            </button>
            <Link
              href="/case-studies"
              className="px-7 py-3.5 text-white font-semibold rounded-lg text-sm transition-colors"
              style={{ border: `1px solid ${BORDER}` }}
            >
              See our work →
            </Link>
          </div>
        </div>

        {/* Credential strip pinned to bottom */}
        <div
          className="max-w-6xl w-full pt-16 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-10"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          {[
            { value: '22', label: 'Years experience' },
            { value: '15', label: 'Years in design' },
            { value: '2 wks', label: 'Typical turnaround' },
            { value: '£250', label: 'Starting price' },
          ].map((c) => (
            <div key={c.label}>
              <div className="text-2xl sm:text-3xl font-bold text-white">{c.value}</div>
              <div
                className="text-xs mt-1.5 tracking-wide"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-40"
        style={{ background: BG_SURFACE }}
      >
        <div className="max-w-6xl">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-20"
            style={{ color: '#E8715A' }}
          >
            Verified Results
          </p>

          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="group grid py-10 sm:py-12 transition-opacity hover:opacity-70"
                style={{
                  borderBottom: `1px solid ${BORDER}`,
                  gridTemplateColumns: '14rem 1fr auto',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                {/* Big outcome number */}
                <div
                  className="font-bold text-white leading-none tracking-[-0.04em] whitespace-nowrap"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
                >
                  {r.outcome}
                </div>

                {/* Client + keyword */}
                <div className="min-w-0">
                  <div className="text-base sm:text-lg font-semibold text-white">
                    {r.client}
                  </div>
                  <div
                    className="text-sm mt-1"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {r.keyword}
                  </div>
                </div>

                {/* Qualifier + arrow */}
                <div className="shrink-0 text-right hidden sm:block">
                  <div
                    className="text-xs font-mono tracking-widest uppercase"
                    style={{ color: 'rgba(255,255,255,0.28)' }}
                  >
                    {r.qualifier}
                  </div>
                  <div
                    className="text-xs mt-2 group-hover:text-primary transition-colors"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                  >
                    View case study →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-40"
        style={{ background: BG_DARK }}
      >
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 mb-24 items-end">
            <div>
              <p
                className="text-[10px] font-mono tracking-[0.22em] uppercase mb-6"
                style={{ color: '#E8715A' }}
              >
                Services
              </p>
              <h2
                className="font-bold text-white leading-[0.92] tracking-[-0.04em]"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                One thing,<br />done well.
              </h2>
            </div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Website design is the core. Everything else — GBP, SEO, hosting
              — is an add-on that earns its place by making the site work
              harder for you.
            </p>
          </div>

          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-start justify-between gap-10 py-9 transition-opacity hover:opacity-70"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-semibold text-white mb-1.5">
                    {s.name}
                  </div>
                  <div
                    className="text-sm leading-relaxed max-w-md"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {s.desc}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-white font-bold">{s.price}</div>
                  <div
                    className="text-xs mt-2 group-hover:text-primary transition-colors"
                    style={{ color: 'rgba(255,255,255,0.25)' }}
                  >
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-40"
        style={{ background: BG_SURFACE }}
      >
        <div className="max-w-6xl">
          <p
            className="text-[10px] font-mono tracking-[0.22em] uppercase mb-6"
            style={{ color: '#E8715A' }}
          >
            Process
          </p>
          <h2
            className="font-bold text-white leading-[0.92] tracking-[-0.04em] mb-28"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            How it works.
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {steps.map((s) => (
              <div key={s.n}>
                <div
                  className="font-bold leading-none mb-8 tracking-[-0.04em]"
                  style={{
                    fontSize: 'clamp(4rem, 8vw, 7rem)',
                    color: 'rgba(255,255,255,0.06)',
                  }}
                >
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {s.head}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-40"
        style={{ background: BG_DARK, borderTop: `1px solid ${BORDER}` }}
      >
        <div className="max-w-6xl grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p
              className="text-[10px] font-mono tracking-[0.22em] uppercase mb-6"
              style={{ color: '#E8715A' }}
            >
              About
            </p>
            <h2
              className="font-bold text-white leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              22 years in.<br />Still obsessed.
            </h2>
          </div>

          <div className="space-y-6 pt-2">
            <p
              className="text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.42)' }}
            >
              SEO Kings is based in Keynsham, Somerset. We build websites and
              handle{' '}
              <Link href="/seo/bath" className="text-primary hover:underline">SEO in Bath</Link>,{' '}
              <Link href="/seo/bristol" className="text-primary hover:underline">SEO in Bristol</Link>{' '}
              and local SEO for trades and small businesses across North East
              Somerset.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.42)' }}
            >
              Behind every site is 22 years of development experience and 15
              years of graphic design. You&apos;re not funding someone&apos;s
              learning curve — you&apos;re getting a craftsman who knows what works.
            </p>
            <div className="pt-4 flex flex-wrap gap-6">
              <Link
                href="/about"
                className="text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                About us →
              </Link>
              <a
                href="tel:+447702264921"
                className="text-sm font-semibold hover:text-primary transition-colors"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                07702 264 921
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-20 py-40"
        style={{ background: BG_SURFACE }}
      >
        <div className="max-w-6xl">
          <h2
            className="font-bold text-white leading-[0.88] tracking-[-0.04em] mb-16"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            Ready<br />to rank?
          </h2>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Get a quote
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
              style={{
                border: `1px solid ${BORDER}`,
                color: 'rgba(255,255,255,0.5)',
              }}
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
