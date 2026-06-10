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
    detail: 'Ranked in the Google Map Pack within months of launch — now generating regular enquiries from local searches.',
    slug: 'peachy-cleans',
  },
  {
    business: 'New Decorating',
    location: 'Bath',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    detail: "Top 3 Map Pack for one of Bath's most competitive trade keywords — consistent enquiries from Google Maps.",
    slug: 'new-decorating',
  },
  {
    business: 'Bath Painter',
    location: 'Bath',
    result: 'Bespoke',
    keyword: '"painter and decorator Bath"',
    detail: 'Full brand and bespoke website delivered — enquiries up within a week of going live.',
    slug: 'bath-painter',
  },
  {
    slug: 'aspect-builds',
    business: 'Aspect Builds & Maintenance',
    outcome: 'No website, just Instagram → 40-page professional site live in 2 weeks',
    snippet: 'Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration for a Bath builder.',
  },
];

const included = [
  'Mobile-first design — fast on any device',
  'Built to rank for Shepton Mallet, Frome and Somerset trade searches',
  'Google Business Profile set-up — competition in BA4 is low, Map Pack rankings come quickly',
  'Click-to-call and quote request form',
  'SSL, hosting guidance and launch support',
  'Live in under 2 weeks',
];

const faqs = [
  {
    q: 'How much does a website cost in Shepton Mallet?',
    a: 'A one-page site starts at £250. Multi-page sites are £250 base + £50 per page — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our packages page for full pricing.',
  },
  {
    q: 'Do you work with businesses in Shepton Mallet?',
    a: "Yes. We're based in Keynsham and work with businesses across Shepton Mallet, Frome, Wells, Midsomer Norton and the surrounding Somerset area.",
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process simple and guide you through every step.',
  },
  {
    q: 'Will my website show up on Google in Shepton Mallet?',
    a: "Yes — that's the point. Every site we build is optimised for local search from day one, targeting the searches your customers in Shepton Mallet and BA4 actually use.",
  },
  {
    q: 'What trades do you work with in Shepton Mallet?',
    a: 'Plumbers, electricians, builders, cleaners, painters — any trade that needs local customers in Shepton Mallet, Frome or the wider Somerset area.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-designer-shepton-mallet',
      url: 'https://seo-kings.co.uk/website-designer-shepton-mallet',
      name: 'Website Designer Shepton Mallet | Web Design from £250',
      description: 'Website designer serving Shepton Mallet BA4. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Designer Shepton Mallet' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Website designer serving Shepton Mallet and the BA4 area — web design from £250 for trades and local businesses across Shepton Mallet, Frome, Wells and Bath.',
      url: 'https://seo-kings.co.uk/website-designer-shepton-mallet',
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
        { '@type': 'City', name: 'Shepton Mallet' },
        { '@type': 'City', name: 'Frome' },
        { '@type': 'City', name: 'Bath' },
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

const WebsiteDesignerSheptonMallet = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <ServicePageHero
        badge="Serving Shepton Mallet · BA4"
        title="Website Designer"
        highlight="Shepton Mallet"
        description="We build fast, Google-ready websites for trades and local businesses in Shepton Mallet BA4. From £250. Add GBP optimisation for £100. Live in under 2 weeks."
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
                A website built to get you found in Shepton Mallet
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most website designers build pretty sites that don&apos;t rank. Every site we build is optimised for Google from the start — targeting the searches customers in Shepton Mallet and the surrounding Somerset area actually use.
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

            {/* Pricing card */}
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
                      <div className="text-gray-400 text-xs">{pkg.pages}</div>
                    </div>
                    <div className="font-bold text-primary">{pkg.price}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-white font-semibold text-sm">Hosting and maintenance</div>
                    <div className="text-gray-400 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £50/year</div>
                  </div>
                  <div className="font-bold shrink-0 ml-4 text-primary">6 months free</div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-6">GBP optimisation available as a £100 add-on. Hosting free for 6 months, then £50/year. No hidden fees.</p>
              <button
                onClick={() => setModalOpen(true)}
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
              >
                Get a Quote
              </button>
              <Link
                href="/web-design-packages"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm mt-3 transition-colors duration-200 text-primary"
              >
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-2xl font-bold mb-1 text-primary">{r.result}</div>
                <div className="text-xs text-gray-400 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-400 text-xs mb-3">{r.location}</div>
                {r.detail && <div className="text-gray-500 text-xs leading-relaxed">{r.detail}</div>}
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
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Shepton Mallet market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham — well placed to serve Shepton Mallet and the whole BA4 area. Shepton Mallet sits at the heart of Somerset with a loyal local customer base and steady demand for trades. Most of those trades have poor Google visibility — and that&apos;s a real opportunity.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We serve businesses across Shepton Mallet and the surrounding area: Frome, Wells, Midsomer Norton, Radstock and the wider Somerset countryside. If you&apos;re a trade in Shepton Mallet without a website, you&apos;re leaving calls on the table every week.
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

      {/* Content expansion */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Why Shepton Mallet</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            Website design in Shepton Mallet — Somerset market town, real trade demand, almost no one else ranking
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Shepton Mallet sits at the centre of Somerset — surrounded by Frome, Wells, Glastonbury, Midsomer Norton and Radstock. It&apos;s a market town with a solid mix of rural and residential customers who rely on local trades for everything from plumbing to painting. Most of those trades have no Google presence worth speaking of.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                BA4 is one of the least contested postcode areas we work in. That means you don&apos;t need a huge budget to rank here — you just need a properly built, optimised site. In markets like this we see pages ranking quickly, sometimes within a matter of weeks rather than months.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Shepton Mallet&apos;s central position is a genuine advantage. One well-optimised website can pull enquiries from Frome, Wells, Glastonbury and across the Mendip Hills — a wide catchment area for a single postcode.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Central Somerset reach', body: 'Surrounded by Frome, Wells, Glastonbury and Radstock — one site can rank across a wide Somerset catchment.' },
                { label: 'BA4 is wide open', body: 'Almost no Shepton Mallet trades are properly optimised. Low competition means faster, cheaper results.' },
                { label: 'Rural and town demand', body: 'A mix of rural properties and town homeowners creates steady, year-round demand for trusted local trades.' },
                { label: 'Next.js not WordPress', body: 'Static pages, sub-second loads, green Core Web Vitals. Built to rank from day one.' },
              ].map(({ label, body }) => (
                <div key={label} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                  <div className="text-white font-semibold text-sm mb-2">{label}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Related services</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-8 leading-tight tracking-tight">Web design and SEO near Shepton Mallet</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/local-seo/shepton-mallet', label: 'Local SEO — Shepton Mallet', desc: 'Get found on Google Maps and local search in BA4.' },
              { href: '/website-designer-frome', label: 'Website Designer — Frome', desc: 'Web design for Frome and BA11 businesses.' },
              { href: '/website-designer-radstock', label: 'Website Designer — Radstock', desc: 'Web design for Radstock and the Somer Valley.' },
              { href: '/website-designer-midsomer-norton', label: 'Website Designer — Midsomer Norton', desc: 'Web design for Midsomer Norton and BA3.' },
              { href: '/areas/bath', label: 'Website Designer — Bath', desc: 'Web design for Bath trades and small businesses.' },
              { href: '/areas/shepton-mallet', label: 'Shepton Mallet area hub', desc: 'See everything we cover in the Shepton Mallet and BA4 area.' },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="bg-dark-card border border-white/[0.06] rounded-2xl p-5 hover:border-white/10 transition-colors group">
                <div className="text-white font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{label}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about web design in Shepton Mallet</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABanner onGetQuote={() => setModalOpen(true)} />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WebsiteDesignerSheptonMallet;
