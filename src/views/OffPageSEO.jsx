import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import SectionTag from '../components/SectionTag';

const cards = [
  { title: 'Citations', body: 'Your business listed consistently across the directories Google checks — inconsistent details actively hurt local rankings.' },
  { title: 'Backlinks', body: 'Links from relevant, trustworthy sources — trade bodies, local press, partner businesses — not spammy link farms.' },
  { title: 'Reviews', body: 'Genuine Google reviews, requested at the right moment, are one of the strongest local ranking signals there is.' },
  { title: 'NAP consistency', body: "Same name, address and phone number everywhere — Google cross-checks this to verify you're a real, stable business." },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/off-page-seo',
      url: 'https://seo-kings.co.uk/off-page-seo',
      name: 'Off-Page SEO & Citations | SEO Kings',
      description: 'Off-page SEO for trade websites — local citations, directory listings and backlinks from sources that actually move rankings.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://seo-kings.co.uk/seo' },
          { '@type': 'ListItem', position: 3, name: 'Off-Page SEO & Citations' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/#service-off-page-seo',
      serviceType: 'Off-Page SEO',
      name: 'Off-Page SEO & Citations',
      description: 'Local citations, directory listings and backlink building — included in Growth and Scale Local SEO packages.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/off-page-seo' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Bristol' },
      ],
    },
  ],
};

const OffPageSEO = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      <ServicePageHero
        badge="Off-Page SEO & Citations"
        title="Authority Google can"
        highlight="verify from outside your site"
        description="Local citations, directory listings and backlinks from sources that actually move rankings — proof that your business is real, consistent and trusted beyond your own website. Included in Growth & Scale packages."
        features={['Citations', 'Backlinks', 'Review strategy', 'NAP consistency']}
        ctaText="See SEO Packages"
      />

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Why it matters</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight max-w-2xl">
            Your own site can only say so much about you
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
            Google weighs what other trusted sources say about your business too — consistent listings, relevant links, genuine reviews. Get this wrong (or skip it) and even a perfect website struggles to rank.
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
            Off-page SEO is part of our{' '}
            <Link href="/local-seo" className="text-primary hover:underline">Growth and Scale Local SEO packages</Link>{' '}
            — citation building, backlinks and review strategy run continuously as part of the monthly work.
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
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">The single most important listing to get right</div>
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

export default OffPageSEO;
