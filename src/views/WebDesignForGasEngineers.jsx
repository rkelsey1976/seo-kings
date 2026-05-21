'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const features = [
  'Gas Safe registration number and badge displayed prominently on every page',
  'Dedicated emergency gas engineer landing page targeting urgent local searches',
  'Boiler repair and boiler installation service pages — the highest-volume gas engineer searches',
  'Landlord gas safety certificate page with recurring booking form',
  'Click-to-call on every page — gas emergencies happen on mobile at any hour',
  '24/7 availability messaging built into the design where applicable',
  'Google Business Profile optimised for gas engineer and boiler installer categories',
  'Service area pages for every town you cover — targeting postcode-based searches',
];

const recommendedPages = [
  { page: 'Home', detail: 'Gas Safe badge, click-to-call, service summary and reviews' },
  { page: 'Emergency gas engineer', detail: 'Fast-loading, urgent tone, prominent phone number and availability' },
  { page: 'Boiler repair & servicing', detail: 'Highest search volume for gas engineers — needs its own dedicated page' },
  { page: 'Boiler installation', detail: 'Higher-value work — gallery, process content and manufacturer badges' },
  { page: 'Landlord gas safety certificates', detail: 'Annual recurring revenue — targets landlord and letting agent searches' },
  { page: 'Gas Safe registration', detail: 'Trust page — registration details, qualifications, coverage areas' },
  { page: 'Service areas', detail: 'One page per town you cover, targeting postcode searches' },
  { page: 'About', detail: 'Gas Safe number, years experience, team photo — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my gas engineering business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches for a gas engineer near them. Your website is where they go to verify your Gas Safe registration, check your qualifications and decide whether to call. A profile without a website loses jobs to engineers who have one. A website without a Google Business Profile is invisible on Maps. We set up and optimise both.',
  },
  {
    q: 'Should I have a separate page for emergency gas engineer calls?',
    a: 'Yes. Emergency gas engineer searches such as "gas engineer Bath" or "emergency gas safe engineer Keynsham" are high-converting local searches — someone has a gas problem right now and will call the first credible result they find. A dedicated emergency page, fast to load and clear to read on mobile, targets those searches directly. Your homepage cannot rank for both "boiler installation Bath" and "emergency gas engineer Bath" equally well.',
  },
  {
    q: 'Do I need to display my Gas Safe registration on my website?',
    a: 'Absolutely. Anyone hiring a gas engineer will look for your Gas Safe number before they call — it is both a legal requirement and the single most important trust signal in your industry. Your Gas Safe number and badge should appear on every page, ideally in the footer and prominently on any gas-related service pages. We build this in as standard.',
  },
  {
    q: 'How many pages does a gas engineer website need?',
    a: 'A minimum of 5–7 for a solid local ranking: home, 2–3 service pages including emergency and boiler repair at minimum, a Gas Safe registration page, an about page and a contact page. Service area pages — one per town you cover — add significant ranking power over time. We will discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my gas engineer website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We handle the design, build and SEO setup. We need your services, areas covered, Gas Safe number and any photos you have. We can write the copy for you too.',
  },
  {
    q: 'Can you help me rank for boiler repair searches in Bath?',
    a: 'Yes. Boiler repair is one of the most competitive gas engineer searches in Bath, but most engineers ranking for those terms have a properly structured website and a well-optimised Google Business Profile — that is the bar. We set up both together so the signals reinforce each other. Results for competitive terms like "boiler repair Bath" typically take 3–6 months. Less competitive areas like Keynsham or Radstock rank faster.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/gas-engineers',
      url: 'https://seo-kings.co.uk/web-design-for/gas-engineers',
      name: 'Web Design for Gas Engineers | SEO Kings',
      description: 'Websites for gas engineers in Bath & Somerset. Fast, mobile-first, built to rank for emergency and local search. Gas Safe badge display, dedicated service pages, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Gas Engineers' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/gas-engineers/#service',
      name: 'Web Design for Gas Engineers',
      description: 'Website design for gas engineering businesses in Bath and North East Somerset. Fast, mobile-first sites with Gas Safe badge display, dedicated emergency and boiler service pages, and Google Business Profile optimisation.',
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
        description: 'Gas engineer website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/gas-engineers',
      telephone: '+447****4921',
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

const WebDesignForGasEngineers = () => {
  return (
    <>
      <SEO
        title="Web Design for Gas Engineers Bath & Somerset | From £399"
        description="Websites for gas engineers in Bath & Somerset. Fast, mobile-first, built for emergency and local search. Gas Safe badge display, boiler service pages, Google Business Profile included. From £399."
        canonical="/web-design-for/gas-engineers"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Gas Engineers' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Web design for trades · Gas Engineers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span style={{ color: '#E8715A' }}>Gas Engineers</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              When a boiler breaks down on a cold January morning or someone smells gas at midnight, they reach for their phone and call the first Gas Safe registered engineer they can find. If your website does not make your Gas Safe badge, your services and your phone number immediately visible on mobile, that call goes to a competitor.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for gas engineers in Bath, Keynsham, Midsomer Norton and across North East Somerset — with Gas Safe badge display, dedicated emergency and boiler service pages, and Google Business Profile optimisation as standard. From £399.
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
              {['From £399', 'Gas Safe badge included', 'Emergency page as standard', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why gas engineer sites fail */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>The problem</p>
            <h2 className="text-3xl font-bold text-white mb-6">Why most gas engineer websites do not generate calls</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The majority of gas engineer websites are built on generic templates that bury the Gas Safe registration, load slowly on mobile, or try to cover every service on a single page. None of this works for how gas engineer customers actually search.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches for an emergency gas engineer, they are in an urgent situation. They need to see your Gas Safe badge, your phone number and your availability immediately. A slow, cluttered website with no obvious trust signals sends them straight back to the search results.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond emergencies, gas work is a trust business. Customers want to verify your Gas Safe registration before they let you near their boiler. They want to know you cover their area. They want reassurance from reviews. A professional site that communicates all of this clearly converts enquiries that a generic template loses.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>What is included</p>
              <h2 className="text-3xl font-bold text-white mb-6">Built specifically for gas engineering businesses</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a gas engineer is designed around how gas engineer customers actually search — Gas Safe trust first, emergency availability second, services and areas throughout. Not a generic template with your logo dropped in.
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
                { name: 'Professional', desc: '3-page site — home, 1 service page, contact', price: 'From £599' },
                { name: 'Full', desc: '5+ pages — home, emergency, boiler repair & install, service areas, about', price: 'From £999' },
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
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="text-white font-semibold text-sm">Hosting and maintenance</div>
                  <div className="text-gray-500 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £199/year</div>
                </div>
                <div className="font-bold shrink-0 ml-4" style={{ color: '#E8715A' }}>6 months free</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6">All packages include Google Business Profile set-up and optimisation. Hosting free for 6 months, then £199/year. No lock-in contracts.</p>
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
            <h2 className="text-3xl font-bold text-white mb-6">We know the Bath & Somerset gas engineering market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has a large stock of Georgian and Victorian properties with ageing heating systems and boilers that were not designed for modern demand. Gas engineers who can work on period properties and communicate that clearly online have a genuine advantage in BA1 and BA2. Landlord gas safety certificate searches are strong in Bath, driven by the city's large rental sector and student housing market.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham, Midsomer Norton and Radstock have a different mix — more modern housing estates, growing new-build developments, and lower online competition than the city. A well-optimised site and Google Business Profile in these areas can reach the Map Pack faster than the same effort in central Bath.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We are based in Keynsham and build sites for trades across the whole area. We know which gas engineer searches convert in each postcode and build every site to target them specifically — not just drop your name into a national template.
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
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>FAQs</p>
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about gas engineer websites</h2>
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
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Gas Engineers</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for gas engineer searches in your area</div>
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

export default WebDesignForGasEngineers;