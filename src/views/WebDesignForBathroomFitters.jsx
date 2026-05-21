'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const features = [
  'Project gallery with before/after photos — the single most important conversion tool for bathroom fitters',
  'Dedicated service pages: bathroom fitting, wet rooms, tiling, underfloor heating',
  'Listed buildings page targeting conservation area searches in Bath',
  'Prominent click-to-call on every page — bathroom enquiries often come from mobile during evening browsing',
  'Review integration — show your Google and Checkatrade/Houzz ratings',
  'Google Business Profile optimised for bathroom installation categories',
  'Service area pages for every town you cover',
  'Visual-first design that lets your work speak for itself — large images, minimal clutter',
];

const recommendedPages = [
  { page: 'Home', detail: 'Hero gallery hook, click-to-call, service summary and reviews' },
  { page: 'Bathroom fitting', detail: 'Core service — process, timelines, gallery and testimonials' },
  { page: 'Wet rooms', detail: 'Growing search volume — needs its own page to rank' },
  { page: 'Tiling', detail: 'High-visual service — gallery-heavy page showing range of work' },
  { page: 'Underfloor heating', detail: 'Higher-value add-on — cross-sells from other service pages' },
  { page: 'Listed buildings', detail: 'Targets conservation area and period property searches in Bath' },
  { page: 'Bath area page', detail: 'Local authority knowledge, listed building compliance, conservation areas' },
  { page: 'About', detail: 'Qualifications, years experience, team photo — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my bathroom fitting business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches "bathroom fitter near me". Your website is where they go to see your previous work, read reviews and decide whether to get in touch. A profile without a website loses enquiries to bathroom fitters who have one. A website without a GBP is invisible on Maps. We set up and optimise both.',
  },
  {
    q: 'Should I have a project gallery with before/after photos?',
    a: 'Absolutely. Before/after photos are the single most powerful conversion tool for bathroom fitters. Customers want to see what you can do — the quality of your tiling, the finish of your installations, how you handle awkward spaces. A well-organised gallery with captions (town name, type of job, brief description) also helps with local SEO. We build before/after galleries into every bathroom fitter site as standard.',
  },
  {
    q: 'Do I need a separate page for listed buildings?',
    a: 'If you work in or around Bath, yes. Bath has one of the highest concentrations of listed buildings in the UK, and homeowners searching for "bathroom fitter listed building Bath" or "bathroom renovation conservation area" want to know you understand the restrictions. A dedicated page covering listed building consent, conservation area compliance and your experience with period properties will rank for those searches and build trust immediately.',
  },
  {
    q: 'How many pages does a bathroom fitter website need?',
    a: 'A minimum of 5–7 for a solid local ranking: home, 2–4 service pages (bathroom fitting at minimum, plus wet rooms or tiling depending on your specialisms), a listed buildings page if you cover Bath, an about page and a contact page. Service area pages — one per town you cover — add significant ranking power over time. We\'ll discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my bathroom fitter website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process straightforward — we handle the design, build and SEO setup. We just need your services, areas covered, qualifications and any photos you have. We can write the copy for you too. The more before/after photos you can provide, the better the result.',
  },
  {
    q: 'Can you help me rank for bathroom fitter searches in Bath?',
    a: 'Yes. "Bathroom fitter Bath" is competitive, but most businesses ranking for it have a properly structured website and a well-optimised Google Business Profile — that\'s the bar. We set up both together so the signals reinforce each other. A listed buildings page adds a powerful differentiator in Bath. Results for competitive terms like "bathroom fitter Bath" typically take 3–6 months. Less competitive areas like Keynsham or Midsomer Norton rank faster.',
  },
  {
    q: 'Should I have separate pages for wet rooms and underfloor heating?',
    a: 'Yes. Wet rooms and underfloor heating are both high-value services with their own search terms — "wet room installation Bath", "underfloor heating bathroom Somerset". A single services page can\'t rank well for all of them. Dedicated pages let you target each search term, show relevant gallery images and cross-sell between services. We build these as standard on our full packages.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/bathroom-fitters',
      url: 'https://seo-kings.co.uk/web-design-for/bathroom-fitters',
      name: 'Web Design for Bathroom Fitters | SEO Kings',
      description: 'Websites for bathroom fitters in Bath & Somerset. Fast, mobile-first, built to rank for local search. Project galleries, before/after photos, dedicated service pages, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Bathroom Fitters' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/bathroom-fitters/#service',
      name: 'Web Design for Bathroom Fitters',
      description: 'Website design for bathroom fitting businesses in Bath and North East Somerset. Fast, mobile-first sites with project galleries, before/after photos, dedicated service pages, and Google Business Profile optimisation.',
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
        description: 'Bathroom fitter website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/bathroom-fitters',
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

const WebDesignForBathroomFitters = () => {
  return (
    <>
      <SEO
        title="Web Design for Bathroom Fitters Bath & Somerset | From £399"
        description="Websites for bathroom fitters in Bath & Somerset. Fast, mobile-first, built for local search. Project galleries, before/after photos, service pages, Google Business Profile included. From £399."
        canonical="/web-design-for/bathroom-fitters"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Bathroom Fitters' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Web design for trades · Bathroom Fitters
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span style={{ color: '#E8715A' }}>Bathroom Fitters</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Bathroom fitting is a visual business — customers choose you based on what they can see. If your website doesn't showcase your work with clear before/after photos, organised galleries and service pages that rank for the right searches, you're losing enquiries to fitters who do.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for bathroom fitters in Bath, Keynsham, Midsomer Norton and across North East Somerset — with project galleries, dedicated service pages for wet rooms, tiling and underfloor heating, and Google Business Profile optimisation as standard. From £399.
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
              {['From £399', 'Before/after gallery included', 'Listed buildings page as standard', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why bathroom fitter sites fail */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>The problem</p>
            <h2 className="text-3xl font-bold text-white mb-6">Why most bathroom fitter websites don't generate enquiries</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The majority of bathroom fitter websites fall into two camps: either they're generic templates with no real portfolio, or they're image-heavy with no structure for search engines to understand. Neither approach works.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches "bathroom fitter Bath" or "wet room installation Keynsham", Google's algorithm looks for pages that are specifically about those services in those locations — not a homepage that mentions everything once. Dedicated service pages with relevant galleries are what get into the Map Pack and the top organic results.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond search, bathroom fitting is a visual and trust business. Customers want to see before/after photos, read about your experience with their type of property, and know you understand local requirements like listed building consent in Bath. A professional site that communicates all of this clearly converts enquiries that a generic template loses.
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
              <h2 className="text-3xl font-bold text-white mb-6">Built specifically for bathroom fitting businesses</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a bathroom fitter is designed around how bathroom customers actually search — visual proof first, service detail second, trust throughout. Not a generic template with your logo dropped in.
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
                { name: 'Full', desc: '5+ pages — home, service pages, listed buildings, service areas, about', price: 'From £999' },
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
            <h2 className="text-3xl font-bold text-white mb-6">We know the Bath & Somerset bathroom fitting market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has one of the highest concentrations of listed buildings and conservation areas in the UK. Period properties in BA1 and BA2 — Georgian townhouses with small bathrooms, Victorian terraces with awkward ensuites — require a bathroom fitter who understands listed building consent and conservation area restrictions. Fitters who communicate that experience clearly online have a genuine advantage. A dedicated listed buildings page targeting those searches can make the difference between being found and being invisible.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath's Georgian ensuites and small bathrooms are a specific niche — homeowners searching for "small bathroom design Bath" or "Georgian ensuite conversion" want to see you've done this before. Gallery images captioned with property type and area build both trust and local SEO signals.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham, Midsomer Norton and Radstock have a different mix — more modern housing estates, growing new-build developments, and lower online competition than the city. A well-optimised site and Google Business Profile in these areas can reach the Map Pack faster than the same work would take in central Bath.
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
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about bathroom fitter websites</h2>
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
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Bathroom Fitters</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for bathroom fitting searches in your area</div>
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

export default WebDesignForBathroomFitters;