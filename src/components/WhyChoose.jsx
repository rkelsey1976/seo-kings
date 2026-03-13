import React from 'react';
import Image from 'next/image';
import SectionDivider from './SectionDivider';

const WhyChoose = () => {
  const bullets = [
    'Website designer for trades: plumbers, electricians, builders, roofers, landscapers',
    'Website design from £399 — one-page or full site, built to get you found on Google',
    'Focus on Bath & North East Somerset',
    'No long contracts or complicated jargon',
    'Google Business Profile set up and optimised so you show up in the map pack',
    'Fast, mobile-friendly websites that convert visitors to customers',
  ];

  return (
    <section className="py-24 relative">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="gradient-text"> SEO Kings</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Customers in Bath, Keynsham, Midsomer Norton, Radstock and across Bath and North East Somerset search Google for local trades every day. If you&apos;re not on page 1 or in the map pack, you miss calls and jobs.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 lg:mb-8">
            We fix that with <strong className="text-gray-300">website design</strong> and getting your <strong className="text-gray-300">Google listing</strong> right — so you get found when it matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ul className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              {bullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
              <Image
                src="/images/home/google-map-pack-bath-north-east-somerset.png"
                alt="Get on the map — Google Map Pack and local search visibility for Bath and North East Somerset businesses"
                width={480}
                height={360}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
