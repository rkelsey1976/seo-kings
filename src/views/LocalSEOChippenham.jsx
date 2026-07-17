'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Chippenham", "local seo Chippenham" and every trade search in SN14 and SN15',
  'Google Business Profile optimisation so you appear in the Map Pack for Chippenham searches',
  'Website SEO: service pages, location pages and content that ranks in SN14/SN15',
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
    business: 'Aspect Builds',
    location: 'Bath',
    result: '40-page site',
    keyword: '"builders Bath"',
    detail: 'No website, just Instagram → 40-page professional site live in 2 weeks, complete with service pages, area pages and Google Business Profile integration.',
    slug: 'aspect-builds',
  },
  {
    business: 'RG Extreme Pressure',
    location: 'Bath',
    result: 'Page 1',
    keyword: '"pressure washing Bath"',
    detail: 'New site and local SEO campaign — ranking page one for key pressure washing terms across Bath and Wiltshire.',
    slug: 'rg-extreme-pressure',
  },
];

const faqs = [
  {
    q: 'What does local SEO do for a Chippenham business?',
    a: 'It gets you visible when people in Chippenham, Corsham, Calne and the surrounding SN14/SN15 area search for your trade or service on Google. That means showing up in the Map Pack — the three businesses with pins on Google Maps — and in the organic results below. Both drive real phone calls and enquiries.',
  },
  {
    q: 'How much does local SEO cost in Chippenham?',
    a: 'Our packages start from £150/month. We offer a free audit first — we check your current Google rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly quote.',
  },
  {
    q: 'How long before I see results in Chippenham?',
    a: "Google Business Profile optimisation can produce results within a few weeks. Ranking for competitive terms like 'plumber Chippenham' or 'electrician SN14' typically takes 3–6 months. We give you monthly reports so you can see progress throughout.",
  },
  {
    q: 'Is Chippenham competitive for local SEO?',
    a: "Chippenham is a large Wiltshire market town with strong trade demand. It's more competitive than smaller towns like Corsham or Calne, but less so than Bath — meaning the Map Pack is achievable for any well-optimised business with consistent effort.",
  },
  {
    q: 'Do I need a website as well as local SEO?',
    a: "You can do a lot with Google Business Profile alone, but a website makes every signal stronger. If you don't have one, we build fast, SEO-ready sites from £250 — and many Chippenham clients combine website and SEO together.",
  },
  {
    q: 'What areas near Chippenham do you cover?',
    a: 'We cover Chippenham and the surrounding area — including Corsham, Calne, Lacock, Box, Malmesbury, Melksham and across into Bath. We target the exact postcodes your customers search from.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/chippenham',
      url: 'https://seo-kings.co.uk/local-seo/chippenham',
      name: 'Local SEO Chippenham | Get in the Map Pack from £150/month',
      description: 'We get Chippenham trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency serving Chippenham and SN14/SN15. Google Business Profile optimisation, website SEO and review growth for trades and local businesses across Chippenham, Corsham, Calne and north Wiltshire.',
      url: 'https://seo-kings.co.uk/local-seo/chippenham',
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
        { '@type': 'City', name: 'Chippenham' },
        { '@type': 'City', name: 'Corsham' },
        { '@type': 'City', name: 'Calne' },
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

const LocalSEOChippenham = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge="Serving SN14 · SN15 · Chippenham"
        title="Local SEO"
        highlight="Chippenham"
        description="Chippenham is one of Wiltshire's largest market towns — with strong trade demand and a Map Pack that's genuinely winnable. We get Chippenham businesses ranking on Google for every relevant local search across SN14 and SN15."
        features={['From £150/month', 'Free audit included', 'Google Business Profile', 'Serving SN14/SN15']}
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
                Everything you need to rank in Chippenham
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most trades in Chippenham are invisible on Google. A proper local SEO system — not a one-off tidy-up — is what separates businesses that consistently win work from those that rely on word of mouth alone.
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
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Chippenham market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham — well placed to serve Chippenham and the whole SN14/SN15 area. Chippenham is one of Wiltshire&apos;s largest towns, with a mix of residential estates, period properties, retail and a growing business community. Demand for local trades is strong and consistent.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We cover Chippenham and the surrounding area: Corsham, Calne, Lacock, Box, Malmesbury, Melksham and across into Bath. We target the exact postcodes your customers search from.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Need a website too? We build fast, SEO-ready sites from £250. See our{' '}
              <Link href="/website-designer-chippenham" className="underline hover:text-white transition-colors text-primary">website design Chippenham</Link>{' '}
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
          <SectionTag className="mb-4">Why SN14/SN15 is worth targeting</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            Local SEO in Chippenham — large market, achievable Map Pack, north Wiltshire reach
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Chippenham has a population of around 40,000 and sits at the heart of north Wiltshire — making it one of the most strategically valuable areas for any trade business to rank in. Searches like &quot;plumber Chippenham&quot;, &quot;electrician SN14&quot; or &quot;roofer Calne&quot; happen every day, and most of the businesses appearing are under-optimised.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Map Pack in Chippenham is competitive but winnable. Most local businesses have a basic Google Business Profile with no posts, few reviews and a website that hasn&apos;t been touched for years. A consistent SEO campaign — GBP optimisation, website improvements and review growth — can break into the top three within a few months.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We start with your GBP because that&apos;s the fastest route to visible results. A properly optimised profile can produce real movement in weeks. Website SEO builds on that over 3–6 months to lock in your position.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Wiltshire's largest market", body: "40,000+ population and growing — one of the biggest untapped trade markets between Bath and Swindon." },
                { label: 'SN14/SN15 Map Pack is winnable', body: 'Most Chippenham trades are under-optimised — consistent GBP and website work can crack the top three within months.' },
                { label: 'North Wiltshire reach', body: 'Ranking in Chippenham naturally pulls in searches from Corsham, Calne, Lacock, Malmesbury and surrounding villages.' },
                { label: 'GBP + website together', body: 'We build SEO-ready websites from £250 — many Chippenham clients combine website and local SEO for the fastest results.' },
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Chippenham</h2>
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
                href="/website-designer-chippenham"
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-white font-semibold text-sm mb-1">Website Designer Chippenham</div>
                <div className="text-gray-400 text-xs">Fast, mobile-first websites for Chippenham trades — from £250</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  View page
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <Link
                href="/local-seo/corsham"
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-white font-semibold text-sm mb-1">Local SEO Corsham</div>
                <div className="text-gray-400 text-xs">Also covering Corsham — Map Pack and local search for SN13</div>
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

export default LocalSEOChippenham;
