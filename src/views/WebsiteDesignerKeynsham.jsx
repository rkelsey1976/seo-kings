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

const included = [
  'Mobile-first design — fast on any device',
  'Built to rank for "website designer Keynsham" and trade searches across BS31',
  'Google Business Profile set-up and optimisation',
  'Click-to-call and quote request form',
  'SSL, hosting guidance and launch support',
  "We're based in Keynsham — meet us before you commit",
];

const faqs = [
  {
    q: 'How much does a website cost in Keynsham?',
    a: 'A one-page site starts at £250. Multi-page sites are £250 base + £50 per page — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our packages page for full pricing.',
  },
  {
    q: 'Do you meet clients in Keynsham?',
    a: "Yes. We're based at 16a Culvers Road, Keynsham BS31 2DW. We can meet at our office or come to you — whatever works best.",
  },
  {
    q: 'How long does it take to build a website in Keynsham?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process simple and guide you through every step.',
  },
  {
    q: 'Will my website show up on Google in Keynsham?',
    a: "Yes — that's the point. Every site we build is optimised for local search from day one. We target the searches your customers actually use in Keynsham and across BS31.",
  },
  {
    q: 'What if I already have a website?',
    a: "We can audit your existing site for free and tell you honestly whether it's worth improving or starting fresh. No obligation.",
  },
  {
    q: 'What trades do you work with in Keynsham?',
    a: 'Plumbers, electricians, builders, cleaners, painters — any trade that needs local customers across Keynsham, Saltford, Bitton, Oldland and the wider BS31 area.',
  },
  {
    q: 'Do you cover Saltford, Bitton and Oldland as well as Keynsham?',
    a: 'Yes — we cover the whole BS31 area including Saltford, Bitton, Oldland, Warmley, Longwell Green and Hanham. Your site will be optimised for the villages your customers actually come from, not just Keynsham town centre.',
  },
  {
    q: 'What makes your websites different from a WordPress site?',
    a: "We build on Next.js — a modern framework that produces static pages which load in under a second. Unlike WordPress, there are no plugins to update, no security vulnerabilities to patch and no slow shared hosting dragging your Core Web Vitals down. Google ranks fast sites higher, and our sites are fast by default.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-designer-keynsham',
      url: 'https://seo-kings.co.uk/website-designer-keynsham',
      name: 'Web Design Keynsham — Websites for Trades | SEO Kings',
      description: 'Fast, mobile-first websites for Keynsham trades that rank on Google. From £250. Based in BS31. Top results for "website designer Keynsham" — real client results. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Designer Keynsham' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Website designer based in Keynsham offering web design from £250 for trades and local businesses across BS31, Bath and North East Somerset.',
      url: 'https://seo-kings.co.uk/website-designer-keynsham',
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
        { '@type': 'City', name: 'Saltford' },
        { '@type': 'City', name: 'Bitton' },
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

const WebsiteDesignerKeynsham = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <ServicePageHero
        badge="Based in Keynsham · BS31 2DW"
        title="Website Designer"
        highlight="Keynsham"
        description="We build fast, Google-ready websites for trades and local businesses in Keynsham BS31. From £250. Add GBP optimisation for £100. Live in under 2 weeks."
        features={[
          'From £250',
          '6 months free hosting',
          'Live in under 2 weeks',
          'GBP optimisation +£100',
          'Based in Keynsham',
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
                A website built to get you found in Keynsham
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most website designers build pretty sites that don't rank. Every site we build is optimised for Google from the start — targeting the searches customers in Keynsham and BS31 actually use.
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

      {/* How it works */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">The process</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight tracking-tight">
            How we build your website in Keynsham
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Free audit', body: 'We review your current online presence — website, Google Business Profile, local rankings. No obligation, honest assessment.' },
              { step: '02', title: 'Design & build', body: 'We design and build your site on Next.js. Most sites are live within 2 weeks of receiving your content and sign-off.' },
              { step: '03', title: 'SEO from day one', body: 'Your site launches with correct title tags, structured data, location signals and a sitemap submitted to Google Search Console.' },
              { step: '04', title: 'Ongoing support', body: 'Hosting included for 6 months. Updates, tweaks and questions handled by the person who built your site — based in Keynsham.' },
            ].map((item) => (
              <div key={item.step} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="text-3xl font-bold text-primary mb-3">{item.step}</div>
                <div className="text-white font-semibold text-sm mb-2">{item.title}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
              </div>
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
              Website design in Keynsham — why being local is a ranking advantage
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham sits between Bath and Bristol — two of the UK's most competitive digital markets. But Keynsham itself is a different story. Most local trades either have no website or one that was built years ago on a slow shared server. Google doesn't need much to put you above them: a fast, properly structured site with the right BS31 location signals will outrank the majority of what's currently there.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We build on Next.js — a framework that produces static, pre-rendered pages that load in under a second. Core Web Vitals scores come in green by default. No WordPress plugin conflicts, no security updates to forget, no slow shared hosting dragging your score down. Speed is a confirmed Google ranking factor and most of your local competitors are failing it.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Location signals matter more than most designers realise. Every page we build references your area precisely — Keynsham, Saltford, Bitton, Oldland, Warmley, the BS31 postcode — in the title, headings, body copy and structured data. Generic "we cover all areas" copy doesn't do this. Targeted location pages do, and Google rewards the difference.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're based at 16a Culvers Road, Keynsham — so this isn't a remote agency guessing at your market. When you need something changed, you call the person who built your site. We know which searches your customers actually use in BS31 because we're here too.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'BS31 low competition', body: 'Most Keynsham trades have outdated or no website — your site can reach page one faster than in Bath or Bristol.' },
              { title: 'Next.js, not WordPress', body: 'Static pages, sub-second load times, zero plugin vulnerabilities — a ranking advantage baked in from day one.' },
              { title: 'Location signals built in', body: 'BS31 postcodes, village names and service areas woven into every page — not bolted on as an afterthought.' },
              { title: 'Actually local', body: "Based on Culvers Road, Keynsham. You're not talking to an account manager — you're talking to the person who built your site." },
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">
              Common questions about website design in Keynsham
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in Keynsham</SectionTag>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/local-seo/keynsham" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO Keynsham</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Keynsham — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/areas/keynsham" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Keynsham Area Hub</div>
                <div className="text-xs text-gray-500">All web design and SEO services across Keynsham and surrounding areas</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/areas/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Website Design Bath</div>
                <div className="text-xs text-gray-500">Also covering Bath — web design for BA1 &amp; BA2 trades from £250</div>
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

export default WebsiteDesignerKeynsham;
