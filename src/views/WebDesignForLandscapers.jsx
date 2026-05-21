'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const features = [
  'Before & after gallery front and centre — landscaping is visual, your work should sell itself',
  'Dedicated service pages: garden design, driveways, patios, fencing, turfing, tree work',
  'Seasonal content sections — spring planting, summer maintenance, autumn clearances, winter groundwork',
  'Prominent click-to-call and quote-request forms on every page',
  'Service area pages for every town you cover in Bath & North East Somerset',
  'Google Business Profile optimised for landscaping and garden design categories',
  'Review integration — show your Google and Checkatrade/Houzz ratings',
  'Photo-optimised design — fast-loading galleries that don\'t kill mobile performance',
];

const recommendedPages = [
  { page: 'Home', detail: 'Hero gallery, service summary, before/after showcase, click-to-call and reviews' },
  { page: 'Garden design', detail: 'High-value service — process, portfolio and consultation call-to-action' },
  { page: 'Driveways & patios', detail: 'Most-searched hard landscaping terms — needs its own page to rank' },
  { page: 'Fencing & boundaries', detail: 'High search volume, especially after winter storm damage' },
  { page: 'Turfing & lawns', detail: 'Seasonal demand spike — dedicated page captures spring/autumn searches' },
  { page: 'Gallery', detail: 'Before & after photos organised by service type — your strongest sales tool' },
  { page: 'Service areas', detail: 'One page per town you cover, targeting postcode searches' },
  { page: 'About', detail: 'Qualifications, insurance, years experience, team photos — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my landscaping business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches "landscaper near me". Your website is where they go to see your portfolio, check your qualifications and decide whether to request a quote. A profile without a website loses jobs to landscapers who have one. A website without a GBP is invisible on Maps. We set up and optimise both.',
  },
  {
    q: 'Why is a before and after gallery so important for landscapers?',
    a: 'Because landscaping is visual. No one hires a landscaper based on text alone — they want to see what you can do. A strong before/after gallery is your single most powerful sales tool. We build fast-loading, mobile-optimised galleries that showcase your best work without slowing down your site. Prospects who see great transformations on your site are far more likely to pick up the phone than those who just read a list of services.',
  },
  {
    q: 'Should I have separate pages for driveways, patios and fencing?',
    a: 'Yes. Each of these is a distinct search term — "driveway installer Bath", "patio builder Keynsham", "fencing contractor Radstock". A single "services" page can\'t rank for all of them effectively. Individual service pages let you target each keyword, answer specific questions, and show relevant portfolio photos. They also give Google clear signals about what you do, which improves rankings across the board.',
  },
  {
    q: 'How do seasonal services affect my website?',
    a: 'Landscaping search demand is highly seasonal — lawn turfing peaks in spring and autumn, fencing repairs spike after winter storms, garden design enquiries rise in late winter. We structure your site so each service page targets the right seasonal keywords, and we can add time-sensitive content blocks (e.g. "Spring planting — book now for April installations") that keep your site relevant year-round. This keeps you ranking even in quieter months.',
  },
  {
    q: 'How many pages does a landscaper website need?',
    a: 'A minimum of 5–7 for a solid local ranking: home, 2–3 service pages (garden design, driveways & patios, fencing at minimum), a gallery page, an about page, and a contact page. Service area pages — one per town you cover — add significant ranking power over time. We\'ll discuss the right structure for your business during the free audit.',
  },
  {
    q: 'Can you help me rank for landscaper searches in Bath?',
    a: 'Yes. Landscaping is competitive in Bath, especially for garden design, but most landscapers ranking well have a properly structured website with dedicated service pages and a well-optimised Google Business Profile — that\'s the bar. We set up both together so the signals reinforce each other. Results for competitive terms like "garden design Bath" typically take 3–6 months. Less competitive areas like Keynsham or Radstock rank faster.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/landscapers',
      url: 'https://seo-kings.co.uk/web-design-for/landscapers',
      name: 'Web Design for Landscapers | SEO Kings',
      description: 'Websites for landscapers in Bath & Somerset. Fast, mobile-first, built to rank for local search. Before/after galleries, dedicated service pages, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Landscapers' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/landscapers/#service',
      name: 'Web Design for Landscapers',
      description: 'Website design for landscaping businesses in Bath and North East Somerset. Fast, mobile-first sites with before/after galleries, dedicated service pages, and Google Business Profile optimisation.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
      ],
      offers: {
        '@type': 'Offer',
        price: '399',
        priceCurrency: 'GBP',
        description: 'Landscaper website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/landscapers',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Somerset',
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

const WebDesignForLandscapers = () => {
  return (
    <>
      <SEO
        title="Web Design for Landscapers Bath & Somerset | From £399"
        description="Websites for landscapers in Bath & Somerset. Fast, mobile-first, built for local search. Before/after galleries, service pages, Google Business Profile included. From £399."
        canonical="/web-design-for/landscapers"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Landscapers' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Web design for trades · Landscapers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span style={{ color: '#E8715A' }}>Landscapers</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Landscaping is visual. Your customers want to see your work before they call — driveways you've laid, gardens you've designed, patios you've built. If your website doesn't showcase it, they'll find a landscaper whose website does. A fast, mobile-friendly site with a strong gallery and clear service pages is what turns browsers into enquiries.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for landscapers in Bath, Keynsham, Midsomer Norton and across North East Somerset — with before/after galleries, dedicated service pages for garden design, driveways, patios and fencing, and Google Business Profile optimisation as standard. From £399.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200" style={{ backgroundColor: '#C25245' }}>
                Get a Free Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+447702264921" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/10 hover:border-white/20 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                07702 264 921
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['From £399', 'Before/after gallery included', 'Seasonal service pages', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why landscaper sites fail */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>The problem</p>
            <h2 className="text-3xl font-bold text-white mb-6">Why most landscaper websites don't generate enquiries</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The majority of landscaper websites are either built on cheap templates with no portfolio section, or they're one-page sites that list "garden design, driveways, patios, fencing" in a single paragraph and rank for none of them. Neither approach works for local searches.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches "driveway installer Bath" or "garden design Keynsham", Google looks for a page specifically about that service in that area — not a homepage that mentions it once. Dedicated service pages, each with relevant photos and clear calls to action, are what get into the Map Pack and the top organic results.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond search, landscaping is a visual business. Customers want to see before and after photos, not just read a list of services. A professional site with a strong gallery communicates quality instantly. A generic template with a few stock images doesn't — and it loses enquiries to a competitor whose work is genuinely on display.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>What's included</p>
              <h2 className="text-3xl font-bold text-white mb-6">Built specifically for landscaping businesses</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a landscaper is designed around how landscaping customers actually search — visual first, service second, trust throughout. Not a generic template with your logo dropped in.
              </p>
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Recommended site structure</p>
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
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Pricing</p>
            <h2 className="text-3xl font-bold text-white mb-6">Straightforward pricing, no surprises</h2>
            <div className="space-y-4 mb-8">
              {[
                { name: 'Starter', desc: '1-page site — home, services summary, contact', price: 'From £399' },
                { name: 'Professional', desc: '3-page site — home, 1 service page with gallery, contact', price: 'From £599' },
                { name: 'Full', desc: '5+ pages — home, service pages, gallery, service areas, about', price: 'From £999' },
              ].map((pkg) => (
                <div key={pkg.name} className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0">
                  <div>
                    <div className="text-white font-semibold text-sm">{pkg.name}</div>
                    <div className="text-gray-500 text-xs">{pkg.desc}</div>
                  </div>
                  <div className="font-bold shrink-0 ml-4" style={{ color: '#E8715A' }}>{pkg.price}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-6">All packages include Google Business Profile set-up and optimisation. No hidden fees. No lock-in contracts.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200" style={{ backgroundColor: '#C25245' }}>
              Get a Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Local knowledge</p>
            <h2 className="text-3xl font-bold text-white mb-6">We know the Bath & Somerset landscaping market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has a large stock of Georgian and Victorian properties with established gardens, stone walls and period features that require specialist knowledge. Landscapers who can work on period gardens and communicate that clearly online have a genuine advantage in BA1 and BA2. Garden design searches are particularly strong in Bath, driven by the city's high property values and established homeowner market.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham, Midsomer Norton, Radstock and the surrounding villages have a different mix — more new-build developments needing groundwork and initial landscaping, plus established suburban gardens needing driveways, patios and fencing replacements. Online competition for "driveway installer" and "fencing contractor" in these areas is lower than in Bath, meaning a well-optimised site can reach the Map Pack faster.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We're based in Keynsham and build sites for trades across the whole area. We know which searches convert in each postcode and build every site to target them specifically — not just drop your name into a national template.
            </p>
            <address className="not-italic text-sm text-gray-400 leading-relaxed border-l-2 pl-4" style={{ borderColor: '#E8715A' }}>
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
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>FAQs</p>
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about landscaper websites</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>Related services</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Landscapers</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for landscaping searches in your area</div>
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

export default WebDesignForLandscapers;