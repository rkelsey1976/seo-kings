'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
const AREA_SLUGS = [
  'bath',
  'keynsham',
  'midsomer-norton',
  'radstock',
  'peasedown-st-john',
  'paulton',
  'saltford',
  'timsbury',
  'westfield',
  'chew-magna',
  'temple-cloud',
  'clutton',
  'odd-down-bath',
  'combe-down-bath',
  'widcombe-bath',
  'larkhall-bath',
  'twerton-bath',
  'weston-bath',
  'oldfield-park-bath',
  'bear-flat-bath',
  'bathampton-bath',
  'bathwick-bath',
  'southdown-bath',
  'batheaston-bath',
  'walcot-bath',
  'bathford-bath',
  'bitton-keynsham',
  'hanham-keynsham',
  'oldland-keynsham',
  'longwell-green-keynsham',
  'warmley-keynsham',
  'clandon-midsomer-norton',
  'farrington-gurney-midsomer-norton',
  'writhlington-radstock',
  'chilcompton-radstock',
  'stanton-drew-chew-magna',
  'chew-stoke-chew-magna',
  'bishop-sutton-chew-magna',
  'high-littleton-paulton',
  'hallatrow-paulton',
];

const areaLabels = {
  bath: { label: 'Bath', postcode: 'BA1 / BA2' },
  keynsham: { label: 'Keynsham', postcode: 'BS31' },
  'midsomer-norton': { label: 'Midsomer Norton', postcode: 'BA3' },
  radstock: { label: 'Radstock', postcode: 'BA3' },
  'peasedown-st-john': { label: 'Peasedown St John', postcode: 'BA2' },
  paulton: { label: 'Paulton', postcode: 'BS39' },
  saltford: { label: 'Saltford', postcode: 'BS31' },
  timsbury: { label: 'Timsbury', postcode: 'BA2' },
  westfield: { label: 'Westfield', postcode: 'BA3' },
  'chew-magna': { label: 'Chew Magna', postcode: 'BS40' },
  'temple-cloud': { label: 'Temple Cloud', postcode: 'BS39' },
  clutton: { label: 'Clutton', postcode: 'BS39' },
  'odd-down-bath': { label: 'Odd Down', postcode: 'BA2' },
  'combe-down-bath': { label: 'Combe Down', postcode: 'BA2' },
  'widcombe-bath': { label: 'Widcombe', postcode: 'BA2' },
  'larkhall-bath': { label: 'Larkhall', postcode: 'BA1' },
  'twerton-bath': { label: 'Twerton', postcode: 'BA2' },
  'weston-bath': { label: 'Weston', postcode: 'BA1' },
  'oldfield-park-bath': { label: 'Oldfield Park', postcode: 'BA2' },
  'bear-flat-bath': { label: 'Bear Flat', postcode: 'BA2' },
  'bathampton-bath': { label: 'Bathampton', postcode: 'BA2' },
  'bathwick-bath': { label: 'Bathwick', postcode: 'BA2' },
  'southdown-bath': { label: 'Southdown', postcode: 'BA2' },
  'batheaston-bath': { label: 'Batheaston', postcode: 'BA1' },
  'walcot-bath': { label: 'Walcot', postcode: 'BA1' },
  'bathford-bath': { label: 'Bathford', postcode: 'BA1' },
  'bitton-keynsham': { label: 'Bitton', postcode: 'BS30' },
  'hanham-keynsham': { label: 'Hanham', postcode: 'BS15' },
  'oldland-keynsham': { label: 'Oldland', postcode: 'BS30' },
  'longwell-green-keynsham': { label: 'Longwell Green', postcode: 'BS30' },
  'warmley-keynsham': { label: 'Warmley', postcode: 'BS15' },
  'clandon-midsomer-norton': { label: 'Clandown', postcode: 'BA3' },
  'farrington-gurney-midsomer-norton': { label: 'Farrington Gurney', postcode: 'BS39' },
  'writhlington-radstock': { label: 'Writhlington', postcode: 'BA3' },
  'chilcompton-radstock': { label: 'Chilcompton', postcode: 'BA3' },
  'stanton-drew-chew-magna': { label: 'Stanton Drew', postcode: 'BS39' },
  'chew-stoke-chew-magna': { label: 'Chew Stoke', postcode: 'BS40' },
  'bishop-sutton-chew-magna': { label: 'Bishop Sutton', postcode: 'BS39' },
  'high-littleton-paulton': { label: 'High Littleton', postcode: 'BS39' },
  'hallatrow-paulton': { label: 'Hallatrow', postcode: 'BS39' },
};

