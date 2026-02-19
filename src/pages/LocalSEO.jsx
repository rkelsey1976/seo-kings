import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const localSeoPackages = [
  {
    name: 'Starter',
    price: '150',
    period: 'month',
    services: 1,
    locations: 1,
    tagline: 'One service, one area',
    features: [
      'Keyword research for your service & area',
      'On-page optimisation (your website)',
      'Google Business Profile optimisation',
      'Monthly ranking & traffic report',
    ],
    cta: 'Get free audit',
    href: '/contact?service=local-seo&package=starter',
    popular: false,
    gradient: 'from-primary to-primary-dark',
  },
  {
    name: 'Growth',
    price: '300',
    period: 'month',
    services: 3,
    locations: 4,
    tagline: 'Multiple services, multiple areas',
    features: [
      'Keyword research for 3 services, 4 locations',
      'On-page optimisation across your site',
      'Google Business Profile for each location',
      'Local citations & link building',
      'Monthly ranking & traffic report',
    ],
    cta: 'Get free audit',
    href: '/contact?service=local-seo&package=growth',
    popular: true,
    gradient: 'from-secondary to-secondary-dark',
  },
  {
    name: 'Scale',
    price: '450',
    period: 'month',
    services: 5,
    locations: 8,
    tagline: 'Maximum coverage',
    features: [
      'Keyword research for 5 services, 8 locations',
      'Full on-page & content optimisation',
      'Google Business Profile for each location',
      'Local citations, links & content',
      'Monthly ranking, traffic & leads report',
    ],
    cta: 'Get free audit',
    href: '/contact?service=local-seo&package=scale',
    popular: false,
    gradient: 'from-accent to-accent-dark',
  },
];

const results = [
  { metric: '340%', label: 'Average traffic increase', subtext: 'Within 6 months' },
  { metric: '#1', label: 'Google rankings achieved', subtext: 'For local search terms' },
  { metric: '£2.4M', label: 'Revenue generated', subtext: 'For Bath and North East Somerset clients in 2025' },
];

const heroFeatures = [
  'Page 1 Rankings',
  'More Organic Traffic',
  'Qualified Leads',
  'Monthly Reporting',
];

