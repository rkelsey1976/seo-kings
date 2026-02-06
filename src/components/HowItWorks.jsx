import React from 'react';
import Link from 'next/link';
import SectionDivider from './SectionDivider';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Free Audit',
      description: 'We review your current Google rankings, website, and Google Business Profile. We tell you exactly what\'s holding you back in Bath & BANES searches.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format&q=80',
      imageAlt: 'SEO audit for Bath and BANES businesses',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Custom Strategy',
      description: 'We create a plan for your trade and your local area — no generic packages.',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop&auto=format&q=80',
      imageAlt: 'Custom SEO strategy for Bath tradespeople',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Results',
      description: 'We do the work. You get more calls, more enquiries, more jobs. Monthly updates keep you in the loop.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format&q=80',
      imageAlt: 'More leads and calls from local SEO',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 relative bg-dark-lighter">
      <SectionDivider fill="dark-lighter" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary-light text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            How It
            <span className="gradient-text"> Works</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-48 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-dark border border-white/5 rounded-2xl overflow-hidden relative z-10">
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="p-6 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-gray-300 mb-4 -mt-10 relative bg-dark border border-white/10">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow (Mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="inline-block bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow">
            Get Your Free Audit Today
          </Link>
          <p className="text-gray-300 text-sm mt-4">
            No obligation. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
