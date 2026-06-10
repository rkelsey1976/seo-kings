'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import PricingModal from '../components/PricingModal';
import ServicePageHero from '../components/ServicePageHero';

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
    detail: 'Top 3 Map Pack for one of Bath\'s most competitive trade keywords — consistent enquiries from Google Maps.',
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
    slug: 'aspect-builds',
    business: 'Aspect Builds & Maintenance',
    outcome: 'No website, just Instagram → 40-page professional site live in 2 weeks',
    snippet: 'Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration for a Bath builder.',
  },
];

const included = [
  'Mobile-first design — fast on any device',
  'Built to rank for Radstock, Midsomer Norton and Somer Valley trade searches',
  'Google Business Profile set-up — BA3 competition is low, Map Pack rankings come quickly',
  'Click-to-call and quote request form',
  'SSL, hosting guidance and launch support',
  'Live in under 2 weeks',
];

const faqs = [
  {
    q: 'How much does a website cost in Radstock?',
    a: 'A one-page site starts at £250. Multi-page sites are £250 base + £50 per page — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our packages page for full pricing.',
  },
  {
    q: 'Do you work with businesses in Radstock?',
    a: "Yes. We're based in Keynsham and work with businesses across Radstock, Midsomer Norton, Peasedown St John and the surrounding BA3 area.",
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process simple and guide you through every step.',
  },
  {
    q: 'Will my website show up on Google in Radstock?',
    a: "Yes — that's the point. Every site we build is optimised for local search from day one, targeting the searches your customers in Radstock and BA3 actually use.",
  },
  {
    q: 'What trades do you work with in Radstock?',
    a: 'Plumbers, electricians, builders, cleaners, painters — any trade that needs local customers in Radstock, Westfield, Peasedown St John or the wider Somer Valley.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-designer-radstock',
      url: 'https://seo-kings.co.uk/website-designer-radstock',
      name: 'Website Designer Radstock | SEO Kings',
      description: 'Website designer serving Radstock BA3. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Designer Radstock' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Website designer serving Radstock and the Somer Valley — web design from £250 for trades and local businesses across BA3, Bath and North East Somerset.',
      url: 'https://seo-kings.co.uk/website-designer-radstock',
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
        { '@type': 'City', name: 'Peasedown St John' },
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

const WebsiteDesignerRadstock = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <ServicePageHero
        badge="Serving Radstock · BA3"
        title="Website Designer"
        highlight="Radstock"
        description="We build fast, Google-ready websites for trades and local businesses in Radstock BA3. From £250. Add GBP optimisation for £100. Live in under 2 weeks."
        features={[
          'From £250',
          '6 months free hosting',
          'Live in under 2 weeks',
          'GBP optimisation +£100',
          'Proven local results',
        ]}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* What's included */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag className="mb-4">Every site includes</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                A website built to get you found in Radstock
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most website designers build pretty sites that don't rank. Every site we build is optimised for Google from the start — targeting the searches customers in Radstock and the Somer Valley actually use.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
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
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-2 text-secondary">
                Pricing
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { name: 'Starter', pages: '1-page site', price: 'From £250' },
                  { name: 'Professional', pages: '3-page site', price: 'From £350' },
                  { name: 'Full', pages: '5+ pages', price: 'From £450' },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0">
                    <div>
                      <div className="text-white font-semibold text-sm">{pkg.name}</div>
                      <div className="text-gray-500 text-xs">{pkg.pages}</div>
                    </div>
                    <div className="font-bold text-primary">{pkg.price}</div>
                  </div>
                ))}
              </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="text-white font-semibold text-sm">Hosting and maintenance</div>
                  <div className="text-gray-500 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £50/year</div>
                </div>
                <div className="font-bold shrink-0 ml-4 text-primary">6 months free</div>
              </div>
            </div>
              <p className="text-xs text-gray-500 mb-6">GBP optimisation available as a £100 add-on. Hosting free for 6 months, then £50/year. No hidden fees.</p>
              <button
                onClick={() => setModalOpen(true)}
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
              >
                Get a Quote
              </button>
              <Link
                href="/web-design-packages"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm mt-3 transition-colors duration-200 text-primary"
              >
                View all packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
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

      {/* Content expansion — Radstock web design */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionTag className="mb-4">Why it works</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web design in Radstock — why BA3 is easier to rank than you think
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Radstock, Midsomer Norton and the Somer Valley sit outside the dense search competition of Bath and Bristol. Most trades in BA3 have no website at all, or one that's outdated and slow. Google doesn't need much to rank you above them: a fast, properly structured site with the right location signals will outrank most of what's already there.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We build on Next.js — a framework that produces static, pre-rendered pages that load in under a second. Core Web Vitals scores come in green by default. No WordPress plugin conflicts, no security updates to forget, no slow shared hosting dragging your score down. When your competitor's site takes four seconds to load and yours loads instantly, Google notices.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Location signals aren't just your address. Every page we build references your area accurately — Radstock, Westfield, Writhlington, Peasedown St John, the BA3 postcode — in the title, headings, body copy and structured data. Generic "we cover all areas" copy doesn't do this; targeted location pages do.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're based in Keynsham, around 12 miles from Radstock. When you need something changed, you call the person who built your site — not a support ticket queue. That's the working relationship we offer to every Somer Valley client.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'BA3 low competition', body: 'Fewer well-optimised businesses means your site can reach page one faster than in Bath or Bristol.' },
              { title: 'Next.js, not WordPress', body: 'Static pages, sub-second load times, zero plugin vulnerabilities — a ranking advantage from day one.' },
              { title: 'Location baked in', body: 'BA3 postcodes, village names and service areas woven into every page — not bolted on as an afterthought.' },
              { title: '12 miles away', body: 'Keynsham-based. Easy to reach, quick to respond — no account managers between you and us.' },
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
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">Local to you</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Somer Valley</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham, and Radstock sits squarely in our patch. BA3 is one of the least contested local markets we work in — most trades here have no website or a poor one, which means ranking well is genuinely achievable in a short timeframe. We've already put a business from nearby Midsomer Norton into the Google Map Pack, and Radstock follows the same pattern: low competition, clear search demand, real results.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We serve businesses across Radstock, Midsomer Norton, Westfield, Writhlington, Peasedown St John and the surrounding BA3 area. If you're a trade in Radstock without a website, you're leaving calls on the table every week.
            </p>
            <address className="not-italic text-sm text-gray-400 leading-relaxed border-l-2 pl-4 border-primary">
              SEO Kings<br />
              16a Culvers Road<br />
              Keynsham, Somerset<br />
              BS31 2DW<br />
              <a href="tel:+447702264921" className="hover:text-white transition-colors">07702 264 921</a>
            </address>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about web design in Radstock</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Also useful</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Related services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'GBP optimisation', desc: 'Get your Google Business Profile ranking in the Map Pack for Radstock and BA3 searches.', href: '/google-business-profile' },
              { title: 'Website redesign', desc: "Already have a site that isn't performing? We redesign and rebuild for speed and rankings.", href: '/website-redesign' },
              { title: 'Web design packages', desc: 'See all pricing options — starter, professional and full builds from £250.', href: '/web-design-packages' },
              { title: 'Website design Bath', desc: 'Also covering Bath — web design for BA1 & BA2 trades from £250.', href: '/areas/bath' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <h3 className="text-white font-semibold text-sm mb-2">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.desc}</p>
                <span className="text-xs font-medium text-primary">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner onGetQuote={() => setModalOpen(true)} />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WebsiteDesignerRadstock;
