'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const signs = [
  'Your site loads slowly on mobile — Google penalises slow pages in rankings',
  'It looks dated and doesn\'t reflect what your business does now',
  'You\'re not showing up on Google for your main services',
  'Customers can\'t easily find your phone number or request a quote',
  'You built it yourself years ago and it\'s never been touched since',
  'Your competitors\' sites look sharper and rank above you',
];

const whatWeDo = [
  'Full audit of your existing site — what to keep, what to cut, what\'s hurting you',
  'Clean, fast rebuild optimised for local search in your area',
  'New Google Business Profile set-up or optimisation',
  'Redirects from old URLs so you don\'t lose any existing rankings',
  'Click-to-call, contact forms and clear calls to action',
  'Live in under 2 weeks',
];

const results = [
  {
    business: 'New Decorating',
    location: 'Bath',
    result: '#1 organic',
    keyword: '"exterior painter Bath"',
    slug: 'new-decorating',
    detail: 'No web presence at all — built from scratch and ranking in a week.',
  },
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    slug: 'peachy-cleans',
    detail: 'Full site redesign — now in the Map Pack for their main keywords.',
  },
];

const faqs = [
  {
    q: 'How much does a website redesign cost?',
    a: 'A full redesign starts from £399 for a one-page site, £599 for three pages. We audit your existing site first so you know exactly what\'s involved and what it will cost before we start.',
  },
  {
    q: 'Will I lose my Google rankings when you redesign my site?',
    a: 'Not if we do it properly. We set up 301 redirects from your old URLs to the new ones, and we carry over any existing SEO value. In most cases clients see their rankings improve after a redesign because the new site is faster and better structured.',
  },
  {
    q: 'How long does a redesign take?',
    a: 'Most sites are live within 2 weeks of receiving your content. If you need help writing copy, we can do that too — just let us know.',
  },
  {
    q: 'Do I have to use my current domain and hosting?',
    a: "You can keep your domain — we\'ll just point it to the new site. We can advise on hosting; most clients either stay on their existing host or switch to something faster. We handle the technical side.",
  },
  {
    q: 'Can you redesign any type of website?',
    a: 'Yes. We specialise in sites for trades and local businesses — plumbers, electricians, roofers, cleaners, decorators, and any other local service. We rebuild in our own clean stack (Next.js) so the result is fast and SEO-ready.',
  },
  {
    q: 'What areas do you serve for website redesigns?',
    a: 'We work with businesses across Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge and the wider Somerset and Wiltshire area. Most of the process is remote so location is rarely a barrier.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-redesign',
      url: 'https://seo-kings.co.uk/website-redesign',
      name: 'Website Redesign | SEO Kings',
      description: 'Website redesign for trades and local businesses. Fast rebuilds from £399 that rank on Google. Serving Bath, Keynsham, Trowbridge and Somerset. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Redesign' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#business',
      name: 'SEO Kings',
      description: 'Website redesign service for trades and local businesses across Bath, Keynsham, Trowbridge and Somerset. Fast, SEO-ready rebuilds from £399.',
      url: 'https://seo-kings.co.uk/website-redesign',
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
        { '@type': 'City', name: 'Trowbridge' },
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

const WebsiteRedesign = () => {
  return (
    <>
      <SEO
        title="Website Redesign | Rebuild Your Site from £399"
        description="Website redesign for trades and local businesses. Fast, SEO-ready rebuilds from £399. Bath, Keynsham, Trowbridge and Somerset. Free audit — no obligation."
        canonical="/website-redesign"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Website Redesign' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Website Redesign Service
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Website{' '}
              <span style={{ color: '#E8715A' }}>Redesign</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
              Your old site is costing you work. A slow, outdated website that doesn't rank on Google loses you jobs every week to competitors with better sites. We rebuild it from scratch — faster, cleaner, and built to rank.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200"
                style={{ backgroundColor: '#C25245' }}
              >
                Get a Free Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+447702264921"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/10 hover:border-white/20 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07702 264 921
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { label: 'From £399' },
                { label: 'Live in under 2 weeks' },
                { label: 'Rankings protected' },
                { label: 'Free audit first' },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signs you need a redesign */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
              Warning signs
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">Signs your site needs a redesign</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              A bad website doesn't just look unprofessional — it actively costs you rankings, clicks and enquiries. If any of these apply, it's time to rebuild.
            </p>
            <ul className="space-y-4">
              {signs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
                What's included
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                A complete rebuild, not a patch-up
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We don't skin your old site and call it a redesign. We audit what exists, keep what's working, and rebuild everything else from scratch in a clean, fast stack that Google rewards.
              </p>
              <ul className="space-y-3">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing card */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-2" style={{ color: '#E8715A' }}>
                Pricing
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { name: 'Starter Redesign', pages: '1-page rebuild', price: 'From £399' },
                  { name: 'Professional Redesign', pages: '3-page rebuild', price: 'From £599' },
                  { name: 'Full Redesign', pages: '5+ pages', price: 'From £999' },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0">
                    <div>
                      <div className="text-white font-semibold text-sm">{pkg.name}</div>
                      <div className="text-gray-500 text-xs">{pkg.pages}</div>
                    </div>
                    <div className="font-bold" style={{ color: '#E8715A' }}>{pkg.price}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-6">Free audit included. Google Business Profile set-up included. No hidden fees.</p>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200"
                style={{ backgroundColor: '#C25245' }}
              >
                Get a Free Audit
              </Link>
              <Link
                href="/web-design-packages"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm mt-3 transition-colors duration-200"
                style={{ color: '#E8715A' }}
              >
                View all packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-8" style={{ color: '#E8715A' }}>
            Verified results
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">What happens after a proper rebuild</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-2xl font-bold mb-1" style={{ color: '#E8715A' }}>{r.result}</div>
                <div className="text-xs text-gray-500 mb-3">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs mb-3">{r.location}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{r.detail}</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: '#E8715A' }}>
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

      {/* FAQ */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
              FAQs
            </p>
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about website redesigns</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default WebsiteRedesign;
