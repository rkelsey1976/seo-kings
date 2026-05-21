'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const features = [
  'Before and after photo galleries — the most powerful conversion tool for loft conversion companies',
  'Dedicated pages for each conversion type: dormer, Velux, hip-to-gable, mansard',
  'Planning permission guidance built into the design — addresses the question every customer asks first',
  'Building regulations and structural engineer involvement clearly explained',
  'Staircase design and access solutions featured prominently',
  'Google Business Profile optimised for loft conversion categories',
  'Service area pages for every town you cover — targeting postcode searches',
  'Review integration — show your Google and Trustpilot ratings',
];

const recommendedPages = [
  { page: 'Home', detail: 'Gallery hero, click-to-call, service summary and reviews' },
  { page: 'Dormer loft conversions', detail: 'Most popular type — dedicated page with gallery and process' },
  { page: 'Velux loft conversions', detail: 'Lower cost option — separate page targeting budget-conscious searches' },
  { page: 'Hip-to-gable conversions', detail: 'Technical page — structural detail, planning permission guidance' },
  { page: 'Planning permission guide', detail: 'Answers the #1 customer question — strong SEO content page' },
  { page: 'Before & after gallery', detail: 'Visual proof — separate gallery page with filtering by conversion type' },
  { page: 'Service areas', detail: 'One page per town you cover, targeting postcode searches' },
  { page: 'About', detail: 'Accreditations, years experience, team photo — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my loft conversion business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches for a loft conversion company near them. Your website is where they go to see your previous work, read about the different conversion types and decide whether to request a quote. A profile without a website loses enquiries to companies who showcase their portfolio online. We set up and optimise both.',
  },
  {
    q: 'Do I need separate pages for each loft conversion type?',
    a: 'Yes. Dormer, Velux and hip-to-gable conversions are different searches with different customer intent. Someone searching for a Velux loft conversion is often budget-conscious; someone searching for a dormer conversion wants maximum space. Separate pages target each search directly, rank faster and convert better than one page trying to cover everything. Your homepage cannot rank for all three equally well.',
  },
  {
    q: 'Should I include a planning permission guide on my website?',
    a: 'Absolutely. Planning permission is the first question every loft conversion customer asks. A clear, helpful guide page targets informational searches like "do I need planning permission for a loft conversion" — these searches bring in potential customers at the research stage. By the time they are ready to get quotes, they already know your name. It also demonstrates expertise and builds trust. We build this as standard.',
  },
  {
    q: 'How important is the before and after gallery?',
    a: 'It is the single most powerful conversion tool on a loft conversion website. Customers want visual proof that you can transform their space. A well-organised gallery with before and after photos, filtered by conversion type, keeps visitors on your site longer and dramatically increases quote requests. We build gallery functionality into every site.',
  },
  {
    q: 'How many pages does a loft conversion website need?',
    a: 'A minimum of 6–8 for a solid local ranking: home, 3–4 conversion type pages, a planning permission guide, an about page and a contact page. A dedicated gallery page and service area pages add significant ranking power. We will discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my loft conversion website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We handle the design, build and SEO setup. We need your services, areas covered, any project photos you have and your accreditations. We can write the copy for you too.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/loft-conversions',
      url: 'https://seo-kings.co.uk/web-design-for/loft-conversions',
      name: 'Web Design for Loft Conversion Companies | SEO Kings',
      description: 'Websites for loft conversion companies in Bath & Somerset. Fast, mobile-first, built to rank for loft conversion searches. Before/after galleries, planning permission pages, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Loft Conversions' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/loft-conversions/#service',
      name: 'Web Design for Loft Conversion Companies',
      description: 'Website design for loft conversion businesses in Bath and North East Somerset. Fast, mobile-first sites with before/after galleries, planning permission guides, and Google Business Profile optimisation.',
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
        description: 'Loft conversion company website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/loft-conversions',
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

const WebDesignForLoftConversions = () => {
  return (
    <>
      <SEO
        title="Web Design for Loft Conversion Companies Bath & Somerset | From £399"
        description="Websites for loft conversion companies in Bath & Somerset. Fast, mobile-first, built for loft conversion searches. Before/after galleries, planning permission pages, Google Business Profile included. From £399."
        canonical="/web-design-for/loft-conversions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Loft Conversions' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Web design for trades · Loft Conversions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span style={{ color: '#E8715A' }}>Loft Conversion</span>
              {' '}Companies in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              A loft conversion is one of the biggest investments a homeowner will make. Before they pick up the phone, they want to see your previous work, understand the different conversion types and know whether they need planning permission. If your website does not answer those questions clearly, they move on to a competitor who does.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for loft conversion companies in Bath, Keynsham, Midsomer Norton and across North East Somerset — with before and after galleries, planning permission guides, and Google Business Profile optimisation as standard. From £399.
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
              {['From £399', 'Before & after gallery', 'Planning permission guide', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why loft conversion sites fail */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>The problem</p>
            <h2 className="text-3xl font-bold text-white mb-6">Why most loft conversion websites do not generate enquiries</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Many loft conversion websites make the same mistakes: they show a handful of low-quality photos with no before shots, they lump every conversion type onto a single page, and they never address the planning permission question that every customer has at the top of their mind.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              When someone searches for a dormer loft conversion in Bath, Google looks for a page specifically about dormer conversions in Bath — not a homepage that lists every service in one paragraph. Separate pages for each conversion type rank faster and convert better because they match exactly what the customer is searching for.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Loft conversions are high-value, high-trust projects. Customers spend weeks researching before they make contact. A website that answers their questions, shows exceptional previous work and demonstrates expertise will capture enquiries that a generic template loses every time.
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
              <h2 className="text-3xl font-bold text-white mb-6">Built specifically for loft conversion companies</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a loft conversion company is designed around how customers research and choose a builder — visuals first, trust signals throughout, planning permission addressed upfront. Not a generic template with your logo dropped in.
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
              <p className="text-sm text-gray-400 mb-6">Pages that give you the best chance of ranking for every conversion type you offer — not just one catch-all services page.</p>
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
                { name: 'Professional', desc: '3-page site — home, 1 conversion type page, contact', price: 'From £599' },
                { name: 'Full', desc: '5+ pages — home, conversion type pages, gallery, planning guide, about', price: 'From £999' },
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
            <h2 className="text-3xl font-bold text-white mb-6">We know the Bath & Somerset loft conversion market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has an exceptional housing stock for loft conversions — Georgian terraces, Victorian semis and 1930s properties with generous roof spaces that are ideal for dormer and Velux conversions. However, many of these properties are in conservation areas or are listed buildings, which affects the planning process and the type of conversion possible. A loft conversion company that clearly addresses these constraints on its website has a significant advantage in winning enquiries.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Keynsham, Midsomer Norton and Radstock have more post-war and modern housing where permitted development rights are often straightforward. Competition for loft conversion searches is lower in these areas, so a well-optimised site can reach the Map Pack faster than the same effort in central Bath.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We are based in Keynsham and build sites for trades across the whole area. We know which loft conversion searches convert in each postcode and build every site to target them specifically — not just drop your name into a national template.
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
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about loft conversion websites</h2>
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
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Loft Conversions</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for loft conversion searches in your area</div>
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

export default WebDesignForLoftConversions;