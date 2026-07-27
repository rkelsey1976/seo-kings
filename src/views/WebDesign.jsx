'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import PricingModal from '../components/PricingModal';
import SectionTag from '../components/SectionTag';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const heroFeatures = [
  'From £250',
  'Live in 2 weeks',
  'Mobile-first',
  'Built to rank locally',
];

const services = [
  {
    name: 'Website Design for Trades',
    description: 'Mobile-first sites built for plumbers, electricians, builders and every trade — browse all 15.',
    price: 'From £250',
    href: '/web-design-for',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
  {
    name: 'Packages & Pricing',
    description: 'Per-page pricing, no hidden fees. See exactly what a 1, 3 or 5-page site costs.',
    price: 'View plans',
    href: '/web-design-packages',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3v-6m-3 6v-9m-2 9h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
  },
  {
    name: 'Website Redesign',
    description: 'Already have a site that isn\'t performing? We rebuild it on the same domain so you keep your rankings.',
    price: 'From £250',
    href: '/website-redesign',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
    ),
  },
  {
    name: 'Google Business Profile',
    description: 'Full GBP setup and optimisation so you show up in the Map Pack. One-off, no ongoing fees.',
    price: '£100',
    href: '/google-business-profile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    name: 'Hosting',
    description: 'UK hosting, SSL, daily backups and uptime monitoring. 6 months free, then £50/year.',
    price: '£50/yr',
    href: '/hosting',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-14 5h.01M5 12h.01" /></svg>
    ),
  },
];

const trades = [
  { name: 'Plumbers', slug: 'plumbers' },
  { name: 'Electricians', slug: 'electricians' },
  { name: 'Roofers', slug: 'roofers' },
  { name: 'Builders', slug: 'builders' },
  { name: 'Landscapers', slug: 'landscapers' },
  { name: 'Cleaners', slug: 'cleaners' },
  { name: 'Painters & Decorators', slug: 'painters-decorators' },
  { name: 'Kitchen Fitters', slug: 'kitchen-fitters' },
  { name: 'Bathroom Fitters', slug: 'bathroom-fitters' },
  { name: 'Heating Engineers', slug: 'heating-engineers' },
  { name: 'Plasterers', slug: 'plasterers' },
  { name: 'Gas Engineers', slug: 'gas-engineers' },
  { name: 'Loft Conversions', slug: 'loft-conversions' },
  { name: 'Extension Builders', slug: 'extension-builders' },
  { name: 'Drainage Engineers', slug: 'drainage-engineers' },
];

const results = [
  { metric: '#1', label: 'Map Pack', detail: '"cleaning Midsomer Norton" — Peachy Cleans', slug: 'peachy-cleans' },
  { metric: 'Top 3', label: 'Map Pack', detail: '"exterior painter Bath" — New Decorating', slug: 'new-decorating' },
  { metric: 'Ranked', label: 'Local search', detail: '"massage Bath" — Aurelian Massage', slug: 'aurelian-massage' },
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
    tagline: 'One service, one area',
    desc: 'Everything a sole trader needs to get found and get called.',
    items: [
      'Contact form + click-to-call',
      'Services + area section',
      'SEO basics from day one',
      'Live in 2 weeks',
    ],
    featured: false,
  },
  {
    name: 'Multi-page site',
    price: 'From £350',
    tagline: '£250 base + £50 per additional page',
    desc: 'Build it to your exact scope — nothing more, nothing less.',
    items: [
      'All one-page features',
      'Separate pages per service',
      'Gallery or portfolio option',
      'Scales with your business',
    ],
    featured: true,
  },
  {
    name: 'GBP optimisation',
    price: '£100',
    tagline: 'One-off add-on to any website',
    desc: 'Get into the Map Pack — the top 3 local results. Done once.',
    items: [
      'Categories + keywords set up',
      'Service areas configured',
      'Photos + description',
      'Done once, works forever',
    ],
    featured: false,
  },
];

