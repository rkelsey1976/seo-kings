import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import ServiceFeatures from '../components/ServiceFeatures';
import Spotlight from '../components/Spotlight';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const GoogleBusinessProfile = () => {
  const heroFeatures = [
    'Map Pack Rankings',
    'More Phone Calls',
    '5-Star Reviews',
    'Local Visibility'
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Profile Optimisation',
      description: 'We fully optimise your GBP with the right categories, services, attributes, and keywords to maximise your visibility in local searches.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Review Management',
      description: 'We help you get more 5-star reviews and respond professionally to all feedback. Reviews are the #1 factor for local rankings.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Photo & Video Updates',
      description: 'Regular photo uploads of your work, team, and premises. Businesses with photos get 42% more direction requests and 35% more clicks.',
      color: 'from-secondary to-secondary-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: 'Google Posts',
      description: 'Weekly posts about offers, news, and updates to keep your profile active and engaging. Fresh content signals relevance to Google.',
      color: 'from-accent to-accent-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Q&A Management',
      description: 'We monitor and respond to questions on your profile, ensuring potential customers get the info they need to choose you.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Insights & Reporting',
      description: 'Monthly reports showing views, searches, calls, and direction requests. See exactly how your GBP is performing.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <>
      <SEO
        title="Google Business Profile Management in Bath"
        description="Google Business Profile management in Bath & North East Somerset. We optimise your GBP for the map pack: more calls, reviews, local customers. From £250/month."
        keywords="Google Business Profile Bath, GBP management Bath and North East Somerset, Google Maps SEO, local business listing, Google My Business Bath, map pack ranking, review management Bath"
        canonical="/google-business-profile"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Google Business Profile' }
        ]}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Google Business Profile Management",
            "name": "Google Business Profile Management",
            "description": "Professional Google Business Profile optimisation and management to help local businesses in Bath & North East Somerset dominate the map pack and get more customers.",
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
              "name": "GBP Management Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "GBP Management",
                    "description": "Full Google Business Profile management including optimisation, posting, review management, and reporting"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "250",
                    "priceCurrency": "GBP",
                    "minPrice": "250",
                    "unitText": "per month"
                  }
                }
              ]
            }
          }
        ]}
      />
      <ServicePageHero
        badge="Google Business Profile"
        title="Dominate the Map Pack and Get More"
        highlight="Phone Calls"
        description="Your Google Business Profile is often the first thing customers see. We optimise and manage it so you show up in the map pack and convert searchers into callers."
        features={heroFeatures}
        ctaText="Get Your Free GBP Audit"
      />

      {/* Map Pack Explanation */}
      <section className="py-16 bg-dark-lighter border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual - Fake Map Pack */}
            <div className="order-2 lg:order-1">
              <div className="bg-dark border border-white/10 rounded-2xl overflow-hidden">
                {/* Fake Map Header */}
                <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Map Pack Results - "plumber bath"
                  </div>
                </div>
                
                {/* Fake Listings */}
                <div className="p-4 space-y-4">
                  <div className="flex gap-4 p-3 bg-primary/10 border border-primary/30 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">Your Business Here</div>
                      <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        ★★★★★ <span className="text-gray-400">(reviews)</span>
                      </div>
                      <div className="text-green-400 text-sm">Open · Bath, BA1</div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-3 bg-white/5 rounded-xl opacity-60">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-400 font-medium">Competitor A</div>
                      <div className="flex items-center gap-1 text-yellow-400/60 text-sm">
                        ★★★★☆ <span className="text-gray-500">(23 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 p-3 bg-white/5 rounded-xl opacity-40">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-500 font-medium">Competitor B</div>
                      <div className="flex items-center gap-1 text-yellow-400/40 text-sm">
                        ★★★☆☆ <span className="text-gray-600">(8 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
                Why GBP Matters
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The Map Pack Gets 44% of All Clicks
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                When someone searches for a local service, the map pack (those 3 listings with the map) 
                gets nearly half of all clicks. If you're not in there, you're invisible.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '76% of people who search for something nearby visit within a day',
                  'GBP listings with photos get 42% more direction requests',
                  'Businesses with 5+ reviews get 270% more clicks',
                ].map((stat, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {stat}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 btn-glow">
                Check Your GBP Score Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatures
        title="Complete GBP Management"
        subtitle="We handle everything so your Google Business Profile works as hard as you do."
        features={features}
      />

      {/* Review Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              Review Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Reviews Are Your Secret Weapon
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              88% of consumers trust online reviews as much as personal recommendations. 
              We help you build a 5-star reputation that wins customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-card border border-white/5 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-white font-medium mb-1">Average reviews gained</div>
              <div className="text-sm text-gray-500">In the first 6 months</div>
            </div>
            <div className="bg-dark-card border border-white/5 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5★</div>
              <div className="text-white font-medium mb-1">Average client rating</div>
              <div className="text-sm text-gray-500">Across all managed profiles</div>
            </div>
            <div className="bg-dark-card border border-white/5 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">270%</div>
              <div className="text-white font-medium mb-1">More clicks</div>
              <div className="text-sm text-gray-500">With 5+ quality reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            GBP Management From £250/month
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Full profile optimisation and ongoing management. We handle the posts, photos, reviews, 
            and Q&As — you focus on doing great work.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Weekly posts
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Review responses
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Monthly reporting
            </div>
          </div>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow">
            Get Your Free GBP Audit
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Google Business Profile FAQs
            </h2>
            <p className="text-lg text-gray-400">
              Common questions about Google Business Profile optimisation.
            </p>
          </div>

          <FAQAccordion 
            faqs={[
              {
                q: 'What is Google Business Profile?',
                a: 'Google Business Profile (formerly Google My Business) is a free tool that lets you manage how your business appears on Google Search and Maps. It shows your contact info, opening hours, reviews, photos, and more.',
              },
              {
                q: 'Why is Google Business Profile important for local businesses?',
                a: 'When someone searches for a local service, Google often shows a "map pack" of 3 businesses at the top. Being in this pack can dramatically increase calls and enquiries. An optimised GBP also builds trust through reviews and photos.',
              },
              {
                q: 'How do I get more Google reviews?',
                a: 'We help you set up a simple review request system — sending a quick link to happy customers makes it easy for them to leave feedback. We also respond to all reviews professionally to show potential customers you care.',
              },
              {
                q: 'Can I manage multiple locations?',
                a: 'Yes! If you serve multiple areas in Bath and North East Somerset, we can help you set up and optimise profiles for each location, ensuring you\'re visible wherever your customers are searching.',
              },
              {
                q: 'How long does it take to see results?',
                a: 'GBP optimisation often shows results faster than traditional SEO. Many clients see improved visibility within 2-4 weeks, with significant ranking improvements in 1-3 months.',
              },
              {
                q: 'What if I have negative reviews?',
                a: 'Don\'t worry — even the best businesses get occasional negative feedback. We help you respond professionally to negative reviews, turning them into opportunities to showcase your customer service. We also help you generate more positive reviews to improve your overall rating.',
              },
            ]}
          />
        </div>
      </section>

      <Spotlight />
      <CTABanner />
    </>
  );
};

export default GoogleBusinessProfile;
