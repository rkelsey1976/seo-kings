import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import ServiceFeatures from '../components/ServiceFeatures';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const LocalSEO = () => {
  const heroFeatures = [
    'Page 1 Rankings',
    'More Organic Traffic',
    'Qualified Leads',
    'Monthly Reporting'
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Keyword Research',
      description: 'We find the exact terms your customers are searching for in BANES. "Plumber Bath" gets 500 searches a month — are you showing up?',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'On-Page Optimisation',
      description: 'We optimise your website\'s content, titles, and structure so Google understands exactly what you do and where you do it.',
      color: 'from-secondary to-secondary-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Local Link Building',
      description: 'Quality backlinks from relevant local websites. Directories, local news, community sites — the links that actually move the needle.',
      color: 'from-accent to-accent-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Content Creation',
      description: 'Service pages, location pages, and blog posts that target the searches your customers are making. Content that ranks and converts.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Monthly Reporting',
      description: 'Clear, jargon-free reports showing your rankings, traffic, and leads. You\'ll always know exactly what we\'re doing and why.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Competitor Analysis',
      description: 'We analyse what your competitors are doing right (and wrong) so we can outrank them. Know your enemy, beat your enemy.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const results = [
    { metric: '340%', label: 'Average traffic increase', subtext: 'Within 6 months' },
    { metric: '#1', label: 'Google rankings achieved', subtext: 'For local search terms' },
    { metric: '£2.4M', label: 'Revenue generated', subtext: 'For BANES clients in 2025' },
  ];

  return (
    <>
      <SEO
        title="Local SEO Services in Bath & North East Somerset"
        description="Local SEO in Bath & BANES. We help tradespeople and small businesses rank #1 on Google. Keyword research, on-page SEO, link building. Free audit."
        keywords="local SEO Bath, SEO services BANES, SEO company Bath, SEO for plumbers, SEO for electricians, local search optimisation, Google ranking Bath, SEO agency Somerset"
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
              "url": "https://seokings.co.uk"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Bath and North East Somerset"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Local SEO Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local SEO Package",
                    "description": "Comprehensive local SEO including keyword research, on-page optimisation, local citations, and monthly reporting"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "500",
                    "priceCurrency": "GBP",
                    "minPrice": "500",
                    "unitText": "per month"
                  }
                }
              ]
            }
          }
        ]}
      />
      <ServicePageHero
        badge="Local SEO Services"
        title="Get Found When Customers Search in"
        highlight="BANES"
        description="Rank higher on Google for the searches that matter. We help tradespeople and local businesses dominate local search results and attract more customers."
        features={heroFeatures}
        ctaText="Get Your Free SEO Audit"
      />

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

      <ServiceFeatures
        title="Our Local SEO Services"
        subtitle="Everything you need to dominate local search in Bath & North East Somerset."
        features={features}
      />

      {/* How Local SEO Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-sm font-medium mb-6">
                Why Local SEO Matters
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                46% of Google Searches Have Local Intent
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                When someone in Bath searches "emergency plumber near me" or "electrician Keynsham", 
                they're ready to hire. If you're not on page 1, your competitors are getting those calls.
              </p>
              <ul className="space-y-4">
                {[
                  '97% of people learn about local companies online',
                  '88% of mobile searches for local businesses result in a call or visit within 24 hours',
                  'Local SEO leads have a 14.6% close rate vs 1.7% for outbound leads',
                ].map((stat, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {stat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="bg-dark-card border border-white/10 rounded-2xl p-6">
              <div className="text-sm text-gray-500 mb-4">Example search results for "plumber bath"</div>
              <div className="space-y-3">
                {/* Fake search results */}
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">Ad</span>
                    <span className="text-green-400 text-sm">Your Competitor</span>
                  </div>
                  <div className="text-white font-medium">Paying £5-15 per click</div>
                </div>
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-primary text-white px-2 py-0.5 rounded">#1</span>
                    <span className="text-primary-light text-sm">This could be you</span>
                  </div>
                  <div className="text-white font-medium">Free organic traffic, forever</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl opacity-60">
                  <div className="text-gray-500 text-sm mb-1">#2 - Competitor B</div>
                  <div className="text-gray-400">Getting your potential customers</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl opacity-40">
                  <div className="text-gray-500 text-sm mb-1">#3 - Competitor C</div>
                  <div className="text-gray-400">Also getting your customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            SEO Packages That Fit Your Budget
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Our local SEO packages start from <span className="text-white font-bold">£500/month</span>. 
            No long contracts — just results. Most clients see significant improvements within 3-6 months.
          </p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow">
            Get Your Free SEO Audit
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            See exactly where you stand and what it'll take to reach page 1.
          </p>
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
              Everything you need to know about local SEO for your BANES business.
            </p>
          </div>

          <FAQAccordion 
            faqs={[
              {
                q: 'What is local SEO?',
                a: 'Local SEO is the process of optimising your online presence to attract more customers from relevant local searches. When someone searches "plumber near me" or "electrician in Bath", local SEO helps your business appear at the top of those results.',
              },
              {
                q: 'How long does SEO take to work?',
                a: 'SEO is a long-term strategy, but most businesses see noticeable improvements within 3-6 months. Quick wins like Google Business Profile optimisation can show results within weeks, while competitive keywords may take longer.',
              },
              {
                q: 'Is SEO better than paid ads?',
                a: 'Both have their place. SEO provides sustainable, long-term traffic without ongoing ad spend. Paid ads give immediate visibility but stop the moment you stop paying. We often recommend a combination, using ads for quick wins while building organic rankings.',
              },
              {
                q: 'How do you measure SEO success?',
                a: 'We track keyword rankings, organic traffic, phone calls, form submissions, and ultimately leads and revenue. You\'ll receive monthly reports showing exactly how your investment is performing.',
              },
              {
                q: 'What makes local SEO different from regular SEO?',
                a: 'Local SEO focuses on geographic-specific searches and includes optimising your Google Business Profile, building local citations, managing reviews, and creating location-specific content. It\'s designed to help you dominate searches in your service area.',
              },
              {
                q: 'Do I need SEO if I already get work through word of mouth?',
                a: 'Word of mouth is great, but it limits your growth. Over 90% of consumers search online before choosing a local business. SEO ensures you\'re visible when potential customers are actively looking for services you provide.',
              },
            ]}
          />
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
};

export default LocalSEO;
