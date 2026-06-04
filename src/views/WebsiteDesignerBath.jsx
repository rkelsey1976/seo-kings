'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import PricingModal from '../components/PricingModal';

const results = [
  {
    business: 'New Decorating',
    location: 'Bath',
    result: 'Top 3 Map Pack',
    keyword: '"exterior painter Bath"',
    slug: 'new-decorating',
    detail: 'Launched with no web presence — ranking in the Bath map pack within a week.',
  },
  {
    business: 'Aurelian Massage',
    location: 'Bath City Centre',
    result: 'Ranking',
    keyword: '"massage Bath"',
    slug: 'aurelian-massage',
    detail: 'Bath city centre massage therapist — built and ranking for competitive local searches.',
  },
  {
    business: 'Bath Painter',
    location: 'Bath',
    result: 'Bespoke',
    keyword: '"painter and decorator Bath"',
    slug: 'bath-painter',
    detail: 'Full brand and bespoke website for a heritage specialist — live at bathpainter.co.uk.',
  },
  {
    business: 'Aspect Builds',
    location: 'Bath',
    result: '40-page site',
    keyword: '"builders Bath"',
    slug: 'aspect-builds',
    detail: 'No website, just Instagram → 40-page professional site live in 2 weeks. Complete website with 6 service pages, 10 area pages, FAQ, contact form, and Google Business Profile integration.',
  },
];

const included = [
  'Mobile-first design — fast on any device',
  'Built to rank for "website designer Bath" and trade searches across BA1 & BA2',
  'Google Business Profile optimised for Bath\'s competitive Map Pack',
  'Click-to-call and quote request form',
  'SSL, hosting guidance and launch support',
  'Live in under 2 weeks',
];

