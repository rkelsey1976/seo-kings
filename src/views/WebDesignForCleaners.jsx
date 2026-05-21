'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const features = [
  'DBS check and insurance visibility — essential for domestic cleaning businesses',
  'Dedicated service pages: domestic cleaning, end of tenancy, deep cleans, office cleaning',
  'Online booking or quote request form — cleaning is a recurring service, make it easy to start',
  'Review integration — cleaning businesses live and die by word of mouth, make it visible',
  'Google Business Profile optimised for cleaning service categories',
  'Service area pages for every town you clean in',
  'Recurring customer angle — weekly and fortnightly service messaging',
  'Trust signals: years in business, number of clients, satisfaction guarantee',
];

const recommendedPages = [
  { page: 'Home', detail: 'DBS and insurance visible, services summary, reviews, quick quote form' },
  { page: 'Domestic / house cleaning', detail: 'Highest search volume — regular and one-off cleans' },
  { page: 'End of tenancy cleaning', detail: 'High-value, time-sensitive work — specific page ranks cleanly' },
  { page: 'Deep cleaning', detail: 'Catches seasonal and one-off search demand' },
  { page: 'Office / commercial cleaning', detail: 'Separate page if you do business premises' },
  { page: 'Prices & packages', detail: 'Cleaning customers want to know costs upfront — transparency wins trust' },
  { page: 'Service areas', detail: 'One page per town you cover — area-specific searches convert well' },
  { page: 'About', detail: 'DBS certificate, insurance, how long you\'ve been trading, team photo' },
];

const results = [
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    slug: 'peachy-cleans',
  },
];

