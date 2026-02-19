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
    'From £150'
  ];

  const oneOffIncludes = [
    'Categories, services and attributes set correctly',
    'Keywords and description optimised for local search',
    'Hours, contact info and area checked',
    'Quick wins so you show up better in the map pack',
  ];

  return (
    <>
      <SEO
        title="Google Business Profile Optimisation in Bath"
        description="One-off Google Business Profile optimisation for £150. We also include GBP in our Local SEO and website packages — no need to buy it separately."
        keywords="Google Business Profile Bath, GBP optimisation Bath and North East Somerset, Google Maps SEO, one-off GBP, map pack ranking"
        canonical="/google-business-profile"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Google Business Profile' }
        ]}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Google Business Profile Optimisation",
            "name": "Google Business Profile Optimisation",
            "description": "One-off Google Business Profile optimisation for local businesses in Bath & North East Somerset. Ongoing GBP is included in Local SEO and website packages.",
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
              "name": "GBP Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "GBP Optimisation (one-off)",
                    "description": "Full Google Business Profile optimisation: categories, services, keywords, hours, area"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "150",
                    "priceCurrency": "GBP",
                    "unitText": "one-off"
                  }
                }
              ]
            }
          }
        ]}
      />
      <ServicePageHero
        badge="Google Business Profile"
        title="Get Your Profile Optimised —"
        highlight="One-Off £150"
        description="We optimise your Google Business Profile so you show up better in the map pack. Categories, keywords, services — done once. Ongoing GBP (posts, reviews) is included in our Local SEO and website packages."
        features={heroFeatures}
        ctaText="Get Your GBP Optimised"
      />

      {/* One-off £150 — what's included */}
      <section className="py-16 bg-dark-lighter border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            One-Off GBP Optimisation — £150
          </h2>
          <p className="text-gray-400 mb-8">
            We do a full optimisation once. You get a profile that’s set up right for local search.
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
          <Link href="/contact?service=gbp" className="inline-block bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold transition-all">
            Get your GBP optimised — £150
          </Link>
        </div>
      </section>

      {/* Ongoing GBP is included in SEO & website */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
            No need to buy GBP on its own
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ongoing GBP Is Included in Our Other Services
          </h2>
          <p className="text-gray-400 mb-8">
            We don’t sell GBP management as a separate monthly product. <strong className="text-white">Posts, reviews, photos and reporting</strong> are included in our <Link href="/local-seo" className="text-primary-light hover:underline">Local SEO</Link> packages and in our <Link href="/web-design" className="text-primary-light hover:underline">website design</Link> packages. So if you want a website or Local SEO from us, you get GBP as part of it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/local-seo" className="inline-block bg-dark-card border border-white/10 hover:border-primary/30 text-white px-5 py-2.5 rounded-xl font-medium transition-all">
              Local SEO (includes GBP)
            </Link>
            <Link href="/web-design" className="inline-block bg-dark-card border border-white/10 hover:border-primary/30 text-white px-5 py-2.5 rounded-xl font-medium transition-all">
              Website design (includes GBP)
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Google Business Profile FAQs
            </h2>
          </div>
          <FAQAccordion
            faqs={[
              {
                q: 'What is the one-off £150?',
                a: 'It’s a single optimisation of your Google Business Profile. We set your categories, services, keywords, description, hours and area so your profile is set up right for local search. You pay once — no ongoing fee for this.',
              },
              {
                q: 'Do you do ongoing GBP (posts, reviews) on its own?',
                a: 'No. We include ongoing GBP management (posts, reviews, photos, reporting) in our Local SEO packages and in our website design packages. So you get GBP as part of a website or Local SEO — not as a separate monthly product.',
              },
              {
                q: 'What is Google Business Profile?',
                a: 'Google Business Profile (formerly Google My Business) is how your business appears on Google Search and Maps — your name, hours, reviews, photos and more. Optimising it helps you show up in the “map pack” when people search locally.',
              },
              {
                q: 'I want a website and GBP — what do I get?',
                a: 'Our website packages include GBP optimisation for your business (one service, one location on the one-page package; more on higher packages). So you get the site and the profile together. See our Web Design and Web Design Packages pages for details.',
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
