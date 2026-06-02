'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const features = [
  'Prominent click-to-call on every page — homeowners search for builders on mobile during evenings and weekends',
  'NHBC and FMB membership badges displayed prominently for instant trust',
  'Dedicated service pages: extensions, renovations, new builds, loft conversions',
  'Project gallery pages with before/after photos — the #1 thing homeowners look for',
  'Planning permission and building control expertise showcased to reassure clients',
  'Google Business Profile optimised for builder and construction categories',
  'Service area pages for every town you cover',
  'Review integration — show your Google and Trustpilot ratings',
];

const recommendedPages = [
  { page: 'Home', detail: 'Project highlights, click-to-call, service summary and reviews' },
  { page: 'Extensions', detail: 'Highest-value planned work — gallery, process and planning info' },
  { page: 'Renovations', detail: 'Before/after gallery, project timeline, materials and finishes' },
  { page: 'New builds', detail: 'NHBC standards, project management approach, site galleries' },
  { page: 'Loft conversions', detail: 'Popular search term — needs its own page with gallery and FAQs' },
  { page: 'Project gallery', detail: 'Visual proof selling tool — filtered by type, area and budget' },
  { page: 'Service areas', detail: 'One page per town you cover, targeting postcode searches' },
  { page: 'About', detail: 'NHBC/FMB badges, years experience, team photos — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my building business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches "builder near me". Your website is where they go to check your NHBC or FMB credentials, view your project gallery and decide whether to get a quote. A profile without a website loses jobs to builders who have one. A website without a GBP is invisible on Maps. We set up and optimise both.',
  },
  {
    q: 'Should I have a separate page for each type of building work?',
    a: 'Yes. Extension, renovation and new build searches are all distinct — someone Googling "extensions Bath" is not the same person Googling "loft conversion Keynsham". A dedicated page for each service means you can rank for all of them. A single services page that mentions everything ranks for nothing specifically. Each service page should have its own gallery, process description and relevant trust signals.',
  },
  {
    q: 'Do I need to display my NHBC and FMB membership on my website?',
    a: 'Absolutely. Homeowners spending tens of thousands on a building project need reassurance before they even pick up the phone. NHBC and FMB badges are among the strongest trust signals in construction. They should be visible on every page — ideally in the footer and prominently on relevant service pages. We build this in as standard.',
  },
  {
    q: 'How many pages does a builder website need?',
    a: 'A minimum of 5–7 for a solid local ranking: home, 2–3 service pages (extensions and new builds at minimum), a project gallery, an about page and a contact page. Service area pages — one per town you cover — add significant ranking power over time. We\'ll discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my builder website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process straightforward — we handle the design, build and SEO setup. We just need your services, areas covered, NHBC/FMB numbers and any project photos you have. We can write the copy for you too.',
  },
  {
    q: 'Can you help me rank for builder searches in Bath?',
    a: 'Yes. Builder searches are competitive in Bath, but most builders ranking well have a properly structured website with dedicated service pages and a well-optimised Google Business Profile — that\'s the bar. We set up both together so the signals reinforce each other. Results for competitive terms like "extensions Bath" typically take 3–6 months. Less competitive areas like Keynsham or Radstock rank faster.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/builders',
      url: 'https://seo-kings.co.uk/web-design-for/builders',
      name: 'Web Design for Builders | SEO Kings',
      description: 'Websites for builders in Bath & Somerset. Fast, mobile-first, built to rank for local search. NHBC/FMB badge display, project galleries, dedicated service pages. From £250. Add GBP optimisation for £100.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Builders' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/builders/#service',
      name: 'Web Design for Builders',
      description: 'Website design for building businesses in Bath and North East Somerset. Fast, mobile-first sites with NHBC/FMB badge display, project galleries, dedicated service pages and Google Business Profile optimisation.',
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
        description: 'Builder website from £250 — GBP optimisation available as a £100 add-on',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/builders',
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

const WebDesignForBuilders = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
              Web design for trades · Builders
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span className="text-primary">Builders</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Building work is the biggest purchase most homeowners ever make after their house itself. They don't pick the cheapest builder on the list — they pick the one who looks professional, experienced and trustworthy. If your website doesn't show your projects, your credentials and your coverage clearly, those quotes go to someone else.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for builders in Bath, Keynsham, Midsomer Norton and across North East Somerset — with NHBC/FMB badge display, project galleries, dedicated service pages from £250. Add GBP optimisation for £100.
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
              {['From £250', 'NHBC/FMB badges included', 'Project gallery as standard', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why builder sites fail */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">The problem</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Why most builder websites don't generate enquiries</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The majority of builder websites are either built on cheap templates that look identical to every other builder's site, or they're one-page sites that try to cover extensions, renovations, new builds and loft conversions all on the same page. Neither approach works for local search.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches "extensions Bath" or "loft conversion Keynsham", Google's algorithm looks for a page that's specifically about that service in that area — not a homepage that mentions it once in a paragraph. A dedicated service page with a project gallery, process description and relevant credentials is what gets into the Map Pack and the top organic results.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond search, building is a trust business. Customers are spending tens of thousands — sometimes hundreds of thousands. They want to see your NHBC or FMB membership. They want to see your previous work. They want to know you understand planning permission and building control. A professional site that communicates all of this clearly converts enquiries that a generic template loses.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag className="mb-4">What's included</SectionTag>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Built specifically for building businesses</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a builder is designed around how building customers actually search — project type first, credentials second, local proof throughout. Not a generic template with your logo dropped in.
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
              <p className="text-sm text-gray-400 mb-6">Pages that give you the best chance of ranking for every service you offer — not just one catch-all services page.</p>
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
                { name: 'Starter', desc: '1-page site — home, services summary, contact', price: 'From £250' },
                { name: 'Professional', desc: '3-page site — home, 1 service page, contact', price: 'From £350' },
                { name: 'Full', desc: '5+ pages — home, service pages, project gallery, service areas, about', price: 'From £450' },
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
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Bath & Somerset building market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has one of the highest concentrations of listed buildings and conservation areas in the country. Builders who can work on period properties, navigate planning restrictions and demonstrate experience with Bath stone and Georgian conversions have a genuine advantage in BA1 and BA2. Extension and renovation searches are particularly strong, driven by homeowners adding space rather than moving in a slow property market.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham, Midsomer Norton and Radstock have a different mix — more modern housing estates, growing new-build developments, and lower online competition than the city. A well-optimised site and Google Business Profile in these areas can reach the Map Pack faster than the same work would take in central Bath. New build searches are particularly strong in the expanding developments around Paulton and Peasedown St John.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We're based in Keynsham and build sites for trades across the whole area. We know which searches convert in each postcode and build every site to target them specifically — not just drop your name into a national template.
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about builder websites</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Recent project</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Aspect Builds & Maintenance — from Instagram to a 40-page website</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary-light mb-1">40 pages</div>
              <div className="text-sm text-gray-400">From scratch, live in 2 weeks</div>
            </div>
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary-light mb-1">6 services</div>
              <div className="text-sm text-gray-400">Each with its own dedicated page</div>
            </div>
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary-light mb-1">10 areas</div>
              <div className="text-sm text-gray-400">Hub-and-spoke local SEO structure</div>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed mt-6 max-w-3xl">
            Aspect Builds had no website — just an Instagram page. We built them a 40-page professional site with dedicated service pages for extensions, loft conversions, renovations, property maintenance, heritage work and structural alterations, plus 10 area pages targeting Bath and surrounding towns. Contact form, FAQ, Google Business Profile integration — the full package.
          </p>
          <Link href="/case-studies/aspect-builds" className="inline-flex items-center gap-2 mt-4 text-primary-light hover:text-white font-medium transition-colors">
            Read the full case study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Related services</SectionTag>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Builders</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for building searches in your area</div>
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

export default WebDesignForBuilders;