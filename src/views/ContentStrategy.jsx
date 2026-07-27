import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import SectionTag from '../components/SectionTag';

const cards = [
  { title: 'Service pages', body: 'One page per trade or service, written around the terms people actually type into Google.' },
  { title: 'Location pages', body: 'One page per town or area, with the local detail that tells Google — and customers — you genuinely cover it.' },
  { title: 'Blog posts', body: 'Answers to the questions your customers ask before they book — builds trust and picks up informational search traffic.' },
  { title: 'Case studies', body: 'Real results, named clients, specific numbers — proof that converts visitors who are already close to booking.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/content-strategy',
      url: 'https://seo-kings.co.uk/content-strategy',
      name: 'Content Strategy | SEO Kings',
      description: 'Content strategy for trade websites — service pages, location pages and blog posts built to target real search queries, not guesswork.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://seo-kings.co.uk/seo' },
          { '@type': 'ListItem', position: 3, name: 'Content Strategy' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/#service-content-strategy',
      serviceType: 'Content Strategy',
      name: 'Content Strategy',
      description: 'Service pages, location pages and blog posts built around real search queries — included in Growth and Scale Local SEO packages.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/content-strategy' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Bristol' },
      ],
    },
  ],
};

const ContentStrategy = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      <ServicePageHero
        badge="Content Strategy"
        title="Pages that target"
        highlight="what people actually search"
        description="Service pages, location pages and blog posts — built around real search queries with real search volume, not guesswork. Included in Growth & Scale packages."
        features={['Service pages', 'Location pages', 'Blog posts', 'Case studies']}
        ctaText="See SEO Packages"
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'SEO', href: '/seo' }, { name: 'Content Strategy' }]}
      />

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Why it matters</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight max-w-2xl">
            One page can&apos;t rank for everything
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
            &quot;Plumber Bath&quot; and &quot;emergency plumber Keynsham&quot; are different searches with different intent. Trying to rank one homepage for both usually means ranking for neither. Dedicated pages, each built around one real query, are what actually work.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card) => (
              <div key={card.title} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="text-white font-semibold text-sm mb-2">{card.title}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 leading-relaxed">
            Content strategy is part of our{' '}
            <Link href="/local-seo" className="text-primary hover:underline">Growth and Scale Local SEO packages</Link>{' '}
            — new pages are planned, written and published as part of the ongoing monthly work, not billed separately.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also nearby</SectionTag>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">All SEO services</div>
                <div className="text-xs text-gray-500">Back to the full SEO overview</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/off-page-seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Off-Page SEO &amp; Citations</div>
                <div className="text-xs text-gray-500">Building authority beyond your own site</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default ContentStrategy;
