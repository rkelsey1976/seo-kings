'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import PricingModal from '../components/PricingModal';
import ServicePageHero from '../components/ServicePageHero';

const included = [
  'Mobile-first design — fast on any device',
  'Built to rank for Trowbridge, Bradford on Avon and wider Wiltshire trade searches',
  'Google Business Profile set-up for BA14 — lower competition than Bath or Bristol',
  'Click-to-call and quote request form',
  'SSL, hosting guidance and launch support',
  'Remote-friendly process — most work done online, no need for regular meetings',
];

const results = [
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    slug: 'peachy-cleans',
    detail: 'Full site and GBP setup — now ranking in the map pack for their main cleaning keywords.',
  },
  {
    business: 'New Decorating',
    location: 'Bath',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    slug: 'new-decorating',
    detail: 'Built from zero web presence to Top 3 Map Pack within a week.',
  },
];

const faqs = [
  {
    q: 'How much does a website cost in Trowbridge?',
    a: 'A one-page site starts at £250. Multi-page sites are £250 base + £50 per page — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our packages page for full pricing.',
  },
  {
    q: 'Can you meet clients in Trowbridge?',
    a: "We're based in Keynsham, Somerset — about 25 minutes from Trowbridge. We're happy to visit your premises in Trowbridge or meet over video call. Most of our process is remote and works smoothly.",
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process simple and guide you through every step.',
  },
  {
    q: 'Will my website rank on Google in Trowbridge?',
    a: "Yes — that's the point. Every site we build is optimised for local search from day one. We target the searches your customers actually use in Trowbridge and across Wiltshire.",
  },
  {
    q: 'I already have a website — can you improve it?',
    a: "We can audit your existing site for free and tell you honestly whether it's worth improving or starting fresh. We also offer website redesign services if your current site needs a complete rebuild.",
  },
  {
    q: 'Do you do local SEO for Trowbridge businesses?',
    a: "Yes. Website and SEO together is the most effective combination. We offer local SEO packages from £150/month covering Google Business Profile, on-page SEO, citations and review growth — all targeting Trowbridge and Wiltshire searches.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-designer-trowbridge',
      url: 'https://seo-kings.co.uk/website-designer-trowbridge',
      name: 'Website Designer Trowbridge | SEO Kings',
      description: 'Website designer serving Trowbridge and Wiltshire. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Designer Trowbridge' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Website designer serving Trowbridge and Wiltshire. Fast, mobile-first websites from £250 for trades and local businesses, with GBP optimisation from £100.',
      url: 'https://seo-kings.co.uk/website-designer-trowbridge',
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
        { '@type': 'City', name: 'Trowbridge' },
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Bradford on Avon' },
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

const WebsiteDesignerTrowbridge = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <ServicePageHero
        badge="Serving Trowbridge · Wiltshire"
        title="Website Designer"
        highlight="Trowbridge"
        description="We build fast, Google-ready websites for trades and local businesses in Trowbridge and across Wiltshire. From £250. Add GBP optimisation for £100. Live in under 2 weeks."
        features={[
          'From £250',
          '6 months free hosting',
          'Live in under 2 weeks',
          'GBP optimisation +£100',
          'Serving Wiltshire',
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
                A website built to get you found in Trowbridge
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most website designers build sites that look good but don't rank. Every site we build is optimised for local search from day one — targeting the searches customers in Trowbridge, Bradford on Avon, Melksham and across Wiltshire actually use.
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
              <SectionTag className="mb-2">Pricing</SectionTag>
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
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-2xl font-bold mb-1 text-primary">{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs mb-3">{r.location}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{r.detail}</div>
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

      {/* What actually works in Trowbridge */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTag className="mb-4">Why it works</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Web design in Trowbridge — the Wiltshire advantage
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Trowbridge is a different market to Bath or Bristol. There are far fewer agencies chasing BA14 searches — which means a properly built site here can rank faster and hold its position with less ongoing effort. For a Trowbridge trade, the competition online is often less polished than you&apos;d expect: slow WordPress sites, unclaimed Google Business Profiles, no location-specific pages. That gap is the opportunity.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Trowbridge customers search practically. &ldquo;Plumber Trowbridge BA14&rdquo;, &ldquo;electrician Bradford on Avon&rdquo;, &ldquo;builder Westbury Wiltshire&rdquo; — they&apos;re not browsing, they need a trade. Every site we build targets those specific searches: the right postcodes, the right Wiltshire towns, structured data that tells Google exactly where you operate.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We build in Next.js, not WordPress — so sites are fast, stable and score well on Core Web Vitals from day one. In a market like Trowbridge where many competitors have slow, neglected sites, speed alone can be a ranking edge. Page speed is a direct Google ranking factor, and it&apos;s one we control completely.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We&apos;re based in Keynsham, about 25 minutes from Trowbridge on the A363. Most of the process runs smoothly online, but we&apos;re happy to meet in Trowbridge or Bradford on Avon if that works better for you. We cover Trowbridge, Bradford on Avon, Melksham, Westbury, Warminster and Chippenham.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Less competition than Bath or Bristol',
                  body: 'BA14 has far fewer agencies competing for the same searches. Ranking faster — and staying ranked — is realistic with a properly built site.',
                },
                {
                  title: 'Wiltshire location signals built in',
                  body: 'BA14 postcodes, Trowbridge and surrounding towns, trade-specific page structure. Not a generic template with a town name pasted in.',
                },
                {
                  title: 'Covers all of Wiltshire',
                  body: 'Trowbridge, Bradford on Avon, Melksham, Westbury, Warminster and Chippenham — all built into your site from day one.',
                },
                {
                  title: 'Remote-friendly from the start',
                  body: 'The full process works online. No requirement for regular face-to-face meetings — though we can come to you if you prefer.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-dark-card border border-white/[0.06] rounded-xl p-5">
                  <div className="text-white font-semibold text-sm mb-2">{item.title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local signals */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">Serving Wiltshire</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Web design for Trowbridge and the surrounding area</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We're based in Keynsham, Somerset — about 25 minutes from Trowbridge. Wiltshire is a different market to Bath: less tourist traffic, more working trades, and a customer base that searches locally rather than browsing. BA14 is less competitive online than BA1 or BA2, which means a properly built site here can rank faster and stay ranked with less ongoing effort.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We work with Trowbridge businesses remotely — the process runs smoothly without the need for regular face-to-face meetings, though we're happy to visit if that suits you better. We cover Trowbridge, Bradford on Avon, Melksham, Westbury, Warminster and Chippenham.
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
          <div className="max-w-3xl">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about web design in Trowbridge</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also worth knowing</SectionTag>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-primary/20 rounded-xl hover:border-primary/40 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Trowbridge map pack — £100 one-off optimisation</div>
              </div>
              <svg className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/website-redesign" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Website Redesign</div>
                <div className="text-xs text-gray-500">Already have a site that isn&apos;t ranking? We rebuild from £250</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/web-design-packages" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Packages &amp; Pricing</div>
                <div className="text-xs text-gray-500">Full breakdown of what&apos;s included at every price point</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner onGetQuote={() => setModalOpen(true)} />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WebsiteDesignerTrowbridge;
