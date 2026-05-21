'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const features = [
  'Before and after gallery — the most important conversion tool for any decorator',
  'Dedicated service pages: interior painting, exterior painting, wallpaper hanging, heritage properties',
  'Heritage and period property section — essential for Bath BA1 and BA2 work',
  'Quote form that captures room type, surface condition and photos',
  'Google Business Profile optimised with painting and decorating categories',
  'Service area pages for every town you cover',
  'Review integration — decorator searches are heavily review-driven',
  'Click-to-call and enquiry form optimised for quote requests rather than emergency calls',
];

const recommendedPages = [
  { page: 'Home', detail: 'Gallery front and centre, click-to-call, services overview and reviews' },
  { page: 'Interior painting & decorating', detail: 'Highest search volume for most decorators' },
  { page: 'Exterior painting', detail: 'Seasonal high demand — separate page ranks better' },
  { page: 'Wallpaper hanging', detail: 'Specialist skill — customers search specifically for it' },
  { page: 'Heritage & period properties', detail: 'High value in Bath — Georgian and Victorian properties' },
  { page: 'Commercial decorating', detail: 'Separate page if you do offices, retail or hospitality' },
  { page: 'Gallery', detail: 'Before/after photos by room type and job — the strongest trust signal' },
  { page: 'Service areas', detail: 'One page per town, targeting postcode and area searches' },
];

const results = [
  {
    business: 'New Decorating',
    location: 'Bath',
    result: '#1 organic',
    keyword: '"exterior painter Bath"',
    slug: 'new-decorating',
  },
];

const faqs = [
  {
    q: 'Do I need a gallery on my decorator website?',
    a: 'Yes — it\'s the single most important element of a decorator website. Customers are choosing someone to work in their home, often for multiple days. They want to see the quality of your finish before they call. A gallery of before-and-after shots, organised by room type and job, converts browsers into enquiries more effectively than any other content. We build gallery sections as standard on all decorator sites.',
  },
  {
    q: 'Should I have separate pages for interior and exterior work?',
    a: 'Yes. Interior and exterior decorating are different search terms, different seasonal demand, and often different decision-makers. A homeowner searching "exterior painter Bath" in spring is at a different stage to someone searching "bedroom decorator Keynsham" in winter. Separate pages let you rank for both and speak to each customer appropriately.',
  },
  {
    q: 'Do decorators need local SEO?',
    a: 'Absolutely. Decorating is an entirely local business — your customers are searching for someone in their town or postcode. Google\'s Map Pack and organic local results are where those searches land. Without a properly optimised Google Business Profile and website, you\'re relying entirely on word of mouth and referrals.',
  },
  {
    q: 'How do customers find decorators online?',
    a: 'Mostly through Google — either the Map Pack ("decorator near me") or organic search ("interior decorator Bath"). They\'ll then look at the top 2–3 results, check the gallery and reviews, and call the one they trust most. Reviews and photos are the deciding factor for most customers. We build every decorator site to show both prominently.',
  },
  {
    q: 'How quickly can you build a decorating website?',
    a: 'Most sites are live within 2 weeks of receiving your content. The most important thing you can send us is photos — before/after shots of recent jobs, if you have them. We can write the copy from a brief if that\'s easier. We\'ll guide you through everything needed.',
  },
  {
    q: 'My work is the proof — can you help me show it properly online?',
    a: 'That\'s exactly the brief. We build gallery sections that show your work clearly on mobile, organised by job type so customers can find what they\'re looking for. If you don\'t have professional photos, even good phone shots work well — we\'ll advise on what to capture. We\'ve already done this for a Bath painter and decorator who now ranks #1 for "exterior painter Bath".',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/painters-decorators',
      url: 'https://seo-kings.co.uk/web-design-for/painters-decorators',
      name: 'Web Design for Painters & Decorators | SEO Kings',
      description: 'Websites for painters and decorators in Bath & Somerset. Gallery-first design, heritage property pages, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Painters & Decorators' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/painters-decorators/#service',
      name: 'Web Design for Painters & Decorators',
      description: 'Website design for painters and decorators in Bath and North East Somerset. Gallery-first design, dedicated interior, exterior and heritage pages, Google Business Profile optimisation.',
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
        description: 'Painter and decorator website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/painters-decorators',
      telephone: '+447702264921',
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

const WebDesignForPainterDecorators = () => {
  return (
    <>
      <SEO
        title="Web Design for Painters & Decorators Bath & Somerset | From £399"
        description="Websites for painters and decorators in Bath & Somerset. Gallery-first design, interior, exterior and heritage property pages, GBP included. From £399."
        canonical="/web-design-for/painters-decorators"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Painters & Decorators' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
              Web design for trades · Painters & Decorators
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span className="text-primary">Painters & Decorators</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Decorating is a trust-first business. Customers let you into their home for days — sometimes weeks. They want to see your work before they call. Without a gallery and a professional website, you're invisible to anyone who hasn't been personally recommended to you.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for painters and decorators in Bath, Keynsham and across North East Somerset. Gallery-first design, dedicated pages for every service, and Google Business Profile set-up as standard. We've already got a Bath decorator to number one on Google. From £399.
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
              {['From £399', 'Gallery included', 'Heritage property pages', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
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
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Built to show your work and win enquiries</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                A decorator website lives or dies on its gallery. We build every site with photos front and centre — before and after shots organised by job type, so customers can see exactly the standard of finish they're getting before they pick up the phone.
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
              <p className="text-sm text-gray-400 mb-6">Separate pages for each service type rank independently — a customer searching "exterior painter Bath" needs a different page to one searching "wallpaper hanging Keynsham".</p>
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

      {/* Case study */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Verified results</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">We've done it for a Bath decorator already</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {results.map((r) => (
              <Link key={r.slug} href={`/case-studies/${r.slug}`} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group">
                <div className="text-2xl font-bold mb-1 text-primary">{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  View case study
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
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
                { name: 'Starter', desc: '1-page site — services, gallery and contact', price: 'From £399' },
                { name: 'Professional', desc: '3-page site — home with gallery, 1 service page, contact', price: 'From £599' },
                { name: 'Full', desc: '5+ pages — home, interior, exterior, heritage, gallery, service areas', price: 'From £999' },
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
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Bath is a decorator's market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has one of the highest concentrations of Georgian and Victorian properties in the UK. Period homes need sympathetic finishes — decorators who understand heritage properties, breathable paint systems and listed building considerations have a genuine premium positioning in this market. Customers in BA1 and BA2 search specifically for decorators with period property experience and will pay a premium for the right expertise.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We built the website for New Decorating — a Bath painter and decorator — and they now rank number one for "exterior painter Bath". That result came from the right page structure, the right local signals, and a Google Business Profile working alongside the site. The same approach applies across the whole area.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We cover Bath, Keynsham, Midsomer Norton, Radstock and the surrounding area. We're happy to meet you locally or work remotely — whatever suits you.
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about decorator websites</h2>
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
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Decorators</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/case-studies/new-decorating" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">New Decorating Case Study</div>
                <div className="text-xs text-gray-500">#1 for "exterior painter Bath" — how we did it</div>
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

export default WebDesignForPainterDecorators;
