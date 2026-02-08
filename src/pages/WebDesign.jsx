import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import ServiceFeatures from '../components/ServiceFeatures';
import Spotlight from '../components/Spotlight';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const WebDesign = () => {
  const heroFeatures = [
    'Mobile-First',
    'Fast Loading',
    'SEO Ready',
    'Conversion Focused'
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile-First Design',
      description: 'Over 60% of searches happen on mobile. Your website will look and work perfectly on every device, so you never lose a customer.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Lightning Fast Speed',
      description: 'Slow websites kill conversions. We build sites that load in under 2 seconds, keeping visitors engaged and Google happy.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Built for SEO',
      description: 'Every site we build is optimised for search engines from day one. Proper structure, meta tags, and schema markup included.',
      color: 'from-secondary to-secondary-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: 'Clear Call-to-Actions',
      description: 'Strategic placement of phone numbers, contact forms, and booking buttons. Make it easy for customers to reach you.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Trust Building Elements',
      description: 'Reviews, accreditations, and trust badges prominently displayed. Show visitors why they should choose you over competitors.',
      color: 'from-accent to-accent-dark',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Easy to Update',
      description: 'We build on platforms you can manage yourself, or we offer ongoing support packages. Your choice, your control.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, your customers, and what makes you different. No jargon, just a chat.',
    },
    {
      step: '02',
      title: 'Design & Feedback',
      description: 'We create mockups and refine them based on your feedback until you\'re 100% happy.',
    },
    {
      step: '03',
      title: 'Build & Test',
      description: 'We build your site, test it on every device, and make sure everything works perfectly.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Go live with confidence. We provide training and ongoing support to keep things running smoothly.',
    },
  ];

  return (
    <>
      <SEO
        title="Website Design Bath | Web Design BANES & Trowbridge – SEO Kings"
        description="Website design in Bath, Keynsham, Midsomer Norton, Trowbridge & BANES. Mobile-friendly, SEO-ready sites from £399. Free quote for trades and local businesses."
        keywords="website design Bath, web design Bath, website design BANES, one-page website, affordable website, website for trades, web design Keynsham, website design Trowbridge, web design Midsomer Norton, website for tradesmen, local business website Somerset"
        canonical="/web-design"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Website Design' }
        ]}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website Design",
            "name": "Website Design for Local Businesses",
            "description": "Custom website design for tradespeople and small businesses in Bath & BANES. Mobile-friendly, fast-loading websites built to convert visitors into customers.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SEO Kings",
              "url": "https://seo-kings.co.uk"
            },
            "areaServed": [
              { "@type": "City", "name": "Bath" },
              { "@type": "AdministrativeArea", "name": "Bath and North East Somerset" },
              { "@type": "City", "name": "Keynsham" },
              { "@type": "City", "name": "Midsomer Norton" },
              { "@type": "City", "name": "Radstock" },
              { "@type": "City", "name": "Trowbridge" },
              { "@type": "AdministrativeArea", "name": "Somerset" },
              { "@type": "AdministrativeArea", "name": "Wiltshire" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Website Design Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Website",
                    "description": "Professional 5-page website for local businesses"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "1500",
                    "priceCurrency": "GBP",
                    "minPrice": "1500"
                  }
                }
              ]
            }
          }
        ]}
      />
      <ServicePageHero
        badge="Website Design"
        title="Websites That Turn Visitors Into"
        highlight="Customers"
        description="Custom-built websites for tradespeople and local businesses in Bath, Keynsham, Midsomer Norton, Trowbridge and BANES. No templates, no nonsense — just sites that look great and generate leads."
        features={heroFeatures}
        ctaText="Get a Free Quote"
      />

      <ServiceFeatures
        title="What Makes Our Websites Different"
        subtitle="We don't just make pretty websites. We build lead-generating machines for local businesses."
        features={features}
      />

      {/* One-page website + affordable + website that ranks */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            One-Page Website or Full Site — Affordable Website Design That Ranks
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We offer affordable website design from £399: a one-page website that has everything a trade or small business needs — services, contact, and area info. Or we build full multi-page sites. Every site we build is a website that ranks: fast, mobile-friendly, and set up so you get found on Google and in the map pack. No DIY website builder; we build it for you so it works for local search.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From Idea to Launch in 4 Simple Steps
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We keep it simple and keep you in the loop every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="relative bg-dark-card border border-white/5 rounded-2xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we serve – target website design + location keywords */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-4">
            Areas we serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Website Design in <span className="gradient-text">Bath, BANES & Beyond</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            We build websites for trades and local businesses across <strong className="text-gray-300">Bath</strong>, <strong className="text-gray-300">Keynsham</strong>, <strong className="text-gray-300">Midsomer Norton</strong>, <strong className="text-gray-300">Radstock</strong>, <strong className="text-gray-300">Trowbridge</strong>, Peasedown St John, Paulton, Saltford, Timsbury and the rest of Bath and North East Somerset (BANES). We also serve <strong className="text-gray-300">Trowbridge</strong> and surrounding Wiltshire. From a 1-page site from £399 to full multi-page sites — get a free quote.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/areas/bath" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-all">Website design Bath</Link>
            <Link href="/areas/keynsham" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-all">Website design Keynsham</Link>
            <Link href="/areas/midsomer-norton" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-all">Website design Midsomer Norton</Link>
            <Link href="/areas/radstock" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-all">Website design Radstock</Link>
            <Link href="/areas/peasedown-st-john" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-all">Website design Peasedown St John</Link>
            <Link href="/areas/paulton" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-all">Website design Paulton</Link>
            <Link href="/areas/saltford" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-all">Website design Saltford</Link>
            <Link href="/areas/timsbury" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-all">Website design Timsbury</Link>
            <Link href="/web-design-packages" className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-primary-light hover:text-white transition-all">All packages</Link>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Our websites start from <span className="text-white font-bold">£399</span> for a 1-page trade site. 
            Every quote is tailored to your needs — no hidden fees, no ongoing costs you didn't agree to.
          </p>
          <Link
            href="/web-design-packages"
            className="inline-flex items-center gap-2 text-primary-light hover:text-white font-semibold mb-8 transition-colors"
          >
            View our web design packages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free hosting for 1 year
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              SSL certificate included
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              30-day support included
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Web Design FAQs
            </h2>
            <p className="text-lg text-gray-400">
              Common questions about our web design services for BANES businesses.
            </p>
          </div>

          <FAQAccordion 
            faqs={[
              {
                q: 'Do you do one-page websites?',
                a: 'Yes. Our Starter package is a one-page website from £399 with everything a trade or small business needs: services, contact form, click-to-call, area info, and SEO basics. It\'s ideal if you want a simple, fast site that gets found on Google without a big budget. See our web design packages for full details.',
              },
              {
                q: 'How long does it take to build a website?',
                a: 'Most business websites take 2-4 weeks from start to launch. This includes design, development, content creation, and revisions. More complex sites with custom functionality may take longer.',
              },
              {
                q: 'How much does a website cost?',
                a: 'Our Starter package is £399 for a 1-page site with everything a trade needs. We also offer multi-page packages from £1,200. We provide a detailed quote after understanding your requirements.',
              },
              {
                q: 'Will my website work on mobile phones?',
                a: 'Absolutely! All our websites are built mobile-first, meaning they look and work perfectly on smartphones, tablets, and desktops. Over 60% of searches are now on mobile, so this is essential.',
              },
              {
                q: 'Do you provide website hosting?',
                a: 'Yes, we include 1 year of premium hosting free with every new website. After that, hosting is just £15/month which includes security updates, backups, and technical support.',
              },
              {
                q: 'Can I update the website myself?',
                a: 'Yes! We build websites on user-friendly platforms that make it easy to update text, images, and add new content. We also provide training so you feel confident managing your site.',
              },
              {
                q: 'What if I already have a website?',
                a: "We can redesign your existing site or build a completely new one. We'll assess your current site and recommend the best approach based on your goals and budget.",
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

export default WebDesign;
