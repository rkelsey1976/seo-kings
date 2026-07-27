import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const services = [
  {
    name: 'Local SEO',
    description: 'Map Pack rankings, citations and Google Business Profile management for trades who serve a specific area.',
    price: 'From £150/mo',
    href: '/local-seo',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
  },
  {
    name: 'Technical SEO',
    description: 'Site speed, Core Web Vitals, crawlability and indexation — fixed so nothing holds your rankings back.',
    price: 'From £150',
    href: '/technical-seo',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
  },
  {
    name: 'On-Page SEO',
    description: 'Keyword research, title tags, headings and internal linking structured around what people actually search.',
    price: 'Included in every package',
    href: '/on-page-seo',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
  },
  {
    name: 'Content Strategy',
    description: 'Blog posts, service pages and location pages built to target real search queries, not guesswork.',
    price: 'Included in Growth & Scale',
    href: '/content-strategy',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    ),
  },
  {
    name: 'Off-Page SEO & Citations',
    description: 'Local citations, directory listings and backlink building from sources that actually move rankings.',
    price: 'Included in Growth & Scale',
    href: '/off-page-seo',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 010 5.656l-4 4a4 4 0 01-5.656-5.656l1.5-1.5m5.656-5.656l1.5-1.5a4 4 0 115.656 5.656l-4 4a4 4 0 01-5.656 0" /></svg>
    ),
  },
  {
    name: 'Google Business Profile',
    description: 'Full GBP setup — categories, service areas, photos and description done properly, once.',
    price: '£100 one-off',
    href: '/google-business-profile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    name: 'Free SEO Audit',
    description: "A full check of your website and Google listing — what's holding you back and how to fix it. No obligation.",
    price: 'Free',
    href: '/free-seo-audit',
    featured: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
];

const packages = [
  { name: 'Starter', desc: 'Technical audit + on-page SEO', price: '£150/mo' },
  { name: 'Growth', desc: 'Full SEO campaign + content', price: '£300/mo' },
  { name: 'Scale', desc: 'Aggressive multi-location SEO', price: '£450/mo' },
];

const results = [
  { business: 'New Decorating', location: 'Bath', result: 'Top 3 Map Pack', keyword: '"exterior painter Bath"', detail: "Top 3 Map Pack for one of Bath's most competitive trade keywords — consistent enquiries from Google Maps.", slug: 'new-decorating' },
  { business: 'Peachy Cleans', location: 'Midsomer Norton', result: 'Map Pack #1', keyword: '"cleaning Midsomer Norton"', detail: 'Ranked in the Google Map Pack within months of launch — now generating regular enquiries from local searches.', slug: 'peachy-cleans' },
  { business: 'Aspect Builds', location: 'Bath', result: 'Page 1 in 8 weeks', keyword: '"builder Bath"', detail: 'No website at all — just an Instagram page. 40 pages built in two weeks, page one organically within 8 weeks.', slug: 'aspect-builds' },
];

