'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const results = [
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    slug: 'peachy-cleans',
  },
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
    q: "What's the best starting point for a Saltford business?",
    a: "For most trades, a website and Google Business Profile together give you the strongest foundation. Saltford sits between Bath and Keynsham — so ranking in multiple areas is very achievable from one plan. We'll tell you what to prioritise in your free audit.",
  },
  {
    q: 'Can I rank in Bath and Keynsham as well as Saltford?',
    a: "Yes — most Saltford trades serve customers across Bath, Keynsham and the A4 corridor. We structure your site and GBP to be visible across your whole working area from a single strategy.",
  },
  {
    q: 'How competitive is Saltford for local search?',
    a: "Saltford itself is a small, less competitive market — much easier than central Bath or Bristol. Many BS31 trades still have no website or a weak Google Business Profile, so the bar is lower and results come faster.",
  },
  {
    q: 'How long before I see results?',
    a: "GBP improvements can show within weeks. Organic rankings for Saltford trade searches typically take 2–4 months. You'll get a monthly report so you see exactly what's moving.",
  },
  {
    q: 'What does it cost?',
    a: 'Websites from £399. Local SEO from £150/month — includes GBP optimisation, on-page fixes, citations and monthly reporting. Free audit first, no obligation.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/areas/saltford',
      url: 'https://seo-kings.co.uk/areas/saltford',
      name: 'Web Design & SEO in Saltford | BS31 Trades & Businesses | SEO Kings',
      description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Saltford BS31. Websites from £399, local SEO from £150/month. Free audit — no obligation.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Saltford' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Web design, local SEO and Google Business Profile agency serving Saltford BS31 and the A4 corridor between Bath and Keynsham. Fast, mobile-first websites from £399 and local SEO from £150/month for trades and local businesses across Saltford, Bath and Keynsham.',
      url: 'https://seo-kings.co.uk/areas/saltford',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Somerset',
        postalCode: 'BS31 2DW',
        addressCountry: 'GB',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 51.4145, longitude: -2.4965 },
      areaServed: [
        { '@type': 'City', name: 'Saltford' },
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
      ],
      priceRange: '££',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:30',
        },
      ],
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

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const SaltfordHub = () => {
  return (
    <>
      <SEO
        title="Web Design & SEO in Saltford | BS31 Trades & Businesses"
        description="Web design, local SEO and Google Business Profile for trades and local businesses in Saltford BS31. Websites from £399, local SEO from £150/month. Free audit — no obligation."
        canonical="/areas/saltford"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Saltford' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/areas/saltford-marina.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/70 to-dark" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span
              className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6"
              style={{ color: '#E8715A' }}
            >
              Saltford · BS31
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design &amp; SEO in{' '}
              <span style={{ color: '#E8715A' }}>Saltford</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-4">
              One team. Three services. All focused on getting your Saltford business found on Google.
            </p>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
              Saltford sits on the A4 between Bath and Keynsham — an affluent village with trades that naturally serve a wide area. The right strategy puts you in front of customers across Bath, Keynsham and Bristol from a single plan. Whether you need a website, local SEO, or both, we build everything around getting you found in BS31 and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200"
                style={{ backgroundColor: '#C25245' }}
              >
                Get a Free Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+447702264921"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/10 hover:border-white/20 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07702 264 921
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { label: 'Websites from £399' },
                { label: 'SEO from £150/month' },
                { label: 'Based in Keynsham — 5 mins away' },
                { label: '5★ Rated' },
                { label: '6 months free hosting' },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
              Our services in Saltford
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Everything you need to get found in Saltford
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Three services, one team, clear monthly pricing. Most Saltford clients combine website design and local SEO — and because Saltford is less competitive than Bath or Bristol, results come faster.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Card 1 — Website Design */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-3" style={{ color: '#E8715A' }}>
                Website Design
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">A site built to rank</h3>
              <p className="text-xl font-bold mb-3" style={{ color: '#E8715A' }}>From £399</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Fast, mobile-first websites for Saltford trades and local businesses — built for local search from day one, not as an afterthought.
              </p>
              <div className="border-t border-white/[0.06] pt-6 mb-6">
                <ul className="space-y-3">
                  {[
                    'Mobile-first design, loads fast on any device',
                    'Built to rank for your trade + Saltford searches',
                    'Google Business Profile set-up included',
                    'Click-to-call and contact form',
                    'Live in under 2 weeks',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Link
                  href="/website-designer-saltford"
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200"
                  style={{ backgroundColor: '#C25245' }}
                >
                  Website Design in Saltford →
                </Link>
              </div>
            </div>

            {/* Card 2 — Local SEO */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-3" style={{ color: '#E8715A' }}>
                Local SEO
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">Get into the map pack</h3>
              <p className="text-xl font-bold mb-3" style={{ color: '#E8715A' }}>From £150/month</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Saltford is less competitive than Bath or Bristol — the businesses in the map pack take most of the calls, and getting there is very achievable here. We get you in across Saltford, Keynsham and Bath, and keep you there.
              </p>
              <div className="border-t border-white/[0.06] pt-6 mb-6">
                <ul className="space-y-3">
                  {[
                    'Google Business Profile optimisation',
                    'On-page SEO for Saltford trade keywords',
                    'Local citations and link building',
                    'Review growth strategy',
                    'Monthly rankings report — no jargon',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Link
                  href="/local-seo"
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200"
                  style={{ backgroundColor: '#C25245' }}
                >
                  Local SEO for Saltford →
                </Link>
              </div>
            </div>

            {/* Card 3 — Google Business Profile */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-3" style={{ color: '#E8715A' }}>
                Google Business Profile
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">Put yourself on the map</h3>
              <p className="text-xl font-bold mb-3" style={{ color: '#E8715A' }}>Included with every package</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your GBP is what puts you on Google Maps and in the local pack. The biggest single factor in local search. We set it up properly and keep it active.
              </p>
              <div className="border-t border-white/[0.06] pt-6 mb-6">
                <ul className="space-y-3">
                  {[
                    'Complete profile setup and verification',
                    'Categories, services and attributes',
                    'Photo strategy for map pack visibility',
                    'Review responses and Q&A',
                    'Regular posts to stay active',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Link
                  href="/google-business-profile"
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold border transition-colors duration-200"
                  style={{ color: '#E8715A', borderColor: '#E8715A' }}
                >
                  Google Business Profile →
                </Link>
              </div>
            </div>

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
            <p className="text-xs text-gray-500 mt-4">All packages include Google Business Profile set-up and optimisation. Hosting free for 6 months, then £199/year. No lock-in contracts.</p>

        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-8" style={{ color: '#E8715A' }}>
            Verified results
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">Real results for local businesses</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-2xl font-bold mb-1" style={{ color: '#E8715A' }}>{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: '#E8715A' }}>
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

      {/* Testimonials */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-8" style={{ color: '#E8715A' }}>
            What clients say
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">Businesses we&apos;ve helped</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <svg className="w-6 h-6 mb-4 opacity-40" style={{ color: '#E8715A' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area."
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">Jay</div>
                <div className="text-gray-500 text-xs">New Decorating · Bath &amp; BANES</div>
              </div>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <svg className="w-6 h-6 mb-4 opacity-40" style={{ color: '#E8715A' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                "Brand new business, no website, no social media. SEO Kings built everything from scratch in under a week. I'm already getting calls from people finding me on Google in Bath. Couldn't ask for more."
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">Ross</div>
                <div className="text-gray-500 text-xs">Aurelian Massage · Bath City Centre</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local signals */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
              Local knowledge
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">We know the BS31 corridor</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We&apos;re based in Keynsham — five minutes from Saltford. We know the BS31 corridor: which trade searches drive enquiries in Saltford and Corston, what it takes to rank across Bath and Keynsham from one plan, and how to make the most of Saltford&apos;s affluent catchment.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We cover Saltford and the surrounding area — Corston, Newton St Loe, Kelston, and the wider Bath/Keynsham A4 corridor. Most Saltford clients want to be visible across Bath and Keynsham too — we target all of it from a single strategy.
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
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>
              FAQs
            </p>
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about our Saltford services</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default SaltfordHub;
