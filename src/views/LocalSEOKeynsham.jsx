'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Keynsham", "local seo Keynsham" and every trade and service you offer',
  'Google Business Profile optimisation so you appear in the Map Pack for Keynsham searches',
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
    q: 'What does local SEO actually do for a Keynsham business?',
    a: 'It makes you visible when people in Keynsham, BS31 and the surrounding area search for your trade or service. That means showing up in the Map Pack (the 3 businesses with pins on Google Maps) and in the organic results below. Both drive real enquiries.',
  },
  {
    q: 'How much does local SEO cost in Keynsham?',
    a: 'Our Keynsham SEO packages start from £150/month. Every new client gets a free audit first — we check your current rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly cost.',
  },
  {
    q: 'How long before I see results?',
    a: 'Google Business Profile optimisation can show results within weeks. Ranking for competitive terms like "plumber Keynsham" or "electrician BS31" typically takes 3–6 months of consistent work. We give you monthly reports so you can see progress.',
  },
  {
    q: 'Do I need a website for local SEO?',
    a: "You can do a lot with Google Business Profile alone, but a website makes every other signal stronger. If you don't have one, we build fast, SEO-ready sites from £250 — often the best starting point for a Keynsham trade.",
  },
  {
    q: 'Do you cover Bitton, Saltford, Oldland and the surrounding villages?',
    a: 'Yes. We cover all of BS31 — Keynsham, Bitton, Saltford, Oldland, Longwell Green and Warmley. We target the exact postcodes and place names your customers search from.',
  },
  {
    q: 'Can you do SEO and a new website together?',
    a: 'Yes — most of our Keynsham clients do both. A new site built from scratch to rank is the fastest route to results. One team, one plan, no finger-pointing between a web designer and an SEO agency.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/keynsham',
      url: 'https://seo-kings.co.uk/local-seo/keynsham',
      name: 'Local SEO Keynsham | SEO Kings',
      description: 'Local SEO for businesses in Keynsham BS31. Google Business Profile optimisation, website SEO and review growth from £150/month. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://seo-kings.co.uk/local-seo' },
          { '@type': 'ListItem', position: 3, name: 'Keynsham' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency based in Keynsham offering Google Business Profile optimisation, website SEO and review growth for trades and local businesses across BS31 and Bath & North East Somerset.',
      url: 'https://seo-kings.co.uk/local-seo/keynsham',
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
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Bath' },
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

const LocalSEOKeynsham = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge="Based in Keynsham · BS31 2DW"
        title="Local SEO"
        highlight="Keynsham"
        description="When someone in Keynsham searches for your trade or service, are you showing up? We help local businesses in BS31 rank on Google — in the Map Pack and in the organic results — so the right customers find you first."
        features={['From £150/month', 'Free audit included', 'Google Business Profile', 'Based in Keynsham']}
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
                Everything you need to rank in Keynsham
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Local SEO isn't just adding your postcode to a page. It's a consistent system — optimising your Google Business Profile, building local authority, generating reviews, and making sure your website earns trust with Google. We do all of it.
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
            <SectionTag className="mb-4">Local SEO in Keynsham</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Local SEO in Keynsham — why BS31 is our home patch
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                SEO Kings is based at 16a Culvers Road — Keynsham is not a target market for us, it&apos;s where we work. That means we know the local search landscape in BS31 better than any agency operating out of Bath or Bristol. We know which trade categories are over-subscribed and which have barely any competition. We know which local directories Google trusts for BS31 citations. And we know what the businesses currently in the Map Pack are doing — and what they&apos;re not.
              </p>
              <p>
                The Map Pack is the thing that matters most for local trades in Keynsham. The three businesses with pins on Google Maps get the majority of clicks — especially on mobile, where most local searches happen. Getting into those three spots is achievable for most Keynsham trades because the market here is less saturated than Bath. We&apos;ve seen businesses move from invisible to Map Pack within weeks of proper Google Business Profile optimisation.
              </p>
              <p>
                BS31 is also well-positioned geographically. Keynsham sits between Bath to the west and the Somer Valley to the south, with Bristol not far north. A Keynsham trade with a well-structured site and GBP can realistically pull enquiries from Bath, Saltford, Bitton, Oldland, Longwell Green and Warmley — covering a much bigger catchment than the town itself.
              </p>
              <p>
                Most local SEO work starts with the Google Business Profile because it&apos;s the fastest lever. But the businesses that hold their rankings long-term combine GBP optimisation with a properly built website, a consistent review strategy, and local citations that reinforce the location signals. We run all of it — one team, one plan, no hand-offs.
              </p>
              <p>
                Need a website as well as SEO? We build fast, Google-ready sites from £250. Most Keynsham clients do both together — it&apos;s the fastest route to results and means everything is aligned from day one. See our <Link href="/website-designer-keynsham" className="text-primary hover:text-white transition-colors underline underline-offset-2">website design Keynsham</Link> page for details.
              </p>
            </div>
            <address className="not-italic text-sm text-gray-400 leading-relaxed border-l-2 pl-4 border-primary mt-8">
              SEO Kings<br />
              16a Culvers Road<br />
              Keynsham, Somerset<br />
              BS31 2DW<br />
              <a href="tel:+447702264921" className="hover:text-white transition-colors">07702 264 921</a>
            </address>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Actually based here',
                body: '16a Culvers Road, BS31 2DW. We know which BS31 directories matter, which keywords drive calls, and who you\'re competing with on Google Maps.',
              },
              {
                label: 'Map Pack focus',
                body: 'The 3-pack gets most of the clicks. Google Business Profile optimisation is the fastest win for any Keynsham trade — and the results come quickly in BS31.',
              },
              {
                label: 'BS31 is winnable',
                body: 'Less competition than Bath or Bristol. A properly optimised GBP and website can move a Keynsham trade from invisible to page one in months, not years.',
              },
              {
                label: 'Web + SEO together',
                body: 'Site and SEO from one team — no finger-pointing between a web designer and a separate SEO agency. One plan, one point of contact.',
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
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Keynsham</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in this area</SectionTag>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/website-designer-keynsham" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Website Designer Keynsham</div>
                <div className="text-xs text-gray-400">Fast, mobile-first websites for Keynsham trades — from £250</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/areas/keynsham" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Keynsham Area Hub</div>
                <div className="text-xs text-gray-400">All web design &amp; SEO services across Keynsham and BS31</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/local-seo/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO Bath</div>
                <div className="text-xs text-gray-400">Also covering Bath — Map Pack and local search for BA1 &amp; BA2</div>
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

export default LocalSEOKeynsham;
