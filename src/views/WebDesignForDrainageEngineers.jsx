'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const features = [
  'Emergency drain unblocking page — the highest-converting drainage search, urgent mobile traffic',
  'CCTV drain survey page with process explanation and report details',
  '24/7 availability messaging built into the design — drainage emergencies happen at any hour',
  'Prominent click-to-call on every page — emergency searches happen on mobile at odd hours',
  'Dedicated service pages: drain unblocking, CCTV surveys, drain repairs, root cutting',
  'Google Business Profile optimised for drainage engineer categories',
  'Service area pages for every town you cover — targeting postcode searches',
  'Review integration — show your Google and Checkatrade ratings',
];

const recommendedPages = [
  { page: 'Home', detail: 'Emergency hook, click-to-call, service summary and reviews' },
  { page: 'Emergency drain unblocking', detail: 'Fast-loading, urgent tone, prominent phone number and 24/7 availability' },
  { page: 'CCTV drain surveys', detail: 'Technical page — process explanation, report details and camera technology' },
  { page: 'Drain repairs & relining', detail: 'Higher-value planned work — gallery and process content' },
  { page: 'Root cutting & removal', detail: 'Common problem page — targets specific root-related searches' },
  { page: 'Service areas', detail: 'One page per town you cover, targeting postcode searches' },
  { page: 'About', detail: 'Qualifications, insurance, years experience — essential trust signals' },
  { page: 'Contact', detail: '24/7 availability, emergency number, online enquiry form' },
];

