'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import { BRISTOL_INDUSTRIES } from '../constants/industries';

const heroFeatures = [
  '#1 for "SEO Bristol"',
  'Websites from £250',
  'Local SEO from £150/month',
  'Free audit — no obligation',
];

const testimonials = [
  {
    quote:
      "SEO Kings replaced our old Wix site with a 102-page website covering every Bristol suburb we work in. Within weeks we were showing up for jet washing searches across BS postcodes. The site loads instantly and the phone hasn't stopped ringing. Best investment we've made.",
    name: 'Richard',
    business: 'RG Extreme Pressure',
    location: 'Bath & Bristol',
  },
  {
    quote:
      "As a tradesperson in Bristol I didn't know where to start with SEO. SEO Kings built my site, sorted my Google Business Profile, and I'm now getting enquiries from across the city — Clifton, Bedminster, Horfield, all of it. Wish I'd done it years ago.",
    name: 'Mark',
    business: 'Bristol Tradesperson',
    location: 'Bristol',
  },
];

const faqs = [
  {
    q: 'What should I look for in an SEO agency in Bristol?',
    a: "Three things: can they show you real rankings — not just client case studies but their own? Do they know the Bristol market — the specific BS postcode searches your customers use, the competition levels in Clifton vs Bedminster vs Bradley Stoke? And are they built for trades and small businesses, not enterprise clients? We rank #1 organically for \"SEO Bristol\" — one of the most competitive local SEO keywords in the South West. That's not a case study. That's us.",
  },
  {
    q: 'Why use a Bristol-based SEO agency and web designer?',
    a: "Because local knowledge matters in a city as spread out as Bristol. We know which BS postcodes have fierce Map Pack competition and which are wide open. We know the difference between searching for a plumber in Clifton BS8 versus Bradley Stoke BS32. We know that Bristol's search landscape spans three local authorities — Bristol City, South Gloucestershire and North Somerset — and that affects how Google ranks local results. An agency outside the area doesn't have that context.",
  },
  {
    q: 'What services do you offer Bristol businesses?',
    a: "Three services, all built around getting you found on Google: website design from £250, local SEO from £150/month, and Google Business Profile optimisation from £100. Most Bristol clients combine website design and local SEO — they work best together. You can explore each service on its own page below.",
  },
  {
    q: 'How competitive is Bristol for local search?',
    a: "Bristol is one of the most competitive local search markets outside London. More businesses, more agencies, more noise. But here's the reality: most Bristol trades still have slow websites and half-finished Google Business Profiles. The bar to outrank them is higher than Bath or the Somerset towns, but it's not as high as it looks. We've helped clients go from invisible to the Map Pack in Bristol within months — because we do the basics properly and consistently.",
  },
  {
    q: 'Do you work with specific trades in Bristol?',
    a: "We work with any trade or local business in Bristol — plumbers, electricians, builders, cleaners, painters, decorators, jet washing companies, mechanics, kitchen fitters, and more. The approach is the same: find the searches your customers are actually doing across BS postcodes, build or optimise your site for those searches, and make sure your Google Business Profile is set up to convert.",
  },
  {
    q: 'How long before I see results in Bristol?',
    a: "Google Business Profile improvements can show within weeks — sometimes faster in less competitive BS postcodes. Ranking for competitive Bristol keywords like 'plumber Bristol' or 'electrician BS7' typically takes 3–6 months. Suburb-level searches ('plumber Bedminster', 'electrician Horfield') can rank faster because the competition is thinner. We give you monthly reports so you see exactly what's moving. A website goes live in under 2 weeks.",
  },
  {
    q: 'Can ChatGPT and Google AI recommend my Bristol business?',
    a: "Yes — if your web presence gives them something to work with. AI assistants answer questions like \"who's a good plumber in Bristol?\" by reading the same local pages Google indexes: your website, your Google Business Profile, your reviews. They favour pages with clear structured data and direct, factual answers. Every site we build includes LocalBusiness, FAQ and review schema and plain-English content that AI tools can quote — so you're findable whether your customer asks Google or ChatGPT.",
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
      '@id': 'https://seo-kings.co.uk/areas/bristol',
      url: 'https://seo-kings.co.uk/areas/bristol',
      name: 'SEO Agency Bristol | Web Design & Local Search | SEO Kings',
      description: 'Bristol SEO agency and web designer. Local SEO from £150/month, websites from £250, GBP optimisation from £100. #1 for "SEO Bristol". Free audit.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      description: 'SEO and web design agency serving Bristol, BS1–BS16. Websites from £250, local SEO from £150/month. #1 organically for "SEO Bristol".',
      url: 'https://seo-kings.co.uk/areas/bristol',
      telephone: '+447****4921',
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
        { '@type': 'City', name: 'Bristol' },
        { '@type': 'City', name: 'Clifton' },
        { '@type': 'City', name: 'Bedminster' },
        { '@type': 'City', name: 'Horfield' },
        { '@type': 'City', name: 'Filton' },
        { '@type': 'City', name: 'Bradley Stoke' },
        { '@type': 'City', name: 'Brislington' },
        { '@type': 'City', name: 'Whitchurch' },
        { '@type': 'City', name: 'Knowle' },
        { '@type': 'City', name: 'Stockwood' },
        { '@type': 'City', name: 'Southville' },
        { '@type': 'City', name: 'Long Ashton' },
        { '@type': 'City', name: 'Yate' },
        { '@type': 'City', name: 'Kingswood' },
        { '@type': 'City', name: 'Redland' },
        { '@type': 'City', name: 'Bishopston' },
        { '@type': 'City', name: 'Cotham' },
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

const ArrowRight = () => (
  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const BristolHub = () => {
  return (
    <>
      <SEO schemas={[schema]} />

      {/* ── HERO ─────────────────────────────────── */}
      <ServicePageHero
        badge="Bristol · BS1–BS16"
        title="SEO Agency &amp; Web Design in"
        highlight="Bristol"
        description="Bristol SEO agency helping trades and local businesses get found on Google. We rank #1 organically for &ldquo;SEO Bristol&rdquo; — and we can do the same for your trade. Local SEO from £150/month, websites from £250, GBP optimisation from £100. Based in Keynsham, 20 minutes from the city centre."
        features={heroFeatures}
        ctaText="Get a Free Audit"
        ctaSecondary="Call Us Today"
      />

      {/* ── OUR SERVICES IN BRISTOL (Hub → Spoke links) ── */}
      <section className="py-24 bg-dark-lighter border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionTag className="mb-4">Our services in Bristol</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Everything you need to get found in Bristol
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Three services, one team, clear pricing. Most Bristol clients combine website design and local SEO — they work best together. Explore each service below.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Card 1 — Website Design (links to spoke) */}
            <Link
              href="/website-designer-bristol"
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
                Fast, mobile-first websites built to rank for your trade and BS postcode. Live in under 2 weeks. One-page from £250, multi-page from £350.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                Website design Bristol <ArrowRight />
              </div>
            </Link>

            {/* Card 2 — Local SEO (links to spoke) */}
            <Link
              href="/local-seo/bristol"
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
                Ongoing SEO to get you into Bristol&apos;s Map Pack — GBP management, on-page optimisation, local citations and monthly ranking reports.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                Local SEO Bristol <ArrowRight />
              </div>
            </Link>

            {/* Card 2b — SEO Bristol (full SEO services) */}
            <Link
              href="/seo/bristol"
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
                Technical SEO, on-page optimisation, content strategy and local authority — everything Bristol businesses need to rank on page one.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                SEO Bristol <ArrowRight />
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
                Full GBP setup and optimisation — categories, keywords, photos, services — so you appear in the map pack when Bristol customers search.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                GBP optimisation <ArrowRight />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── WHY BRISTOL BUSINESSES CHOOSE US ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTag className="mb-4">Why Bristol businesses use SEO Kings</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                A Bristol SEO agency that actually ranks in Bristol
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                SEO Kings is based in Keynsham — 20 minutes from Bristol city centre on the A4. We&apos;ve been working as an SEO agency and web designer across Bristol for years, and we rank #1 organically for &ldquo;SEO Bristol&rdquo; — one of the most competitive local SEO keywords in the South West. We don&apos;t just talk about rankings. We have them.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Bristol is a big, spread-out city. BS1 to BS16 spans Clifton, Bedminster, Horfield, Filton, Bradley Stoke, Brislington, Whitchurch and beyond — three local authorities, dozens of neighbourhoods, each with its own search patterns. We target Bristol at suburb level, not just &ldquo;Bristol&rdquo; as a single blob. That means your site ranks for the specific postcodes where your customers are searching, not just the generic city term everyone fights over.
              </p>
              <ul className="space-y-3">
                {[
                  '#1 organically for "SEO Bristol" — we rank for our own city',
                  '20 minutes from Bristol city centre — based in Keynsham',
                  'Suburb-level targeting across BS1–BS16, not just "Bristol"',
                  'Exclusive focus on trades and local businesses',
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

            {/* Bristol map + address */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/[0.06] h-64">
                <iframe
                  title="SEO Kings location — Keynsham, 20 mins from Bristol"
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
                  <span className="text-gray-500 text-xs">20 mins from Bristol city centre</span>
                </div>
                <a
                  href="tel:+447****4921"
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
          <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Bristol businesses we&apos;ve helped</h2>
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
            <SectionTag className="mb-4">Bristol SEO &amp; web design</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Digital marketing in Bristol — competing in the South West&apos;s biggest city
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <p className="text-gray-400 leading-relaxed">
                Bristol is the largest city in the South West and one of the most competitive local search markets outside London. More businesses, more agencies, more noise. But here&apos;s what most people overlook: the average Bristol trade&apos;s digital presence is surprisingly weak. WordPress sites from 2018 scoring under 50 on PageSpeed. Google Business Profiles that are half-complete with no reviews and no photos. The competition looks intimidating, but the bar to outrank most of it is lower than it appears.
              </p>
              <p className="text-gray-400 leading-relaxed">
                What&apos;s actually driving results for Bristol trades right now is three things working together: a fast, properly structured website targeting the right BS postcode keywords; a fully optimised Google Business Profile with genuine reviews; and consistent local citations across the main directories. That combination is what got RG Extreme Pressure ranking for jet washing across Bristol suburbs.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'High-intent search volume',
                desc: 'Bristol is a big city with consistent demand. From Clifton period properties to Bradley Stoke new builds, the search volume for trade services is year-round across every BS postcode.',
              },
              {
                title: 'Most trades still poorly set up',
                desc: 'Despite the competition, most Bristol trades run slow sites and half-finished GBPs. The gap between invisible and visible is smaller than most people think.',
              },
              {
                title: '20 minutes from Bristol',
                desc: "We're based in Keynsham on the A4. When you need to talk through a brief or review something, you speak to the person who built your site — not an account manager.",
              },
              {
                title: 'We rank #1 for "SEO Bristol"',
                desc: 'We rank #1 organically for one of the most competitive local SEO keywords in the South West. If we can do it for ourselves, we can do it for you.',
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
              When someone asks ChatGPT for a plumber in Bristol — can it recommend you?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <p className="text-gray-400 leading-relaxed">
                More Bristol customers are asking AI tools instead of typing searches — ChatGPT for a recommendation, or reading Google&apos;s AI Overview at the top of the results page. Those answers aren&apos;t magic. The AI reads the same local pages Google indexes: your website, your Google Business Profile, your reviews. If your pages don&apos;t give it anything clear to quote, it recommends someone else.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every site we build is structured so AI assistants can quote it. LocalBusiness, FAQ and review schema on every page. Direct, factual answers to the questions Bristol customers actually ask. Consistent business details across the web. That&apos;s not a separate service with a separate invoice — it&apos;s how we&apos;ve built every site since day one, and it&apos;s why the same work that ranks you on Google makes you quotable in AI answers.
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
                title: 'Already happening in Bristol',
                desc: "AI Overviews already appear on many Bristol service searches. The businesses with structured, quotable pages are the ones getting named.",
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

      {/* ── SEO BY TRADE ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">SEO by trade</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2 leading-tight tracking-tight">Bristol SEO for your trade</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            A plumber and a landscaper are not doing the same job on Google. Emergency trades live
            or die on the Map Pack; project trades win on organic and proof of work. Each page below
            targets one trade specifically — the searches, the intent and the content that trade needs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.values(BRISTOL_INDUSTRIES).map((ind) => (
              <Link
                key={ind.slug}
                href={`/seo/bristol/${ind.slug}`}
                className="flex items-center justify-between gap-2 p-4 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 hover:bg-white/[0.03] transition-all duration-200 group"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {ind.plural}
                </span>
                <svg className="w-3.5 h-3.5 shrink-0 text-gray-600 opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          <Link
            href="/seo/bristol"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:text-white transition-colors"
          >
            All SEO services in Bristol
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── BRISTOL NEIGHBOURHOODS ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Bristol neighbourhoods</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2 leading-tight tracking-tight">Bristol areas we cover</h2>
          <p className="text-gray-400 mb-8">Web design, local SEO and Google Business Profile across every part of Bristol — 16 neighbourhood pages from Clifton and Bedminster out to Bradley Stoke, Yate and Long Ashton. Click your area for local information.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'Clifton', slug: 'clifton-bristol' },
              { name: 'Bedminster', slug: 'bedminster-bristol' },
              { name: 'Horfield', slug: 'horfield-bristol' },
              { name: 'Filton', slug: 'filton-bristol' },
              { name: 'Bradley Stoke', slug: 'bradley-stoke-bristol' },
              { name: 'Brislington', slug: 'brislington' },
              { name: 'Whitchurch', slug: 'whitchurch-bristol' },
              { name: 'Knowle', slug: 'knowle-bristol' },
              { name: 'Stockwood', slug: 'stockwood-bristol' },
              { name: 'Southville', slug: 'southville-bristol' },
              { name: 'Long Ashton', slug: 'long-ashton-bristol' },
              { name: 'Yate', slug: 'yate-bristol' },
              { name: 'Kingswood', slug: 'kingswood' },
              { name: 'Redland', slug: 'redland-bristol' },
              { name: 'Bishopston', slug: 'bishopston-bristol' },
              { name: 'Cotham', slug: 'cotham-bristol' },
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
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight tracking-tight">Common questions about our web design &amp; SEO services in Bristol</h2>
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
              { href: '/website-designer-bristol', label: 'Web Designer — Bristol', desc: 'Fast, mobile-first sites for Bristol trades and small businesses. From £250, live in under 2 weeks.' },
              { href: '/local-seo/bristol', label: 'Local SEO — Bristol', desc: 'Ongoing SEO to push you into Bristol\'s Map Pack and keep you there — from £150/month.' },
              { href: '/seo/bristol', label: 'SEO Bristol', desc: 'Full SEO services for Bristol trades and small businesses — technical, on-page, content and local authority.' },
              { href: '/google-business-profile', label: 'Google Business Profile', desc: 'GBP setup and optimisation for Bristol businesses — £100 one-off, no ongoing fees.' },
              { href: '/web-design-packages', label: 'Packages &amp; Pricing', desc: 'Clear, per-page pricing with no hidden extras — from £250 for a one-page trade site.' },
              { href: '/areas/bath', label: 'Bath', desc: 'Web design and SEO in BA1 & BA2 — 10 minutes from our office in Keynsham.' },
              { href: '/areas/keynsham', label: 'Keynsham', desc: 'Web design and SEO in BS31 — our home patch, between Bristol and Bath on the A4.' },
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

export default BristolHub;