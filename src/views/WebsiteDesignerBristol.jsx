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
    business: 'RG Extreme Pressure',
    location: 'Bath & Bristol',
    result: '102 pages',
    keyword: 'jet washing Bristol',
    detail: 'Replaced a dated Wix site with a custom 102-page website — dedicated service pages, area pages covering Bristol suburbs, and full schema. Live in under 2 weeks.',
    slug: 'rg-extreme-pressure',
  },
  {
    business: 'SEO Kings',
    location: 'Bristol',
    result: '#1 Organic',
    keyword: '"SEO Bristol"',
    detail: 'We rank #1 organically and in the Google Map Pack for "SEO Bristol" — one of the most competitive local SEO keywords in the South West. If we can do it for ourselves, we can do it for you.',
    slug: 'seo-kings',
  },
  {
    business: 'Extreme Cleans',
    location: 'Bristol & Bath',
    result: 'Map Pack',
    keyword: 'cleaning Bristol',
    detail: 'New website build with area pages targeting Bristol and Bath — map pack visibility within weeks of going live.',
    slug: 'extreme-cleans',
  },
];

const included = [
  'Mobile-first design — fast on any device',
  'Built to rank for Bristol, BS1-BS16 trade searches',
  'Google Business Profile set-up — Map Pack rankings for BS postcodes',
  'Click-to-call and quote request form',
  'SSL, hosting guidance and launch support',
  'Live in under 2 weeks',
];

