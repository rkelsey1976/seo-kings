'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const results = [
  {
    business: 'New Decorating',
    location: 'Bath',
    result: '#1 organic',
    keyword: '"exterior painter Bath"',
    slug: 'new-decorating',
  },
  {
    business: 'Aurelian Massage',
    location: 'Bath City Centre',
    result: 'Ranking',
    keyword: '"massage Bath"',
    slug: 'aurelian-massage',
  },
];

const included = [
  'Mobile-first design — fast on any device',
  'Built to rank for "website designer Bath" and trade searches across BA1 & BA2',
  'Google Business Profile optimised for Bath\'s competitive Map Pack',
  'Click-to-call and quote request form',
  'SSL, hosting guidance and launch support',
  'Live in under 2 weeks',
];

const faqs = [
  {
    q: 'How much does a website cost in Bath?',
    a: 'A one-page site starts at £399. Multi-page sites from £599. All include Google Business Profile set-up — no hidden extras. See our packages page for full pricing.',
  },
  {
    q: 'Do you meet clients in Bath?',
    a: "Yes. We're happy to come to you in Bath or meet at our Keynsham office (16a Culvers Road, BS31 2DW — 10 minutes from Bath city centre). Whatever works best for you.",
  },
  {
    q: 'Bath is competitive. Can you actually get me found on Google?',
    a: "Yes — but we're selective about it. Bath has more competition than most Somerset towns, so we focus on the specific keywords your customers actually search: your trade plus your area or postcode. That's where the calls come from.",
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process simple and guide you through every step.',
  },
  {
    q: 'What if I already have a website?',
    a: "We can audit your existing site for free and tell you honestly whether it's worth improving or starting fresh. No obligation.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-designer-bath',
      url: 'https://seo-kings.co.uk/website-designer-bath',
      name: 'Website Designer Bath | SEO Kings',
      description: 'Website designer serving Bath BA1 & BA2. Fast, mobile-first websites for trades and local businesses from £399. Google Business Profile included. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Designer Bath' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Website designer serving Bath, offering web design from £399 for trades and local businesses across BA1, BA2 and North East Somerset.',
      url: 'https://seo-kings.co.uk/website-designer-bath',
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
        { '@type': 'City', name: 'Bristol' },
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

const WebsiteDesignerBath = () => {
  return (
    <>
      <SEO
        title="Website Designer Bath | Web Design from £399"
        description="Website designer serving Bath BA1 & BA2. Fast, mobile-first websites for trades and local businesses from £399. Google Business Profile included. Free audit."
        canonical="/website-designer-bath"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Website Designer Bath' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Serving Bath · BA1 &amp; BA2
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Website Designer{' '}
              <span style={{ color: '#E8715A' }}>Bath</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build fast, Google-ready websites for trades and local businesses across Bath BA1 &amp; BA2. From £399 — with Google Business Profile set-up included. Live in under 2 weeks.
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

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { label: 'From £399' },
                { label: '6 months free hosting' },
                { label: 'Live in under 2 weeks' },
                { label: 'GBP set-up included' },
                { label: 'Serving BA1 & BA2' },
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

      {/* What's included */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
                Every site includes
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                A website built to get you found in Bath
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Bath is a competitive market. There are plenty of agencies building pretty sites that don't rank — and plenty of trades losing jobs because of it. Every site we build is optimised for local search from day one, targeting the searches your customers in BA1 and BA2 actually use.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
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
                  { name: 'Starter', pages: '1-page site', price: 'From £399' },
                  { name: 'Professional', pages: '3-page site', price: 'From £599' },
                  { name: 'Full', pages: '5+ pages', price: 'From £999' },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0">
                    <div>
                      <div className="text-white font-semibold text-sm">{pkg.name}</div>
                      <div className="text-gray-500 text-xs">{pkg.pages}</div>
                    </div>
                    <div className="text-white font-bold" style={{ color: '#E8715A' }}>{pkg.price}</div>
                  </div>
                ))}
              </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="text-white font-semibold text-sm">Hosting and maintenance</div>
                  <div className="text-gray-500 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £199/year</div>
                </div>
                <div className="font-bold shrink-0 ml-4" style={{ color: '#E8715A' }}>6 months free</div>
              </div>
            </div>
              <p className="text-xs text-gray-500 mb-6">All packages include Google Business Profile set-up. Hosting free for 6 months, then £199/year. No hidden fees.</p>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200"
                style={{ backgroundColor: '#C25245' }}
              >
                Get a Free Quote
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

      {/* Proof */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-8" style={{ color: '#E8715A' }}>
            Verified results
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">Real results for local businesses</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-2xl font-bold mb-1" style={{ color: '#E8715A' }}>{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
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

      {/* Local signals */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
              Local to you
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">We know the Bath market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham — 10 minutes from Bath city centre. Bath is one of the most competitive local markets in the South West. More businesses, more agencies, more noise. Getting into the Map Pack or the top organic results here takes a properly built site and a well-optimised Google Business Profile working together — not one without the other.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We've built sites for trades across Bath — painters and decorators, massage therapists, builders — and we know which BA1 and BA2 searches actually drive calls versus which ones just look good on a report. We cover the full city: Widcombe, Oldfield Park, Bear Flat, Larkhall, Twerton, Bathampton, Combe Down, Weston and Bathwick.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We're happy to meet you in Bath or at our Keynsham office. Your site gets built around your trade and the specific areas of Bath you want to work in.
            </p>
            <address className="not-italic text-sm text-gray-400 leading-relaxed border-l-2 pl-4" style={{ borderColor: '#E8715A' }}>
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
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
              FAQs
            </p>
            <h2 className="text-3xl font-bold text-white mb-10">Common questions</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Bath services */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>Also in Bath</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/areas/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Bath Area Hub</div>
                <div className="text-xs text-gray-500">All web design & SEO services across Bath and every neighbourhood</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/local-seo/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO Bath</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath — from £150/month</div>
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

export default WebsiteDesignerBath;
