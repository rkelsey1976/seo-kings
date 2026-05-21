'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const features = [
  'Conservation area and listed building expertise featured prominently — the biggest concern for Bath homeowners',
  'Dedicated pages for each extension type: single storey, double storey, wrap-around, orangery',
  'Planning permission guidance built into the design — addresses the #1 customer concern',
  'Material specifications featured — Bath stone, reclaimed stone, matching brickwork',
  'Before and after photo galleries showing transformations in period and modern properties',
  'Google Business Profile optimised for extension builder categories',
  'Service area pages for every town you cover — targeting postcode searches',
  'Review integration — show your Google and Trustpilot ratings',
];

const recommendedPages = [
  { page: 'Home', detail: 'Gallery hero, click-to-call, service summary and reviews' },
  { page: 'Single storey extensions', detail: 'Most popular extension type — dedicated page with gallery and process' },
  { page: 'Double storey extensions', detail: 'Higher-value work — separate page with planning permission guidance' },
  { page: 'Conservation area & listed building extensions', detail: 'Bath-specific expertise — critical trust page for local market' },
  { page: 'Planning permission guide', detail: 'Answers the #1 customer question — strong SEO content page' },
  { page: 'Before & after gallery', detail: 'Visual proof — separate gallery page with filtering by extension type' },
  { page: 'Service areas', detail: 'One page per town you cover, targeting postcode searches' },
  { page: 'About', detail: 'Accreditations, years experience, material expertise — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my extension building business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches for an extension builder near them. Your website is where they go to see your previous work, understand your approach to planning permission and decide whether to request a quote. A profile without a website loses enquiries to builders who showcase their portfolio online. We set up and optimise both.',
  },
  {
    q: 'Do I need separate pages for each extension type?',
    a: 'Yes. Single storey, double storey and wrap-around extensions are different searches with different customer intent. Someone searching for a single storey extension is often looking for a kitchen expansion; someone searching for a double storey extension wants extra bedrooms. Separate pages target each search directly, rank faster and convert better than one page trying to cover everything. Your homepage cannot rank for all types equally well.',
  },
  {
    q: 'Should I include a conservation area and listed building page?',
    a: 'Absolutely — especially if you work in Bath. A large proportion of Bath properties are in conservation areas or are listed buildings, and homeowners are anxious about planning permission and what is possible. A dedicated page that addresses these constraints demonstrates expertise and captures searches like "extension builder conservation area Bath" that generic competitors cannot target. We build this as standard for Bath-based builders.',
  },
  {
    q: 'Should I feature Bath stone and material expertise on my website?',
    a: 'Yes. Material matching is a major concern for homeowners in Bath and the surrounding area, where Bath stone, reclaimed stone and specific brick types are often required by planning departments. Showcasing your knowledge of local materials sets you apart from builders who treat every extension the same. We highlight material expertise prominently on every site we build for extension builders.',
  },
  {
    q: 'How many pages does an extension builder website need?',
    a: 'A minimum of 6–8 for a solid local ranking: home, 2–3 extension type pages, a planning permission guide, a conservation areas page if you work in Bath, an about page and a contact page. A dedicated gallery page and service area pages add significant ranking power. We will discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my extension builder website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We handle the design, build and SEO setup. We need your services, areas covered, any project photos you have and your accreditations. We can write the copy for you too.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/extension-builders',
      url: 'https://seo-kings.co.uk/web-design-for/extension-builders',
      name: 'Web Design for Extension Builders | SEO Kings',
      description: 'Websites for extension builders in Bath & Somerset. Fast, mobile-first, built to rank for extension searches. Conservation area expertise, Bath stone, before/after galleries, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Extension Builders' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/extension-builders/#service',
      name: 'Web Design for Extension Builders',
      description: 'Website design for extension building businesses in Bath and North East Somerset. Fast, mobile-first sites with conservation area expertise, material specifications, before/after galleries, and Google Business Profile optimisation.',
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
        description: 'Extension builder website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/extension-builders',
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

const WebDesignForExtensionBuilders = () => {
  return (
    <>
      <SEO
        title="Web Design for Extension Builders Bath & Somerset | From £399"
        description="Websites for extension builders in Bath & Somerset. Fast, mobile-first, built for extension searches. Conservation area expertise, Bath stone, before/after galleries, Google Business Profile included. From £399."
        canonical="/web-design-for/extension-builders"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Extension Builders' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Web design for trades · Extension Builders
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span style={{ color: '#E8715A' }}>Extension Builders</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Building an extension is a major investment and homeowners research thoroughly before they choose a builder. They want to see your previous work, understand how you handle planning permission and know whether you can work with conservation area restrictions and Bath stone. If your website does not answer those questions, they find a builder whose website does.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for extension builders in Bath, Keynsham, Midsomer Norton and across North East Somerset — with conservation area expertise, before and after galleries, and Google Business Profile optimisation as standard. From £399.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200" style={{ backgroundColor: '#C25245' }}>
                Get a Free Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+447702264921" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/10 hover:border-white/20 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                07702 264 921
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['From £399', 'Conservation area expertise', 'Before & after gallery', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why extension builder sites fail */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>The problem</p>
            <h2 className="text-3xl font-bold text-white mb-6">Why most extension builder websites do not generate enquiries</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Many extension builder websites make the same mistakes: they show low-quality photos with no context, they list every extension type on a single page, and they never address the planning permission and conservation area concerns that dominate how customers search in Bath.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches for a single storey extension in Bath, Google looks for a page specifically about single storey extensions — not a homepage that mentions extensions in passing. Separate pages for each extension type rank faster and convert better because they match exactly what the customer is searching for.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Extensions are high-value, high-trust projects. Customers spend weeks researching before they make contact. A website that demonstrates conservation area expertise, shows exceptional previous work and addresses planning constraints clearly will capture enquiries that a generic builder website loses every time.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>What is included</p>
              <h2 className="text-3xl font-bold text-white mb-6">Built specifically for extension builders</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for an extension builder is designed around how homeowners research and choose a builder — visuals first, planning expertise addressed upfront, materials and local knowledge throughout. Not a generic template with your logo dropped in.
              </p>
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Recommended site structure</p>
              <p className="text-sm text-gray-400 mb-6">Pages that give you the best chance of ranking for every extension type you offer — not just one catch-all services page.</p>
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
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Pricing</p>
            <h2 className="text-3xl font-bold text-white mb-6">Straightforward pricing, no surprises</h2>
            <div className="space-y-4 mb-8">
              {[
                { name: 'Starter', desc: '1-page site — home, services summary, contact', price: 'From £399' },
                { name: 'Professional', desc: '3-page site — home, 1 extension type page, contact', price: 'From £599' },
                { name: 'Full', desc: '5+ pages — home, extension type pages, gallery, planning guide, about', price: 'From £999' },
              ].map((pkg) => (
                <div key={pkg.name} className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0">
                  <div>
                    <div className="text-white font-semibold text-sm">{pkg.name}</div>
                    <div className="text-gray-500 text-xs">{pkg.desc}</div>
                  </div>
                  <div className="font-bold shrink-0 ml-4" style={{ color: '#E8715A' }}>{pkg.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="text-white font-semibold text-sm">Hosting and maintenance</div>
                  <div className="text-gray-500 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £199/year</div>
                </div>
                <div className="font-bold shrink-0 ml-4" style={{ color: '#E8715A' }}>6 months free</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6">All packages include Google Business Profile set-up and optimisation. Hosting free for 6 months, then £199/year. No lock-in contracts.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200" style={{ backgroundColor: '#C25245' }}>
              Get a Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Local knowledge</p>
            <h2 className="text-3xl font-bold text-white mb-6">We know the Bath & Somerset extension market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath is one of the most planning-sensitive cities in the UK. A significant proportion of properties are in conservation areas, many are listed, and the local planning authority has strict requirements around materials — Bath stone ashlar, matching lime mortar, reclaimed roof tiles. Extension builders who clearly demonstrate this expertise on their website have a genuine advantage in winning enquiries, because it is the first thing homeowners worry about.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham, Midsomer Norton and Radstock have more modern housing stock where permitted development rights are often straightforward and planning is less of a concern. Competition for extension builder searches is lower in these areas, so a well-optimised site can reach the Map Pack faster than the same effort in central Bath.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We are based in Keynsham and build sites for trades across the whole area. We know which extension searches convert in each postcode and build every site to target them specifically — not just drop your name into a national template.
            </p>
            <address className="not-italic text-sm text-gray-400 leading-relaxed border-l-2 pl-4" style={{ borderColor: '#E8715A' }}>
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
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>FAQs</p>
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about extension builder websites</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>Related services</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Extension Builders</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for extension builder searches in your area</div>
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

export default WebDesignForExtensionBuilders;