'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const features = [
  'NICEIC, NAPIT, ELECSA or Trustmark badge displayed prominently on every page',
  'Dedicated service pages: consumer unit upgrades, EICR inspections, rewires, EV charger installs',
  'Part P certification and compliance information built into relevant service pages',
  'Click-to-call and WhatsApp button — electrician searches skew heavily mobile',
  'Quote form with photo upload for consumer unit and EV charger enquiries',
  'Google Business Profile optimised for electrical contractor categories',
  'Service area pages for every town you cover',
  'EV charging installation page — one of the fastest-growing trade search terms',
];

const recommendedPages = [
  { page: 'Home', detail: 'Accreditation badges front and centre, click-to-call, service summary' },
  { page: 'EICR inspections', detail: 'High search volume — landlords, conveyancing and rental compliance' },
  { page: 'Consumer unit / fuse board upgrades', detail: 'Most-booked electrical job, needs its own page' },
  { page: 'Rewiring', detail: 'Higher-value planned work — timeline and process content converts well' },
  { page: 'EV charger installation', detail: 'Growing fast — separate page ranks far better than a mention on the homepage' },
  { page: 'Fault finding & repairs', detail: 'Catches emergency electrical searches' },
  { page: 'Service areas', detail: 'One page per town, targeting postcode and area searches' },
  { page: 'About', detail: 'Accreditation numbers, years experience, insurance — essential for trust' },
];

