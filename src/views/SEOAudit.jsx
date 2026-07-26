import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import SectionTag from '../components/SectionTag';
import CTABanner from '../components/CTABanner';

const checks = [
  {
    name: 'Google Business Profile',
    desc: 'Categories, service areas, photos, description and posts — the things that decide whether you show up in the Map Pack.',
  },
  {
    name: 'Website',
    desc: 'Load speed, mobile-friendliness, on-page SEO (titles, headings, schema) and whether the site is actually built to rank.',
  },
  {
    name: 'Citations & reviews',
    desc: 'Whether your name, address and phone number are consistent across the web, and how your review count and rating compare locally.',
  },
  {
    name: 'Competitors',
    desc: "Who's outranking you for your key searches, and what they're doing that you're not.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/tools/seo-audit',
      url: 'https://seo-kings.co.uk/tools/seo-audit',
      name: 'Free SEO Audit for Trades | SEO Kings',
      description: 'A free SEO audit for trades in Bath, Bristol & North East Somerset — Google Business Profile, website, citations and competitors, checked and reported back.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://seo-kings.co.uk/tools' },
          { '@type': 'ListItem', position: 3, name: 'SEO Audit' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What do you check in a free SEO audit?',
          acceptedAnswer: { '@type': 'Answer', text: "Your Google Business Profile, your website (speed, mobile-friendliness, on-page SEO), your citations and reviews, and what your competitors are doing that's outranking you." },
        },
        {
          '@type': 'Question',
          name: 'Is the SEO audit really free?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. No card, no contract. We check your website and Google presence and send you a clear report on what to fix first.' },
        },
        {
          '@type': 'Question',
          name: 'Do I have to be a current client to get an audit?',
          acceptedAnswer: { '@type': 'Answer', text: "No — the audit is open to any trade business in Bath, Bristol or North East Somerset, whether you've worked with us before or not." },
        },
      ],
    },
  ],
};

const SEOAudit = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Free Tool</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Free <span className="text-primary">SEO Audit</span> for Trades
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            We check your Google Business Profile, your website and your local search presence, then
            send you a clear report on exactly what&apos;s stopping you ranking — and what to fix first.
            No card, no obligation.
          </p>
          <Link
            href="/contact?service=seo-audit"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            Request your free audit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* What we check */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">What we check</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight tracking-tight">
            Four things that decide whether you get found
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {checks.map(({ name, desc }) => (
              <div key={name} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-white font-semibold text-sm mb-2">{name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-8 max-w-2xl">
            Read more about our process in{' '}
            <Link href="/blog/free-seo-audit-what-we-check" className="text-primary hover:underline">
              what we actually check in your free audit
            </Link>
            . Prefer to check your Google Business Profile yourself first? Try the{' '}
            <Link href="/google-business-profile-score-checker" className="text-primary hover:underline">
              GBP Score Checker
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default SEOAudit;
