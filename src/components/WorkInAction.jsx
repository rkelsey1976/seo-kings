import React from 'react';
import Image from 'next/image';
import SectionDivider from './SectionDivider';

const images = [
  {
    src: '/images/home/website-design-workflow-bath-somerset.png',
    alt: 'Website design Bath Somerset — clear layout and SEO built in from day one',
  },
  {
    src: '/images/home/local-seo-get-found-google-analytics.png',
    alt: 'Local SEO Bath — get found on Google and track what works for your business',
  },
  {
    src: '/images/home/website-design-planning-trades-bath.png',
    alt: 'Website design planning for trades in Bath — we start with your goals so your site converts',
  },
];

export default function WorkInAction() {
  return (
    <section className="py-24 relative bg-dark-lighter" aria-labelledby="work-in-action-heading">
      <SectionDivider fill="dark-lighter" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="work-in-action-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How We
            <span className="gradient-text"> Work</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From planning to launch — we design, build and optimise so you get a site that looks great and gets you found on Google.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-dark-card hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