const steps = [
  {
    n: '01',
    head: 'Free audit — 10 minutes.',
    body: "We check where you rank, what your competitors are doing, and exactly what's stopping you getting calls. No obligation. The report is yours either way.",
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
    a: "Yes — and for most sole traders, a one-page site is exactly what you need. One page from £250 covers everything: services, contact, area info, click-to-call. Add GBP optimisation for £100 and you're showing up on Maps too.",
  },
  {
    q: 'Where do you work?',
    a: 'We work across Bath and North East Somerset, Somerset, and Wiltshire — including Bath, Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford, Trowbridge and surrounding villages. Find your area at our areas page.',
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
    a: 'Yes. We set up UK hosting as part of every build. The first 6 months are free, then £50/year.',
  },
  {
    q: 'What add-ons are available?',
    a: 'Once your site is live: GBP optimisation (£100 one-off), ongoing local SEO (from £150/month). Everything is optional — no bundles, no lock-in.',
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function WebDesign() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      {/* Keyword H1 for crawlers; visible hero headline stays conversion-first as H2 (same pattern as homepage) */}
      <h1 className="sr-only">Web Design in Bath, Bristol & Somerset — Websites from £250</h1>
      <ServicePageHero
        titleTag="h2"
        badge="Website Design for Trades"
        title="Someone just searched for"
        highlight="your trade."
        description="Did they find you — or your competitor? We build fast, local websites for tradespeople. From £250. Live in 2 weeks."
        features={heroFeatures}
        ctaText="Get a free quote"
        ctaSecondary="Call Us Today"
        onGetQuote={() => setModalOpen(true)}
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Web Design' }]}
        rightPanel={
          <div className="bg-dark-card border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-4">
              Google Maps · &ldquo;cleaning midsomer norton&rdquo;
            </p>
            <div className="space-y-3 mb-6">
              {[
                { name: 'Peachy Cleans — 4.9★ (38 reviews)', highlight: true },
                { name: 'Commercial Cleaning Somerset Ltd', highlight: false },
                { name: 'Mac with a Vac', highlight: false },
              ].map((r, i) => (
                <div
                  key={r.name}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl ${
                    r.highlight
                      ? 'bg-primary/10 border border-primary/20'
                      : 'bg-white/[0.02] border border-white/5'
                  }`}
                >
                  <span className={`text-xs font-bold w-5 text-center shrink-0 ${r.highlight ? 'text-primary-light' : 'text-gray-700'}`}>
                    {i + 1}
                  </span>
                  <span className={`text-sm ${r.highlight ? 'text-white' : 'text-gray-600'}`}>
                    {r.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-3">
              Our work
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Starting price', value: '£250' },
                { label: 'Turnaround', value: '2 weeks' },
                { label: 'Experience', value: '22 yrs' },
                { label: 'No contracts', value: '✓' },
              ].map(({ label, value }) => (
                <div key={label} className="p-3 bg-white/5 rounded-xl text-center">
                  <div className="text-lg font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ── RESULTS BAR ──────────────────────────── */}
      <section className="py-12 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {results.map((item) => (
              <Link key={item.slug} href={`/case-studies/${item.slug}`} className="group">
                <div className="text-4xl font-bold gradient-text mb-1 group-hover:opacity-80 transition-opacity">
                  {item.metric}
                </div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-sm text-gray-500 mt-1">{item.detail}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">What's included</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight max-w-2xl">
            Everything under Web Design
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
            The core build, plus every add-on — pricing, redesigns, Google Business Profile and hosting all live here.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-primary/30 hover:bg-white/5 transition-all"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{service.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.description}</p>
                <span className="text-primary text-xs font-semibold">{service.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Every build includes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              No extras. No surprises.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every site we build — at every price point — ships with all of this.
              Nothing is stripped out to hit the starting price.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 bg-dark-card border border-white/5 rounded-xl"
              >
                <span className="text-primary-light mt-0.5 shrink-0">→</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────── */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Simple pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              What You Pay — No Lock-in
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Pay for what you need. No monthly retainers, no contracts on website builds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-6 flex flex-col ${
                  p.featured
                    ? 'border-primary/50 bg-primary/5 ring-1 ring-primary/20'
                    : 'border-white/10 bg-dark-card'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-white text-xs font-semibold rounded-full">
                    Most popular
                  </span>
                )}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{p.tagline}</p>
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">{p.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-5">{p.desc}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg
                        className="w-4 h-4 text-green-400 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setModalOpen(true)}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    p.featured
                      ? 'bg-primary hover:bg-primary-light text-dark btn-glow'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                  }`}
                >
                  Get a quote
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            All prices include VAT. 6 months free hosting included, then £50/year. No contracts on website builds.
          </p>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Three steps. No drama.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="text-7xl font-bold text-white/5 mb-6 leading-none select-none">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.head}</h3>
                <p className="text-gray-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ───────────────────────────── */}
      <section className="py-24 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
                Case study
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                From nothing to #1 in the Map Pack.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Peachy Cleans had no website and no Google presence. We built the site,
                optimised the Google Business Profile, and within days they were ranking
                in the Map Pack for &ldquo;cleaning Midsomer Norton.&rdquo; They&apos;re still there.
              </p>
              <Link
                href="/case-studies/peachy-cleans"
                className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors font-semibold"
              >
                Read the full case study →
              </Link>
            </div>

            <div className="bg-dark-card border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6">
                <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-4">
                  Google Maps · &ldquo;cleaning midsomer norton&rdquo;
                </p>
                <div className="space-y-3">
                  {[
                    { name: 'Peachy Cleans — 4.9★ (38 reviews)', highlight: true },
                    { name: 'Commercial Cleaning Somerset Ltd', highlight: false },
                    { name: 'Mac with a Vac', highlight: false },
                  ].map((r, i) => (
                    <div
                      key={r.name}
                      className={`flex items-center gap-3 py-3 px-4 rounded-xl ${
                        r.highlight
                          ? 'bg-primary/10 border border-primary/20'
                          : 'bg-white/[0.02] border border-white/5'
                      }`}
                    >
                      <span
                        className={`text-xs font-bold w-5 text-center shrink-0 ${
                          r.highlight ? 'text-primary-light' : 'text-gray-700'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className={`text-sm ${r.highlight ? 'text-white' : 'text-gray-600'}`}>
                        {r.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────── */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-4">
            Areas covered
          </p>
          <p className="text-gray-400 text-sm mb-4">
            We cover Bath &amp; North East Somerset, Somerset, and Wiltshire. Find your area for local pricing and examples.
          </p>
          <Link
            href="/website-designer-near-me"
            className="text-xs px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-light hover:bg-primary/20 transition-colors"
          >
            Find your area →
          </Link>
        </div>
      </section>

      {/* ── ROI CALCULATOR CTA ───────────────────── */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-2">
                Free tool
              </p>
              <h3 className="text-white font-semibold text-base mb-1">
                Not sure if a website is worth it?
              </h3>
              <p className="text-gray-400 text-sm">
                Try our free ROI Calculator — find out exactly how many jobs it takes to pay for itself.
              </p>
            </div>
            <Link
              href="/website-roi-calculator"
              className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
            >
              Try the ROI Calculator
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BY TRADE ─────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">By trade</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">Web design for your trade</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Every trade needs different pages and content. See what's included for yours.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {trades.map((trade) => (
              <Link
                key={trade.slug}
                href={`/web-design-for/${trade.slug}`}
                className="flex items-center justify-between p-3 bg-dark-card border border-white/[0.06] rounded-xl hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-200 group"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{trade.name}</span>
                <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
              Common questions.
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <CTABanner onGetQuote={() => setModalOpen(true)} />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
