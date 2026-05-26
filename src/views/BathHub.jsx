'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const heroFeatures = [
  'Websites from £250',
  'Local SEO from £150/month',
  '10 mins from Bath city centre',
  'Free audit — no obligation',
];

const results = [
  {
    business: 'New Decorating',
    location: 'Bath',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    slug: 'new-decorating',
  },
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    slug: 'peachy-cleans',
  },
];

const faqs = [
  {
    q: "What's the best starting point for a Bath business?",
    a: "For most trades, a website and Google Business Profile together give you the strongest foundation. A website signals legitimacy; GBP puts you on the map. Local SEO then builds on both. We'll tell you honestly in your free audit which to prioritise for your situation.",
  },
  {
    q: 'Do I need a website before I can do local SEO?',
    a: "Not strictly — a well-optimised Google Business Profile alone can win work. But a website makes every other signal stronger and gives you somewhere to send traffic. Most Bath clients do website and SEO together as one package, one monthly plan.",
  },
  {
    q: 'How competitive is Bath for local search?',
    a: "More competitive than the Somerset towns, but many Bath trades still have poorly optimised GBPs and slow websites — so there's real room to move. We've helped clients go from invisible to the map pack in Bath within a few months.",
  },
  {
    q: 'How long before I see results?',
    a: "GBP improvements can show within weeks. Ranking for competitive Bath keywords like 'plumber Bath' or 'electrician BA1' typically takes 3–6 months. We give you monthly reports so you see exactly what's moving.",
  },
  {
    q: 'What does it cost overall?',
    a: "Website design from £250. Local SEO from £150/month — includes GBP optimisation, on-page fixes, citations and monthly reporting. Free audit first, so you know exactly what you're getting and why before you commit to anything.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/areas/bath',
      url: 'https://seo-kings.co.uk/areas/bath',
      name: 'Website Design, Local SEO & GBP for Bath Businesses | SEO Kings',
      description: 'Web design, local SEO and Google Business Profile for trades and local businesses across Bath BA1 & BA2. Websites from £250, SEO from £150/month. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Bath' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Web design, local SEO and Google Business Profile agency serving Bath BA1 & BA2. Fast, mobile-first websites from £250 and local SEO from £150/month for trades and local businesses across Bath and North East Somerset.',
      url: 'https://seo-kings.co.uk/areas/bath',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Somerset',
        postalCode: 'BS31 2DW',
        addressCountry: 'GB',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 51.4145, longitude: -2.4965 },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
      ],
      priceRange: '££',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:30',
        },
      ],
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

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const BathHub = () => {
  return (
    <>
      <SEO
        title="Website Design, Local SEO & GBP for Bath Businesses | SEO Kings"
        description="Web design, local SEO and Google Business Profile for trades and local businesses across Bath BA1 & BA2. Websites from £250, SEO from £150/month. Free audit."
        canonical="/areas/bath"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Bath' },
        ]}
        schemas={[schema]}
      />

      {/* ── HERO ─────────────────────────────────── */}
      <ServicePageHero
        badge="Bath · BA1 &amp; BA2"
        title="Web Design &amp; SEO in"
        highlight="Bath"
        description="One team. Three services. All focused on getting your Bath business found on Google. Bath is competitive — but most trades here still have slow sites and poorly optimised GBPs. We fix that."
        features={heroFeatures}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* Services */}
      <section className="py-24 bg-dark-lighter border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">Our services in Bath</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Everything you need to get found in Bath
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              We keep it simple — three services, one team, clear monthly pricing. Most Bath clients combine website design and local SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Card 1 — Website Design */}
            <Link
              href="/website-designer-bath"
              className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">From £250</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">Website Design in Bath</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Fast, mobile-first websites for Bath trades and local businesses. Built to rank for your trade and area from day one. Live in under 2 weeks.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                See pricing & what&apos;s included
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Card 2 — Local SEO */}
            <Link
              href="/local-seo/bath"
              className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">From £150/month</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">Local SEO in Bath</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Ongoing Google Business Profile optimisation, on-page SEO and local citations to get you into the map pack for Bath trade searches.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                See packages & pricing
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Card 3 — Google Business Profile */}
            <Link
              href="/google-business-profile"
              className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">£100 one-off</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">Google Business Profile</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Full GBP setup and optimisation — categories, keywords, photos, services — so you appear in the map pack when Bath customers search for your trade.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                See what&apos;s included
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* Results */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Verified results</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Real results for local businesses</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-2xl font-bold mb-1 text-primary">{r.result}</div>
                <div className="text-xs text-gray-400 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-400 text-xs">{r.location}</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  View case study
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">What clients say</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Bath businesses we've helped</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <svg className="w-6 h-6 mb-4 opacity-40 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                "Brand new business, no website, no social media. SEO Kings built everything from scratch in under a week. I'm already getting calls from people finding me on Google in Bath. Couldn't ask for more."
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">Ross</div>
                <div className="text-gray-400 text-xs">Aurelian Massage · Bath City Centre</div>
              </div>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <svg className="w-6 h-6 mb-4 opacity-40 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area."
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">Jay</div>
                <div className="text-gray-400 text-xs">New Decorating · Bath &amp; BANES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local signals */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">Local knowledge</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Bath market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham — 10 minutes from Bath city centre. We work exclusively across Bath and North East Somerset. We know which searches drive enquiries in BA1 and BA2, which trade categories are most competitive in the map pack, and what it takes to move from invisible to page one.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We cover the whole of Bath — city centre and every neighbourhood. See our dedicated area pages below, or explore our{' '}
              <Link href="/website-designer-bath" className="text-primary-light hover:text-white transition-colors">website design Bath</Link>{' '}
              and{' '}
              <Link href="/local-seo/bath" className="text-primary-light hover:text-white transition-colors">local SEO Bath</Link>{' '}
              service pages.
            </p>
            <a
              href="tel:+447702264921"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07702 264 921
            </a>
          </div>
        </div>
      </section>

      {/* Bath Neighbourhoods */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Bath Neighbourhoods</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2 leading-tight tracking-tight">Bath areas we cover</h2>
          <p className="text-gray-400 mb-8">Website design and local SEO across every part of Bath — click your area for local information.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'Odd Down', slug: 'odd-down-bath' },
              { name: 'Combe Down', slug: 'combe-down-bath' },
              { name: 'Widcombe', slug: 'widcombe-bath' },
              { name: 'Larkhall', slug: 'larkhall-bath' },
              { name: 'Twerton', slug: 'twerton-bath' },
              { name: 'Weston', slug: 'weston-bath' },
              { name: 'Oldfield Park', slug: 'oldfield-park-bath' },
              { name: 'Bear Flat', slug: 'bear-flat-bath' },
              { name: 'Bathampton', slug: 'bathampton-bath' },
              { name: 'Bathwick', slug: 'bathwick-bath' },
              { name: 'Southdown', slug: 'southdown-bath' },
              { name: 'Batheaston', slug: 'batheaston-bath' },
              { name: 'Walcot', slug: 'walcot-bath' },
              { name: 'Bathford', slug: 'bathford-bath' },
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="flex items-center gap-2 p-3 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200 group"
              >
                <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about our Bath services</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default BathHub;