const faqs = [
  { q: 'What SEO services do you offer?', a: 'Full-spectrum SEO: technical audits, on-page optimisation, content, local SEO with Google Business Profile management, citation building and monthly reporting. We work with trades and small businesses across Bath and Bristol.' },
  { q: 'How much does SEO cost?', a: 'Packages start from £150/month. Every new client gets a free audit first — we check your current rankings, your website health and your competitive landscape, then give you a clear plan and a fixed monthly quote.' },
  { q: 'How long before SEO starts working?', a: 'Google Business Profile optimisation can show results within weeks. On-page and technical SEO improvements typically show ranking movement within 1-3 months. Competitive terms take 3-6 months.' },
  { q: 'Do you only do local SEO?', a: 'No — Local SEO (Map Pack, GBP, citations) is one part of what we do. We also run technical SEO, content strategy and on-page optimisation for businesses that need to rank more broadly, not just in the Map Pack.' },
  { q: 'What areas do you cover?', a: 'Bath and Bristol are our two main cities, each with dedicated SEO campaigns. We also cover the smaller towns across Bath and North East Somerset — see Local SEO for the full area list.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/seo',
      url: 'https://seo-kings.co.uk/seo',
      name: 'SEO Services | Bath & Bristol | From £150/mo | SEO Kings',
      description: 'SEO services for trades and small businesses in Bath and Bristol — technical SEO, on-page optimisation, content strategy, Google Business Profile and local SEO. From £150/month. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'SEO' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/#service-seo',
      serviceType: 'SEO',
      name: 'SEO Services',
      description: 'Technical SEO, on-page optimisation, content strategy and local SEO for trades and small businesses in Bath and Bristol. From £150/month.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/seo' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Bristol' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SEO Packages',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Starter SEO', description: 'Technical audit + on-page SEO' }, priceSpecification: { '@type': 'PriceSpecification', price: 150, priceCurrency: 'GBP', unitText: 'per month' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Growth SEO', description: 'Full SEO campaign + content' }, priceSpecification: { '@type': 'PriceSpecification', price: 300, priceCurrency: 'GBP', unitText: 'per month' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Scale SEO', description: 'Aggressive multi-location SEO' }, priceSpecification: { '@type': 'PriceSpecification', price: 450, priceCurrency: 'GBP', unitText: 'per month' } },
        ],
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

const rightPanel = (
  <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8">
    <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-6">Real Results</p>
    <div className="space-y-4">
      {[
        { label: 'From per month', value: '£150' },
        { label: 'New Decorating — Map Pack', value: 'Top 3' },
        { label: 'Peachy Cleans — Map Pack', value: '#1' },
        { label: 'First results in', value: '< 4 weeks' },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
          <span className="text-gray-400 text-sm">{label}</span>
          <span className="text-xl font-bold text-white">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const SEOServices = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      <ServicePageHero
        badge="SEO Services · Bath & Bristol"
        title="SEO that gets you"
        highlight="found, not just listed"
        description="Technical SEO, on-page optimisation, content and local signals — all working together so the businesses on page one are the ones taking the calls. That's where we get you."
        features={['From £150/mo', 'Free audit included', 'Bath & Bristol specialists', 'Monthly reporting']}
        ctaText="Get a Free SEO Audit"
        rightPanel={rightPanel}
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'SEO' }]}
      />

      {/* Service cards */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">What's included</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight max-w-2xl">
            SEO built for Bath &amp; Bristol businesses
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
            SEO isn&apos;t one thing — it&apos;s a stack of signals Google reads to decide who ranks. Here&apos;s every piece we run, every month.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => {
              const content = (
                <>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.description}</p>
                  <span className="text-primary text-xs font-semibold">{service.price}</span>
                </>
              );
              const cardClass = `bg-dark-card border ${service.featured ? 'border-primary/30' : 'border-white/[0.06]'} rounded-2xl p-6${service.href ? ' hover:border-primary/30 hover:bg-white/5 transition-all' : ''}`;
              return service.href ? (
                <Link key={service.name} href={service.href} className={`block ${cardClass}`}>
                  {content}
                </Link>
              ) : (
                <div key={service.name} className={cardClass}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Pricing</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight tracking-tight">Simple monthly packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="text-white font-semibold mb-1">{pkg.name}</div>
                <div className="text-gray-400 text-xs mb-4">{pkg.desc}</div>
                <div className="text-3xl font-bold text-white mb-6">{pkg.price.replace('/mo', '')}<span className="text-gray-500 text-base font-normal">/mo</span></div>
                <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white bg-primary-dark">Get a Free Audit</Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">All packages start with a free audit. No lock-in contracts.</p>
        </div>
      </section>

      {/* Verified results */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Verified results</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Real results for Bath &amp; Bristol businesses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {results.map((r) => (
              <Link key={r.slug} href={`/case-studies/${r.slug}`} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group">
                <div className="text-2xl font-bold mb-1 text-primary">{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">{r.detail}</p>
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

      {/* Content expansion */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionTag className="mb-4">Why it works</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              SEO in Bath &amp; Bristol — why most businesses never reach page one
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath and Bristol are two of the most searched local markets in the South West, and the businesses on page one take almost all the calls. Everyone else gets close to nothing. It&apos;s that binary — and most trades and small businesses in both cities are not on page one, for the same handful of reasons.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Usually it&apos;s not one big problem, it&apos;s several small ones stacked together: a website that loads slowly, missing schema markup, thin or duplicated content, no local citations, and a Google Business Profile that was set up once and never touched again. Local SEO on its own fixes the map-pack piece. Full SEO fixes all of it — the technical foundations, the on-page structure, the content that targets real searches, and the off-page authority that backs it up.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              That matters more the bigger and more competitive the market gets. Local SEO alone can be enough for a single-town trade. A business chasing work across both Bath and Bristol — or competing for terms beyond the map pack, like &ldquo;builder Bath&rdquo; or &ldquo;plumber Bristol&rdquo; organically — needs the full stack working together, not just a Google listing.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We&apos;re based in Keynsham, between both cities. We run technical audits, on-page rebuilds, content and off-page work as one connected campaign, not separate add-ons — so nothing you pay for undermines something else. Every client gets a direct line to the person doing the work and a monthly report they can actually read.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Technical SEO first', body: 'If your site is slow or broken, nothing else matters. We fix the foundations before building on top — Core Web Vitals, crawlability, indexation.' },
              { title: 'Content that ranks', body: 'Service pages, location pages, blog posts — every page targets a real search query with real search volume in Bath and Bristol.' },
              { title: 'Local authority', body: 'Google Business Profile, local citations, review strategy. The signals that matter most for businesses serving a specific area.' },
              { title: 'Two cities, one team', body: "Based in Keynsham, between Bath and Bristol. We run campaigns in both — you're never talking to a different agency for each city." },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4 text-center">FAQs</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight text-center">Common questions about SEO</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also nearby</SectionTag>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO</div>
                <div className="text-xs text-gray-500">Map Pack rankings and GBP optimisation across Bath, Bristol and every town we cover</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/web-design" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Web Design</div>
                <div className="text-xs text-gray-500">Fast, mobile-first websites from £250 — built with SEO foundations from day one</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default SEOServices;
