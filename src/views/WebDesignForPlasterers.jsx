'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const features = [
  'Before/after gallery — plastering is visual, customers need to see the quality of your finish',
  'Dedicated service pages: skimming, rendering, dry lining, artex removal, lime plaster',
  'Heritage and period property expertise highlighted — Bath has thousands of listed buildings',
  'Click-to-call on every page — customers search for plasterers on mobile',
  'Google Business Profile optimised for plastering categories',
  'Service area pages for every town you cover',
  'Review integration — show your Google and Checkatrade ratings',
  'Lime plaster and traditional materials expertise displayed for listed property searches',
];

const recommendedPages = [
  { page: 'Home', detail: 'Portfolio hook, click-to-call, service summary and reviews' },
  { page: 'Skimming', detail: 'High-volume search — skimming walls and ceilings needs its own page' },
  { page: 'Rendering', detail: 'External work, different audience — separate page ranks faster' },
  { page: 'Dry lining', detail: 'Commercial and residential — targets both property types' },
  { page: 'Artex removal', detail: 'Specific search term, safety concerns — dedicated page builds trust' },
  { page: 'Lime plaster', detail: 'Listed buildings require lime — targets heritage property owners' },
  { page: 'Bath area page', detail: 'Bath period properties need specialist plastering — targets local searches' },
  { page: 'About', detail: 'Qualifications, years experience, portfolio highlights — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my plastering business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches "plasterer near me". Your website is where they go to see your before/after photos, check your experience with period properties, and decide whether to call. A profile without a website loses jobs to plasterers who have one. A website without a GBP is invisible on Maps. We set up and optimise both.',
  },
  {
    q: 'Should I have separate pages for skimming, rendering and lime plaster?',
    a: 'Yes. Each service is a different search. Someone looking for "lime plasterer Bath" has a listed building and needs a specialist — they won\'t be satisfied seeing "skimming" on a generic services page. Separate pages rank for their own keywords, target the right customers, and let you show relevant before/after photos for each. Your homepage can\'t rank for "skimming Bath", "rendering Bath" and "lime plasterer Bath" equally well.',
  },
  {
    q: 'Do I need a before/after gallery on my plastering website?',
    a: 'Absolutely. Plastering is one of the most visual trades — customers judge quality by the finish, not words. Before/after photos are the single most important trust signal on a plasterer\'s website. We build galleries into every site and make them load fast on mobile, where most of your searches happen.',
  },
  {
    q: 'How do I show my expertise with Bath period properties?',
    a: 'Bath has one of the largest stocks of listed buildings in the UK, and lime plaster is a requirement for most of them. A dedicated "lime plaster" page and a "Bath area" page that talks specifically about Georgian and Victorian properties, decorative cornices and ceiling roses sets you apart from general plasterers who don\'t understand heritage work. We help you write this content and structure it so it ranks.',
  },
  {
    q: 'How many pages does a plasterer website need?',
    a: 'A minimum of 5–7 for a solid local ranking: home, 3–4 service pages (skimming and lime plaster at minimum), an about page, and a contact page. An area-specific Bath page adds significant ranking power for heritage property searches. Service area pages for surrounding towns also help. We\'ll discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my plasterer website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process straightforward — we handle the design, build and SEO setup. We just need your services, areas covered, before/after photos and any qualifications you have. We can write the copy for you too.',
  },
  {
    q: 'Can you help me rank for lime plaster and heritage plastering searches in Bath?',
    a: 'Yes. Heritage plastering searches in Bath are less competitive than general plastering terms, but most plasterers don\'t have the site structure to rank for them. A dedicated lime plaster page, a Bath area page, and well-optimised Google Business Profile together can reach the Map Pack within 3–4 months. General plastering terms in Bath take longer — typically 4–6 months for solid rankings.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/plasterers',
      url: 'https://seo-kings.co.uk/web-design-for/plasterers',
      name: 'Web Design for Plasterers | SEO Kings',
      description: 'Websites for plasterers in Bath & Somerset. Fast, mobile-first, built to rank for local and heritage search. Before/after galleries, dedicated service pages. From £250. Add GBP optimisation for £100.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/plasterers/#service',
      name: 'Web Design for Plasterers',
      description: 'Website design for plastering businesses in Bath and North East Somerset. Fast, mobile-first sites with before/after galleries, dedicated service pages for skimming, rendering and lime plaster, and Google Business Profile optimisation.',
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
        description: 'Plasterer website from £250 — GBP optimisation available as a £100 add-on',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/plasterers',
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

const WebDesignForPlasterers = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
              Web design for trades · Plasterers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span className="text-primary">Plasterers</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Plastering is visual. Customers want to see your work before they call — the quality of your finish, the before and after, the period properties you've restored. If your website doesn't show that clearly and quickly, they'll find a plasterer who does.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for plasterers in Bath, Keynsham, Midsomer Norton and across North East Somerset — with before/after galleries, dedicated service pages for skimming, rendering and lime plaster, from £250. Add GBP optimisation for £100.
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
              {['From £250', 'Before/after gallery included', 'Lime plaster page as standard', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why plasterer sites fail */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">The problem</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Why most plasterer websites don't generate calls</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The majority of plasterer websites are either built on cheap templates that don't showcase visual work properly, or they're one-page sites that try to mention every service — skimming, rendering, dry lining, artex removal, lime plaster — in a single paragraph and rank for none of them.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches "lime plasterer Bath" because they have a listed building, Google looks for a page specifically about lime plaster in Bath — not a homepage that mentions it once alongside six other services. A dedicated lime plaster page with relevant before/after photos is what gets into the Map Pack and top organic results.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond search, plastering is a trust business. Customers want to see your before and after photos. They want to know you understand their period property. They want to see that you handle artex removal safely. A professional site that communicates all of this clearly converts enquiries that a generic template loses.
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
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Built specifically for plastering businesses</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a plasterer is designed around how plastering customers actually search — visual proof first, services second, trust throughout. Not a generic template with your logo dropped in.
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
                { name: 'Starter', desc: '1-page site — home, services summary, before/after gallery, contact', price: 'From £250' },
                { name: 'Professional', desc: '3-page site — home, 1 service page with gallery, contact', price: 'From £350' },
                { name: 'Full', desc: '7+ pages — home, service pages, Bath area page, about, contact', price: 'From £450' },
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
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">We know the Bath & Somerset plastering market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has one of the largest stocks of period properties in the UK — Georgian townhouses, Victorian terraces and listed buildings that require lime plaster rather than modern gypsum. Plasterers who can demonstrate expertise with lime plaster, decorative cornices and ceiling roses have a genuine advantage in BA1 and BA2. Heritage property owners search specifically for these skills.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The 1970s and 1980s housing stock across Keynsham, Midsomer Norton and Radstock drives strong demand for artex removal. These are specific searches — "artex removal near me", "skimming over artex Bath" — and a dedicated page targeting them converts much better than a generic services mention. Lower online competition in these towns means a well-optimised site can reach the Map Pack faster.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We're based in Keynsham and build sites for trades across the whole area. We know which plastering searches convert in each postcode and build every site to target them specifically — not just drop your name into a national template.
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about plasterer websites</h2>
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
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Plasterers</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for plastering searches in your area</div>
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

export default WebDesignForPlasterers;