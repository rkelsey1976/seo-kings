'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Saltford", "local seo Saltford" and every trade search in BS31',
  'Google Business Profile optimisation so you appear in the Map Pack for Saltford searches',
  'Website SEO: service pages, location pages and content that ranks in BS31',
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
];

const faqs = [
  {
    q: 'What does local SEO do for a Saltford business?',
    a: 'It gets you visible when people in Saltford, Keynsham, Bath and the surrounding BS31 area search for your trade or service on Google. That means showing up in the Map Pack — the three businesses with pins on Google Maps — and in the organic results below. Both drive real phone calls and enquiries from people ready to hire.',
  },
  {
    q: 'How much does local SEO cost in Saltford?',
    a: 'Our packages start from £150/month. We offer a free audit first — we check your current Google rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly quote with no surprises.',
  },
  {
    q: 'How long before I see results from SEO?',
    a: 'Google Business Profile optimisation can produce results within a few weeks. Ranking for competitive terms like "plumber Saltford" or "electrician BS31" typically takes 3–6 months of consistent work. We give you monthly reports so you can see progress.',
  },
  {
    q: 'Is Saltford competitive for SEO?',
    a: 'Saltford sits between Bath and Keynsham, so you are competing for customers from both towns. Most local trades still have poor Google visibility, so there is real opportunity to rank well with the right SEO system in place.',
  },
  {
    q: 'Do I need a website as well as local SEO?',
    a: "You can do a lot with Google Business Profile alone, but a website makes every other signal stronger. If you don't have one, we build fast, SEO-ready sites from £250 — and many Saltford clients do website and SEO together as a package.",
  },
  {
    q: 'What areas near Saltford do you cover?',
    a: 'We cover Saltford and the surrounding BS31 area — including Keynsham, Corston, Newton St Loe, Kelston, Bitton and the corridor between Bath and Keynsham. We target the exact postcodes your customers search from.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/saltford',
      url: 'https://seo-kings.co.uk/local-seo/saltford',
      name: 'Local SEO Saltford | SEO Kings',
      description: 'Local SEO for businesses in Saltford BS31. Google Business Profile optimisation, website SEO and review growth from £150/month. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://seo-kings.co.uk/local-seo' },
          { '@type': 'ListItem', position: 3, name: 'Saltford' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency serving Saltford and BS31. Google Business Profile optimisation, website SEO and review growth for trades and local businesses across Bath and North East Somerset.',
      url: 'https://seo-kings.co.uk/local-seo/saltford',
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
        { '@type': 'City', name: 'Saltford' },
        { '@type': 'City', name: 'Keynsham' },
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

const LocalSEOSaltford = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge="Serving BS31 · Saltford"
        title="Local SEO"
        highlight="Saltford"
        description="Saltford businesses compete for customers from Bath, Keynsham and the surrounding BS31 area. When someone searches for your trade or service, are you showing up? We help local businesses rank in the Map Pack and the organic results — so the right customers find you first."
        features={['From £150/month', 'Free audit included', 'Google Business Profile', 'Serving BS31']}
        ctaText="Get a Free SEO Audit"
        rightPanel={rightPanel}
      />

      {/* What we do */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag className="mb-4">What's included</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Everything you need to rank in Saltford
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Saltford sits between Bath and Keynsham — your customers are searching from both towns. A proper local SEO system makes sure you appear for all of them, whether they search for your trade in BS31, Keynsham or Bath.
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
                <div className="text-gray-400 text-xs">{r.location}</div>
                {r.detail && <p className="text-gray-400 text-xs mt-3 leading-relaxed">{r.detail}</p>}
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

      {/* Content expansion */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <SectionTag className="mb-4">Local SEO in Saltford</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Local SEO in Saltford — ranking in the Bath–Keynsham corridor
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Saltford is a small village with an outsized search opportunity. Sitting on the A4 corridor between Bath and Keynsham means your customers search from both towns — and a properly set up Google Business Profile and website can appear in both catchment areas without separate campaigns for each. For a trade based in BS31, that&apos;s a significantly larger audience than the village population alone would suggest.
              </p>
              <p>
                The local competition is also lower than you&apos;d expect for a village so close to Bath. Most Saltford trades still have an unclaimed GBP, a slow website, or no web presence at all. The businesses currently showing up in Google for Saltford trade searches are often from Keynsham or Bath — not actually local. Getting into the Map Pack here is achievable quickly for a properly optimised business, because you&apos;re not fighting the full Bath market.
              </p>
              <p>
                Google Business Profile optimisation is the fastest lever. For a village like Saltford, a complete, active GBP — correct categories, photos, services, regular posts, review responses — can move you from invisible to the 3-pack in weeks. Most of the competition isn&apos;t doing this. We do it properly from day one and maintain it month on month.
              </p>
              <p>
                Saltford&apos;s above-average household incomes also mean the customers searching here are prepared to pay for quality. That makes it worth doing properly — a well-optimised GBP and a fast website that loads in under a second will convert more of those searches into calls than a generic one-page site.
              </p>
              <p>
                SEO Kings is based in Keynsham — five minutes away. We know BS31, we know which citations matter for this part of Bath and North East Somerset, and we know the search patterns that drive enquiries along the corridor. Need a website too? See our <Link href="/website-designer-saltford" className="text-primary hover:text-white transition-colors underline underline-offset-2">website design Saltford</Link> page — most clients do both together.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Dual market reach',
                body: 'BS31 catches searches from Bath and Keynsham. One properly built campaign covers both catchment areas without separate budgets.',
              },
              {
                label: 'Map Pack is achievable',
                body: "Less competition than Bath. Most Saltford trades aren't properly optimised — getting into the 3-pack here is faster than you'd expect.",
              },
              {
                label: 'GBP is the fastest win',
                body: 'A properly set up and active Google Business Profile is the single biggest lever for Map Pack visibility in a small village like Saltford.',
              },
              {
                label: 'Next door in Keynsham',
                body: "5 minutes away. You speak to the person doing the work — no account managers, no outsourcing, no hand-offs.",
              },
            ].map((card) => (
              <div key={card.label} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="text-white font-semibold text-sm mb-2">{card.label}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">FAQs</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Saltford</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in this area</SectionTag>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/website-designer-saltford" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Website Designer Saltford</div>
                <div className="text-xs text-gray-400">Fast, mobile-first websites for Saltford trades — from £250</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/areas/saltford" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Saltford Area Hub</div>
                <div className="text-xs text-gray-400">All web design & SEO services across Saltford and BS31</div>
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

export default LocalSEOSaltford;
