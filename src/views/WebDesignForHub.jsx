'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import PricingModal from '../components/PricingModal';

const trades = [
  { name: 'Plumbers', slug: 'plumbers', description: 'Professional websites for plumbers — showcase your services and get more call-outs.' },
  { name: 'Electricians', slug: 'electricians', description: 'Websites for electricians that highlight your qualifications and attract local jobs.' },
  { name: 'Roofers', slug: 'roofers', description: 'Get a roofing website that ranks locally and drives steady enquiries.' },
  { name: 'Builders', slug: 'builders', description: 'Professional web design for builders — portfolio, testimonials, and more leads.' },
  { name: 'Landscapers', slug: 'landscapers', description: 'Websites for landscapers that show off your work and bring in garden projects.' },
  { name: 'Cleaners', slug: 'cleaners', description: 'Clean, simple websites for cleaning businesses that convert visitors into bookings.' },
  { name: 'Painters & Decorators', slug: 'painters-decorators', description: 'Stand out locally with a website built for painters and decorators.' },
  { name: 'Kitchen Fitters', slug: 'kitchen-fitters', description: 'Showcase your kitchen installations online and win more fitted kitchen jobs.' },
  { name: 'Bathroom Fitters', slug: 'bathroom-fitters', description: 'Websites for bathroom fitters — gallery-led design that sells your work.' },
  { name: 'Heating Engineers', slug: 'heating-engineers', description: 'Websites for heating engineers that highlight Gas Safe credentials and local trust.' },
  { name: 'Plasterers', slug: 'plasterers', description: 'Professional websites for plasterers — get found locally and win more contracts.' },
  { name: 'Gas Engineers', slug: 'gas-engineers', description: 'Rank for gas engineer Bath, boiler repair Keynsham and get emergency calls.' },
  { name: 'Loft Conversions', slug: 'loft-conversions', description: 'Rank for loft conversion Bath, dormer Keynsham and win high-value contracts.' },
  { name: 'Extension Builders', slug: 'extension-builders', description: 'Rank for house extension Bath, extension builder Keynsham and win big projects.' },
  { name: 'Drainage Engineers', slug: 'drainage-engineers', description: 'Rank for drain unblocking Bath, CCTV drain survey Keynsham and get emergency calls.' },
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '250',
    period: 'one-off',
    tagline: '1-page site',
    features: [
      'Single-page professional website',
      'Mobile-responsive design',
      'Google Business Profile setup',
      'Local SEO from day one',
      'Contact form & click-to-call',
      '6 months free hosting',
    ],
    cta: 'Get a quote',
    href: '/contact?service=web-design-for&package=starter',
    popular: false,
    gradient: 'from-primary to-primary-dark',
  },
  {
    name: 'Professional',
    price: '450',
    period: 'one-off',
    tagline: '5-page site',
    features: [
      '5-page professional website',
      'Mobile-responsive design',
      'Google Business Profile optimisation',
      'Full on-page & local SEO',
      'Portfolio / gallery pages',
      '6 months free hosting',
    ],
    cta: 'Get a quote',
    href: '/contact?service=web-design-for&package=professional',
    popular: true,
    gradient: 'from-secondary to-secondary-dark',
  },
  {
    name: 'Full',
    price: '700',
    period: 'one-off',
    tagline: '10-page site',
    features: [
      '10-page professional website',
      'Mobile-responsive design',
      'Google Business Profile optimisation',
      'Full on-page & local SEO',
      'Portfolio / gallery & service area pages',
      '6 months free hosting',
    ],
    cta: 'Get a quote',
    href: '/contact?service=web-design-for&package=full',
    popular: false,
    gradient: 'from-accent to-accent-dark',
  },
];

