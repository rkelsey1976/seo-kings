'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const features = [
  'Prominent click-to-call on every page — storm damage and emergency calls happen on mobile',
  'Before/after photo gallery showcasing flat roofs, pitched roofs, guttering and leadwork',
  'Dedicated service pages: flat roofing, pitched roofing, guttering & fascias, leadwork, emergency repairs',
  'Emergency roofer landing page targeting "emergency roofer [town]" searches',
  'Insurance work page — targets homeowners claiming for storm or weather damage',
  'Google Business Profile optimised for roofing categories',
  'Service area pages for every town you cover',
  'Review integration — show your Google and Trustatrader ratings',
];

const recommendedPages = [
  { page: 'Home', detail: 'Emergency hook, click-to-call, service summary and before/after gallery' },
  { page: 'Emergency roofer', detail: 'Fast-loading, urgent tone, prominent phone number' },
  { page: 'Flat roofing', detail: 'High search volume — felt, rubber, fibreglass systems need their own page' },
  { page: 'Pitched roofing', detail: 'Tile and slate work — gallery of completed re-roofs and repairs' },
  { page: 'Guttering & fascias', detail: 'Regular maintenance work — separate page ranks faster than a services summary' },
  { page: 'Insurance work', detail: 'Targets storm damage and insurance claim searches — recurring revenue' },
  { page: 'Service areas', detail: 'One page per town you cover, targeting postcode searches' },
  { page: 'About', detail: 'Accreditations, years experience, team photo — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my roofing business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches "roofer near me". Your website is where they go to check your accreditations, view before/after photos and decide whether to call. A profile without a website loses jobs to roofers who have one. A website without a GBP is invisible on Maps. We set up and optimise both.',
  },
  {
    q: 'Should I have a separate page for emergency roofing?',
    a: 'Yes. Emergency roofing searches ("emergency roofer Bath", "storm damage roofer Keynsham") are some of the highest-converting local searches — someone has water coming through their ceiling right now and will call the first credible result they find. A dedicated emergency page, fast to load and clear to read on mobile, targets those searches directly. Your homepage can\'t rank for both "flat roofing Bath" and "emergency roofer Bath" equally well.',
  },
  {
    q: 'Do before/after photos really make a difference on a roofer website?',
    a: 'Absolutely. Roofing is one of the most visual trades — customers want to see the quality of your work before they let you on their roof. Before/after galleries of flat roof replacements, re-roofs, guttering installations and leadwork prove your capability in a way that text alone can\'t. We build dedicated gallery sections and service-page galleries that load fast on mobile and display beautifully on desktop.',
  },
  {
    q: 'How many pages does a roofer website need?',
    a: 'A minimum of 4–6 for a solid local ranking: home, 2–3 service pages (including emergency and flat roofing at minimum), an about page, and a contact page. Service area pages — one per town you cover — add significant ranking power over time. An insurance work page is also valuable if you take on storm damage jobs. We\'ll discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my roofer website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process straightforward — we handle the design, build and SEO setup. We just need your services, areas covered, accreditations and any before/after photos you have. We can write the copy for you too.',
  },
  {
    q: 'Can you help me rank for emergency roofer searches in Bath?',
    a: 'Yes. Emergency roofer searches are competitive in Bath, but most roofers ranking for them have a properly structured website and a well-optimised Google Business Profile — that\'s the bar. We set up both together so the signals reinforce each other. Results for competitive terms like "emergency roofer Bath" typically take 3–6 months. Less competitive areas like Keynsham or Radstock rank faster.',
  },
  {
    q: 'Should I have a page for insurance work on my website?',
    a: 'Yes, if you carry out insurance work. Storm damage and weather-related roof repairs generate significant search volume, especially during autumn and winter. A dedicated insurance work page targeting searches like "storm damage roofer Bath" or "insurance roof repair Keynsham" captures that demand directly. It also reassures homeowners that you understand the claims process and can work with loss adjusters.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/roofers',
      url: 'https://seo-kings.co.uk/web-design-for/roofers',
      name: 'Web Design for Roofers | SEO Kings',
      description: 'Websites for roofers in Bath & Somerset. Fast, mobile-first, built to rank for emergency and local search. Before/after galleries, dedicated service pages. From £250. Add GBP optimisation for £100.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/roofers/#service',
      name: 'Web Design for Roofers',
      description: 'Website design for roofing businesses in Bath and North East Somerset. Fast, mobile-first sites with before/after galleries, dedicated emergency and service pages, and Google Business Profile optimisation.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
      ],
      offers: {
        '@type': 'Offer',
        price: '250',
        priceCurrency: 'GBP',
        description: 'Roofer website from £250 — GBP optimisation available as a £100 add-on',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/roofers',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Bath and North East Somerset',
        postalCode: 'BS31 2DW',
        addressCountry: 'GB',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

const WebDesignForRoofers = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
              Web design for trades · Roofers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span className="text-primary">Roofers</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Most roofing leads come from emergency searches and local word-of-mouth that now starts online. A storm at 2am, tiles blown off in high winds, water coming through the ceiling. The customer is on their phone and they'll call the first roofer they can find who looks trustworthy and is clearly available. If your website isn't fast, mobile-friendly and prominent in local search, those calls go to someone else.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for roofers in Bath, Keynsham, Midsomer Norton and across North East Somerset — with before/after galleries, dedicated emergency pages, insurance work pages, from £250. Add GBP optimisation for £100.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark">
                Get a Free Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+447702264921" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/10 hover:border-white/20 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                07702 264 921
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['From £250', 'Before/after gallery included', 'Emergency page as standard', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why roofer sites fail */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">The problem</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Why most roofer websites don't generate calls</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The majority of roofer websites are either built on cheap templates that load slowly on mobile, or they're one-page sites that try to rank for every keyword at once and rank for none. Neither approach works for emergency searches.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches "emergency roofer Bath" after a storm, Google's algorithm looks for a page that's specifically about emergency roofing in Bath — not a homepage that mentions it once. A dedicated emergency page, fast to load on mobile, is what gets into the Map Pack and the top organic results for those searches.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond emergencies, roofing is a trust and visual business. Customers want to see photos of your work before they let you near their roof. They want to see your accreditations and know you understand the difference between flat and pitched roofs. They want to know you handle insurance claims. A professional site that communicates all of this clearly converts enquiries that a generic template loses.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag className="mb-4">What's included</SectionTag>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Built specifically for roofing businesses</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a roofer is designed around how roofing customers actually search — emergency first, service second, trust and proof of work throughout. Not a generic template with your logo dropped in.
              </p>
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <SectionTag className="mb-4">Recommended site structure</SectionTag>
              <p className="text-sm text-gray-400 mb-6">Pages that give you the best chance of ranking for every service you offer — not just one catch-all services page.</p>
              <ul className="space-y-4">
                {recommendedPages.map((item) => (
                  <li key={item.page} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                    <div className="text-white font-semibold text-sm mb-1">{item.page}</div>
                    <div className="text-gray-500 text-xs">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag className="mb-4">Pricing</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Straightforward pricing, no surprises</h2>
            <div className="space-y-4 mb-8">
              {[
                { name: 'Starter', desc: '1-page site — home, services summary, contact', price: 'From £250' },
                { name: 'Professional', desc: '3-page site — home, 1 service page, contact', price: 'From £350' },
                { name: 'Full', desc: '5+ pages — home, emergency, service pages, service areas, about', price: 'From £450' },
              ].map((pkg) => (
                <div key={pkg.name} className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0">
                  <div>
                    <div className="text-white font-semibold text-sm">{pkg.name}</div>
                    <div className="text-gray-500 text-xs">{pkg.desc}</div>
                  </div>
                  <div className="font-bold shrink-0 ml-4 text-primary">{pkg.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="text-white font-semibold text-sm">Hosting and maintenance</div>
                  <div className="text-gray-500 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £50/year</div>
                </div>
                <div className="font-bold shrink-0 ml-4 text-primary">6 months free</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6">GBP optimisation available as a £100 add-on. Hosting free for 6 months, then £50/year. No lock-in contracts.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark">
              Get a Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">Local knowledge</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Bath & Somerset roofing market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has one of the largest stocks of period properties in the country — Georgian and Victorian homes with complex pitched roofs, original slate and clay tiles, lead flashings and parapet gutters that require specialist knowledge. Roofers who can work on period properties and communicate that clearly online have a genuine advantage in BA1 and BA2. Insurance work searches spike every winter when storms hit the Somerset hills.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham, Midsomer Norton and Radstock have a different mix — more post-war housing with concrete tile roofs, growing new-build developments with flat roof extensions, and lower online competition than the city. A well-optimised site and Google Business Profile in these areas can reach the Map Pack faster than the same work would take in central Bath.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We're based in Keynsham and build sites for trades across the whole area. We know which searches convert in each postcode and build every site to target them specifically — not just drop your name into a national template.
            </p>
            <address className="not-italic text-sm text-gray-400 leading-relaxed border-l-2 pl-4 border-primary">
              SEO Kings<br />
              16a Culvers Road<br />
              Keynsham, Somerset<br />
              BS31 2DW<br />
              <a href="tel:+447702264921" className="hover:text-white transition-colors">07702 264 921</a>
            </address>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about roofer websites</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Related services</SectionTag>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Roofers</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for roofing searches in your area</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default WebDesignForRoofers;