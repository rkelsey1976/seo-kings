'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Corsham", "local seo Corsham" and every trade search in SN13',
  'Google Business Profile optimisation so you appear in the Map Pack for Corsham searches',
  'Website SEO: service pages, location pages and content that ranks in SN13',
  'Local citations and backlinks from relevant directories',
  'Review growth strategy and professional responses to every review',
  'Monthly reporting: rankings, traffic, calls and leads — no jargon',
];

const packages = [
  { name: 'Starter', desc: 'GBP + on-page SEO', price: '£150/mo' },
  { name: 'Growth', desc: 'Full local SEO campaign', price: '£300/mo' },
  { name: 'Scale', desc: 'Aggressive multi-location SEO', price: '£450/mo' },
];

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
    business: 'Aspect Builds',
    location: 'Bath',
    result: '40-page site',
    keyword: '"builders Bath"',
    detail: 'No website, just Instagram → 40-page professional site live in 2 weeks. Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration.',
    slug: 'aspect-builds',
  },
];

const faqs = [
  {
    q: 'What does local SEO do for a Corsham business?',
    a: 'It gets you visible when people in Corsham, Chippenham, Box and the surrounding SN13 area search for your trade or service on Google. That means showing up in the Map Pack — the three businesses with pins on Google Maps — and in the organic results below. Both drive real phone calls and enquiries.',
  },
  {
    q: 'How much does local SEO cost in Corsham?',
    a: 'Our packages start from £150/month. We offer a free audit first — we check your current Google rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly quote.',
  },
  {
    q: 'How long before I see results?',
    a: "Google Business Profile optimisation can produce results within a few weeks. Ranking for competitive terms like 'plumber Corsham' or 'electrician SN13' typically takes 3–6 months. We give you monthly reports so you can see progress.",
  },
  {
    q: 'Is Corsham competitive for SEO?',
    a: 'Less competitive than Bath or Chippenham town centre — which works in your favour. Most Corsham trades have no website or a poorly optimised Google Business Profile, so the bar to rank is lower and results come faster.',
  },
  {
    q: 'Do I need a website as well as local SEO?',
    a: "You can do a lot with Google Business Profile alone, but a website makes every signal stronger. If you don't have one, we build fast, SEO-ready sites from £250 — and many Corsham clients do website and SEO together.",
  },
  {
    q: 'What areas near Corsham do you cover?',
    a: 'We cover Corsham and the surrounding SN13 area — including Box, Lacock, Colerne, Chippenham, Bath and the wider Wiltshire and Somerset border.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/corsham',
      url: 'https://seo-kings.co.uk/local-seo/corsham',
      name: 'Local SEO Corsham | Get in the Map Pack from £150/month',
      description: 'We get Corsham trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://seo-kings.co.uk/local-seo' },
          { '@type': 'ListItem', position: 3, name: 'Corsham' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency serving Corsham and SN13. Google Business Profile optimisation, website SEO and review growth for trades and local businesses across Corsham, Chippenham and Bath.',
      url: 'https://seo-kings.co.uk/local-seo/corsham',
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
        { '@type': 'City', name: 'Corsham' },
        { '@type': 'City', name: 'Chippenham' },
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

const rightPanel = (
  <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8">
    <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-6">Real Results</p>
    <div className="space-y-4">
      {[
        { label: 'From per month', value: '£150' },
        { label: 'Peachy Cleans — Map Pack', value: '#1' },
        { label: 'New Decorating — Map Pack', value: 'Top 3' },
        { label: 'First results in', value: '< 4 weeks' },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
          <span className="text-gray-400 text-sm">{label}</span>
          <span className="text-xl font-bold text-white">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const LocalSEOCorsham = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge="Serving SN13 · Corsham"
        title="Local SEO"
        highlight="Corsham"
        description="Corsham sits 12 miles from Bath — but most local trades are losing enquiries to rivals in Chippenham who rank better on Google. We fix that. We get Corsham businesses into the Map Pack and page one for every relevant search in SN13."
        features={['From £150/month', 'Free audit included', 'Google Business Profile', 'Serving SN13']}
        ctaText="Get a Free SEO Audit"
        rightPanel={rightPanel}
      />

      {/* What we do */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag className="mb-4">What&apos;s included</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Everything you need to rank in Corsham
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Corsham has a strong local economy but most trades here are invisible on Google. A proper local SEO system — not a one-off tidy-up — is what separates the businesses that consistently win work from those that rely on word of mouth alone.
              </p>
              <ul className="space-y-3">
                {whatWeDo.map((item) => (
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
              <SectionTag className="mb-2">Pricing</SectionTag>
              <div className="space-y-4 mb-8">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0">
                    <div>
                      <div className="text-white font-semibold text-sm">{pkg.name}</div>
                      <div className="text-gray-400 text-xs">{pkg.desc}</div>
                    </div>
                    <div className="font-bold text-primary">{pkg.price}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-6">All packages start with a free audit. No lock-in contracts.</p>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/local-seo"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm mt-3 transition-colors duration-200 text-primary"
              >
                View full local SEO packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
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
          <div className="max-w-3xl">
            <SectionTag className="mb-4">Local knowledge</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Corsham market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham — close enough to serve Corsham and the whole SN13 area properly. Corsham is a historic market town with a growing residential population and solid demand for local trades. The problem is most of those trades are invisible on Google, which means the opportunity to rank is genuinely strong.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We cover Corsham and the surrounding area: Box, Lacock, Colerne, Chippenham and the wider Wiltshire corridor across to Bath. We target the exact postcodes your customers search from.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Need a website too? We build fast, SEO-ready sites from £250. See our{' '}
              <Link href="/website-designer-corsham" className="underline hover:text-white transition-colors text-primary">website design Corsham</Link>{' '}
              page or{' '}
              <Link href="/contact" className="underline hover:text-white transition-colors text-primary">get in touch</Link>{' '}
              to discuss website and SEO together.
            </p>
          </div>
        </div>
      </section>

      {/* Content expansion */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Why SN13 is worth targeting</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            Local SEO in Corsham — historic market town, low competition, strong trade demand
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Corsham is a Wiltshire market town with a mix of period properties, professional residents and a consistent demand for local trades. The Corsham Technology Park brings thousands of professionals into the area — many of them homeowners who need builders, electricians, decorators and plumbers they can trust.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Online, SN13 is one of the least competitive postcode areas we serve. Most Corsham trades either have no website at all or a Google Business Profile that hasn&apos;t been touched since it was created. That means the Map Pack — the three businesses at the top of Google — is genuinely accessible for any trade prepared to put in the work.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We start with your GBP because that&apos;s the fastest route to visible results. A properly optimised profile — right categories, photos, description, Q&amp;A, and regular posts — can produce real movement in weeks. Website SEO builds on that over 3–6 months to lock in your position.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Professional, high-spend market', body: 'Thousands of professionals based in Corsham — exactly the customers who book trades online rather than relying on word of mouth.' },
                { label: 'SN13 Map Pack is open', body: 'Low competition means getting into the top three local results here is faster and cheaper than in Bath or Chippenham.' },
                { label: 'Bath and Chippenham reach', body: 'SN13 sits between two larger markets. One well-optimised GBP can attract searches from across the area.' },
                { label: 'GBP + website together', body: 'We build SEO-ready websites from £250 — many Corsham clients combine website and local SEO for the fastest results.' },
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

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Corsham</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTag className="mb-4">Also in this area</SectionTag>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link
                href="/website-designer-corsham"
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-white font-semibold text-sm mb-1">Website Designer Corsham</div>
                <div className="text-gray-400 text-xs">Fast, mobile-first websites for Corsham trades — from £250</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  View page
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link
                href="/areas/corsham"
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-white font-semibold text-sm mb-1">Corsham Area Hub</div>
                <div className="text-gray-400 text-xs">All web design &amp; SEO services across Corsham and SN13</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  View page
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link
                href="/local-seo/bath"
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-white font-semibold text-sm mb-1">Local SEO Bath</div>
                <div className="text-gray-400 text-xs">Also covering Bath — Map Pack and local search for BA1 &amp; BA2</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  View page
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default LocalSEOCorsham;
