'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';
import { BASE_URL, BRISTOL_INDUSTRIES, INDUSTRY_SIBLINGS } from '../constants/industries';

const SEOBristolIndustry = ({ industry }) => {
  const config = BRISTOL_INDUSTRIES[industry];
  if (!config) return null;

  const siblings = (INDUSTRY_SIBLINGS[industry] || [])
    .map((slug) => BRISTOL_INDUSTRIES[slug])
    .filter(Boolean);

  const pageUrl = `${BASE_URL}/seo/bristol/${industry}`;
  const parentUrl = `${BASE_URL}/seo/bristol`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: config.metaTitle,
        description: config.metaDescription,
        inLanguage: 'en-GB',
        isPartOf: { '@id': `${BASE_URL}/#website` },
      },
      {
        '@type': 'Service',
        serviceType: `SEO for ${config.plural}`,
        name: `SEO for ${config.plural} in Bristol`,
        description: config.heroDescription,
        provider: {
          '@type': 'LocalBusiness',
          '@id': `${BASE_URL}/#organization`,
          name: 'SEO Kings',
          url: BASE_URL,
        },
        areaServed: [
          { '@type': 'City', name: 'Bristol' },
          { '@type': 'AdministrativeArea', name: 'Bristol' },
          { '@type': 'AdministrativeArea', name: 'South Gloucestershire' },
        ],
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: config.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  const rightPanel = (
    <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8">
      <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-6">
        What you get
      </p>
      <div className="space-y-4">
        {[
          { label: 'From per month', value: '£150' },
          { label: 'Map Pack results', value: '6-10 wks' },
          { label: 'Organic page one', value: '3-5 mo' },
          { label: 'Lock-in contract', value: 'None' },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
            <span className="text-gray-400 text-sm">{label}</span>
            <span className="text-xl font-bold text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge={config.badge}
        title="SEO for"
        highlight={config.plural}
        description={config.heroDescription}
        features={[
          'From £150/month',
          'Free audit included',
          `Bristol ${config.plural.toLowerCase()}`,
          'Map Pack + organic',
        ]}
        ctaText="Get a Free SEO Audit"
        rightPanel={rightPanel}
      />

      {/* Intro / cluster context */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag className="mb-4">Why this matters</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                SEO for {config.plural.toLowerCase()} in Bristol
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {config.intro}
              </p>
              <p className="text-gray-400 leading-relaxed">
                This page is part of our{' '}
                <Link href="/seo/bristol" className="text-primary hover:underline font-medium">
                  SEO Bristol
                </Link>{' '}
                cluster — a set of industry-specific pages built for the trades
                we work with most. If you&apos;re not a {config.singular.toLowerCase()},{' '}
                <Link href="/seo/bristol" className="text-primary hover:underline font-medium">
                  see all Bristol SEO services
                </Link>
                .
              </p>
            </div>

            {/* Services list */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <SectionTag className="mb-4">What we do</SectionTag>
              <ul className="space-y-3">
                {config.services.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords + proof */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Search terms we target</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">
            Bristol {config.singular.toLowerCase()} search terms we rank you for
          </h2>
          <div className="flex flex-wrap gap-2 mb-16">
            {config.keywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* Proof / Result callout */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-card border border-primary/30 rounded-2xl p-8">
              <SectionTag className="mb-2" color="teal">Typical result</SectionTag>
              <div className="text-2xl font-bold text-white mb-2">{config.result}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{config.resultDetail}</p>
            </div>
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <SectionTag className="mb-2">Proof</SectionTag>
              <div className="text-2xl font-bold text-white mb-2">#1 for &ldquo;SEO Bristol&rdquo;</div>
              <p className="text-gray-400 text-sm leading-relaxed">{config.proof}</p>
              <Link
                href="/case-studies/seo-kings"
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:underline"
              >
                View case study
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">
              {config.name} SEO questions
            </h2>
            <FAQAccordion faqs={config.faqs} />
          </div>
        </div>
      </section>

      {/* Cluster cross-links — passes equity between siblings AND up to /seo/bristol */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Bristol SEO cluster</SectionTag>
          <h2 className="text-2xl font-bold text-white mb-6 leading-tight tracking-tight">
            SEO for other Bristol trades
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-2xl">
            We build the same campaign for every trade we work with. Browse the Bristol SEO
            industry pages below, or go back to the full{' '}
            <Link href="/seo/bristol" className="text-primary hover:underline font-medium">
              SEO Bristol
            </Link>{' '}
            hub.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siblings.map((sib) => (
              <Link
                key={sib.slug}
                href={`/seo/bristol/${sib.slug}`}
                className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group"
              >
                <div>
                  <div className="text-sm font-semibold text-white mb-1">
                    SEO for {sib.plural} in Bristol
                  </div>
                  <div className="text-xs text-gray-500">
                    {sib.name} SEO from £150/month
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default SEOBristolIndustry;