const faqs = [
  {
    q: 'Does my drainage business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches for a drainage engineer near them. Your website is where they go to verify your qualifications, understand your services and decide whether to call. A profile without a website loses emergency calls to engineers who have one. A website without a Google Business Profile is invisible on Maps. We set up and optimise both.',
  },
  {
    q: 'Should I have a separate page for emergency drain unblocking?',
    a: 'Yes. Emergency drain unblocking searches such as "blocked drain Bath" or "emergency drainage engineer Keynsham" are some of the highest-converting local searches — someone has a problem right now and will call the first credible result they find. A dedicated emergency page, fast to load and clear to read on mobile, targets those searches directly. Your homepage cannot rank for both "CCTV drain survey Bath" and "emergency drain unblocking Bath" equally well.',
  },
  {
    q: 'Do I need to promote my 24/7 availability on my website?',
    a: 'Absolutely. Drainage emergencies do not keep office hours — a blocked drain or sewage backup at midnight needs immediate attention. Your 24/7 availability should be prominent on your homepage and every service page, especially the emergency page. Customers in an urgent situation are looking for someone who is available now, not during business hours tomorrow. We build this messaging into the design as standard.',
  },
  {
    q: 'How important is a CCTV drain survey page?',
    a: 'Very important. CCTV drain surveys are a high-value service and a growing search term. Homebuyers, landlords and commercial property managers all need survey reports. A dedicated page that explains the process, the technology and what the report includes both targets those searches and converts better than a passing mention on a services page.',
  },
  {
    q: 'How many pages does a drainage engineer website need?',
    a: 'A minimum of 5–7 for a solid local ranking: home, 2–3 service pages including emergency drain unblocking and CCTV surveys at minimum, an about page and a contact page. Service area pages — one per town you cover — add significant ranking power over time. We will discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my drainage engineer website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We handle the design, build and SEO setup. We need your services, areas covered and any photos you have. We can write the copy for you too.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/drainage-engineers',
      url: 'https://seo-kings.co.uk/web-design-for/drainage-engineers',
      name: 'Web Design for Drainage Engineers | SEO Kings',
      description: 'Websites for drainage engineers in Bath & Somerset. Fast, mobile-first, built to rank for emergency and local search. 24/7 availability, CCTV survey pages, drain unblocking, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Drainage Engineers' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/drainage-engineers/#service',
      name: 'Web Design for Drainage Engineers',
      description: 'Website design for drainage engineering businesses in Bath and North East Somerset. Fast, mobile-first sites with emergency pages, CCTV survey content, 24/7 availability messaging, and Google Business Profile optimisation.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
      ],
      offers: {
        '@type': 'Offer',
        price: '399',
        priceCurrency: 'GBP',
        description: 'Drainage engineer website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/drainage-engineers',
      telephone: '+447****4921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Somerset',
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

const WebDesignForDrainageEngineers = () => {
  return (
    <>
      <SEO
        title="Web Design for Drainage Engineers Bath & Somerset | From £399"
        description="Websites for drainage engineers in Bath & Somerset. Fast, mobile-first, built for emergency and local search. 24/7 availability, CCTV survey pages, drain unblocking, Google Business Profile included. From £399."
        canonical="/web-design-for/drainage-engineers"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Drainage Engineers' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
              Web design for trades · Drainage Engineers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span className="text-primary">Drainage Engineers</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              When a drain blocks at 2am or sewage backs up on a Sunday morning, the customer reaches for their phone and calls the first drainage engineer who is clearly available 24/7 and covers their area. If your website is not fast, mobile-friendly and prominently showing your emergency availability, that call goes to a competitor.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for drainage engineers in Bath, Keynsham, Midsomer Norton and across North East Somerset — with emergency drain unblocking pages, CCTV survey content, 24/7 availability messaging, and Google Business Profile optimisation as standard. From £399.
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
              {['From £399', '24/7 emergency page', 'CCTV survey page', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why drainage engineer sites fail */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">The problem</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Why most drainage engineer websites do not generate calls</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The majority of drainage engineer websites are either built on cheap templates that load slowly on mobile, or they are one-page sites that try to rank for every keyword at once and rank for none. Neither approach works for emergency searches.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches for an emergency drainage engineer at midnight, Google looks for a page that is specifically about emergency drain unblocking in their area — not a homepage that mentions it once. A dedicated emergency page, fast to load on mobile, is what gets into the Map Pack and the top organic results for those searches.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond emergencies, CCTV drain surveys and drain repairs are higher-value services that need their own pages to rank. A professional site that communicates your services, your availability and your coverage area clearly converts enquiries that a generic template loses.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTag className="mb-4">What is included</SectionTag>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Built specifically for drainage businesses</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a drainage engineer is designed around how drainage customers actually search — emergency first, CCTV surveys second, services and areas throughout. Not a generic template with your logo dropped in.
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
                { name: 'Starter', desc: '1-page site — home, services summary, contact', price: 'From £399' },
                { name: 'Professional', desc: '3-page site — home, 1 service page, contact', price: 'From £599' },
                { name: 'Full', desc: '5+ pages — home, emergency, CCTV surveys, service areas, about', price: 'From £999' },
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
                  <div className="text-gray-500 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £199/year</div>
                </div>
                <div className="font-bold shrink-0 ml-4 text-primary">6 months free</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6">All packages include Google Business Profile set-up and optimisation. Hosting free for 6 months, then £199/year. No lock-in contracts.</p>
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
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Bath & Somerset drainage market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has a large stock of older properties with Victorian and Edwardian drainage systems — clay pipes, combined sewers and root-prone clay tile drains that are well past their intended lifespan. Drainage engineers who can communicate experience with period drainage systems have a genuine advantage in BA1 and BA2. CCTV drain survey searches are strong in Bath, driven by the city's active property market and the number of homebuyers who need pre-purchase surveys.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham, Midsomer Norton and Radstock have a different mix — more modern housing estates with different drainage issues, lower online competition and growing new-build developments where snagging-period drain problems are common. A well-optimised site and Google Business Profile in these areas can reach the Map Pack faster than the same work would take in central Bath.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We are based in Keynsham and build sites for trades across the whole area. We know which drainage searches convert in each postcode and build every site to target them specifically — not just drop your name into a national template.
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about drainage engineer websites</h2>
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
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Drainage Engineers</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for drainage engineer searches in your area</div>
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

export default WebDesignForDrainageEngineers;