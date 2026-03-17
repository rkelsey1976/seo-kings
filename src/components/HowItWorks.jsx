import React from 'react';
import Image from 'next/image';
import SectionDivider from './SectionDivider';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Free Audit',
      description: 'We review your current Google rankings, website (or we build you one — website design from £399), and Google Business Profile. We tell you exactly what\'s holding you back in Bath & North East Somerset searches and give you a clear action plan — no jargon, no obligation.',
      image: '/images/home/local-seo-get-found-google-analytics.png',
      imageAlt: 'Local SEO audit — checking Google rankings and website visibility for Bath and North East Somerset businesses',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Custom Strategy',
      description: 'We build a plan around your trade, your location, and the customers you want to reach. That means the right keywords for your area, a website structure that converts visitors to leads, and a Google Business Profile set up to appear in the map pack — not a one-size-fits-all template.',
      image: '/images/home/website-design-planning-trades-bath.png',
      imageAlt: 'Website design planning for trades in Bath — custom strategy built around your business and local area',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Results',
      description: 'We do the work — you get more calls, more enquiries, more jobs. Most clients see their Google Business Profile ranking improve within the first month. We send monthly updates so you always know what\'s working and where you stand in local search.',
      image: '/images/home/website-design-workflow-bath-somerset.png',
      imageAlt: 'Website design and local SEO results — more calls and enquiries from Google for trades in Bath Somerset',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            How It
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three steps from free audit to more calls — designed for tradespeople in Bath and North East Somerset.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-48 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col h-full">
              {/* Step Card */}
              <div className="bg-dark border border-white/5 rounded-2xl overflow-hidden relative z-10 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-48 flex-shrink-0">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="p-6 text-center flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-gray-300 mb-4 -mt-10 relative bg-dark border border-white/10">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm flex-1">
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

      </div>
    </section>
  );
};

export default HowItWorks;
