import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const heroFeatures = [
  'Local SEO from £150/mo',
  'GBP optimisation £100',
  'Bath & Bristol specialists',
  'Monthly reporting',
];

const results = [
  { metric: '#1', label: 'Map Pack', detail: '"cleaning Midsomer Norton" — Peachy Cleans' },
  { metric: 'Top 3', label: 'Map Pack', detail: '"exterior painter Bath" — New Decorating' },
  { metric: '< 1 week', label: 'Time to first rankings', detail: 'For new sites with GBP set up' },
];

const pillars = [
  {
    href: '/local-seo',
    name: 'Local SEO',
    price: 'From £150/mo',
    desc: 'Keyword research, on-page optimisation, Google Business Profile and monthly reporting — the ongoing work that keeps you ranking.',
  },
  {
    href: '/google-business-profile',
    name: 'Google Business Profile',
    price: '£100 one-off',
    desc: 'Full GBP setup and optimisation — categories, service areas, photos and description done properly, once.',
  },
  {
    href: '/seo/bath',
    name: 'SEO in Bath',
    price: 'BA1 & BA2',
    desc: 'Map Pack and page one rankings for trades across Bath — the most competitive market in BANES.',
  },
  {
    href: '/seo/bristol',
    name: 'SEO in Bristol',
    price: 'BS1–BS16',
    desc: 'Suburb-level SEO campaigns across Bristol, from the Harbourside to Kingswood.',
  },
];

const seoRightPanel = (
  <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8">
    <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-6">Real Results</p>
    <div className="space-y-4">
      {[
        { label: 'Local SEO from', value: '£150/mo' },
        { label: 'GBP optimisation', value: '£100' },
        { label: 'Peachy Cleans — Map Pack', value: '#1' },
        { label: 'New Decorating — Map Pack', value: 'Top 3' },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
          <span className="text-gray-400 text-sm">{label}</span>
          <span className="text-xl font-bold text-white">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const faqs = [
  { q: 'What does an SEO agency actually do for a trade business?', a: 'We get you found when local customers search on Google — optimising your website and Google Business Profile so you rank higher for searches like "plumber Bath" or "electrician Keynsham", and show up in the Map Pack.' },
  { q: 'Do I need a new website to start SEO?', a: 'No. Most clients run Local SEO on the site we already built for them, or on an existing site. We work with what you have — SEO expands on it rather than replacing it.' },
  { q: 'How much does SEO cost?', a: 'Local SEO starts from £150/month depending on how many services and locations you want to rank for. Google Business Profile optimisation is a £100 one-off. No contracts.' },
  { q: 'Do you only work in Bath and Bristol?', a: 'Those are our two biggest markets, but we also cover Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford and surrounding towns in Somerset and Wiltshire.' },
  { q: 'How long until I see results?', a: 'Most clients see movement within 3–6 months for competitive keywords; Google Business Profile changes can show within weeks. You get monthly reports so you always know where you stand.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/seo',
      url: 'https://seo-kings.co.uk/seo',
      name: 'SEO Agency Bath & Bristol | SEO Kings',
      description: 'SEO for trades in Bath, Bristol & North East Somerset. Local SEO, Google Business Profile optimisation and Map Pack rankings. From £150/month.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'SEO' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/#service-seo',
      serviceType: 'Search Engine Optimisation',
      name: 'SEO Services',
      description: 'SEO for trades and small businesses across Bath, Bristol and North East Somerset — local SEO, Google Business Profile optimisation and Map Pack rankings.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/seo' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Bristol' },
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

const SEOServices = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      {/* Keyword H1 for crawlers; visible hero headline stays conversion-first as H2 (same pattern as homepage) */}
      <h1 className="sr-only">SEO Agency for Trades in Bath, Bristol & North East Somerset</h1>
      <ServicePageHero
        titleTag="h2"
        badge="SEO Services"
        title="Rank higher. Get more"
        highlight="calls from Google."
        description="Local SEO and Google Business Profile optimisation for trades across Bath, Bristol and North East Somerset — built to get you into the Map Pack and page one."
        features={heroFeatures}
        ctaText="Get a Free SEO Audit"
        rightPanel={seoRightPanel}
      />

      {/* Results Bar */}
      <section className="py-12 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {results.map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-bold gradient-text mb-1">{item.metric}</div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-sm text-gray-500">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our SEO services */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Our SEO services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Two services, two cities — pick what you need, or run both together.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map(({ href, name, price, desc }) => (
              <Link key={href} href={href} className="block p-6 bg-dark-card border border-white/[0.06] rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all group">
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-primary-light transition-colors">{name}</h3>
                <p className="text-[11px] font-mono tracking-[0.08em] uppercase text-secondary mb-3">{price}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                <span className="text-primary-light text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free SEO audit CTA */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-2">
                Free tool
              </p>
              <h3 className="text-white font-semibold text-base mb-1">
                Not sure what&apos;s holding you back on Google?
              </h3>
              <p className="text-gray-400 text-sm">
                Try our free SEO audit — see exactly what&apos;s stopping you ranking and what to fix first.
              </p>
            </div>
            <Link
              href="/tools/seo-audit"
              className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
            >
              Get your free audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              SEO FAQs
            </h2>
            <p className="text-lg text-gray-400">
              Everything you need to know about SEO for your Bath or Bristol business.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default SEOServices;