const faqs = [
  {
    q: 'How much does a website cost in Bath?',
    a: 'A one-page site starts at £250. Multi-page sites are £250 base + £50 per page — a 3-page site is £350, a 5-page site is £450. GBP optimisation available as a £100 add-on. See our packages page for full pricing.',
  },
  {
    q: 'Do you meet clients in Bath?',
    a: "Yes. We're happy to come to you in Bath or meet at our Keynsham office (16a Culvers Road, BS31 2DW — 10 minutes from Bath city centre). Whatever works best for you.",
  },
  {
    q: 'Bath is competitive. Can you actually get me found on Google?',
    a: "Yes — but we're selective about it. Bath has more competition than most Somerset towns, so we focus on the specific keywords your customers actually search: your trade plus your area or postcode. That's where the calls come from.",
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We keep the process simple and guide you through every step.',
  },
  {
    q: 'What if I already have a website?',
    a: "We can audit your existing site for free and tell you honestly whether it's worth improving or starting fresh. No obligation.",
  },
  {
    q: 'What is the difference between website design and local SEO?',
    a: "Website design gets you a fast, professional site that Google can index and customers can trust. Local SEO is the ongoing work that pushes that site up the rankings — keyword research, on-page optimisation, citations, GBP management. Most Bath clients start with a website, then add local SEO once they're live. We offer both, and they work best together.",
  },
  {
    q: 'Which parts of Bath do you cover?',
    a: 'All of it. We build websites for trades and businesses across the whole of Bath — BA1, BA2, and all the neighbourhoods: Widcombe, Bear Flat, Oldfield Park, Larkhall, Twerton, Weston, Combe Down, Odd Down, Bathampton, Bathwick, Southdown, Batheaston, Walcot and Bathford.',
  },
  {
    q: 'Do I need a website before I can do local SEO?',
    a: "Not strictly — a well-optimised Google Business Profile alone can get you into the map pack. But a website makes every other signal stronger, gives customers somewhere to go, and significantly improves conversion. We always recommend both.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-designer-bath',
      url: 'https://seo-kings.co.uk/website-designer-bath',
      name: 'Website Designer Bath | SEO Kings',
      description: 'Website designer serving Bath BA1 & BA2. Fast, mobile-first websites for trades and local businesses from £250. GBP optimisation from £100. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website Designer Bath' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'Website designer serving Bath, offering web design from £250 for trades and local businesses across BA1, BA2 and North East Somerset.',
      url: 'https://seo-kings.co.uk/website-designer-bath',
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
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
      ],
      priceRange: '££',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:30' },
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

const WebsiteDesignerBath = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <ServicePageHero
        badge="Serving Bath · BA1 &amp; BA2"
        title="Website Designer"
        highlight="Bath"
        description="We build fast, Google-ready websites for trades and local businesses across Bath BA1 &amp; BA2. From £250. Add GBP optimisation for £100. Live in under 2 weeks."
        features={[
          'From £250',
          '6 months free hosting',
          'Live in under 2 weeks',
          'GBP optimisation +£100',
          'Serving BA1 & BA2',
        ]}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* What's included */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag className="mb-4">Every site includes</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                A website built to get you found in Bath
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Bath is a competitive market. There are plenty of agencies building pretty sites that don't rank — and plenty of trades losing jobs because of it. Every site we build is optimised for local search from day one, targeting the searches your customers in BA1 and BA2 actually use.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing card */}
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <SectionTag className="mb-2">Pricing</SectionTag>
              <div className="space-y-4 mb-8">
                {[
                  { name: 'Starter', pages: '1-page site', price: 'From £250' },
                  { name: 'Professional', pages: '3-page site', price: 'From £350' },
                  { name: 'Full', pages: '5+ pages', price: 'From £450' },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0">
                    <div>
                      <div className="text-white font-semibold text-sm">{pkg.name}</div>
                      <div className="text-gray-500 text-xs">{pkg.pages}</div>
                    </div>
                    <div className="text-white font-bold text-primary">{pkg.price}</div>
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
              <p className="text-xs text-gray-500 mb-6">GBP optimisation available as a £100 add-on. Hosting free for 6 months, then £50/year. No hidden fees.</p>
              <button
                onClick={() => setModalOpen(true)}
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 bg-primary-dark"
              >
                Get a Quote
              </button>
              <Link
                href="/web-design-packages"
                className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm mt-3 transition-colors duration-200 text-primary"
              >
                View all packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
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
                <div className="text-gray-500 text-xs mb-3">{r.location}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{r.detail}</div>
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

      {/* What actually works in Bath */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTag className="mb-4">Why it works</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Web design in Bath — what actually gets you found
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Bath web design is more competitive than most Somerset towns. There are dozens of agencies offering to build you a website — some charge thousands, most build on WordPress templates that load slowly and don&apos;t rank. The trades that get enquiries from Google in Bath have three things in common: a fast site, a properly set up Google Business Profile, and location-specific pages that match how customers actually search.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We build every Bath website in Next.js — a modern framework that consistently outperforms WordPress on Core Web Vitals. Page speed is a direct ranking factor, and a slow site in a competitive market like Bath means handing jobs to competitors before the phone rings. Our sites score 90+ on Google&apos;s PageSpeed test as standard.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                For Bath trades, the searches that drive real enquiries are specific: not just &ldquo;plumber&rdquo; but &ldquo;plumber Bath BA2&rdquo;, &ldquo;emergency plumber Combe Down&rdquo;, &ldquo;painter and decorator Oldfield Park&rdquo;. We build location signals into every page from day one — the right postcodes, the right area names, schema that matches your Google Business Profile. That&apos;s the difference between a site that looks good and one that actually generates work.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We&apos;re based in Keynsham — 10 minutes from Bath city centre on the A4. We know the local market from both sides: we rank our own agency for competitive web design terms in Bath, and we&apos;ve helped trades across BA1 and BA2 get into the map pack for searches their customers are making every day.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Built on Next.js, not WordPress',
                  body: 'Faster load times, better Core Web Vitals scores, and no plugin bloat. Google rewards fast sites — especially in competitive markets like Bath.',
                },
                {
                  title: 'Local signals built in from day one',
                  body: 'BA1 and BA2 postcodes, neighbourhood-level targeting, schema markup that matches your GBP address. Not added as an afterthought.',
                },
                {
                  title: 'Trade-specific page structure',
                  body: 'A plumber in Bath needs different pages to a massage therapist in Bath. We build to the searches your specific customers are making, not a generic template.',
                },
                {
                  title: 'GBP aligned with your website',
                  body: 'Your Google Business Profile and website need to tell the same story — same address, same service areas, same categories. Mismatches cost rankings.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-dark-card border border-white/[0.06] rounded-xl p-5">
                  <div className="text-white font-semibold text-sm mb-2">{item.title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local signals — concise, links to hub for full area info */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">Local to you</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">Web design in Bath, built for Bath</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We build websites for trades across every part of Bath — painters, decorators, massage therapists, builders, cleaners, plumbers and more. Every website design we deliver for a Bath client is built around their trade and the specific postcodes they work in, not a generic template with &ldquo;Bath&rdquo; pasted in.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath is a competitive web design market. Most of the businesses at the top for &ldquo;website design Bath&rdquo; and &ldquo;web design Bath&rdquo; have properly built sites with local signals throughout — correct schema, location-specific pages, and a Google Business Profile that matches their address. We build all of that in from day one.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We cover BA1 and BA2 and every neighbourhood — Widcombe, Oldfield Park, Bear Flat, Larkhall, Twerton, Weston, Combe Down, Odd Down and the rest. See our{' '}
              <Link href="/areas/bath" className="text-primary-light hover:text-white transition-colors">Bath area hub</Link>{' '}
              for full coverage, or{' '}
              <Link href="/local-seo/bath" className="text-primary-light hover:text-white transition-colors">add local SEO</Link>{' '}
              or{' '}
              <Link href="/seo/bath" className="text-primary-light hover:text-white transition-colors">full SEO services</Link>{' '}
              once your site is live.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about web design in Bath</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Bath services — hub link + sibling services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Also in Bath</SectionTag>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/areas/bath" className="flex items-center justify-between p-5 bg-dark-card border border-primary/20 rounded-xl hover:border-primary/40 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Bath Area Hub</div>
                <div className="text-xs text-gray-500">All our services across Bath &amp; every neighbourhood</div>
              </div>
              <svg className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/local-seo/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO Bath</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/seo/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">SEO Bath</div>
                <div className="text-xs text-gray-500">Full SEO services — technical, on-page, content and local authority</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Bath map pack — £100 one-off optimisation</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner onGetQuote={() => setModalOpen(true)} />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WebsiteDesignerBath;
