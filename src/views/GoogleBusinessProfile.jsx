import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
const GoogleBusinessProfile = () => {
  const heroFeatures = [
    'One-off optimisation',
    'Right categories & keywords',
    'Map pack visibility',
    'From £100'
  ];

  const oneOffIncludes = [
    'Categories, services and attributes set correctly',
    'Keywords and description optimised for local search',
    'Hours, contact info and area checked',
    'Quick wins so you show up better in the map pack',
  ];

  const rightPanel = (
    <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8">
      <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-6">Why SEO Kings</p>
      <div className="space-y-4">
        {[
          { label: 'One-off price', value: '£100' },
          { label: 'Time to first results', value: '< 2 weeks' },
          { label: 'Years of experience', value: '22' },
          { label: 'Verified map pack wins', value: '2+' },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
            <span className="text-gray-400 text-sm">{label}</span>
            <span className="text-xl font-bold text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <SEO schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Google Business Profile', item: 'https://seo-kings.co.uk/google-business-profile' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://seo-kings.co.uk/#service-google-business-profile',
            serviceType: 'Google Business Profile Optimisation',
            name: 'Google Business Profile Optimisation',
            description: 'One-off Google Business Profile optimisation for local businesses in Bath & North East Somerset. Ongoing GBP management is included in Local SEO packages from £150/month. Add one-off GBP optimisation to any website build for £100.',
            provider: { '@id': 'https://seo-kings.co.uk/#organization' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/google-business-profile' },
            areaServed: { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'GBP Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'GBP Optimisation (one-off)', description: 'Full Google Business Profile optimisation: categories, services, keywords, hours, area' },
                  priceSpecification: { '@type': 'PriceSpecification', price: 150, priceCurrency: 'GBP', unitText: 'one-off' },
                },
              ],
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is Google Business Profile?', acceptedAnswer: { '@type': 'Answer', text: 'Google Business Profile (formerly Google My Business) is how your business appears on Google Search and Maps — your name, hours, reviews, photos and more. Optimising it helps you show up in the map pack when people search locally for your trade.' } },
              { '@type': 'Question', name: 'What is included in the one-off £100 GBP optimisation?', acceptedAnswer: { '@type': 'Answer', text: 'A single optimisation of your Google Business Profile. We set your categories, services, keywords, description, hours and service area so your profile is set up correctly for local search. You pay once — no ongoing fee.' } },
              { '@type': 'Question', name: 'Do you offer ongoing Google Business Profile management?', acceptedAnswer: { '@type': 'Answer', text: 'We include ongoing GBP management — posts, reviews, photos and reporting — inside our Local SEO packages from £150/month. It is not sold as a standalone monthly product.' } },
              { '@type': 'Question', name: 'I want a website and Google Business Profile — what do I get?', acceptedAnswer: { '@type': 'Answer', text: 'GBP optimisation is a £100 add-on to any website package. You get a fully built site from £250, then add GBP set-up for £100 — we handle categories, keywords, description, photos and service area. See our Web Design Packages page for details.' } },
            ],
          },
        ]} />
      {/* Keyword H1 for crawlers; visible hero headline stays conversion-first as H2 (same pattern as homepage) */}
      <h1 className="sr-only">Google Business Profile Optimisation for Trades in Bath & Somerset — One-Off £100</h1>
      <ServicePageHero
        titleTag="h2"
        badge="Google Business Profile"
        title="Get Your Profile Optimised —"
        highlight="One-Off £100"
        description="We optimise your Google Business Profile so you show up better in the map pack. Categories, keywords, services — done once for £100. Ongoing GBP management (posts, reviews) is included in our Local SEO packages."
        features={heroFeatures}
        ctaText="Get Your GBP Optimised"
        rightPanel={rightPanel}
      />

      {/* One-off £100 — what's included */}
      <section className="py-20 bg-dark-lighter border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            One-Off GBP Optimisation — £100
          </h2>
          <p className="text-gray-400 mb-8">
            We do a full optimisation once. You get a profile that's set up right for local search.
          </p>
          <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
            {oneOffIncludes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact?service=gbp" className="inline-block bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold transition-all">
              Get your GBP optimised — £100
            </Link>
            <Link href="/google-business-profile-score-checker" className="inline-block bg-dark-card border border-white/10 hover:border-primary/30 text-gray-300 px-5 py-3 rounded-xl font-medium transition-all text-sm">
              Check your GBP score first →
            </Link>
          </div>
        </div>
      </section>

      {/* Ongoing GBP is included in Local SEO */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
            Want ongoing GBP management?
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ongoing GBP Is Included in Local SEO
          </h2>
          <p className="text-gray-400 mb-8">
            We don't sell ongoing GBP management as a standalone monthly product. <strong className="text-white">Posts, reviews, photos and reporting</strong> are included in our <Link href="/local-seo" className="text-primary-light hover:underline">Local SEO</Link> packages from £150/month. If you just want the profile set up and optimised once, the £100 one-off is what you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/local-seo" className="inline-block bg-dark-card border border-white/10 hover:border-primary/30 text-white px-5 py-2.5 rounded-xl font-medium transition-all">
              Local SEO (includes ongoing GBP)
            </Link>
            <Link href="/web-design" className="inline-block bg-dark-card border border-white/10 hover:border-primary/30 text-white px-5 py-2.5 rounded-xl font-medium transition-all">
              Website design + GBP add-on (£100)
            </Link>
          </div>
        </div>
      </section>

      {/* Why GBP matters — short */}
      <section className="py-12 bg-dark-lighter border-y border-white/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Why does GBP matter?</h3>
          <p className="text-gray-400">
            When people search for a local service, the map pack (the 3 results with the map) gets a huge share of clicks. An optimised Google Business Profile helps you appear there and turn searchers into callers.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Google Business Profile FAQs
            </h2>
          </div>
          <FAQAccordion
            faqs={[
              {
                q: 'What is the one-off £100?',
                a: "It's a single optimisation of your Google Business Profile. We set your categories, services, keywords, description, hours and area so your profile is set up right for local search. You pay once — no ongoing fee for this.",
              },
              {
                q: 'Do you do ongoing GBP (posts, reviews) on its own?',
                a: 'No. We include ongoing GBP management (posts, reviews, photos, reporting) in our Local SEO packages from £150/month. For website builds, you can add a one-off GBP optimisation for £100. Neither is sold as a standalone monthly product.',
              },
              {
                q: 'What is Google Business Profile?',
                a: 'Google Business Profile (formerly Google My Business) is how your business appears on Google Search and Maps — your name, hours, reviews, photos and more. Optimising it helps you show up in the “map pack” when people search locally.',
              },
              {
                q: 'I want a website and GBP — what do I get?',
                a: 'GBP optimisation is a £100 add-on to any website package. You get a fully built site from £250, then add GBP set-up for £100 — we handle categories, keywords, description, photos and service area. See our Web Design and Web Design Packages pages for details.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default GoogleBusinessProfile;