const faqs = [
  {
    q: 'Does a cleaning business need a website?',
    a: 'Yes — especially for domestic cleaning. Customers are inviting someone into their home, often when they\'re not there. They need to trust you before they book. A professional website with visible DBS information, insurance details and genuine reviews removes the hesitation that stops potential customers from calling. Without one, you\'re competing entirely on price and personal recommendation.',
  },
  {
    q: 'Should I show my prices on my cleaning website?',
    a: 'We recommend it — or at least a "from" price. Cleaning customers are often comparing multiple businesses and will move on quickly if they can\'t get a rough idea of cost. Transparency on pricing reduces time-wasters and brings in better-qualified enquiries. If your pricing varies by property size or frequency, a simple quote form works just as well.',
  },
  {
    q: 'How do I get more cleaning customers from Google?',
    a: 'Two things work together: a well-optimised Google Business Profile so you appear in the Map Pack when someone searches "cleaner [your town]", and a website with dedicated service pages that rank in organic results. We set up both. Peachy Cleans in Midsomer Norton went from no online presence to the Map Pack for "cleaning Midsomer Norton" using exactly this approach.',
  },
  {
    q: 'Do I need separate pages for domestic and end of tenancy cleaning?',
    a: 'Yes. They\'re different searches, different customer needs and different conversion approaches. Someone searching "end of tenancy cleaning Bath" is usually under time pressure and needs a specific outcome. Someone searching "weekly cleaner Keynsham" is at the start of a long-term relationship. Separate pages let you speak to both directly.',
  },
  {
    q: 'How does Google Business Profile help a cleaning business?',
    a: 'It puts you in the Map Pack — the three businesses shown with map pins at the top of local search results. For "cleaner near me" or "cleaning [town]" searches, the Map Pack gets the majority of clicks. Setting up and optimising your profile (correct category, services listed, regular photos and reviews) is often the fastest way for a cleaning business to start appearing in local search.',
  },
  {
    q: 'Can you help me get into the Google Map Pack for cleaning searches?',
    a: 'Yes — that\'s exactly what we did for Peachy Cleans in Midsomer Norton. The Map Pack for cleaning searches is achievable in most towns across Bath and North East Somerset, particularly outside the city centre where competition is lower. We\'ll audit your current position and give you a realistic timeline in the free audit.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/cleaners',
      url: 'https://seo-kings.co.uk/web-design-for/cleaners',
      name: 'Web Design for Cleaners | SEO Kings',
      description: 'Websites for cleaning businesses in Bath & Somerset. DBS and insurance display, dedicated service pages, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Cleaners' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/cleaners/#service',
      name: 'Web Design for Cleaners',
      description: 'Website design for cleaning businesses in Bath and North East Somerset. Trust-first design with DBS and insurance display, dedicated domestic, end of tenancy and deep clean pages, Google Business Profile optimisation.',
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
        description: 'Cleaning business website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/cleaners',
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

const WebDesignForCleaners = () => {
  return (
    <>
      <SEO
        title="Web Design for Cleaners Bath & Somerset | From £399"
        description="Websites for cleaning businesses in Bath & Somerset. DBS and insurance display, service pages, Google Business Profile included. We got Peachy Cleans into the Map Pack. From £399."
        canonical="/web-design-for/cleaners"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Cleaners' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Web design for trades · Cleaners
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span style={{ color: '#E8715A' }}>Cleaners</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Cleaning customers are booking someone who'll be in their home, often unsupervised. Trust is the deciding factor — not price. A professional website with visible DBS information, insurance and genuine reviews tells a customer you're legitimate before they've spoken to you.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for cleaning businesses in Bath, Keynsham, Midsomer Norton and across North East Somerset. We've already got a Midsomer Norton cleaner into the Google Map Pack. From £399.
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
              {['From £399', 'DBS display included', 'Map Pack proven', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>What's included</p>
              <h2 className="text-3xl font-bold text-white mb-6">Built to build trust and win recurring customers</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Cleaning is a high-trust, recurring business. The goal isn't just a single enquiry — it's a customer who books weekly or fortnightly and refers their neighbours. We build every cleaning website to communicate trust first and make it effortless to get started.
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
              <p className="text-sm text-gray-400 mb-6">Each service type gets its own page — domestic, end of tenancy and deep clean customers search differently and need different content.</p>
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
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-8" style={{ color: '#E8715A' }}>Verified results</p>
          <h2 className="text-3xl font-bold text-white mb-10">We've already done it for a local cleaner</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {results.map((r) => (
              <Link key={r.slug} href={`/case-studies/${r.slug}`} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group">
                <div className="text-2xl font-bold mb-1" style={{ color: '#E8715A' }}>{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: '#E8715A' }}>
                  View case study
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
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
                { name: 'Starter', desc: '1-page site — services, trust signals and contact', price: 'From £399' },
                { name: 'Professional', desc: '3-page site — home, 1 service page, contact', price: 'From £599' },
                { name: 'Full', desc: '5+ pages — home, domestic, end of tenancy, deep clean, service areas', price: 'From £999' },
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
            <h2 className="text-3xl font-bold text-white mb-6">We know the cleaning market in Bath & Somerset</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We built the website for Peachy Cleans in Midsomer Norton — they went from no online presence to the Google Map Pack for "cleaning Midsomer Norton". The principle holds across the whole area: cleaning searches in Bath, Keynsham, Radstock and the Somer Valley are driven by people looking for a reliable, trustworthy local cleaner, and a well-optimised Google Business Profile and website is how they find you.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has strong demand for domestic cleaning driven by a large professional population and short-term rental properties. End of tenancy cleaning is consistent year-round in the city's rental market. In Keynsham and the Somer Valley towns, competition for cleaning searches is lower — a properly set-up business can reach the Map Pack quickly.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We're based in Keynsham and cover the whole area. We're happy to meet locally or work remotely.
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
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>FAQs</p>
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about cleaning business websites</h2>
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
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Cleaners</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/case-studies/peachy-cleans" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Peachy Cleans Case Study</div>
                <div className="text-xs text-gray-500">Map Pack for "cleaning Midsomer Norton" — how we did it</div>
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

export default WebDesignForCleaners;
