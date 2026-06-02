'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Radstock", "local seo Radstock" and every trade search in BA3',
  'Google Business Profile optimisation so you appear in the Map Pack for Radstock searches',
  'Website SEO: service pages, location pages and content that ranks across the Somer Valley',
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
    q: 'What does local SEO do for a Radstock business?',
    a: 'It gets you visible when people in Radstock, Midsomer Norton, Peasedown St John and the surrounding BA3 area search for your trade or service on Google. That means appearing in the Map Pack — the three businesses shown with pins at the top of Google Maps results — and in the organic listings below. Both drive real calls and enquiries from people who are ready to buy.',
  },
  {
    q: 'How much does local SEO cost in Radstock?',
    a: 'Our packages start from £150/month. We offer a free audit first — we check your current Google rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly quote with no surprises.',
  },
  {
    q: 'How long before I see results from SEO?',
    a: 'Google Business Profile optimisation can produce results within a few weeks. Ranking for searches like "electrician Radstock" or "plumber BA3" typically takes 3–6 months of consistent work. We give you monthly reports so you see exactly what\'s moving.',
  },
  {
    q: 'Is Radstock competitive for SEO?',
    a: "Less competitive than Bath or Bristol — which works strongly in your favour. Many Radstock trades have no website or a poorly optimised Google Business Profile, so the bar to rank is lower and results come faster. We've helped businesses in the Somer Valley get into the Map Pack within months.",
  },
  {
    q: 'Do I need a website as well as local SEO?',
    a: "A Google Business Profile alone can win work, but a website makes every other signal stronger and gives you more ranking opportunities. If you don't have one, we build fast, SEO-ready sites from £250 — and many Radstock clients do website and SEO together as a package.",
  },
  {
    q: 'What areas near Radstock do you cover?',
    a: 'We cover the whole of BA3: Radstock, Midsomer Norton, Westfield, Writhlington, Peasedown St John, Chilcompton, Paulton and the wider Somer Valley. We target the exact postcodes your customers search from.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/radstock',
      url: 'https://seo-kings.co.uk/local-seo/radstock',
      name: 'Local SEO Radstock | SEO Kings',
      description: 'Local SEO for businesses in Radstock BA3. Google Business Profile optimisation, website SEO and review growth from £150/month. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://seo-kings.co.uk/local-seo' },
          { '@type': 'ListItem', position: 3, name: 'Radstock' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency serving Radstock and BA3. Google Business Profile optimisation, website SEO and review growth for trades and local businesses across the Somer Valley and Bath.',
      url: 'https://seo-kings.co.uk/local-seo/radstock',
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
        { '@type': 'City', name: 'Radstock' },
        { '@type': 'City', name: 'Midsomer Norton' },
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

const LocalSEORadstock = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge="Serving BA3 · Somer Valley"
        title="Local SEO"
        highlight="Radstock"
        description="When someone in Radstock searches for your trade or service, are you the first result they see? We help businesses across BA3 and the Somer Valley rank in the Map Pack and the organic results — so you get more calls and more work."
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
                Everything you need to rank in Radstock
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most trades in Radstock and the Somer Valley are invisible on Google. A neglected listing and a slow website won't cut it. We build a proper local SEO system — one that keeps generating enquiries month after month.
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
            <SectionTag className="mb-4">Local SEO in Radstock</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Local SEO in Radstock — why the Somer Valley Map Pack is more achievable than you think
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Radstock and the wider BA3 area is one of the least competitive local search markets in the region. Most trades here are still invisible online — no website, an unclaimed Google Business Profile, or a slow site that Google has little reason to trust. That&apos;s not a problem for you, it&apos;s an opportunity. The bar to rank well for Radstock trade searches is lower than almost anywhere in Somerset.
              </p>
              <p>
                The Map Pack is where the work comes from. The three businesses with pins at the top of Google Maps capture the majority of clicks — especially on mobile, where most local searches happen. Getting into those three spots for &ldquo;plumber Radstock&rdquo; or &ldquo;electrician BA3&rdquo; is genuinely achievable here. We&apos;ve already helped businesses in neighbouring Midsomer Norton get into the Map Pack within months of starting — and Radstock is no more competitive.
              </p>
              <p>
                What makes BA3 particularly good for local SEO is the coverage you get from one campaign. A well-optimised Google Business Profile and website in Radstock can rank for searches across Midsomer Norton, Westfield, Writhlington, Peasedown St John, Chilcompton and Paulton — the whole Somer Valley, often without separate campaigns for each village. Many clients also want to reach Bath, and we can structure your targeting to pull from both directions.
              </p>
              <p>
                SEO Kings is based in Keynsham — about 12 miles from Radstock. We know the BA3 market, the directories that matter for Somer Valley businesses, and the search patterns that drive enquiries in this part of Somerset. You speak to the person doing the work, not an account manager passing messages between departments.
              </p>
              <p>
                Need a website as well as SEO? We build fast, Google-ready sites from £250. Most Radstock clients do both together — a new site built to rank alongside a proper GBP campaign is the fastest route to consistent enquiries. See our <Link href="/website-designer-radstock" className="text-primary hover:text-white transition-colors underline underline-offset-2">website design Radstock</Link> page for details.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'BA3 is less competitive',
                body: 'Most Radstock trades have no real online presence. The bar to rank is lower than Bath or Bristol, and results come faster.',
              },
              {
                label: 'Map Pack = most calls',
                body: 'The 3 businesses with pins get the majority of local clicks. Google Business Profile optimisation is the fastest win in BA3.',
              },
              {
                label: 'Somer Valley reach',
                body: 'One campaign can cover Radstock, Midsomer Norton, Paulton, Peasedown and beyond — without separate budgets for each town.',
              },
              {
                label: '12 miles from Keynsham',
                body: "We're close enough to know the local market and close enough to visit. You speak to the person doing the work.",
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Radstock</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in this area</SectionTag>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/website-designer-radstock" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Website Designer Radstock</div>
                <div className="text-xs text-gray-400">Fast, mobile-first websites for Radstock trades — from £250</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/areas/radstock" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Radstock Area Hub</div>
                <div className="text-xs text-gray-400">All web design &amp; SEO services across Radstock and BA3</div>
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

export default LocalSEORadstock;
