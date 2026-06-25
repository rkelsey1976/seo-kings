'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import ServicePageHero from '../components/ServicePageHero';

const heroFeatures = ['Websites from £250', 'Local SEO from £150/month', 'Live in 2 weeks', 'Free audit — no obligation'];

const results = [
  {
    business: 'New Decorating',
    location: 'Bath',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    detail: "Top 3 Map Pack for one of Bath's most competitive trade keywords — consistent enquiries from Google Maps.",
    slug: 'new-decorating',
  },
  {
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    detail: 'Ranked in the Google Map Pack within months of launch — now generating regular enquiries from local searches.',
    slug: 'peachy-cleans',
  },
  {
    business: 'Bath Painter',
    location: 'Bath',
    result: 'Bespoke',
    keyword: '"painter and decorator Bath"',
    detail: 'Full brand and bespoke website delivered — enquiries up within a week of going live.',
    slug: 'bath-painter',
  },
  {
    business: 'Aspect Builds',
    location: 'Bath',
    result: '40-page site',
    keyword: '"builders Bath"',
    detail: 'No website, just Instagram → 40-page professional site live in 2 weeks. Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration.',
    slug: 'aspect-builds',
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
    a: 'Websites from £250. Local SEO from £150/month — includes GBP optimisation, on-page fixes, citations and monthly reporting. Free audit first, no obligation.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/areas/saltford',
      url: 'https://seo-kings.co.uk/areas/saltford',
      name: 'Digital Marketing in Saltford | SEO & Local Search | SEO Kings',
      description: 'Local SEO, Google Business Profile and web design for trades and local businesses in Saltford BS31. Websites from £250, local SEO from £150/month. Free audit — no obligation.',
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
      description: 'Web design, local SEO and Google Business Profile agency serving Saltford BS31 and the A4 corridor between Bath and Keynsham. Fast, mobile-first websites from £250 and local SEO from £150/month for trades and local businesses across Saltford, Bath and Keynsham.',
      url: 'https://seo-kings.co.uk/areas/saltford',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Bath and North East Somerset',
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
  <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const SaltfordHub = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* ── HERO ─────────────────────────────────── */}
      <ServicePageHero
        badge="Saltford · BS31"
        title="SEO &amp; Web Design in"
        highlight="Saltford"
        description="One team. Three services. All focused on getting your Saltford business found on Google. Serving trades across BS31 and the corridor between Bath and Bristol."
        features={heroFeatures}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* Services */}
      <section className="py-24 bg-dark-lighter border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">Our services in Saltford</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Everything you need to get found in Saltford
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Three services, one team, clear monthly pricing. Most Saltford clients combine website design and local SEO — and because Saltford is less competitive than Bath or Bristol, results come faster.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Card 1 — Website Design */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <SectionTag className="mb-3">Website Design</SectionTag>
              <h3 className="text-2xl font-bold text-white mb-2">A site built to rank</h3>
              <p className="text-xl font-bold mb-3 text-primary">From £250</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Fast, mobile-first websites for Saltford trades and local businesses. See the full website design page for packages and pricing.
              </p>
              <div className="border-t border-white/[0.06] pt-6 mb-6">
                <ul className="space-y-3">
                  {[
                    'Mobile-first design, loads fast on any device',
                    'Built to rank for your trade + Saltford searches',
                    'GBP optimisation — £100 add-on',
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
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
                >
                  Website Design in Saltford →
                </Link>
              </div>
            </div>

            {/* Card 2 — Local SEO */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <SectionTag className="mb-3">Local SEO</SectionTag>
              <h3 className="text-2xl font-bold text-white mb-2">Get into the map pack</h3>
              <p className="text-xl font-bold mb-3 text-primary">From £150/month</p>
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
                  href="/local-seo/saltford"
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
                >
                  Local SEO for Saltford →
                </Link>
              </div>
            </div>

            {/* Card 3 — Google Business Profile */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <SectionTag className="mb-3">Google Business Profile</SectionTag>
              <h3 className="text-2xl font-bold text-white mb-2">Put yourself on the map</h3>
              <p className="text-xl font-bold mb-3 text-primary">£100 add-on</p>
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
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold border transition-colors duration-200 text-primary border-primary"
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
                  <div className="text-gray-400 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £50/year</div>
                </div>
                <div className="font-bold shrink-0 ml-4 text-primary">6 months free</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">GBP optimisation available as a £100 add-on. Hosting free for 6 months, then £50/year. No lock-in contracts.</p>

        </div>
      </section>

      {/* Results */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">Verified results</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Real results for local businesses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors group"
              >
                <div className="text-2xl font-bold mb-1 text-primary">{r.result}</div>
                <div className="text-xs text-gray-500 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
                {r.detail && <p className="text-gray-500 text-xs mt-2 leading-relaxed">{r.detail}</p>}
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

      {/* Testimonials */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">What clients say</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Businesses we&apos;ve helped</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <svg className="w-6 h-6 mb-4 opacity-40 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area."
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">Jay</div>
                <div className="text-gray-400 text-xs">New Decorating · Bath &amp; BANES</div>
              </div>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <svg className="w-6 h-6 mb-4 opacity-40 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                "Brand new business, no website, no social media. SEO Kings built everything from scratch in under a week. I'm already getting calls from people finding me on Google in Bath. Couldn't ask for more."
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">Ross</div>
                <div className="text-gray-400 text-xs">Aurelian Massage · Bath City Centre</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content expansion */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionTag className="mb-4">Why it works</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web design and SEO in Saltford — the A4 corridor advantage
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Saltford sits on the A4 between Bath and Keynsham — one of the most affluent stretches of the BS31 postcode. Trades here serve customers with higher-than-average household spend: garden landscaping, painting and decorating, bathroom fitting, electrical work. The volume isn't as high as Bath city centre, but the conversion rate from enquiry to job tends to be stronger.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              From a search competition standpoint, Saltford is much easier to rank in than Bath. Most local trades have no website, or one that's outdated and slow. The Google Map Pack for most trade categories in BS31 is winnable within a few months. We've seen clients move from invisible to the top three positions for their trade faster in Saltford than anywhere else we work.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The corridor coverage is a genuine advantage. A single website and GBP strategy, built correctly, can target Saltford, Keynsham, Corston, Newton St Loe, Kelston and Bath simultaneously. You're not choosing between locations — you're ranking across all of them from one plan. That's how a Saltford trade can be visible to customers across a much wider area than the village itself.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're based in Keynsham — five minutes away. We know the BS31 corridor well, the searches your customers use, and which GBP categories perform best for trades in this area. You speak to the person running your campaign directly, every time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Affluent catchment', body: 'Saltford and the A4 corridor have above-average household spend — trades here convert enquiries to jobs at a strong rate.' },
              { title: 'Less competitive than Bath', body: 'Most local trades have no real web presence. Map Pack positions are achievable quickly here.' },
              { title: 'A4 corridor coverage', body: 'One strategy targets Saltford, Keynsham, Corston, Newton St Loe and Bath — no need to choose between locations.' },
              { title: '5 minutes away', body: 'Based in Keynsham. You call the person who built your site and runs your campaign — no middlemen.' },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about web design and SEO in Saltford</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default SaltfordHub;