const LocalSEO = () => {
  return (
    <>
      <SEO
        title="Local SEO Services in Bath & North East Somerset"
        description="Local SEO in Bath & North East Somerset. We help tradespeople and small businesses rank #1 on Google. Keyword research, on-page SEO, link building. Free audit."
        keywords="local SEO Bath, SEO services Bath and North East Somerset, SEO company Bath, SEO for plumbers, SEO for electricians, local search optimisation, Google ranking Bath, SEO agency Somerset"
        canonical="/local-seo"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Local SEO' }
        ]}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Local SEO",
            "name": "Local SEO Services",
            "description": "Local SEO services helping tradespeople and small businesses in Bath & North East Somerset rank higher on Google and attract more local customers.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SEO Kings",
              "url": "https://seo-kings.co.uk"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Bath and North East Somerset"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Local SEO Packages",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Starter Local SEO", "description": "1 service, 1 location — keyword research, on-page optimisation, GBP, monthly report" }, "priceSpecification": { "@type": "PriceSpecification", "price": "150", "priceCurrency": "GBP", "unitText": "per month" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth Local SEO", "description": "3 services, 4 locations — full local SEO with citations and link building" }, "priceSpecification": { "@type": "PriceSpecification", "price": "300", "priceCurrency": "GBP", "unitText": "per month" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scale Local SEO", "description": "5 services, 8 locations — maximum coverage with content and leads reporting" }, "priceSpecification": { "@type": "PriceSpecification", "price": "450", "priceCurrency": "GBP", "unitText": "per month" } }
              ]
            }
          }
        ]}
      />
      <ServicePageHero
        badge="Local SEO Services"
        title="Get Found When Customers Search in"
        highlight="Bath & North East Somerset"
        description="Many of our clients use Local SEO to expand on the website we already built for them — more traffic, more calls, same site. Rank higher on Google for the searches that matter."
        features={heroFeatures}
        ctaText="Get Your Free SEO Audit"
      />

      {/* Expand on your website – simple one-liner */}
      <section className="py-8 bg-dark-lighter/50 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            <span className="text-white font-medium">Already have a website from us?</span> Local SEO is the next step — we optimise that site and your Google presence so more local customers find you. No new site needed.
          </p>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-12 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {results.map((item, index) => (
              <div key={index}>
                <div className="text-4xl font-bold gradient-text mb-1">{item.metric}</div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-sm text-gray-500">{item.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing by services & locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
              Simple pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What You Pay — By Services & Locations
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Pay for the coverage you need. One service in one area, or multiple services across multiple areas. No hidden extras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {localSeoPackages.map((pkg) => (
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
                  <span className="text-3xl font-bold text-white">£{pkg.price}</span>
                  <span className="text-gray-500">/{pkg.period}</span>
                </div>
                <div className="mb-4 px-3 py-2 bg-white/5 rounded-lg text-center">
                  <span className="text-white font-medium">{pkg.services} service{pkg.services > 1 ? 's' : ''}</span>
                  <span className="text-gray-500 mx-1">·</span>
                  <span className="text-white font-medium">{pkg.locations} location{pkg.locations > 1 ? 's' : ''}</span>
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
            No long contracts. Monthly reporting so you always know what you&apos;re paying for.
          </p>
        </div>
      </section>

      {/* What is a service / location – short explainer */}
      <section className="py-12 bg-dark-lighter border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">What do we mean by &quot;service&quot; and &quot;location&quot;?</h3>
          <p className="text-gray-400">
            A <strong className="text-white">service</strong> is what you do (e.g. plumbing, electrical, roofing). A <strong className="text-white">location</strong> is an area you serve (e.g. Bath, Keynsham, Radstock). More services and locations = more keywords and more visibility. We optimise for each so you rank where it matters.
          </p>
        </div>
      </section>

      {/* Who we help – trade pages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">
              Local SEO for Your Trade
            </h2>
            <p className="text-gray-400">
              Plumbers, electricians, roofers — we help you get found when customers in Bath & North East Somerset search.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/local-seo/plumbers"
              className="block p-6 bg-dark-card border border-white/10 rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">For Plumbers</h3>
              <p className="text-gray-400 text-sm mb-4">Rank for &quot;plumber Bath&quot;, &quot;plumber Keynsham&quot; and get more jobs from Google.</p>
              <span className="text-primary-light text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
            <Link
              href="/local-seo/electricians"
              className="block p-6 bg-dark-card border border-white/10 rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">For Electricians</h3>
              <p className="text-gray-400 text-sm mb-4">Get found for &quot;electrician Bath&quot;, &quot;electrician Keynsham&quot; and win more work.</p>
              <span className="text-primary-light text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
            <Link
              href="/local-seo/roofers"
              className="block p-6 bg-dark-card border border-white/10 rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">For Roofers</h3>
              <p className="text-gray-400 text-sm mb-4">Rank for &quot;roofer Bath&quot;, &quot;roofing Keynsham&quot; and get more enquiries.</p>
              <span className="text-primary-light text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Local SEO FAQs
            </h2>
            <p className="text-lg text-gray-400">
              Everything you need to know about local SEO for your Bath and North East Somerset business.
            </p>
          </div>

          <FAQAccordion 
            faqs={[
              { q: 'I already have a website from you — is Local SEO for me?', a: 'Yes. Lots of our clients add Local SEO once their website is live. We work on the site we built for you (and your Google Business Profile) to get more traffic and more calls. No new website — we expand on what you already have.' },
              { q: 'What is local SEO?', a: 'Local SEO gets you found when people search for your services in your area (e.g. "plumber Bath", "electrician Keynsham"). We optimise your website and Google Business Profile so you rank higher and get more calls.' },
              { q: 'What do "service" and "location" mean?', a: 'A service is what you do (e.g. plumbing, electrical). A location is an area you serve (e.g. Bath, Keynsham). Your package covers a set number of each — more coverage means more keywords we target and a higher monthly fee.' },
              { q: 'How long until I see results?', a: 'Most clients see noticeable improvements within 3-6 months. Google Business Profile optimisation can show results within weeks; competitive keywords may take longer. You get monthly reports so you always know where you stand.' },
              { q: 'What\'s included in every package?', a: 'Keyword research, on-page optimisation of your website, Google Business Profile optimisation for your locations, and a monthly report on rankings and traffic. Growth and Scale add citations, link building and (Scale) content and leads reporting.' },
            ]}
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default LocalSEO;