const faqs = [
  {
    q: 'Should I have a dedicated EICR page on my website?',
    a: 'Yes — it\'s one of the most consistently searched electrical services online. Landlords need EICRs for compliance, conveyancers request them during property sales, and tenants increasingly know to ask for them. A dedicated EICR page targeting "[area] EICR" or "electrical certificate [town]" ranks far better than mentioning it on a catch-all services page.',
  },
  {
    q: 'How do I show my NICEIC or NAPIT accreditation on my website?',
    a: 'We display your accreditation badge and registration number on every page — typically in the footer and prominently on your homepage and about page. The badge itself is a trust signal that customers recognise and actively look for before booking an electrician. We build this in as standard for every electrician site.',
  },
  {
    q: 'Is EV charging worth having its own page?',
    a: 'Absolutely. EV charger installation is one of the fastest-growing electrical search terms in the UK right now, and most electricians are still treating it as a footnote on their homepage. A dedicated EV charger page targeting "EV charger installation [town]" ranks cleanly against that competition. It\'s also high-value work — worth optimising for specifically.',
  },
  {
    q: 'Do I need separate pages for domestic and commercial electrical work?',
    a: 'If you do both, yes. Domestic and commercial customers search differently and have different concerns — a homeowner searching for a consumer unit upgrade is at a different stage than a facilities manager looking for a periodic inspection contractor. Separate pages let you speak to each directly and rank for both sets of searches.',
  },
  {
    q: 'How quickly can you build an electrician website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We handle the design, build and SEO setup. We need your services, accreditation details, areas covered and any photos you have. We can write the copy too if that\'s easier.',
  },
  {
    q: 'Will my site rank for electrical searches in Bath?',
    a: 'Bath is competitive for electrical contractors — it\'s a large city with a lot of established businesses. Getting into the Map Pack or top organic results for terms like "electrician Bath" typically takes 3–6 months with a properly optimised site and GBP. For smaller towns like Keynsham, Radstock or Midsomer Norton, rankings come faster. We\'ll give you an honest assessment of your specific situation in the free audit.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/electricians',
      url: 'https://seo-kings.co.uk/web-design-for/electricians',
      name: 'Web Design for Electricians | SEO Kings',
      description: 'Websites for electricians in Bath & Somerset. NICEIC/NAPIT badge display, dedicated EICR and EV charger pages. From £250. Add GBP optimisation for £100.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Electricians' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/electricians/#service',
      name: 'Web Design for Electricians',
      description: 'Website design for electricians in Bath and North East Somerset. Accreditation badge display, dedicated EICR, EV charger and rewire pages, and Google Business Profile optimisation.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
      ],
      offers: {
        '@type': 'Offer',
        price: '250',
        priceCurrency: 'GBP',
        description: 'Electrician website from £250 — GBP optimisation available as a £100 add-on',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/electricians',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Bath and North East Somerset',
        postalCode: 'BS31 2DW',
        addressCountry: 'GB',
      },
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

const WebDesignForElectricians = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
              Web design for trades · Electricians
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span className="text-primary">Electricians</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Homeowners searching for an electrician online are usually dealing with planned, sign-off work — EICRs for a sale, consumer unit upgrades flagged on a survey, EV chargers. They'll take time to choose. They'll look at your website, check your accreditations, read your reviews. Without a credible site, you're not in the running.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for electricians in Bath, Keynsham and across North East Somerset — with NICEIC or NAPIT badge display, dedicated service pages per job type, from £250. Add GBP optimisation for £100.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark">
                Get a Free Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+447702264921" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/10 hover:border-white/20 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                07702 264 921
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['From £250', 'Accreditation badges included', 'EICR & EV charger pages', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag className="mb-4">What's included</SectionTag>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Built specifically for electrical contractors</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Generic website builders don't know the difference between an EICR and a consumer unit upgrade. We do. Every electrician site we build has the right structure, the right accreditation signals, and the right service pages to rank for what your customers are actually searching.
              </p>
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <SectionTag className="mb-4">Recommended site structure</SectionTag>
              <p className="text-sm text-gray-400 mb-6">One page per service type ranks far better than one catch-all services page. Here's what we recommend for most electricians.</p>
              <ul className="space-y-4">
                {recommendedPages.map((item) => (
                  <li key={item.page} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                    <div className="text-white font-semibold text-sm mb-1">{item.page}</div>
                    <div className="text-gray-500 text-xs">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionTag className="mb-4">Pricing</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Straightforward pricing, no surprises</h2>
            <div className="space-y-4 mb-8">
              {[
                { name: 'Starter', desc: '1-page site — services summary, contact, accreditation display', price: 'From £250' },
                { name: 'Professional', desc: '3-page site — home, 1 service page (EICR or consumer unit), contact', price: 'From £350' },
                { name: 'Full', desc: '5+ pages — home, EICR, consumer unit, EV charger, service areas, about', price: 'From £450' },
              ].map((pkg) => (
                <div key={pkg.name} className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0">
                  <div>
                    <div className="text-white font-semibold text-sm">{pkg.name}</div>
                    <div className="text-gray-500 text-xs">{pkg.desc}</div>
                  </div>
                  <div className="font-bold shrink-0 ml-4 text-primary">{pkg.price}</div>
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
            <p className="text-xs text-gray-500 mb-6">GBP optimisation available as a £100 add-on. Hosting free for 6 months, then £50/year. No lock-in contracts.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark">
              Get a Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">Local knowledge</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Bath & Somerset electrical market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has a large stock of period properties that regularly need electrical surveys for conveyancing or buy-to-let compliance. EICR searches in BA1 and BA2 are consistent year-round, driven by property sales, lettings legislation and landlord compliance requirements. Electricians who rank for these terms and communicate their accreditations clearly win a steady stream of planned, well-paid work.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              EV charger installs are growing fast across the whole area — particularly in the BS31 corridor and the newer housing developments around Keynsham and Midsomer Norton. Most electricians in these areas don't have a dedicated EV charger page yet, which means there's a real first-mover advantage for those who do.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We're based in Keynsham and build sites for trades across Bath and North East Somerset. We know which searches drive the most enquiries in each postcode and build every site to target them specifically.
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about electrician websites</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Related services</SectionTag>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Electricians</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for electrical searches in your area</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default WebDesignForElectricians;
