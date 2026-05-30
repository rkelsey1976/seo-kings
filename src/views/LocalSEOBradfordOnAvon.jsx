'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Bradford on Avon", "local seo Bradford on Avon" and every trade search in BA15',
  'Google Business Profile optimisation so you appear in the Map Pack for Bradford on Avon searches',
  'Website SEO: service pages, location pages and content that ranks in BA15',
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
    business: 'New Decorating',
    location: 'Bath',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    detail: "Top 3 Map Pack for one of Bath's most competitive trade keywords — consistent enquiries from Google Maps.",
    slug: 'new-decorating',
  },
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    detail: 'Ranked in the Google Map Pack within months of launch — now generating regular enquiries from local searches.',
    slug: 'peachy-cleans',
  },
  {
    business: 'Bath Painter',
    location: 'Bath',
    result: 'Bespoke',
    keyword: '"painter and decorator Bath"',
    detail: 'Full brand and bespoke website delivered — enquiries up within a week of going live.',
    slug: 'bath-painter',
  },
];

const faqs = [
  {
    q: 'What does local SEO do for a Bradford on Avon business?',
    a: 'It gets you visible when people in Bradford on Avon, Winsley, Trowbridge and the surrounding BA15 area search for your trade or service on Google. That means showing up in the Map Pack — the three businesses with pins on Google Maps — and in the organic results below. Both drive real phone calls and enquiries.',
  },
  {
    q: 'How much does local SEO cost in Bradford on Avon?',
    a: 'Our packages start from £150/month. We offer a free audit first — we check your current Google rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly quote.',
  },
  {
    q: 'How long before I see results?',
    a: "Google Business Profile optimisation can produce results within a few weeks. Ranking for competitive terms like 'plumber Bradford on Avon' or 'electrician BA15' typically takes 3–6 months. We give you monthly reports so you can see progress.",
  },
  {
    q: 'Is Bradford on Avon competitive for SEO?',
    a: 'Very low competition — one of the strongest opportunities we see. Most Bradford on Avon trades have no website or a poorly optimised Google Business Profile. The bar to rank is significantly lower than in Bath, and results come much faster.',
  },
  {
    q: 'Do I need a website as well as local SEO?',
    a: "You can do a lot with Google Business Profile alone, but a website makes every signal stronger. If you don't have one, we build fast, SEO-ready sites from £250 — and many Bradford on Avon clients do website and SEO together.",
  },
  {
    q: 'What areas near Bradford on Avon do you cover?',
    a: 'We cover Bradford on Avon and the surrounding BA15 area — including Winsley, Limpley Stoke, Trowbridge, Corsham, Melksham, Westwood and the corridor into Bath.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/bradford-on-avon',
      url: 'https://seo-kings.co.uk/local-seo/bradford-on-avon',
      name: 'Local SEO Bradford on Avon | Get in the Map Pack from £150/month',
      description: 'We get Bradford on Avon trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://seo-kings.co.uk/local-seo' },
          { '@type': 'ListItem', position: 3, name: 'Bradford on Avon' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency serving Bradford on Avon and BA15. Google Business Profile optimisation, website SEO and review growth for trades and local businesses across Bradford on Avon, Bath and Wiltshire.',
      url: 'https://seo-kings.co.uk/local-seo/bradford-on-avon',
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
        { '@type': 'City', name: 'Bradford on Avon' },
        { '@type': 'City', name: 'Bath' },
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

const LocalSEOBradfordOnAvon = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge="Serving BA15 · Bradford on Avon"
        title="Local SEO"
        highlight="Bradford on Avon"
        description="Bradford on Avon is one of Wiltshire's most affluent towns — and most trades here are invisible on Google. When homeowners search for your service in BA15, we make sure they find you in the Map Pack, not a competitor from Bath or Trowbridge."
        features={['From £150/month', 'Free audit included', 'Google Business Profile', 'Serving BA15']}
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
                Everything you need to rank in Bradford on Avon
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Bradford on Avon sits between Bath and Trowbridge — your customers are searching from both towns. A proper local SEO system makes sure you appear for all of them, whether they search your trade in BA15, Bath or across Wiltshire.
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
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know Bradford on Avon</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham — just up the road from Bradford on Avon. We understand the BA15 market: affluent homeowners who research online before booking, period properties needing premium trades, and almost no SEO competition from local agencies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We cover Bradford on Avon and the surrounding area: Winsley, Limpley Stoke, Trowbridge, Corsham, Melksham and the Bath corridor. We target the exact postcodes your customers search from.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Need a website too? We build fast, SEO-ready sites from £250. See our{' '}
              <Link href="/website-designer-bradford-on-avon" className="underline hover:text-white transition-colors text-primary">website design Bradford on Avon</Link>{' '}
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
          <SectionTag className="mb-4">Why BA15 is worth targeting</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            Local SEO in Bradford on Avon — premium market, almost no competition, fast results
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Bradford on Avon is one of Wiltshire&apos;s most sought-after towns. BA15 has a high concentration of period stone properties, listed buildings and professional homeowners who spend properly on the trades they trust. The demand is real and consistent.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                The opportunity online is just as strong. Most Bradford on Avon trades are either invisible on Google or relying on an outdated website. The Google Map Pack — the three businesses that appear at the top of local results — is almost uncontested here compared to Bath or Trowbridge.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We start with your Google Business Profile, because that&apos;s what drives Map Pack rankings. A fully optimised GBP with the right categories, photos, description, Q&amp;A and regular posts can show visible results within weeks. Website SEO on top of that consolidates your position and builds authority over time.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Affluent, high-spend market', body: 'BA15 homeowners expect professional trades and pay accordingly — exactly the customers a proper Google presence attracts.' },
                { label: 'Map Pack is wide open', body: 'Most Bradford on Avon trades have weak or missing GBPs. Low competition means fast Map Pack entry.' },
                { label: 'Dual-market reach', body: 'Bradford on Avon sits between Bath and Trowbridge — one SEO campaign can target customers from both towns.' },
                { label: 'GBP + website together', body: 'We offer web design from £250 — many clients do website and local SEO together for the fastest results.' },
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Bradford on Avon</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">Also in this area</SectionTag>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/website-designer-bradford-on-avon" className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group">
                <div className="text-white font-semibold text-sm mb-1">Website Designer Bradford on Avon</div>
                <div className="text-gray-400 text-xs">Fast, mobile-first websites for Bradford on Avon trades — from £250</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">View page<svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
              </Link>
              <Link href="/areas/bradford-on-avon" className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group">
                <div className="text-white font-semibold text-sm mb-1">Bradford on Avon Area Hub</div>
                <div className="text-gray-400 text-xs">All web design &amp; SEO services across Bradford on Avon and BA15</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">View page<svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default LocalSEOBradfordOnAvon;
