import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

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
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '399',
    period: 'one-off',
    tagline: '1-page site',
    features: [
      'Single-page professional website',
      'Mobile-responsive design',
      'Google Business Profile setup',
      'Basic on-page SEO',
      'Contact form & click-to-call',
    ],
    cta: 'Get started',
    href: '/contact?service=web-design-for&package=starter',
    popular: false,
    gradient: 'from-primary to-primary-dark',
  },
  {
    name: 'Professional',
    price: '599',
    period: 'one-off',
    tagline: '5-page site',
    features: [
      '5-page professional website',
      'Mobile-responsive design',
      'Google Business Profile optimisation',
      'Full on-page SEO',
      'Portfolio / gallery pages',
      'Monthly hosting & support',
    ],
    cta: 'Get started',
    href: '/contact?service=web-design-for&package=professional',
    popular: true,
    gradient: 'from-secondary to-secondary-dark',
  },
  {
    name: 'Full',
    price: '999',
    period: 'one-off',
    tagline: '7+ page site',
    features: [
      '7+ page professional website',
      'Mobile-responsive design',
      'Google Business Profile optimisation',
      'Full on-page SEO & local SEO',
      'Portfolio / gallery & blog',
      'Monthly hosting & priority support',
      'Content writing included',
    ],
    cta: 'Get started',
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
  return (
    <>
      <SEO
        title="Web Design for Trades in Bath & Somerset | From £399"
        description="Professional websites built for tradespeople in Bath & North East Somerset. Plumbers, electricians, builders and more — from £399 one-off. Free audit."
        canonical="/web-design-for"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Trades' }
        ]}
        schemas={[
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
            description: 'Professional trade-specific web design services for tradespeople and small businesses in Bath & North East Somerset. Websites built to generate leads from £399.',
            provider: { '@id': 'https://seo-kings.co.uk/#organization' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/web-design-for' },
            areaServed: { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Web Design for Trades Packages',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Starter Web Design', description: '1-page professional website, mobile-responsive, basic SEO' }, priceSpecification: { '@type': 'PriceSpecification', price: 399, priceCurrency: 'GBP', unitText: 'one-off' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Professional Web Design', description: '5-page professional website with portfolio, full SEO and monthly hosting' }, priceSpecification: { '@type': 'PriceSpecification', price: 599, priceCurrency: 'GBP', unitText: 'one-off' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Web Design', description: '7+ page professional website with blog, local SEO, content writing and priority support' }, priceSpecification: { '@type': 'PriceSpecification', price: 999, priceCurrency: 'GBP', unitText: 'one-off' } },
              ],
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'How much does a trade website cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our trade websites start from £399 for a 1-page starter site. A 5-page professional site is £599, and a full 7+ page site with blog and content writing is £999. All prices are one-off — no ongoing website fees.' } },
              { '@type': 'Question', name: 'How long does it take to build my website?', acceptedAnswer: { '@type': 'Answer', text: 'Most trade websites are live within 2–3 weeks. A single-page starter site can be ready sooner. We keep you involved at every stage with previews and revisions.' } },
              { '@type': 'Question', name: 'Do you write the content for my website?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Professional and Full packages include content written specifically for your trade and area. Starter sites include basic content based on the information you provide. We make sure every page is optimised for the searches your customers make.' } },
              { '@type': 'Question', name: 'Will my website work on mobile phones?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Every website we build is mobile-responsive. Most of your potential customers will find you on their phone, so we design mobile-first with click-to-call buttons and fast load times.' } },
              { '@type': 'Question', name: 'Can I add Local SEO later?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many clients start with a website and add Local SEO once it\'s live. We built your site with local SEO in mind, so adding it later is seamless — we optimise what we\'ve already created to get you ranking higher and getting more calls.' } },
            ],
          },
        ]}
      />

      <ServicePageHero
        badge="Web Design for Trades"
        title="Websites Built for Your Trade"
        highlight="in Bath & Somerset"
        description="Professional, mobile-friendly websites designed for tradespeople — from plumbers to plasterers. Get found on Google, showcase your work, and turn visitors into jobs. From £399 one-off."
        features={['Mobile-First Design', 'Local SEO Ready', 'Lead-Generating', 'Fast & Secure']}
        ctaText="Get a Free Website Quote"
      />

      {/* Trade cards grid */}
      <section className="py-16">
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
      <section className="py-16 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Simple process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Simple pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
                  <p className="text-sm text-gray-500 mt-1">{pkg.tagline}</p>
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
                <Link
                  href={pkg.href}
                  className={`block text-center py-3 px-4 rounded-xl font-semibold transition-all bg-gradient-to-r ${pkg.gradient} text-white hover:opacity-90`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            All prices one-off. Hosting and support available on a monthly plan. No long contracts.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Web Design for Trades FAQs
            </h2>
            <p className="text-lg text-gray-400">
              Everything you need to know about getting a website built for your trade.
            </p>
          </div>

          <FAQAccordion
            faqs={[
              { q: 'How much does a trade website cost?', a: 'Our trade websites start from £399 for a 1-page starter site. A 5-page professional site is £599, and a full 7+ page site with blog and content writing is £999. All prices are one-off — no ongoing website fees.' },
              { q: 'How long does it take to build my website?', a: 'Most trade websites are live within 2–3 weeks. A single-page starter site can be ready sooner. We keep you involved at every stage with previews and revisions.' },
              { q: 'Do you write the content for my website?', a: 'Yes. Our Professional and Full packages include content written specifically for your trade and area. Starter sites include basic content based on the information you provide. We make sure every page is optimised for the searches your customers make.' },
              { q: 'Will my website work on mobile phones?', a: 'Absolutely. Every website we build is mobile-responsive. Most of your potential customers will find you on their phone, so we design mobile-first with click-to-call buttons and fast load times.' },
              { q: 'Can I add Local SEO later?', a: "Yes. Many clients start with a website and add Local SEO once it's live. We built your site with local SEO in mind, so adding it later is seamless — we optimise what we've already created to get you ranking higher and getting more calls." },
            ]}
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default WebDesignForHub;