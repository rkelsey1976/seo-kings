'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const whatWeDo = [
  'Keyword research for "seo Bath", "local seo Bath" and every trade and service search in BA1 and BA2',
  'Google Business Profile optimisation so you appear in the Map Pack for Bath searches',
  'Website SEO: service pages, location pages and content that ranks across Bath',
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
    q: 'What does local SEO do for a Bath business?',
    a: 'It makes you visible when people in Bath, BA1 and BA2 search for your trade or service on Google. That means appearing in the Map Pack — the three businesses shown with pins at the top of results — and in the organic listings below. Both drive calls and enquiries from people who are ready to buy.',
  },
  {
    q: 'Is Bath competitive for local SEO?',
    a: 'More competitive than the Somerset towns, yes. Bath has more businesses chasing the same keywords. That said, most Bath traders still have poorly optimised Google Business Profiles and slow websites — so there\'s real room to move. We\'ve helped clients go from invisible to the Map Pack in Bath within a few months.',
  },
  {
    q: 'How much does local SEO cost in Bath?',
    a: 'Our packages start from £150/month. Every new client gets a free audit first — we check your current rankings, your Google Business Profile and your website, then give you a clear plan and a fixed monthly quote.',
  },
  {
    q: 'How long before I see results?',
    a: 'Google Business Profile optimisation can show results within weeks. Ranking for competitive terms like "plumber Bath" or "electrician BA1" typically takes 3–6 months. We give you monthly reports so you see exactly what\'s moving.',
  },
  {
    q: 'Do I need a website as well as local SEO?',
    a: "A Google Business Profile alone can win work, but a website makes every other signal stronger. If you don't have one, we build fast, SEO-ready sites from £250. Many Bath clients do website and SEO together as a package — one team, one plan.",
  },
  {
    q: 'Which parts of Bath do you cover for local SEO?',
    a: 'All of BA1 and BA2, including every neighbourhood in the city. In BA1: the city centre, Walcot, Larkhall, Bathwick, Bathampton, Batheaston and Bathford. In BA2: Widcombe, Oldfield Park, Bear Flat, Twerton, Odd Down, Combe Down, Southdown and Weston. Beyond the city boundary we also cover Keynsham (BS31), Saltford, Peasedown St John, Radstock, Midsomer Norton and the wider Bath and North East Somerset area. If you serve any part of this patch, our local SEO Bath campaigns are structured to target the specific neighbourhoods and postcodes where your customers are searching.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/local-seo/bath',
      url: 'https://seo-kings.co.uk/local-seo/bath',
      name: 'Local SEO Bath | From £150/mo | Proven Map Pack Results | SEO Kings',
      description: 'Local SEO for Bath BA1 & BA2. We put trades into the Google Map Pack — exterior painter Bath Top 3, cleaning Midsomer Norton #1. From £150/mo. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Local SEO', item: 'https://seo-kings.co.uk/local-seo' },
          { '@type': 'ListItem', position: 3, name: 'Bath' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Local SEO agency serving Bath BA1 & BA2. Google Business Profile optimisation, website SEO and review growth for trades and local businesses across Bath and North East Somerset.',
      url: 'https://seo-kings.co.uk/local-seo/bath',
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

const LocalSEOBath = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      <ServicePageHero
        badge="Serving BA1 & BA2 · Bath"
        title="Local SEO"
        highlight="Bath"
        description="Our local SEO Bath service gets trades and businesses into the Google Map Pack for BA1 and BA2. Bath is competitive — when someone searches for your trade or service, the three businesses at the top take most of the calls. We get you into those positions and keep you there."
        features={['From £150/month', 'Free audit included', 'Google Business Profile', 'Serving BA1 & BA2']}
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
                A proper local SEO system for Bath
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Bath has more competition than the Somerset towns. To rank consistently you need a complete, well-maintained system — not a one-off tidy-up of your Google Business Profile. We build that system and run it for you every month.
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
              Local SEO Bath — why the Map Pack is worth fighting for
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath is a high-intent search market. When someone types "plumber Bath" or "electrician BA1" into Google, they're not browsing — they need someone now. The three businesses in the Map Pack capture most of those calls. Below the Map Pack, click rates fall sharply. If your business isn't in those top three positions, you're largely invisible to people who are ready to spend money.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath is also more competitive than the Somerset towns. More businesses, more agencies, more noise. But most Bath traders still have a poorly optimised Google Business Profile — incomplete categories, no regular posts, unanswered reviews. That's the gap we exploit. A properly managed GBP, paired with a fast website and consistent local citations, is enough to move into Map Pack positions for most trade categories within three to six months.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We cover all of BA1 and BA2 — not just the city centre. Widcombe, Oldfield Park, Bear Flat, Larkhall, Twerton, Combe Down, Odd Down, Weston, Bathampton, Bathwick, Walcot, Southdown, Batheaston, Bathford — every area has local searchers and most have far less competition than the city centre postcodes. A well-targeted campaign can rank faster in these neighbourhoods than you might expect.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're based in Keynsham, five miles from Bath. We work exclusively across Bath and North East Somerset — this isn't a national agency managing your account from a spreadsheet. Every client gets a direct line to the person running their campaign, monthly reports with real numbers, and a clear explanation of what we're doing and why.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Map Pack or nothing', body: 'The top 3 local results capture the majority of clicks. Below the pack, call volumes drop sharply — position matters more in Bath than most places.' },
              { title: 'GBP is the fastest win', body: 'Most Bath traders have incomplete, unmanaged Google Business Profiles. A properly optimised GBP can start moving within weeks.' },
              { title: 'All of BA1 & BA2', body: 'Full coverage from the city centre to Batheaston, Bear Flat to Bathford — neighbourhood-level targeting where competition is lower.' },
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about local SEO in Bath</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Bath services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in Bath</SectionTag>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/seo/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">SEO Bath</div>
                <div className="text-xs text-gray-500">Technical SEO, on-page, content — full SEO services for Bath businesses</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/web-design" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Web Design</div>
                <div className="text-xs text-gray-500">Fast, mobile-first websites for Bath trades — from £250</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/areas/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Bath Area Hub</div>
                <div className="text-xs text-gray-500">All web design & SEO services across Bath and every neighbourhood</div>
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

export default LocalSEOBath;
