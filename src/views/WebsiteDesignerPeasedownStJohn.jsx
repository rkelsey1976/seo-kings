'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import PricingModal from '../components/PricingModal';
import ServicePageHero from '../components/ServicePageHero';

const results = [
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    slug: 'peachy-cleans',
  },
  {
    business: 'New Decorating',
    location: 'Bath',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    slug: 'new-decorating',
  },
];

const included = [
  'Mobile-first design — fast on any device',
  'Built to rank for Peasedown St John, Radstock and south-Bath trade searches',
  'Google Business Profile set-up for BA2 — targets both Bath and Somer Valley customers',
  'Click-to-call and quote request form',
  'SSL, hosting guidance and launch support',
  'Live in under 2 weeks',
];

const faqs = [
  {
    q: 'How much does a website cost in Peasedown St John?',
    a: 'A one-page site starts at £250. Multi-page sites are £250 base + £50 per page — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our packages page for full pricing.',
  },
  {
    q: 'Do you work with businesses in Peasedown St John?',
    a: "Yes. We're based in Keynsham and work with businesses across Peasedown St John, Radstock, Bath and the surrounding BA2 and BA3 areas.",
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process simple and guide you through every step.',
  },
  {
    q: 'Will my website rank on Google for Peasedown St John searches?',
    a: "Yes — that's the point. Every site we build targets the local searches your customers actually use. We've put nearby businesses into the Google Map Pack and top organic results.",
  },
  {
    q: 'What trades do you work with in Peasedown St John?',
    a: 'Plumbers, electricians, builders, cleaners, painters — any trade that needs local customers in Peasedown St John, Radstock, Bath or the wider BA2 and BA3 postcodes.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-designer-peasedown-st-john',
      url: 'https://seo-kings.co.uk/website-designer-peasedown-st-john',
      name: 'Website Designer Peasedown St John | SEO Kings',
      description: 'Website designer serving Peasedown St John BA2. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Designer Peasedown St John' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Website designer serving Peasedown St John and surrounding areas — web design from £250 for trades and local businesses across BA2, BA3 and North East Somerset.',
      url: 'https://seo-kings.co.uk/website-designer-peasedown-st-john',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Bath and North East Somerset',
        postalCode: 'BS31 2DW',
        addressCountry: 'GB',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 51.4145, longitude: -2.4965 },
      areaServed: [
        { '@type': 'City', name: 'Peasedown St John' },
        { '@type': 'City', name: 'Radstock' },
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Midsomer Norton' },
      ],
      priceRange: '££',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:30' },
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

const WebsiteDesignerPeasedownStJohn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <ServicePageHero
        badge="Serving Peasedown St John · BA2"
        title="Website Designer"
        highlight="Peasedown St John"
        description="We build fast, Google-ready websites for trades and local businesses in Peasedown St John. From £250. Add GBP optimisation for £100. Live in under 2 weeks."
        features={[
          'From £250',
          '6 months free hosting',
          'Live in under 2 weeks',
          'GBP optimisation +£100',
          'Proven local results',
        ]}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* What's included */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag className="mb-4">Every site includes</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                A website built to get you found in Peasedown St John
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most website designers build pretty sites that don't rank. Every site we build is optimised for Google from the start — targeting the searches customers in Peasedown St John, Radstock and Bath actually use.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-2 text-secondary">
                Pricing
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { name: 'Starter', pages: '1-page site', price: 'From £250' },
                  { name: 'Professional', pages: '3-page site', price: 'From £350' },
                  { name: 'Full', pages: '5+ pages', price: 'From £450' },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0">
                    <div>
                      <div className="text-white font-semibold text-sm">{pkg.name}</div>
                      <div className="text-gray-500 text-xs">{pkg.pages}</div>
                    </div>
                    <div className="font-bold text-primary">{pkg.price}</div>
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
              <p className="text-xs text-gray-500 mb-6">GBP optimisation available as a £100 add-on. Hosting free for 6 months, then £50/year. No hidden fees.</p>
              <button
                onClick={() => setModalOpen(true)}
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
              >
                Get a Quote
              </button>
              <Link href="/web-design-packages" className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm mt-3 transition-colors duration-200 text-primary">
                View all packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Verified results</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Real results for local businesses</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {results.map((r) => (
              <Link key={r.slug} href={`/case-studies/${r.slug}`} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group">
                <div className="text-2xl font-bold mb-1 text-primary">{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
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

      {/* Local signals */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">Local to you</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We cover Bath and the surrounding villages</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham, and Peasedown St John is part of our regular patch. BA2 is an interesting postcode for trades — it sits between Bath's competitive market and the lower-competition Somer Valley, which means a well-optimised site can pull in searches from both directions. Customers in Peasedown often search for both Bath-based and Radstock-based trades, so targeting both sets of keywords matters.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Competition for local trades in Peasedown St John is low. Most businesses here have little or no web presence, which means a proper site and Google Business Profile will put you ahead of the majority of your local competition quickly. We cover Peasedown St John, Dunkerton, Camerton, Radstock and the surrounding BA2 and BA3 areas.
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
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABanner onGetQuote={() => setModalOpen(true)} />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WebsiteDesignerPeasedownStJohn;