const heroFeatures = ['From £399', 'Mobile-First', 'Local SEO Ready', 'Free Audit'];

const whyLocalFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'We Know Your Area',
    description: "We're based in Keynsham and work across Bath & North East Somerset every day. We know the local searches, the competition, and what it takes to rank in your postcode.",
    color: 'from-primary to-primary-dark',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Meet Face-to-Face',
    description: 'Unlike faceless agencies, we can meet you in person — at your premises or ours. Your website gets built around your actual business, not a template.',
    color: 'from-secondary to-secondary-dark',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Target Local Searches',
    description: "We optimise every site for the exact searches your customers use — 'plumber Bath', 'electrician Keynsham', 'builder near me'. You show up where it counts.",
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Proven Local Results',
    description: 'Peachy Cleans went from no website to #1 on Google in Midsomer Norton. New Decorating hit the top 8 on Google Maps in a week. Local SEO that actually works.',
    color: 'from-accent to-accent-dark',
  },
];

const caseStudies = [
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: '#1 on Google & top of Maps',
    description: "From no website to fully booked weeks. We built the site, set up and optimised the Google Business Profile, and targeted local cleaning searches across Midsomer Norton, Radstock, Bath, and Somerset.",
    slug: 'peachy-cleans',
    tag: 'Cleaning',
  },
  {
    business: 'New Decorating',
    location: 'Bath & North East Somerset',
    result: 'Top 8 on Google Maps in a week',
    description: "No web presence to top 8 Google Maps in 7 days. Fast website at new-decorating.co.uk with GBP setup and optimisation. Now ranking for painter and decorator searches across Bath, Keynsham, and BANES.",
    slug: 'new-decorating',
    tag: 'Decorating',
  },
];

const faqs = [
  {
    question: 'Where are you based?',
    answer: "We're based in Keynsham, right in the heart of Bath and North East Somerset. We cover Bath, Keynsham, Midsomer Norton, Radstock, Saltford, Paulton, Peasedown St John, and all surrounding areas.",
  },
  {
    question: 'Can I meet you in person?',
    answer: "Yes — we can meet at your premises, our office in Keynsham, or a convenient local spot. We believe in getting to know your business properly before we build your website.",
  },
  {
    question: 'Which areas do you cover?',
    answer: "We cover the whole of Bath and North East Somerset — Bath, Keynsham, Midsomer Norton, Radstock, Saltford, Paulton, Peasedown St John, Timsbury, Westfield, Chew Magna, and all surrounding villages and postcodes including BA1, BA2, BA3, BS31, and BS39.",
  },
  {
    question: 'Can you rank my business in my local area?',
    answer: "Yes. We don't just build websites — we optimise them for local searches from day one. That means targeting 'your trade + your town' and 'near me' searches, setting up your Google Business Profile, and building the right local signals so you appear in the map pack and on page one.",
  },
  {
    question: 'How much does a website cost?',
    answer: "Web design starts from £399 for a one-page site. That includes a professional, mobile-first design and Google Business Profile optimisation for one service in one location. We can add local SEO, additional pages, and ongoing support as add-ons. No hidden fees, no long contracts.",
  },
  {
    question: 'How long does it take?',
    answer: "Most websites are live within 2–4 weeks. We start with a discovery call, then design, build, and launch with your approval at every step. For urgent projects, we can often turn around a one-page site faster.",
  },
];