const faqs = [
  {
    q: 'How much does a website cost in Bristol?',
    a: 'A one-page site starts at £250. Multi-page sites are £250 base + £50 per page — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our packages page for full pricing.',
  },
  {
    q: 'Do you work with businesses in Bristol?',
    a: "Yes — we work with trades and local businesses across all of Bristol, from Clifton and Redland to Bedminster, Horfield, Filton, Bradley Stoke and the wider BS postcode area. We're based in Keynsham, 20 minutes from the city centre.",
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process simple and guide you through every step.',
  },
  {
    q: 'Will my website show up on Google in Bristol?',
    a: "That's the goal. Bristol is competitive but we know how to rank here — we're #1 organically for \"SEO Bristol\" ourselves. We build pages properly structured for local search, with the right signals for BS postcodes, so you give yourself a real shot at page one and the Map Pack.",
  },
  {
    q: 'What trades do you work with in Bristol?',
    a: 'Plumbers, electricians, builders, cleaners, painters, decorators, mechanics, jet washing companies — any trade that needs local customers in Bristol, Clifton, Bedminster, Horfield, Filton, Bradley Stoke or the wider BS postcode area.',
  },
  {
    q: 'Can you help me rank in the Google Map Pack in Bristol?',
    a: 'Yes. Map Pack rankings depend on your Google Business Profile, your website, and your reviews. We optimise all three — and we have clients already in the Bristol Map Pack for competitive trade keywords.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-designer-bristol',
      url: 'https://seo-kings.co.uk/website-designer-bristol',
      name: 'Website Designer Bristol | SEO Kings',
      description: 'Website designer serving Bristol. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Designer Bristol' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Website designer serving Bristol — web design from £250 for trades and local businesses across all BS postcodes.',
      url: 'https://seo-kings.co.uk/website-designer-bristol',
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
        { '@type': 'City', name: 'Bristol' },
        { '@type': 'City', name: 'Clifton' },
        { '@type': 'City', name: 'Bedminster' },
        { '@type': 'City', name: 'Horfield' },
        { '@type': 'City', name: 'Filton' },
        { '@type': 'City', name: 'Bradley Stoke' },
        { '@type': 'City', name: 'Keynsham' },
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

const WebsiteDesignerBristol = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[schema]} />

      <ServicePageHero
        badge="Serving Bristol · BS1–BS16"
        title="Website Designer"
        highlight="Bristol"
        description="We build fast, Google-ready websites for trades and local businesses in Bristol. From £250. Add GBP optimisation for £100. Live in under 2 weeks."
        features={[
          'From £250',
          '6 months free hosting',
          'Live in under 2 weeks',
          'GBP optimisation +£100',
          '#1 for "SEO Bristol"',
        ]}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag className="mb-4">Every site includes</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                A website built to get you found in Bristol
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most website designers build pretty sites that don't rank. Every site we build is optimised for Google from the start — targeting the searches customers in Bristol and across the BS postcode area actually use.
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

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Verified results</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Real results for Bristol businesses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionTag className="mb-4">Why it works</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web design in Bristol — what it actually takes to rank in a competitive city
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bristol is the largest city in the South West and one of the most competitive local search markets outside London. "Plumber Bristol", "builder Bristol", "web design Bristol" — thousands of searches every month, and the competition is fierce. You're up against established agencies and businesses with years of Google authority.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              That's why we build differently. Every site we deliver runs on Next.js — a framework that produces pre-rendered, static pages that load in under a second. When your competitor's site takes four seconds to load and yours is instant, Google rewards you for it. Core Web Vitals scores that would take a WordPress developer months to achieve come out of the box with our stack.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Location signals matter even more in a big city. We don't just put "Bristol" in your title tag and call it done. Every page we build references your specific service areas — Clifton, Bedminster, Horfield, Filton, Bradley Stoke, Knowle, Southville — in headings, body copy and structured data. Bristol is too big to target as one lump — you need suburb-level precision to compete.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're based in Keynsham, 20 minutes from Bristol city centre. We know the market, we rank #1 for "SEO Bristol" ourselves, and we've built sites for Bristol trades. When you need something changed, you call us directly — not a support ticket queue.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'We rank #1 in Bristol', body: 'SEO Kings is #1 organically and in the Map Pack for "SEO Bristol" — we prove we can rank in Bristol, not just claim it.' },
              { title: 'Next.js, not WordPress', body: 'Static pages, sub-second load times, zero plugin vulnerabilities — a ranking advantage from day one.' },
              { title: 'Suburb-level targeting', body: 'Clifton, Bedminster, Horfield, Bradley Stoke — Bristol is too big for one-size-fits-all. We target by postcode and neighbourhood.' },
              { title: '20 minutes away', body: 'Keynsham-based. Close enough to meet in Bristol, quick to respond — no account managers between you and us.' },
            ].map((card) => (
              <div key={card.title} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">Local to you</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know Bristol</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              SEO Kings is based in Keynsham — 20 minutes from Bristol city centre and right on the BS border. Bristol is one of our most active markets. We've built sites for jet washing companies, cleaners and trades across the city, and we have live Map Pack results to show for it. When we talk about what it takes to rank in Bristol, it's from direct experience — not a template approach applied from a distance.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We serve trades across Bristol city centre, Clifton, Redland, Bishopston, Cotham, Bedminster, Southville, Horfield, Filton, Bradley Stoke, Brislington, Whitchurch, Knowle, Stockwood, Long Ashton, Yate and the wider BS postcode area. If you're a trade in Bristol without a properly optimised website, you're losing customers to competitors every week.
            </p>
            <address className="not-italic text-sm text-gray-400 leading-relaxed border-l-2 pl-4 border-primary">
              SEO Kings<br />
              16a Culvers Road<br />
              Keynsham, Somerset<br />
              BS31 2DW<br />
              <a href="tel:+447****4921" className="hover:text-white transition-colors">07702 264 921</a>
            </address>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about web design in Bristol</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Also useful</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Related services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'GBP optimisation', desc: 'Get your Google Business Profile ranking in the Map Pack for Bristol and BS postcode searches.', href: '/google-business-profile' },
              { title: 'SEO Bristol', desc: 'Full SEO services for Bristol trades and small businesses — technical, on-page, content and local authority from £150/month.', href: '/seo/bath' },
              { title: 'Web design packages', desc: 'See all pricing options — starter, professional and full builds from £250.', href: '/web-design-packages' },
              { title: 'Website designer Keynsham', desc: 'Also covering Keynsham — web design for BS31 trades from £250.', href: '/website-designer-keynsham' },
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

export default WebsiteDesignerBristol;
