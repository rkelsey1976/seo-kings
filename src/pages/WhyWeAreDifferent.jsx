import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';

const WhyWeAreDifferent = () => {
  const differences = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'No Jargon — Plain English',
      description: 'We explain everything in clear language. No "synergy", "leverage" or mystery metrics. You\'ll know exactly what we\'re doing, why, and what it means for your business.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'We Live and Work Here',
      description: 'We\'re based in Bath and North East Somerset. We know the local market, the competition, and what it takes to rank in Keynsham, Bath, Midsomer Norton and the Somer Valley. We\'re not a remote agency guessing your area.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'No Long Contracts',
      description: 'We don\'t lock you into 12-month retainers you don\'t need. Website projects are one-off; SEO can be month-to-month. You stay because it works, not because you\'re tied in.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Transparent, Fair Pricing',
      description: 'We quote clearly: no hidden fees, no surprise add-ons. You\'ll see what\'s included before we start. From £399 for a one-page site to full multi-page and SEO — you know where you stand.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Free Check Before You Commit',
      description: 'Not sure where you stand? We offer a free check of your website and Google listing. No obligation — we show you what\'s missing and what we\'d do. You decide if you want to go ahead.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Results You Can See',
      description: 'We focus on what matters: a site that works and a presence on Google that brings in enquiries. Our case studies show real businesses — plumbers, electricians, cleaners — ranking and getting more leads.',
    },
  ];

  const notWhatWeDo = [
    'Over-promising rankings or "guaranteed number one"',
    'Locking you into long contracts with exit fees',
    'Burying you in reports full of jargon and vanity metrics',
    'Selling you services you don\'t need',
    'Being based elsewhere and treating your area as an afterthought',
  ];

  return (
    <>
      <SEO
        title="Why We're Different | Website Design & SEO for Bath & North East Somerset"
        description="No jargon, no long contracts, no hidden fees. We're a local Bath & BANES agency that builds websites and gets you found on Google. Free check before you commit."
        canonical="/why-we-are-different"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: "Why We're Different" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
              What Sets Us Apart
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Why We&apos;re
              <span className="gradient-text"> Different</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Most agencies talk in jargon, lock you into long contracts, or hide behind vague promises.
              We&apos;re a local Bath and North East Somerset agency that does the opposite: plain English,
              fair pricing, no long tie-ins, and a free check before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These aren&apos;t marketing fluff — they&apos;re how we run our business every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((item, index) => (
              <div
                key={index}
                className="bg-dark-card border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-sm font-medium mb-4">
              What We Don&apos;t Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Things You Won&apos;t Get From Us
            </h2>
            <p className="text-gray-400 mb-8">
              We avoid the practices that give the industry a bad name:
            </p>
            <ul className="space-y-3">
              {notWhatWeDo.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5" aria-hidden="true">
                    <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proof: Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
                Proof
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Real Results for Local Businesses
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We don&apos;t just say we get results — we show them. Our case studies are real Bath and North East Somerset businesses: plumbers, electricians, painters, cleaners. They came to us with no website or no Google presence; we built the site, sorted their Google Business Profile, and they started ranking and getting more enquiries.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                View case studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 italic mb-6">
                &ldquo;We had no website and no Google listing. SEO Kings built us a proper website and sorted our Google Business Profile. Within a week we were in the top results on Google Maps. No jargon, no messing about — they just got it done.&rdquo;
              </p>
              <p className="text-white font-semibold">Jay, New Decorating</p>
              <p className="text-sm text-gray-500">Painter &amp; decorator, Bath &amp; BANES</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default WhyWeAreDifferent;
