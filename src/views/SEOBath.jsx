'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Technical SEO: site speed, Core Web Vitals, crawlability, indexation — we fix what holds you back',
  'On-page SEO: keyword research, title tags, headings, internal links, content structure for every page',
  'Off-page SEO: local citations, directory listings, backlink building from relevant sources',
  'Google Business Profile optimisation for Map Pack visibility across Bath postcodes',
  'Content strategy: blog posts, service pages, location pages that target real search queries',
  'Monthly reporting: keyword rankings, organic traffic, calls and leads — plain English, no jargon',
];

const packages = [
  { name: 'Starter', desc: 'Technical audit + on-page SEO', price: '£150/mo' },
  { name: 'Growth', desc: 'Full SEO campaign + content', price: '£300/mo' },
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
    q: 'What SEO services do you offer in Bath?',
    a: 'Full-spectrum SEO: technical audits, on-page optimisation, content creation, local SEO with Google Business Profile management, citation building and monthly reporting. We work with trades, small businesses and service companies across BA1 and BA2.',
  },
  {
    q: 'How much does SEO cost in Bath?',
    a: 'Our packages start from £150/month. Every new client gets a free audit first — we check your current rankings, your website health and your competitive landscape, then give you a clear plan and a fixed monthly quote.',
  },
  {
    q: 'How long before SEO starts working?',
    a: 'Google Business Profile optimisation can show results within weeks. On-page and technical SEO improvements typically show ranking movement within 1-3 months. Competitive terms take 3-6 months. We report monthly so you see exactly what\'s moving and when.',
  },
  {
    q: 'Do you only do local SEO?',
    a: 'We specialise in SEO for local businesses — trades, service companies and small businesses that serve a specific area. That includes local SEO (GBP, citations, map pack) but also covers technical SEO, content strategy and on-page optimisation. If you serve customers in and around Bath, we can rank you.',
  },
  {
    q: 'What makes SEO Kings different from other Bath SEO agencies?',
    a: 'We work exclusively with trades and small businesses — not ecommerce, not SaaS, not national brands. That specialisation means we know the search landscape for your industry, the keywords that actually drive calls, and the shortcuts that work in BA1 and BA2. We\'re also based in Keynsham, five miles from Bath — you deal with the person running your campaign, not an account manager.',
  },
  {
    q: 'Do I need a new website as well as SEO?',
    a: 'Not necessarily. If your current site is fast and well-structured, SEO alone can move you. If it\'s slow or poorly built, a new site is the faster route. We build fast, SEO-ready sites from £250 — many clients do website and SEO together as one package.',
  },
  {
    q: 'What areas of Bath do you cover?',
    a: 'All of BA1 and BA2 — city centre, Widcombe, Oldfield Park, Bear Flat, Larkhall, Twerton, Bathampton, Combe Down, Odd Down, Weston, Bathwick, Walcot, Southdown, Batheaston and Bathford. We also cover Keynsham, Midsomer Norton, Radstock, Corsham, Chippenham and the wider BANES area.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/seo/bath',
      url: 'https://seo-kings.co.uk/seo/bath',
      name: 'SEO Bath — SEO Agency for Trades & Small Business | SEO Kings',
      description: 'SEO agency in Bath BA1 & BA2. Technical SEO, on-page optimisation, content strategy and local SEO for trades and small businesses from £150/month. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'SEO Bath', item: 'https://seo-kings.co.uk/seo/bath' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'SEO agency in Bath serving trades and small businesses across BA1, BA2 and BANES. Technical SEO, on-page optimisation, content strategy and local SEO from £150/month.',
      url: 'https://seo-kings.co.uk/seo/bath',
      telephone: '+447****4921',
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
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
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
        { label: 'New Decorating — Map Pack', value: 'Top 3' },
        { label: 'Peachy Cleans — Map Pack', value: '#1' },
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

const SEOBath = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      <ServicePageHero
        badge="SEO Agency · Bath & BANES"
        title="SEO"
        highlight="Bath"
        description="When someone in Bath searches for your service, the businesses on page one take the calls. We get you there — technical SEO, on-page optimisation, content and local signals, all working together."
        features={['From £150/month', 'Free audit included', 'Trades & small business', 'Serving BA1 & BA2']}
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
                SEO services built for Bath businesses
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                SEO isn't one thing — it's a stack of signals that Google reads to decide who ranks. Technical health, on-page structure, content depth, local authority, backlinks. Most Bath businesses have one or two of these covered. We cover all of them, every month.
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
                href="/local-seo/bath"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm mt-3 transition-colors duration-200 text-primary"
              >
                Looking for local SEO specifically? →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Verified results</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Real results for Bath businesses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-2xl font-bold mb-1 text-primary">{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
                {r.detail && <p className="text-gray-500 text-xs mt-2 leading-relaxed">{r.detail}</p>}
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
          <div className="max-w-3xl mb-12">
            <SectionTag className="mb-4">Why it works</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              SEO in Bath — why most businesses are leaving money on the table
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath is a high-intent search market. When someone types "plumber Bath" or "electrician BA1" into Google, they need someone now. The businesses on page one get those calls. Everyone else gets nothing. It's that binary — and most Bath trades and small businesses are not on page one.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The gap is usually wider than people think. A fast website with proper title tags, structured content and a managed Google Business Profile can outrank the majority of existing results in Bath within a few months. Not because the competition is weak — but because most of them have never done the basics properly.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We handle the full SEO stack: technical health, on-page structure, content that targets real search queries, local authority building and monthly reporting. No single piece of this works in isolation — you need all of it, maintained consistently, to climb and stay there. That's what we do every month for businesses across BA1 and BA2.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're based in Keynsham, five miles from Bath. We work exclusively with trades and small businesses across Bath and North East Somerset — this isn't a national agency managing your account from a spreadsheet. Every client gets a direct line to the person running their campaign, monthly reports with real numbers, and a clear explanation of what we're doing and why.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Technical SEO first', body: 'If your site is slow or broken, nothing else matters. We fix the foundations before building on top — Core Web Vitals, crawlability, indexation.' },
              { title: 'Content that ranks', body: 'Service pages, location pages, blog posts — every page targets a real search query with real search volume in Bath and BANES.' },
              { title: 'Local authority', body: 'Google Business Profile, local citations, review strategy. The signals that matter most for businesses serving a specific area.' },
              { title: 'Local, not national', body: 'Based in Keynsham, five miles from Bath. We know the market, speak to clients directly, and report in plain English.' },
            ].map((card) => (
              <div key={card.title} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="text-white font-semibold text-sm mb-2">{card.title}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about SEO in Bath</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in Bath</SectionTag>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO Bath</div>
                <div className="text-xs text-gray-500">GBP optimisation, citations and Map Pack rankings for Bath trades</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/website-designer-bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Website Designer Bath</div>
                <div className="text-xs text-gray-500">Fast, mobile-first websites for Bath trades — from £250</div>
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

export default SEOBath;