const WebDesignerNearMe = () => {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/#service-website-designer-near-me',
      serviceType: 'Website Design',
      name: 'Website Designer Near Me — Bath, Keynsham, Radstock & Somerset',
      description:
        'Local website designer covering Bath, Keynsham, Midsomer Norton, Radstock and all of Bath and North East Somerset. Fast, mobile-first websites from £399 with local SEO built in.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/website-designer-near-me' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
        { '@type': 'City', name: 'Radstock' },
        { '@type': 'City', name: 'Saltford' },
        { '@type': 'City', name: 'Paulton' },
        { '@type': 'City', name: 'Peasedown St John' },
        { '@type': 'City', name: 'Timsbury' },
        { '@type': 'City', name: 'Chew Magna' },
        { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Website Design Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'GBP', minPrice: 399, valueAddedTaxIncluded: true },
            url: 'https://seo-kings.co.uk/web-design',
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: { '@id': 'https://seo-kings.co.uk' } },
        { '@type': 'ListItem', position: 2, name: 'Website Designer Near Me', item: { '@id': 'https://seo-kings.co.uk/website-designer-near-me' } },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Website Designer Near Me | Bath, Keynsham, Radstock & Somerset – SEO Kings"
        description="Looking for a website designer near you? We cover Bath, Keynsham, Midsomer Norton, Radstock & all of Bath and North East Somerset. Web design from £399. Free audit."
        canonical="/website-designer-near-me"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Website Designer Near Me' },
        ]}
        schemas={schemas}
      />

      <ServicePageHero
        badge="Local website designer"
        title="Website Designer Near You — Bath, Keynsham, Radstock &"
        highlight="All of Somerset"
        description="Based in Keynsham, we design and build websites for trades and small businesses across Bath and North East Somerset. We know your area, we can meet face-to-face, and we get you found on Google. From £399 with local SEO included."
        features={heroFeatures}
        ctaText="Get a Free Audit"
      />

      {/* Areas We Cover Grid */}
      <section className="py-24 bg-dark-lighter" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Your area, covered
            </span>
            <h2 id="areas-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              We Cover Your Local Area
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We work with businesses across Bath and North East Somerset. Click your area to see local results and case studies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {AREA_SLUGS.map((slug) => {
              const area = areaLabels[slug];
              if (!area) return null;
              return (
                <Link
                  key={slug}
                  href={`/areas/${slug}`}
                  className="group flex flex-col items-center justify-center p-3 bg-dark-card border border-white/5 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-semibold text-white group-hover:text-primary-light transition-colors">
                    {area.label}
                  </span>
                  <span className="text-xs text-gray-500 mt-0.5">{area.postcode}</span>
                </Link>
              );
            })}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Don&apos;t see your area?{' '}
            <Link href="/contact" className="text-primary-light hover:underline">
              Get in touch — we may still cover you.
            </Link>
          </p>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-24" aria-labelledby="why-local-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-4">
              Why choose local
            </span>
            <h2 id="why-local-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What You Get With a Local Designer
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A local web designer isn&apos;t just convenient — it means your website is built by someone who genuinely understands your market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLocalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-dark-card border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Strip */}
      <section className="py-24 bg-dark-lighter" aria-labelledby="results-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-sm font-medium mb-4">
              Real results nearby
            </span>
            <h2 id="results-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Local Businesses We&apos;ve Helped
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From Bath to the Somer Valley — real results for local trades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies.map((cs, index) => (
              <div key={index} className="bg-dark-card border border-white/5 rounded-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-xs font-medium">
                    {cs.tag}
                  </span>
                  <span className="text-sm text-gray-500">{cs.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{cs.business}</h3>
                <p className="text-primary-light font-semibold text-sm mb-3">{cs.result}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{cs.description}</p>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="mt-4 inline-flex items-center text-sm text-primary-light hover:text-white font-medium transition-colors"
                >
                  Read the full story
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors text-sm font-medium"
            >
              View all case studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Common questions
            </span>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Website Designer Near Me — FAQs
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to know before getting started.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default WebDesignerNearMe;
