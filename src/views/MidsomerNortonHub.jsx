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
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    result: 'Map Pack',
    keyword: '"cleaning Midsomer Norton"',
    detail: 'Ranked in the Google Map Pack within months of launch — now generating regular enquiries from local searches.',
    slug: 'peachy-cleans',
  },
  {
    business: 'New Decorating',
    location: 'Bath',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    detail: "Top 3 Map Pack for one of Bath's most competitive trade keywords — consistent enquiries from Google Maps.",
    slug: 'new-decorating',
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
    q: "What's the best starting point for a Midsomer Norton business?",
    a: "For most trades, a website and Google Business Profile together give you the strongest foundation. The Somer Valley is less competitive than Bath or Bristol — so results come faster. We'll tell you honestly in your free audit what to prioritise for your situation.",
  },
  {
    q: 'Can you help me rank in Bath as well as Midsomer Norton?',
    a: "Yes — many Somer Valley trades serve customers across Bath and BANES. We can structure your site and GBP to target Midsomer Norton, Radstock, Paulton and Bath from a single plan, so you're visible across your whole working area.",
  },
  {
    q: 'How competitive is Midsomer Norton for local search?',
    a: "Much less competitive than Bath or Bristol. Many local trades still have no website or a poorly optimised Google Business Profile — the bar is lower and results come faster. We have clients in the Somer Valley ranking in the map pack within weeks.",
  },
  {
    q: 'How long before I see results?',
    a: "GBP improvements can show within weeks. Organic rankings for Midsomer Norton trade searches typically take 2–4 months. We give you monthly reports so you see exactly what's moving.",
  },
  {
    q: 'What does it cost?',
    a: "Website design from £250. Local SEO from £150/month — includes GBP optimisation, on-page fixes, citations and monthly reporting. Free audit first, no obligation.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/areas/midsomer-norton',
      url: 'https://seo-kings.co.uk/areas/midsomer-norton',
      name: 'SEO & Web Design in Midsomer Norton | Somer Valley Trades | SEO Kings',
      description: 'Web design, local SEO and Google Business Profile for trades and local businesses in Midsomer Norton BA3. Websites from £250, local SEO from £150/month. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Midsomer Norton' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Web design, local SEO and Google Business Profile agency serving Midsomer Norton BA3 and the Somer Valley. Fast, mobile-first websites from £250 and local SEO from £150/month for trades and local businesses across Midsomer Norton, Radstock and Bath.',
      url: 'https://seo-kings.co.uk/areas/midsomer-norton',
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
        { '@type': 'City', name: 'Midsomer Norton' },
        { '@type': 'City', name: 'Radstock' },
        { '@type': 'City', name: 'Bath' },
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

const MidsomerNortonHub = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* ── HERO ─────────────────────────────────── */}
      <ServicePageHero
        badge="Midsomer Norton · BA3"
        title="SEO &amp; Web Design in"
        highlight="Midsomer Norton"
        description="One team. Three services. All focused on getting your Midsomer Norton business found on Google. Most trades here still have slow sites and poorly optimised GBPs — we fix that."
        features={heroFeatures}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* Services */}
      <section className="py-24 bg-dark-lighter border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">Our services in Midsomer Norton</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Everything you need to get found in Midsomer Norton
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Three services, one team, clear monthly pricing. Many Somer Valley clients combine website design and local SEO — and see results faster here than in Bath or Bristol.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Card 1 — Website Design */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <SectionTag className="mb-3">Website Design</SectionTag>
              <h3 className="text-2xl font-bold text-white mb-2">A site built to rank</h3>
              <p className="text-xl font-bold mb-3 text-primary">From £250</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Fast, mobile-first websites for Midsomer Norton trades and local businesses. See the full website design page for packages and pricing.
              </p>
              <div className="border-t border-white/[0.06] pt-6 mb-6">
                <ul className="space-y-3">
                  {[
                    'Mobile-first design, loads fast on any device',
                    'Built to rank for your trade + Midsomer Norton searches',
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
                  href="/website-designer-midsomer-norton"
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
                >
                  Website Design in Midsomer Norton →
                </Link>
              </div>
            </div>

            {/* Card 2 — Local SEO */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col">
              <SectionTag className="mb-3">Local SEO</SectionTag>
              <h3 className="text-2xl font-bold text-white mb-2">Get into the map pack</h3>
              <p className="text-xl font-bold mb-3 text-primary">From £150/month</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The Somer Valley has less competition than Bath or Bristol. The businesses in the map pack take most of the calls — and getting there is more achievable here. We get you in and keep you there.
              </p>
              <div className="border-t border-white/[0.06] pt-6 mb-6">
                <ul className="space-y-3">
                  {[
                    'Google Business Profile optimisation',
                    'On-page SEO for Midsomer Norton trade keywords',
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
                  href="/local-seo/midsomer-norton"
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
                >
                  Local SEO in Midsomer Norton →
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
                <div className="text-xs text-gray-400 mb-4">{r.keyword}</div>
                <div className="text-white font-semibold text-sm">{r.business}</div>
                <div className="text-gray-400 text-xs">{r.location}</div>
                {r.detail && <p className="text-gray-400 text-xs mt-3 leading-relaxed">{r.detail}</p>}
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
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Somer Valley businesses we&apos;ve helped</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <svg className="w-6 h-6 mb-4 opacity-40 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;We had no website and no Google presence. SEO Kings built our site and got us to number one on Google and into the map pack for cleaning searches in Midsomer Norton. We&apos;re now fully booked weeks in advance.&rdquo;
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">Peachy Cleans team</div>
                <div className="text-gray-400 text-xs">Peachy Cleans · Cleaning, Midsomer Norton</div>
              </div>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <svg className="w-6 h-6 mb-4 opacity-40 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;We had no website and no Google listing — customers couldn&apos;t find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area.&rdquo;
              </blockquote>
              <div>
                <div className="text-white font-semibold text-sm">Jay</div>
                <div className="text-gray-400 text-xs">New Decorating · Bath &amp; BANES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content expansion */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <SectionTag className="mb-4">Why Midsomer Norton</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web design and SEO in Midsomer Norton — why BA3 is easier to rank than most people expect
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Midsomer Norton is the largest market town in BA3 — a working population of trades and small businesses serving the surrounding villages as well as commuters pulling in from Bath. From a search competition standpoint, it&apos;s a different world to Bath or Bristol.
              </p>
              <p>
                The businesses ranking at the top of Google for trade searches in Midsomer Norton aren&apos;t there because they have bigger budgets. They&apos;re there because most of their competitors are still invisible online — outdated sites, missing Google Business Profiles, no local citations, slow mobile pages. The bar to rank well here is genuinely lower, and results come faster.
              </p>
              <p>
                We proved it with Peachy Cleans. A cleaning business in Midsomer Norton with no site and no Google presence — within months of launch, they were in the Map Pack for &ldquo;cleaning Midsomer Norton&rdquo; and fully booked weeks in advance. That&apos;s the kind of outcome that would take much longer in a more competitive city.
              </p>
              <p>
                What makes BA3 particularly valuable for SEO is the reach. A well-structured website and GBP doesn&apos;t just put you in front of Midsomer Norton searches — it can cover Radstock, Paulton, Peasedown St John, Westfield and Chilcompton from the same plan. Many clients also want to rank in Bath. We can target the whole of your working area from a single website, without the cost of separate campaigns for each town.
              </p>
              <p>
                The technical side matters too. Most Midsomer Norton businesses are running on slow WordPress sites — or no site at all. Our Next.js builds load in under a second on a 4G connection, score green across Core Web Vitals, and are structured from the ground up to rank for your trade and your location. Speed and structure are signals Google takes seriously, and they&apos;re easy wins when your competitors are standing still.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Largest town in BA3',
                body: "More trade enquiries in Midsomer Norton than any other Somer Valley town — and less competition than you'd expect for that population.",
              },
              {
                label: 'Proof it works here',
                body: 'Peachy Cleans is in the Midsomer Norton Map Pack. We know the local keywords and what drives enquiries in BA3.',
              },
              {
                label: 'BA3-wide reach',
                body: 'One properly built site can cover Midsomer Norton, Radstock, Paulton, Peasedown and beyond — without separate campaigns for each town.',
              },
              {
                label: 'Next.js not WordPress',
                body: "Static site, sub-second load, green Core Web Vitals. Your competitors' sites are slow — yours doesn't have to be.",
              },
            ].map((card) => (
              <div key={card.label} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="text-white font-semibold text-sm mb-2">{card.label}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about web design and SEO in Midsomer Norton</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default MidsomerNortonHub;
