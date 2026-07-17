'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Bristol", "local seo Bristol" and every trade and service search across BS1–BS16',
  'Google Business Profile optimisation so you appear in the Map Pack for Bristol searches',
  'Website SEO: service pages, location pages and content that ranks across Bristol',
  'Local citations and backlinks from relevant directories',
  'Review growth strategy and professional responses to every review',
  'Structured data and quotable content so AI tools — ChatGPT, Google AI Overviews — can recommend you, not just Google',
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
    detail: "Top 3 Map Pack for one of the region's most competitive trade keywords — consistent enquiries from Google Maps.",
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
    business: 'RG Extreme Pressure',
    location: 'Bristol area',
    result: '102 pages',
    keyword: '"pressure washing"',
    detail: 'Migrated from a slow 102-page Wix site to a fast custom build — every page rebuilt for speed and local rankings.',
    slug: 'rg-extreme-pressure',
  },
  {
    business: 'Aspect Builds',
    location: 'Bath',
    result: '40-page site',
    keyword: '"builders Bath"',
    detail: 'No website, just Instagram → 40-page professional site live in 2 weeks, with service pages, area pages and Google Business Profile integration.',
    slug: 'aspect-builds',
  },
];

const faqs = [
  {
    q: 'What does local SEO do for a Bristol business?',
    a: 'It makes you visible when people in Bristol search for your trade or service on Google. That means appearing in the Map Pack — the three businesses shown with pins at the top of results — and in the organic listings below. Both drive calls and enquiries from people who are ready to buy, whether they search "plumber Bristol" or "electrician BS5".',
  },
  {
    q: 'Is Bristol competitive for local SEO?',
    a: "It's the biggest and most competitive market in the South West — but that cuts both ways. City-wide keywords are hard, but Bristol behaves like a collection of neighbourhood markets: searches in Easton, St George or Whitchurch are far less contested than the city centre, and most trades there still have no real web presence. We target the suburbs where you actually work, not just the city-wide keyword.",
  },
  {
    q: 'How much does local SEO cost in Bristol?',
    a: 'Our packages start from £150/month. Every new client gets a free audit first — we check your current rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly quote.',
  },
  {
    q: 'How long before I see results?',
    a: 'Google Business Profile optimisation can show results within weeks. Ranking for competitive terms like "plumber Bristol" typically takes 3–6 months; suburb-level terms like "decorator Totterdown" or "builder BS5" usually move faster. We give you monthly reports so you see exactly what\'s moving.',
  },
  {
    q: 'Do I need a website as well as local SEO?',
    a: "A Google Business Profile alone can win work, but a website makes every other signal stronger. If you don't have one, we build fast, SEO-ready sites from £250. Many clients do website and SEO together as a package — one team, one plan.",
  },
  {
    q: 'Does local SEO help me show up in ChatGPT and Google AI answers?',
    a: "Yes. AI assistants answer \"who's a good plumber in Bristol?\" by reading the same indexed pages Google ranks — your website, your Google Business Profile and your reviews. The local SEO work we do (structured data, direct answers to common questions, consistent business details, genuine reviews) is exactly what makes a business quotable in those answers. One campaign covers both.",
  },
  {
    q: 'Which parts of Bristol do you cover for local SEO?',
    a: 'The whole city. In the centre: BS1 including Broadmead, the Harbourside, the Old City and Redcliffe. North and west: Clifton, Redland, Cotham, Bishopston and Horfield. East: Easton, St George, Kingswood and Brislington. South: Bedminster, Southville, Totterdown, Knowle, Whitchurch and Stockwood. Plus Filton, Bradley Stoke, Yate and Long Ashton on the edges. Each area has its own dedicated page, and campaigns are structured around the suburbs and postcodes where your customers actually search.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/bristol',
      url: 'https://seo-kings.co.uk/local-seo/bristol',
      name: 'Local SEO Bristol | From £150/mo | Map Pack Results | SEO Kings',
      description: 'Local SEO for Bristol BS1–BS16. Google Business Profile optimisation and neighbourhood-level campaigns that put trades in the Map Pack. From £150/mo. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://seo-kings.co.uk/local-seo' },
          { '@type': 'ListItem', position: 3, name: 'Bristol' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency serving Bristol BS1–BS16. Google Business Profile optimisation, website SEO and review growth for trades and local businesses across Bristol and the surrounding area.',
      url: 'https://seo-kings.co.uk/local-seo/bristol',
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
        { '@type': 'City', name: 'Bristol' },
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

const LocalSEOBristol = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      <ServicePageHero
        badge="Serving BS1–BS16 · Bristol"
        title="Local SEO"
        highlight="Bristol"
        description="Our local SEO Bristol service gets trades and businesses into the Google Map Pack across the city. Bristol is the biggest market in the South West — when someone searches for your trade, the three businesses at the top take most of the calls. We target the suburbs where you actually work, not just the city-wide keyword."
        features={['From £150/month', 'Free audit included', 'Google Business Profile', 'Serving BS1–BS16']}
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
                A proper local SEO system for Bristol
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Bristol is too big to win with one generic campaign. To rank consistently you need a complete, well-maintained system — Google Business Profile, website, citations and reviews working together — targeted at the neighbourhoods where your customers are. We build that system and run it for you every month.
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
              Local SEO Bristol — win the suburbs, then the city
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bristol is a high-intent search market. When someone types "plumber Bristol" or "electrician BS5" into Google, they're not browsing — they need someone now. The three businesses in the Map Pack capture most of those calls. Below the Map Pack, click rates fall sharply. If your business isn't in those top three positions, you're largely invisible to people who are ready to spend money.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The mistake most Bristol trades make is fighting for the city-wide keyword and nothing else. Bristol behaves like a collection of neighbourhood markets: "builder Easton", "decorator Totterdown" and "cleaner Whitchurch" have real search volume, far less competition, and customers who are closer to your van. We build campaigns around the suburbs you actually serve — and the city-wide rankings follow as the local signals stack up.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We cover the whole city with dedicated area pages: the city centre and Redcliffe in the middle; Clifton, Redland, Cotham and Bishopston in the north-west; Easton, St George, Kingswood and Brislington in the east; Bedminster, Southville, Totterdown, Knowle, Whitchurch and Stockwood in the south; and Filton, Bradley Stoke, Yate and Long Ashton on the edges. Wherever your customers are, the targeting is already built.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're based in Keynsham, on Bristol's south-east edge — ten minutes from Brislington and Kingswood. This isn't a national agency managing your account from a spreadsheet. Every client gets a direct line to the person running their campaign, monthly reports with real numbers, and a clear explanation of what we're doing and why.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Map Pack or nothing', body: 'The top 3 local results capture the majority of clicks. In a market Bristol\'s size, being fourth is invisible.' },
              { title: 'Suburbs first', body: 'Neighbourhood keywords rank faster and convert better — we target Easton, Bedminster or Kingswood before fighting the whole city.' },
              { title: 'All of BS1–BS16', body: 'Full coverage from the Harbourside to Kingswood, Bishopston to Whitchurch — 22 dedicated area pages already built.' },
              { title: 'Local, not national', body: 'Based in Keynsham on Bristol\'s south-east edge. We know the market, speak to clients directly, and report in plain English.' },
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Bristol</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Bristol services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in Bristol</SectionTag>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/areas/bristol" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Bristol Area Hub</div>
                <div className="text-xs text-gray-500">All web design & SEO services across Bristol and every suburb</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/web-design" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Web Design</div>
                <div className="text-xs text-gray-500">Fast, mobile-first websites for Bristol trades — from £250</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/local-seo/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO Bath</div>
                <div className="text-xs text-gray-500">Map Pack campaigns across Bath BA1 & BA2</div>
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

export default LocalSEOBristol;