const howItWorks = [
  { step: '1', title: 'Free audit', description: 'We review your current online presence — or start from scratch — and identify what your trade website needs to succeed.' },
  { step: '2', title: 'Build your site', description: 'We design and build a professional, mobile-friendly website tailored to your trade, your services, and your local area.' },
  { step: '3', title: 'Start getting calls', description: 'Your site goes live, optimised for Google and built to convert visitors into enquiries and jobs.' },
];

const WebDesignForHub = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Web Design for Trades', item: 'https://seo-kings.co.uk/web-design-for' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://seo-kings.co.uk/#service-web-design-for-trades',
            serviceType: 'Web Design',
            name: 'Web Design for Trades',
            description: 'Professional trade-specific web design services for tradespeople and small businesses in Bath & North East Somerset. Websites built to generate leads from £250.',
            provider: { '@id': 'https://seo-kings.co.uk/#organization' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/web-design-for' },
            areaServed: { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Web Design for Trades Packages',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Starter Web Design', description: '1-page professional website, mobile-responsive, local SEO from day one, 6 months free hosting' }, priceSpecification: { '@type': 'PriceSpecification', price: 250, priceCurrency: 'GBP', unitText: 'one-off' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Professional Web Design', description: '5-page professional website with portfolio, full on-page and local SEO, 6 months free hosting' }, priceSpecification: { '@type': 'PriceSpecification', price: 450, priceCurrency: 'GBP', unitText: 'one-off' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Web Design', description: '10-page professional website with service area pages, gallery, full local SEO, 6 months free hosting' }, priceSpecification: { '@type': 'PriceSpecification', price: 700, priceCurrency: 'GBP', unitText: 'one-off' } },
              ],
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'How much does a trade website cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our trade websites start from £250 for a 1-page starter site. It\'s £250 base + £50 per additional page — so a 3-page site is £350, a 5-page site is £450, a 10-page site is £700. All prices are one-off — no ongoing website fees.' } },
              { '@type': 'Question', name: 'How long does it take to build my website?', acceptedAnswer: { '@type': 'Answer', text: 'Most trade websites are live within 2–3 weeks. A single-page starter site can be ready sooner. We keep you involved at every stage with previews and revisions.' } },
              { '@type': 'Question', name: 'Do you write the content for my website?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Professional and Full packages include content written specifically for your trade and area. Starter sites include basic content based on the information you provide. We make sure every page is optimised for the searches your customers make.' } },
              { '@type': 'Question', name: 'Will my website work on mobile phones?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Every website we build is mobile-responsive. Most of your potential customers will find you on their phone, so we design mobile-first with click-to-call buttons and fast load times.' } },
              { '@type': 'Question', name: 'Can I add Local SEO later?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many clients start with a website and add Local SEO once it\'s live. We built your site with local SEO in mind, so adding it later is seamless — we optimise what we\'ve already created to get you ranking higher and getting more calls.' } },
            ],
          },
        ]} />

      <ServicePageHero
        badge="Web Design for Trades"
        title="Websites Built for Your Trade"
        highlight="in Bath & Somerset"
        description="Professional, mobile-friendly websites designed for tradespeople — from plumbers to plasterers. Get found on Google, showcase your work, and turn visitors into jobs. From £250 one-off."
        features={['Mobile-First Design', 'Local SEO Ready', '6 months free hosting', 'Lead-Generating', 'Fast & Secure']}
        ctaText="Get a Quote"
        onGetQuote={() => setModalOpen(true)}
      />

      {/* Trade cards grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">
              Web Design for Your Trade
            </h2>
            <p className="text-gray-400">
              Plumbers, electricians, roofers and more — we build websites that work for your specific trade and local area.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trades.map((trade) => (
              <Link
                key={trade.slug}
                href={`/web-design-for/${trade.slug}`}
                className="block p-6 bg-dark-card border border-white/10 rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                  For {trade.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{trade.description}</p>
                <span className="text-primary-light text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Simple process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              How It Works
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From first chat to live website — we keep it straightforward so you can focus on your trade.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Simple pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              What You Pay — By Website Size
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              One-off payment, no hidden extras. Choose the size that fits your trade and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border p-6 flex flex-col ${
                  pkg.popular
                    ? 'border-secondary/50 bg-secondary/5 ring-1 ring-secondary/20'
                    : 'border-white/10 bg-dark-card'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-secondary text-white text-xs font-semibold rounded-full">
                    Most popular
                  </span>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{pkg.tagline}</p>
                </div>
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">from </span>
                  <span className="text-3xl font-bold text-white">£{pkg.price}</span>
                  <span className="text-gray-500"> {pkg.period}</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setModalOpen(true)}
                  className={`w-full text-center py-3 px-4 rounded-xl font-semibold transition-all bg-gradient-to-r ${pkg.gradient} text-white hover:opacity-90`}
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mt-6 rounded-xl border border-white/10 bg-dark-card p-5">
              <div className="flex items-center justify-between py-1">
                <div>
                  <div className="text-white font-semibold text-sm">Hosting and maintenance</div>
                  <div className="text-gray-400 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £50/year</div>
                </div>
                <div className="font-bold shrink-0 ml-4 text-primary">6 months free</div>
              </div>
            </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            All prices one-off. Hosting free for 6 months, then £50/year. No long contracts.
          </p>
        </div>
      </section>

      {/* Free tools section */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">Free tools for tradespeople</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
              Useful resources — no signup needed
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {[
              {
                href: '/invoice-template-generator',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Invoice & Quote Generator',
                desc: 'Create a professional invoice or quote template with your own branding. Download as PDF in 2 minutes.',
              },
              {
                href: '/google-business-profile-score-checker',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: 'GBP Score Checker',
                desc: 'See how your Google Business Profile stacks up and find out exactly what to fix to rank in the Map Pack.',
              },
              {
                href: '/website-roi-calculator',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Website ROI Calculator',
                desc: 'Work out the return on investment from a trade website based on your average job value and conversion rate.',
              },
              {
                href: '/review-request-generator',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                title: 'Review Request Generator',
                desc: 'Generate a personalised WhatsApp message asking your customer for a Google review. Ready in seconds.',
              },
            ].map(({ href, icon, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-dark-card border border-white/[0.06] hover:border-white/10 rounded-2xl p-6 transition-colors group"
              >
                <div className="text-primary mb-3">{icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                <span className="mt-3 text-primary text-xs font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Use free tool →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Web Design for Trades FAQs
            </h2>
            <p className="text-lg text-gray-400">
              Everything you need to know about getting a website built for your trade.
            </p>
          </div>

          <FAQAccordion
            faqs={[
              { q: 'How much does a trade website cost?', a: 'Our trade websites start from £250 for a 1-page starter site. It\'s £250 base + £50 per additional page — so a 3-page site is £350, a 5-page site is £450, a 10-page site is £700. All prices are one-off — no ongoing website fees.' },
              { q: 'How long does it take to build my website?', a: 'Most trade websites are live within 2–3 weeks. A single-page starter site can be ready sooner. We keep you involved at every stage with previews and revisions.' },
              { q: 'Do you write the content for my website?', a: 'Yes. Our Professional and Full packages include content written specifically for your trade and area. Starter sites include basic content based on the information you provide. We make sure every page is optimised for the searches your customers make.' },
              { q: 'Will my website work on mobile phones?', a: 'Absolutely. Every website we build is mobile-responsive. Most of your potential customers will find you on their phone, so we design mobile-first with click-to-call buttons and fast load times.' },
              { q: 'Can I add Local SEO later?', a: "Yes. Many clients start with a website and add Local SEO once it's live. We built your site with local SEO in mind, so adding it later is seamless — we optimise what we've already created to get you ranking higher and getting more calls." },
            ]}
          />
        </div>
      </section>

      <CTABanner onGetQuote={() => setModalOpen(true)} />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WebDesignForHub;