'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';

const heroFeatures = [
  '6+ years in Bath & BANES',
  'Websites from £250',
  'Local SEO from £150/month',
  'Free audit — no obligation',
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
      "From the very first conversation, they understood exactly what I needed — a clean, professional, local SEO-focused site. Since the site launched, I've already noticed an increase in enquiries and it's performing well for local searches. The whole process was completely stress-free.",
    name: 'Duncan',
    business: 'Bath Painter',
    location: 'Bath',
  },
];

const faqs = [
  {
    q: 'What should I look for in a web designer in Bath?',
    a: "Three things: do they build sites that actually rank on Google, not just look good? Do they know the Bath market — the specific searches your customers use in BA1 and BA2? And can they show you real local results, not just national case studies? Most web designers in Bath can produce a presentable site. Fewer build one that drives calls. We focus exclusively on local search performance — every site we build is SEO-ready from day one, targeting the specific Bath searches your customers actually type.",
  },
  {
    q: 'Why use a Bath-based web designer or SEO agency?',
    a: "Because local knowledge matters. We know which Bath keywords drive actual phone calls versus which just look good on a report. We know which trade categories are most competitive in Bath's Map Pack, which postcodes (BA1 vs BA2) behave differently in search, and what it takes to get a trades business from invisible to page one. An agency outside the area doesn't have that context.",
  },
  {
    q: 'What services do you offer Bath businesses?',
    a: "Three services, all built around getting you found on Google: website design from £250, local SEO from £150/month, and Google Business Profile optimisation from £100. Most Bath clients combine website design and local SEO — they work best together. You can explore each service on its own page below.",
  },
  {
    q: 'How competitive is Bath for local search?',
    a: "More competitive than the Somerset towns, but many Bath trades still have poorly optimised GBPs and slow websites — so there's real room to move. We've helped clients go from invisible to the map pack in Bath within a few months. The businesses that lose out are the ones doing nothing.",
  },
  {
    q: 'Do you work with specific trades in Bath?',
    a: "We work with any trade or local business in Bath — painters, plumbers, electricians, builders, massage therapists, cleaners, kitchen fitters, and more. We have dedicated trade pages for many of these. The approach is the same: find the searches your customers are actually doing, build or optimise your site for those searches, make sure your Google Business Profile is set up to convert.",
  },
  {
    q: 'How long before I see results?',
    a: "GBP improvements can show within weeks. Ranking for competitive Bath keywords like 'plumber Bath' or 'electrician BA1' typically takes 3–6 months. We give you monthly reports so you see exactly what's moving. A website goes live in under 2 weeks.",
  },
  {
    q: 'Can ChatGPT and Google AI recommend my Bath business?',
    a: "Yes — if your web presence gives them something to work with. AI assistants answer questions like \"who's a good electrician in Bath?\" by reading the same local pages Google indexes: your website, your Google Business Profile, your reviews. They favour pages with clear structured data and direct, factual answers. Every site we build includes LocalBusiness, FAQ and review schema and plain-English content that AI tools can quote — so you're findable whether your customer asks Google or ChatGPT.",
  },
  {
    q: 'What does it cost overall?',
    a: "Website design from £250. Local SEO from £150/month. GBP optimisation from £100 one-off. Free audit first, so you know exactly what you're getting and why before you commit to anything. No lock-in contracts.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/areas/bath',
      url: 'https://seo-kings.co.uk/areas/bath',
      name: 'SEO Agency Bath | Web Design & Local Search | SEO Kings',
      description: 'Bath SEO agency and web designer. Local SEO from £150/month, websites from £250, GBP optimisation from £100. 6+ years helping Bath businesses get found on Google. Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Areas' },
          { '@type': 'ListItem', position: 3, name: 'Bath' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'SEO and web design agency in Bath, serving trades and local businesses across BA1, BA2 and North East Somerset. Websites from £250, local SEO from £150/month.',
      url: 'https://seo-kings.co.uk/areas/bath',
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
        { '@type': 'City', name: 'Midsomer Norton' },
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

const ArrowRight = () => (
  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const BathHub = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* ── HERO ─────────────────────────────────── */}
      <ServicePageHero
        badge="Bath · BA1 &amp; BA2"
        title="SEO Agency &amp; Web Design in"
        highlight="Bath"
        description="Bath-based SEO agency helping trades and local businesses get found on Google. Local SEO from £150/month, websites from £250, GBP optimisation from £100. Six years in Bath — we know which searches drive calls and what it takes to move from invisible to the Map Pack."
        features={heroFeatures}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* ── OUR SERVICES IN BATH (Hub → Spoke links) ── */}
      <section className="py-24 bg-dark-lighter border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">Our services in Bath</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Everything you need to get found in Bath
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Three services, one team, clear pricing. Most Bath clients combine website design and local SEO — they work best together. Explore each service below.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Card 1 — Website Design (links to spoke) */}
            <Link
              href="/website-designer-bath"
              className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">From £250</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">Website Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Fast, mobile-first websites built to rank for your trade and area. Live in under 2 weeks. One-page from £250, multi-page from £350.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                Website design Bath <ArrowRight />
              </div>
            </Link>

            {/* Card 2 — Local SEO (links to spoke) */}
            <Link
              href="/local-seo/bath"
              className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">From £150/month</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">Local SEO</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Ongoing SEO to get you into Bath&apos;s Map Pack — GBP management, on-page optimisation, local citations and monthly ranking reports.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                Local SEO Bath <ArrowRight />
              </div>
            </Link>

            {/* Card 2b — SEO Bath (full SEO services) */}
            <Link
              href="/seo/bath"
              className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">From £150/month</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">SEO Services</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Technical SEO, on-page optimisation, content strategy and local authority — everything Bath businesses need to rank on page one.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                SEO Bath <ArrowRight />
              </div>
            </Link>

            {/* Card 3 — Google Business Profile (links to spoke) */}
            <Link
              href="/google-business-profile"
              className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">£100 one-off</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">Google Business Profile</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Full GBP setup and optimisation — categories, keywords, photos, services — so you appear in the map pack when Bath customers search.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                GBP optimisation <ArrowRight />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── WHY BATH BUSINESSES CHOOSE US ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag className="mb-4">Why Bath businesses use SEO Kings</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                A Bath SEO agency that knows Bath search
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                SEO Kings is based in Keynsham — 10 minutes from Bath city centre on the A4. We&apos;ve been working as an SEO agency and web designer in Bath for over six years. We don&apos;t serve London or Manchester. We serve Bath, Bristol, Keynsham, Midsomer Norton and the surrounding towns.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Bath is one of the most competitive local markets in the South West — more businesses, more agencies, more noise. The good news: most Bath trades still have slow websites and poorly set up Google Business Profiles. That&apos;s where the opportunity is. We know which searches drive actual phone calls in BA1 and BA2, and which ones just look good on a report.
              </p>
              <ul className="space-y-3">
                {[
                  '6+ years serving Bath & North East Somerset',
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

            {/* Bath map + address */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/[0.06] h-64">
                <iframe
                  title="SEO Kings location — Keynsham, near Bath"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.8!2d-2.4965!3d51.4145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKeynsham!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <address className="not-italic bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="text-white font-semibold text-sm mb-2">SEO Kings</div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  16a Culvers Road<br />
                  Keynsham, Somerset<br />
                  BS31 2DW<br />
                  <span className="text-gray-500 text-xs">10 mins from Bath city centre</span>
                </div>
                <a
                  href="tel:+447702264921"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-white transition-colors mt-4"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  07702 264 921
                </a>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-8">What clients say</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Bath businesses we&apos;ve helped</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
                <svg className="w-6 h-6 mb-4 opacity-40 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
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
            <SectionTag className="mb-4">Bath SEO &amp; web design</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Digital marketing in Bath — competing in one of the South West&apos;s toughest markets
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <p className="text-gray-400 leading-relaxed">
                Bath is one of the most competitive local search markets in the South West. More businesses, more agencies, more noise. But here&apos;s what most people overlook: the average Bath trade&apos;s digital presence is surprisingly weak. WordPress sites from 2018 scoring under 50 on PageSpeed. Google Business Profiles that are half-complete with no reviews and no photos. The bar to outrank them is lower than it looks.
              </p>
              <p className="text-gray-400 leading-relaxed">
                What&apos;s actually driving results for Bath trades right now is three things working together: a fast, properly structured website targeting the right Bath keywords; a fully optimised Google Business Profile with genuine reviews; and consistent local citations across the main directories. That combination is what got New Decorating into the top 3 Map Pack for &ldquo;exterior painter Bath&rdquo; — one of the city&apos;s most competitive trade searches.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'High-intent search volume',
                desc: 'Bath homeowners search in volume. Period properties, renovation projects, rental stock — the demand is consistent and year-round across BA1 and BA2.',
              },
              {
                title: 'Most trades still poorly set up',
                desc: 'Despite the competition, most Bath trades run slow sites and half-finished GBPs. The gap between invisible and visible is smaller than most people think.',
              },
              {
                title: '10 minutes from Bath',
                desc: "We're based in Keynsham on the A4. When you need to talk through a brief or review something, you speak to the person who built your site — not an account manager.",
              },
              {
                title: 'Proven Bath results',
                desc: 'New Decorating: top 3 Map Pack for "exterior painter Bath". Bath Painter: enquiries up within a week of launch. We rank for our own city, not just our clients.',
              },
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
              When someone asks ChatGPT for a plumber in Bath — can it recommend you?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <p className="text-gray-400 leading-relaxed">
                More Bath customers are asking AI tools instead of typing searches — ChatGPT for a recommendation, or reading Google&apos;s AI Overview at the top of the results page. Those answers aren&apos;t magic. The AI reads the same local pages Google indexes: your website, your Google Business Profile, your reviews. If your pages don&apos;t give it anything clear to quote, it recommends someone else.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every site we build is structured so AI assistants can quote it. LocalBusiness, FAQ and review schema on every page. Direct, factual answers to the questions Bath customers actually ask. Consistent business details across the web. That&apos;s not a separate service with a separate invoice — it&apos;s how we&apos;ve built every site since day one, and it&apos;s why the same work that ranks you on Google makes you quotable in AI answers.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'AI reads what Google reads',
                desc: 'ChatGPT and AI Overviews draw on indexed local pages, business profiles and reviews. Rank well and be quotable, and you appear in both.',
              },
              {
                title: 'Schema on every page',
                desc: 'LocalBusiness, FAQ and review markup tells AI exactly who you are, what you do and where you work — machine-readable, no guesswork.',
              },
              {
                title: 'Answers, not filler',
                desc: 'AI quotes pages that answer questions directly. Our pages state your services, prices and areas in plain sentences it can lift word for word.',
              },
              {
                title: 'Already happening in Bath',
                desc: "AI Overviews already appear on many Bath service searches. The businesses with structured, quotable pages are the ones getting named.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BATH NEIGHBOURHOODS ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Bath neighbourhoods</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2 leading-tight tracking-tight">Bath areas we cover</h2>
          <p className="text-gray-400 mb-8">Web design, local SEO and Google Business Profile across every part of Bath — 16 neighbourhood pages from the city centre and Lansdown out to the eastern villages. Click your area for local information.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'City Centre', slug: 'city-centre-bath' },
              { name: 'Lansdown & Camden', slug: 'lansdown-bath' },
              { name: 'Odd Down', slug: 'odd-down-bath' },
              { name: 'Combe Down', slug: 'combe-down-bath' },
              { name: 'Widcombe', slug: 'widcombe-bath' },
              { name: 'Larkhall', slug: 'larkhall-bath' },
              { name: 'Twerton', slug: 'twerton-bath' },
              { name: 'Weston', slug: 'weston-bath' },
              { name: 'Oldfield Park', slug: 'oldfield-park-bath' },
              { name: 'Bear Flat', slug: 'bear-flat-bath' },
              { name: 'Bathampton', slug: 'bathampton-bath' },
              { name: 'Bathwick', slug: 'bathwick-bath' },
              { name: 'Southdown', slug: 'southdown-bath' },
              { name: 'Batheaston', slug: 'batheaston-bath' },
              { name: 'Walcot', slug: 'walcot-bath' },
              { name: 'Bathford', slug: 'bathford-bath' },
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="flex items-center gap-2 p-3 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200 group"
              >
                <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about our web design &amp; SEO services in Bath</h2>
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
              { href: '/website-designer-bath', label: 'Web Designer — Bath', desc: 'Fast, mobile-first sites for Bath trades and small businesses. From £250, live in under 2 weeks.' },
              { href: '/local-seo/bath', label: 'Local SEO — Bath', desc: 'Ongoing SEO to push you into Bath\'s Map Pack and keep you there — from £150/month.' },
              { href: '/seo/bath', label: 'SEO Bath', desc: 'Full SEO services for Bath trades and small businesses — technical, on-page, content and local authority.' },
              { href: '/google-business-profile', label: 'Google Business Profile', desc: 'GBP setup and optimisation for Bath businesses — £100 one-off, no ongoing fees.' },
              { href: '/web-design-packages', label: 'Packages &amp; Pricing', desc: 'Clear, per-page pricing with no hidden extras — from £250 for a one-page trade site.' },
              { href: '/areas/keynsham', label: 'Keynsham', desc: 'Web design and SEO in BS31 — 10 minutes from Bath on the A4.' },
              { href: '/areas/saltford', label: 'Saltford', desc: 'Between Keynsham and Bath city centre — see what we offer in BS31.' },
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

export default BathHub;