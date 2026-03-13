import React from 'react';
import Image from 'next/image';
import SectionDivider from './SectionDivider';

const steps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dig into your business, your customers, and what makes you stand out. Clear goals and a simple brief mean a site that speaks to the right people and turns visitors into leads.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Mobile-First Build',
    description: 'We design for phones first, then scale up. Fast load times and thumb-friendly layouts keep users on the page and reduce bounce — so more of them click to call or fill the form.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'SEO Injection',
    description: 'Keywords, structure, and local SEO are built in from day one. Clean code, schema markup, and content that answers what people search for — so Google ranks you and your phone keeps ringing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Launch',
    description: 'We go live, connect your Google Business Profile, and hand you the keys. You get a clear handover and simple next steps so you can start getting found and winning work straight away.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function DesignProcess() {
  return (
    <section className="py-24 relative" aria-labelledby="design-process-heading">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="design-process-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our Design
            <span className="gradient-text"> Process</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From brief to live in four clear steps — built for conversion and local search so you get more leads, not just a pretty site.
          </p>
        </div>

        {/* Get on the map — visual break (icon only; map image used once in WhyChoose) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="relative w-40 sm:w-48 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 p-6" aria-hidden="true">
            <svg className="w-24 h-24 sm:w-28 sm:h-28 text-primary-light" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <p className="text-gray-300 text-center sm:text-left text-lg max-w-md">
            We get you <strong className="text-white">on the map</strong> — so when people in Bath & North East Somerset search for your trade, you show up in the map pack and get the call.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold gradient-text tabular-nums">{item.step}</span>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light group-hover:bg-primary/30 transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
