'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Midsomer Norton", "seo agency Midsomer Norton" and every trade search in your area',
  'Google Business Profile optimisation so you appear in the Map Pack for Midsomer Norton searches',
  'Website SEO: service pages, location pages and content that ranks in BA3',
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
    detail: 'Ranked in the Google Map Pack for their primary keyword — consistent local enquiries from Google Maps.',
    slug: 'peachy-cleans',
  },
  {
    business: 'New Decorating',
    location: 'Bath / Somerset',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    detail: 'Top 3 Map Pack for one of Bath\'s most competitive trade keywords — proves the same method scales.',
    slug: 'new-decorating',
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
    q: 'What does local SEO do for a Midsomer Norton business?',
    a: 'It gets you visible when people in Midsomer Norton, Radstock, Paulton and the surrounding BA3 area search for your trade or service on Google. That means appearing in the Map Pack — the three businesses shown with pins on Google Maps — and in the organic results below. Both drive real phone calls and enquiries.',
  },
  {
    q: 'How much does local SEO cost in Midsomer Norton?',
    a: 'Our packages start from £150/month. We offer a free audit first — we check your current Google rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly quote with no surprises.',
  },
  {
    q: 'How long before I see results from SEO?',
    a: "Google Business Profile optimisation can produce results within a few weeks. Ranking for competitive searches like 'electrician Midsomer Norton' or 'plumber BA3' typically takes 3–6 months of consistent work. We give you monthly reports so you see exactly what's moving.",
  },
  {
    q: 'Is Midsomer Norton competitive for SEO?',
    a: "Less competitive than Bath — which works in your favour. Many Midsomer Norton trades have no website or a poor Google Business Profile, so the bar to rank is lower. We've helped local businesses here get into the Map Pack within months.",
  },
  {
    q: 'Do I need a website as well as local SEO?',
    a: "A Google Business Profile alone can win work, but a website makes every other signal stronger and gives you more ranking opportunities. If you don't have one, we build fast, SEO-ready sites from £250 — and many Midsomer Norton clients do website and SEO together as a package.",
  },
  {
    q: 'What areas near Midsomer Norton do you cover?',
    a: 'We cover all of BA3: Midsomer Norton, Radstock, Paulton, Peasedown St John, Westfield, Timsbury, High Littleton, Hallatrow, Clandown, Writhlington and Chilcompton. We target the exact postcodes your customers search from.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/midsomer-norton',
      url: 'https://seo-kings.co.uk/local-seo/midsomer-norton',
      name: 'Local SEO Midsomer Norton | Get in the Map Pack from £150/month | SEO Kings',
      description: 'Local SEO for businesses in Midsomer Norton BA3. Google Business Profile optimisation, website SEO and review growth from £150/month. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency serving Midsomer Norton and BA3. Google Business Profile optimisation, website SEO and review growth for trades and local businesses across Bath and North East Somerset.',
      url: 'https://seo-kings.co.uk/local-seo/midsomer-norton',
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
        { '@type': 'City', name: 'Midsomer Norton' },
        { '@type': 'City', name: 'Radstock' },
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

const LocalSEOMidsomerNorton = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge="Serving BA3 · Somer Valley"
        title="Local SEO"
        highlight="Midsomer Norton"
        description="When someone in Midsomer Norton searches for your trade or service, are you the first result they see? We help businesses across BA3 and the Somer Valley rank in the Map Pack and the organic results — so you get more calls and more work."
        features={['From £150/month', 'Free audit included', 'Google Business Profile', 'Serving BA3']}
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
                Everything you need to rank in Midsomer Norton
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most trades in Midsomer Norton and the Somer Valley are invisible on Google. A basic listing and a neglected website won't cut it. We build a proper local SEO system — one that keeps generating enquiries month after month.
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
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
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
                {r.detail && <p className="text-gray-400 text-xs mt-2 leading-relaxed">{r.detail}</p>}
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

      {/* Content expansion — why Somer Valley SEO works */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionTag className="mb-4">Why it works</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Local SEO in Midsomer Norton — why the Somer Valley market is a real advantage
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Most of our clients in Midsomer Norton and Radstock see results faster than clients in Bath. The reason is straightforward: BA3 is less contested. Bath has dozens of businesses competing for every trade keyword; Midsomer Norton often has two or three, many without a website or a properly configured Google Business Profile. The bar to rank is lower, and we know exactly where to set you above it.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Google's local algorithm rewards three things: relevance, distance and prominence. In Midsomer Norton, distance works in your favour — Google knows users want a local trade, and there aren't many well-optimised options to show them. We build your relevance through keyword-targeted content and accurate service categories, and your prominence through GBP reviews, local citations and consistent NAP data across every directory that matters.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The Map Pack is the primary target. For most trades in BA3, getting into the top three positions on Google Maps delivers more phone calls than the organic results below it. We've done it for Peachy Cleans in Midsomer Norton — and the same approach is available to any trade that serves the local area and is willing to invest consistently.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This method also scales across the wider Somer Valley. If you serve Radstock, Paulton, Peasedown St John and the villages beyond, we build location signals into every part of your SEO — page structure, GBP service areas, local citations — so Google understands the full scope of where you work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Lower competition', body: 'BA3 has fewer well-optimised businesses than Bath or Bristol — faster to rank, lower cost to hold position.' },
              { title: 'Map Pack focus', body: 'Top 3 on Google Maps drives most phone calls for local trades. That\'s where we put you.' },
              { title: 'BA3 coverage', body: 'Midsomer Norton, Radstock, Paulton and surrounding villages all targeted with precise local signals.' },
              { title: 'GBP first', body: 'Google Business Profile is the fastest route to visible results — we start there and build outwards.' },
            ].map((card) => (
              <div key={card.title} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local signals */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">Local knowledge</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Midsomer Norton market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham — we work exclusively across Bath and North East Somerset. We understand the Somer Valley market: which keywords drive enquiries in BA3, what the local competition looks like on Google, and which directories and citations matter for Midsomer Norton businesses.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We cover all of the BA3 area: Midsomer Norton, Radstock, Paulton, Westfield, Peasedown St John, Timsbury, High Littleton, Hallatrow, Clandown, Writhlington and Chilcompton.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Need a website too? We build fast, SEO-ready sites from £250. See our <Link href="/website-designer-midsomer-norton" className="underline hover:text-white transition-colors text-primary">website design Midsomer Norton</Link> page or <Link href="/contact" className="underline hover:text-white transition-colors text-primary">get in touch</Link> to discuss website and SEO together.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Midsomer Norton</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in this area</SectionTag>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/website-designer-midsomer-norton" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Website Designer Midsomer Norton</div>
                <div className="text-xs text-gray-400">Fast, mobile-first websites for Midsomer Norton trades — from £250</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/areas/midsomer-norton" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Midsomer Norton Area Hub</div>
                <div className="text-xs text-gray-400">All web design &amp; SEO services across Midsomer Norton and BA3</div>
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

export default LocalSEOMidsomerNorton;
