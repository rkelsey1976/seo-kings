import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { GOOGLE_MAPS_PLACE_URL, GOOGLE_MAPS_EMBED_SRC } from '../constants/business';

const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'No BS, Just Results',
      description: 'We don\'t hide behind jargon or vanity metrics. You\'ll always know exactly what we\'re doing and why — in plain English.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Local First',
      description: 'We live and work in Bath and North East Somerset. We understand the local market, the competition, and what it takes to win here.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fair Pricing',
      description: 'No hidden fees, no surprise charges. We quote fairly and deliver on our promises. Your success is our success.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Partnership Approach',
      description: 'We\'re not just a service provider — we\'re invested in your growth. When you win, we win.',
    },
  ];

  const reasons = [
    {
      title: 'Website Design Is What We Do',
      description: 'We build websites for trades and local businesses in Bath and North East Somerset — fast, mobile-friendly, from one-page sites to full multi-page. It\'s our main service, and we\'re built for it.',
    },
    {
      title: 'SEO & GBP So Your Site Gets Found',
      description: 'A site that nobody finds isn\'t enough. We offer local SEO and Google Business Profile as add-ons (and as standalone services) so your site shows up on Google and in the map pack when people search.',
    },
    {
      title: 'We Speak Your Language',
      description: 'No confusing tech talk. We explain everything in plain English so you know what we\'re building and how we\'re helping you get found.',
    },
    {
      title: 'We Get Results',
      description: 'We focus on what matters: a site that works and a presence on Google that brings in enquiries. See our case studies for real examples of what we\'ve done for local businesses.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us - Website Design for Bath & North East Somerset"
        description="We build websites for trades and local businesses in Bath and North East Somerset. SEO and Google Business Profile are add-ons we provide so your site gets found. Our story and why local businesses trust us."
        keywords="website design Bath, about SEO Kings, web design Bath and North East Somerset, website designer Bath, local SEO add-on, sites that get found"
        canonical="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us' }
        ]}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
                About SEO Kings
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                We Build Websites That
                <span className="gradient-text"> Get Found</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                We're a Bath-based website design company for tradespeople and local businesses 
                in Bath and North East Somerset. We build fast, clear sites — and we offer SEO and 
                Google Business Profile as add-ons so your site is found on Google.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&auto=format&q=80"
                srcSet="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format&q=80 400w, https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&auto=format&q=80 600w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="SEO Kings website design and SEO for Bath and North East Somerset businesses"
                width={600}
                height={450}
                fetchPriority="high"
                className="relative rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Website Design First — SEO So You Get Found
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  We started SEO Kings to build websites for trades and local businesses in Bath 
                  and North East Somerset — sites that look professional, load fast and work on phones. 
                  But a great-looking site is no use if nobody finds it. So we offer SEO and Google 
                  Business Profile as add-ons and as standalone services to make sure your site 
                  gets found on Google and in the map pack.
                </p>
                <p>
                  Our main service is website design: from one-page sites from £399 to full 
                  multi-page sites. Every site we build is set up for local search. On top of that, 
                  we provide local SEO and GBP optimisation so your business shows up when people 
                  search for your trade in your area.
                </p>
                <p>
                  Today we work with plumbers, electricians, cleaners, builders and other local 
                  businesses across Bath, Keynsham, Midsomer Norton, Radstock and the wider area. 
                  We've seen what works: a clear website plus a proper Google presence.
                </p>
                <p className="text-white font-medium">
                  Our mission: build websites that work, and provide the SEO and GBP support so they get found.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=400&fit=crop&auto=format&q=80"
                  alt="SEO Kings website design and SEO for Bath and North East Somerset businesses"
                  width={500}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl border border-white/10 shadow-xl"
                />
                {/* Timeline Overlay */}
                <div className="absolute -bottom-8 -right-8 bg-dark-card border border-white/10 rounded-2xl p-6 shadow-xl max-w-xs">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-gray-400"><span className="text-white font-medium">Founded</span> — Bath & North East Somerset</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-sm text-gray-400"><span className="text-white font-medium">Focus</span> — Website design & SEO so you get found</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-gray-400"><span className="text-white font-medium">Today</span> — Websites for trades + SEO & GBP add-ons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These aren't just words on a wall — they're how we run our business every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-dark border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Us for Your Website
              </h2>
              
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{reason.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                "We had no website and no Google listing, so when people searched for a painter and decorator in Bath we simply didn't show up. SEO Kings built us a proper website and sorted our Google Business Profile so everything works together. Within a week we were in the top results on Google Maps and ranking for the right searches. No jargon, no messing about — they just got it done. Really pleased with the result and would recommend them to any trade in Bath or BANES."
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <div className="font-semibold text-white">Jay</div>
                  <div className="text-sm text-gray-500">New Decorating, Painter & Decorator, Bath & BANES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-4">
              Local Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proudly Serving Bath & North East Somerset
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're not a faceless agency in London. We're based in Bath, we build websites 
              for local businesses here, and we offer SEO and GBP so those sites get found.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Bath', slug: 'bath' },
              { name: 'Keynsham', slug: 'keynsham' },
              { name: 'Midsomer Norton', slug: 'midsomer-norton' },
              { name: 'Radstock', slug: 'radstock' },
              { name: 'Peasedown St John', slug: 'peasedown-st-john' },
              { name: 'Paulton', slug: 'paulton' },
              { name: 'Saltford', slug: 'saltford' },
              { name: 'Timsbury', slug: 'timsbury' },
              { name: 'Westfield', slug: 'westfield' },
              { name: 'Chew Magna', slug: 'chew-magna' },
              { name: 'Temple Cloud', slug: 'temple-cloud' },
              { name: 'Clutton', slug: 'clutton' },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-dark border border-white/5 rounded-xl px-4 py-3 text-center hover:border-primary/30 transition-colors"
              >
                {area.slug ? (
                  <Link href={`/areas/${area.slug}`} className="text-gray-300 hover:text-primary-light transition-colors block">
                    {area.name}
                  </Link>
                ) : (
                  <span className="text-gray-300">{area.name}</span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500">
              <Link href="/areas" className="text-primary-light hover:text-white transition-colors font-medium">View all areas we serve</Link>
              {' '}or{' '}
              <Link href="/contact" className="text-primary-light hover:text-white transition-colors">get in touch</Link> if you don't see yours.
            </p>
          </div>

          {/* Google Maps embed */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white mb-2 text-center">Find us on Google Maps</h3>
            <p className="text-gray-400 mb-6 text-center max-w-xl mx-auto">
              We're based in Bath. Visit our{' '}
              <a href={GOOGLE_MAPS_PLACE_URL} target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-white transition-colors">
                Google Maps listing
              </a>
              {' '}for directions or to leave a review.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video max-h-[350px] bg-dark-card">
              <iframe
                src={GOOGLE_MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SEO Kings on Google Maps"
                className="w-full h-full min-h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default About;
