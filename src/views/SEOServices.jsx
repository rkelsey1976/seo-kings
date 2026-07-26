import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const heroFeatures = [
  'Local SEO from £150/mo',
  'GBP optimisation £100',
  'Bath & Bristol specialists',
  'Monthly reporting',
];

const spokes = [
  {
    href: '/local-seo',
    name: 'Local SEO',
    price: 'From £150/mo',
    desc: 'Keyword research, on-page optimisation, Google Business Profile and monthly reporting — the ongoing work that keeps you ranking.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    href: '/google-business-profile',
    name: 'Google Business Profile',
    price: '£100 one-off',
    desc: 'Full GBP setup and optimisation — categories, service areas, photos and description done properly, once.',
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: '/website-redesign',
    name: 'Website Redesign',
    price: 'Get a quote',
    desc: "Ranking suffering because of a slow or outdated site? We rebuild it to keep your domain and your rankings, minus the dead weight.",
    icon: (
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const cityAreas = [
  {
    name: 'Bath',
    href: '/areas/bath',
    postcodes: 'BA1 & BA2',
    desc: 'The most competitive market in BANES. Map Pack and page one rankings for trades across the city.',
    subLinks: [
      { name: 'SEO Bath', href: '/seo/bath' },
      { name: 'Local SEO Bath', href: '/local-seo/bath' },
    ],
  },
  {
    name: 'Bristol',
    href: '/areas/bristol',
    postcodes: 'BS1–BS16',
    desc: 'The biggest market in the South West. Suburb-level campaigns from the Harbourside to Kingswood.',
    subLinks: [
      { name: 'SEO Bristol', href: '/seo/bristol' },
      { name: 'Local SEO Bristol', href: '/local-seo/bristol' },
    ],
  },
];

const otherAreas = [
  { name: 'Keynsham', slug: 'keynsham', postcodes: 'BS31' },
  { name: 'Midsomer Norton', slug: 'midsomer-norton', postcodes: 'BA3' },
  { name: 'Radstock', slug: 'radstock', postcodes: 'BA3' },
  { name: 'Peasedown St John', slug: 'peasedown-st-john', postcodes: 'BA2' },
  { name: 'Paulton', slug: 'paulton', postcodes: 'BS39' },
  { name: 'Saltford', slug: 'saltford', postcodes: 'BS31' },
];

const testimonials = [
  {
    quote:
      "Brand new business, no website, no social media. SEO Kings built everything from scratch in under a week. I'm already getting calls from people finding me on Google in Bath. Couldn't ask for more.",
    name: 'Ross',
    business: 'Aurelian Massage',
    location: 'Bath City Centre',
  },
  {
    quote:
      "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath and the area.",
    name: 'Jay',
    business: 'New Decorating',
    location: 'Bath & BANES',
  },
  {
    quote:
      "From the very first conversation, they understood exactly what I needed — a clean, professional, local SEO-focused site. Since the site launched, I've already noticed an increase in enquiries and it's performing well for local searches.",
    name: 'Duncan',
    business: 'Bath Painter',
    location: 'Bath',
  },
];

const faqs = [
  { q: 'What does an SEO agency actually do for a trade business?', a: 'We get you found when local customers search on Google — optimising your website and Google Business Profile so you rank higher for searches like "plumber Bath" or "electrician Keynsham", and show up in the Map Pack.' },
  { q: 'Do I need a new website to start SEO?', a: 'No. Most clients run Local SEO on the site we already built for them, or on an existing site. We work with what you have — SEO expands on it rather than replacing it.' },
  { q: 'How much does SEO cost?', a: 'Local SEO starts from £150/month depending on how many services and locations you want to rank for. Google Business Profile optimisation is a £100 one-off. No contracts.' },
  { q: 'Do you only work in Bath and Bristol?', a: 'Those are our two biggest markets, but we also cover Keynsham, Midsomer Norton, Radstock, Peasedown St John, Paulton, Saltford and surrounding towns in Somerset and Wiltshire.' },
  { q: 'How long until I see results?', a: 'Most clients see movement within 3–6 months for competitive keywords; Google Business Profile changes can show within weeks. You get monthly reports so you always know where you stand.' },
  { q: 'What\'s the difference between the Bath and Bristol SEO pages and the Local SEO page?', a: 'Local SEO (/local-seo) covers our ongoing optimisation service everywhere we work. The Bath and Bristol pages go deeper on those two specific markets — the competition, the postcodes, and the results we\'ve had there.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/seo',
      url: 'https://seo-kings.co.uk/seo',
      name: 'SEO Agency Bath & Bristol | SEO Kings',
      description: 'SEO for trades in Bath, Bristol & North East Somerset. Local SEO, Google Business Profile optimisation and Map Pack rankings. From £150/month.',
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
      serviceType: 'Search Engine Optimisation',
      name: 'SEO Services',
      description: 'SEO for trades and small businesses across Bath, Bristol and North East Somerset — local SEO, Google Business Profile optimisation and Map Pack rankings.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/seo' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Bristol' },
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

const ArrowRight = () => (
  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const SEOServices = () => {
  return (
    <>
      <SEO schemas={[schema]} />
      {/* Keyword H1 for crawlers; visible hero headline stays conversion-first as H2 (same pattern as homepage) */}
      <h1 className="sr-only">SEO Agency for Trades in Bath, Bristol & North East Somerset</h1>
      <ServicePageHero
        titleTag="h2"
        badge="SEO Agency · Bath & Bristol"
        title="Rank higher. Get more"
        highlight="calls from Google."
        description="Local SEO and Google Business Profile optimisation for trades across Bath, Bristol and North East Somerset — built to get you into the Map Pack and page one."
        features={heroFeatures}
        ctaText="Get a Free SEO Audit"
      />

      {/* ── OUR SEO SERVICES (Hub → Spoke links) ── */}
      <section className="py-24 bg-dark-lighter border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">Our SEO services</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              One team, clear pricing
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Pick what you need, or run it all together. Explore each service below.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {spokes.map(({ href, name, price, desc, icon }) => (
              <Link key={href} href={href} className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                  {icon}
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">{price}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">{name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{desc}</p>
                <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE (SEO Agency Bath & Bristol → individual area pages) ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">Areas we serve</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              SEO Agency Bath &amp; Bristol
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Every area below has its own SEO Kings page. Start with the city hub, or jump straight to the SEO or Local SEO page for your postcode.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {cityAreas.map((area) => (
              <div key={area.href} className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
                <Link href={area.href} className="group block mb-5">
                  <div className="text-[11px] font-mono tracking-[0.08em] uppercase text-primary mb-2">{area.postcodes}</div>
                  <div className="text-white text-xl font-bold mb-2 group-hover:text-primary-light transition-colors">{area.name} Hub</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
                </Link>
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                  {area.subLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-primary/40 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[11px] font-mono tracking-[0.1em] uppercase text-gray-500 mb-3">Also serving</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {otherAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="flex items-center justify-between p-3 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group"
                >
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{area.name}</span>
                  <span className="text-[11px] font-mono text-gray-600">{area.postcodes}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag className="mb-4">Why trades use SEO Kings</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                An SEO agency that knows Bath and Bristol search
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                SEO Kings is based in Keynsham — 10 minutes from Bath, 20 minutes from Bristol. We don&apos;t serve London or Manchester. We know which searches drive actual phone calls in BA1, BA2 and across Bristol&apos;s suburbs, and which ones just look good on a report.
              </p>
              <ul className="space-y-3">
                {[
                  'Local SEO from £150/month, GBP optimisation from £100',
                  'Exclusive focus on trades and local businesses',
                  'We rank for our own city — not just our clients',
                  'Monthly reports with real ranking data, not vanity metrics',
                  'No lock-in contracts — results keep you, not paperwork',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
              <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-6">By the numbers</p>
              <div className="space-y-4">
                {[
                  { label: 'Local SEO from', value: '£150/mo' },
                  { label: 'GBP optimisation', value: '£100' },
                  { label: 'Peachy Cleans — Map Pack', value: '#1' },
                  { label: 'New Decorating — Map Pack', value: 'Top 3' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-400 text-sm">{label}</span>
                    <span className="text-xl font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">What clients say</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Businesses we&apos;ve helped get found</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
                <svg className="w-6 h-6 mb-4 opacity-40 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.business} &middot; {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT EXPANSION ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">The SEO opportunity</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Most trades in Bath and Bristol are still easy to outrank
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <p className="text-gray-400 leading-relaxed">
                Bath and Bristol are two of the most competitive local search markets in the South West — more businesses, more agencies, more noise. But the average trade&apos;s digital presence is still surprisingly weak: WordPress sites from years ago scoring under 50 on PageSpeed, Google Business Profiles half-complete with no reviews and no photos. The bar to outrank them is lower than it looks.
              </p>
              <p className="text-gray-400 leading-relaxed">
                What&apos;s actually driving results is three things working together: a fast, properly structured website targeting the right keywords, a fully optimised Google Business Profile with genuine reviews, and consistent local citations. That combination is what got New Decorating into the top 3 Map Pack for &ldquo;exterior painter Bath&rdquo; — one of the city&apos;s most competitive trade searches.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'High-intent search volume', desc: 'Trades searches in Bath and Bristol are consistent and year-round — homeowners, landlords and businesses all searching for the same local services.' },
              { title: 'Most trades still poorly set up', desc: 'Despite the competition, most local trades run slow sites and half-finished GBPs. The gap between invisible and visible is smaller than most people think.' },
              { title: '10–20 minutes from both cities', desc: "We're based in Keynsham, between Bath and Bristol. When you need to talk something through, you speak to the person who built your campaign." },
              { title: 'Proven results in both markets', desc: 'New Decorating: top 3 Map Pack for "exterior painter Bath". Peachy Cleans: #1 Map Pack for "cleaning Midsomer Norton". We rank for our own city too.' },
            ].map((card) => (
              <div key={card.title} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SEARCH ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">AI search</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              When someone asks ChatGPT for a trade in Bath or Bristol — can it recommend you?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <p className="text-gray-400 leading-relaxed">
                More customers are asking AI tools instead of typing searches — ChatGPT for a recommendation, or Google&apos;s AI Overview at the top of the results page. Those answers aren&apos;t magic. The AI reads the same local pages Google indexes: your website, your Google Business Profile, your reviews.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every site we build is structured so AI assistants can quote it — LocalBusiness, FAQ and review schema on every page, with direct, factual answers to the questions customers actually ask. That&apos;s not a separate service — it&apos;s how we build every site, and it&apos;s why the same SEO work that ranks you on Google makes you quotable in AI answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">SEO FAQs</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Explore further</SectionTag>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/web-design', label: 'Website Design', desc: 'Fast, mobile-first websites for trades. From £250, live in under 2 weeks.' },
              { href: '/web-design-packages', label: 'Packages & Pricing', desc: 'Clear, per-page pricing with no hidden extras — from £250 for a one-page trade site.' },
              { href: '/tools/seo-audit', label: 'Free SEO Audit', desc: 'See exactly what\'s stopping you ranking and what to fix first — no obligation.' },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="bg-dark-card border border-white/[0.06] rounded-2xl p-5 hover:border-white/10 transition-colors group">
                <div className="text-white font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{label}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default SEOServices;
