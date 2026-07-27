import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import SectionTag from '../components/SectionTag';

const cards = [
  { title: 'Keyword research', body: 'We find the exact terms your customers search — "plumber Bath", not "plumbing solutions" — and build your pages around them.' },
  { title: 'Title tags & meta descriptions', body: 'The text Google shows in search results. Written to match search intent and earn the click, not just the impression.' },
  { title: 'Heading structure', body: 'One clear H1 per page, logical H2/H3 hierarchy — helps Google (and readers) parse what matters.' },
  { title: 'Internal linking', body: "Related pages linked together so Google understands your site's structure and authority flows to the pages that need it." },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/on-page-seo',
      url: 'https://seo-kings.co.uk/on-page-seo',
      name: 'On-Page SEO | SEO Kings',
      description: 'On-page SEO for trade websites — keyword research, title tags, headings and internal linking, structured around what people actually search.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://seo-kings.co.uk/seo' },
          { '@type': 'ListItem', position: 3, name: 'On-Page SEO' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/#service-on-page-seo',
      serviceType: 'On-Page SEO',
      name: 'On-Page SEO',
      description: 'Keyword research, title tags, headings and internal linking — included in every Local SEO and Technical SEO package.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/on-page-seo' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Bristol' },
      ],
    },
  ],
};

const OnPageSEO = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      <ServicePageHero
        badge="On-Page SEO"
        title="Every page built to"
        highlight="match what people search"
        description="Title tags, headings, internal links and page structure — the on-site work that tells Google exactly what your page is about, and why it deserves to rank. Included in every SEO package."
        features={['Keyword research', 'Title & meta tags', 'Heading structure', 'Internal linking']}
        ctaText="See SEO Packages"
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'SEO', href: '/seo' }, { name: 'On-Page SEO' }]}
      />

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Why it matters</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight max-w-2xl">
            Google can only rank what it understands
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
            A fast, well-built site still needs its pages to clearly say what they&apos;re about — in the title, the headings, and the words on the page — or Google guesses, and usually guesses wrong.
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
            On-page SEO is included as standard in every{' '}
            <Link href="/local-seo" className="text-primary hover:underline">Local SEO</Link> and{' '}
            <Link href="/technical-seo" className="text-primary hover:underline">Technical SEO</Link> package — it&apos;s not sold separately, because a site without it won&apos;t hold the rankings the rest of the work earns.
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
            <Link href="/content-strategy" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Content Strategy</div>
                <div className="text-xs text-gray-500">The pages and posts that target real search queries</div>
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

export default OnPageSEO;
