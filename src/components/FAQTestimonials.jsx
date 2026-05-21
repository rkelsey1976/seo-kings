'use client';
import React from 'react';
import Image from 'next/image';
import FAQAccordion from './FAQAccordion';

export const homepageFAQs = [
  {
    question: 'How much does a website cost in Bath?',
    answer: '£399 for a one-page trade site with contact form, click-to-call and Google Business Profile set-up included. Multi-page sites start at £599. No hidden fees.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Most one-page sites are live within 2 weeks. We keep you updated throughout.',
  },
  {
    question: 'Do I need a website to appear on Google Maps?',
    answer: 'No — but having one doubles your chance of showing up in the Map Pack, where 60% of local clicks go.',
  },
  {
    question: 'What results can I expect from local SEO?',
    answer: 'Most clients see ranking improvements within 30 days. Peachy Cleans went from invisible to #1 for "cleaner Midsomer Norton" — but results vary by area and competition.',
  },
  {
    question: 'What trades do you work with?',
    answer: 'Plumbers, electricians, builders, cleaners, painters — any trade in Bath & BANES that needs local customers.',
  },
];

const testimonials = [
  {
    quote: "SEO Kings built our website and got us found across Midsomer Norton, Radstock and Bath. We're now getting regular enquiries from our service areas — couldn't ask for more.",
    name: 'Alisha Kelsey',
    business: 'Peachy Cleans',
    location: 'Midsomer Norton',
    trade: 'Cleaning',
    rating: 5,
    result: 'Map Pack · "cleaning Midsomer Norton"',
  },
  {
    quote: "We had no website and no Google listing — customers couldn't find us. SEO Kings built our site and set up our Google profile. Within a week we were showing up on Google Maps and getting found for painter and decorator searches in Bath. Professional, fast, and it actually works.",
    name: 'Jay',
    business: 'New Decorating',
    location: 'Bath & BANES',
    trade: 'Painter & Decorator',
    rating: 5,
    result: '#1 organic · "exterior painter Bath"',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const FAQTestimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* Row 1: FAQs — centered, full width */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3 mb-2">
            Common Questions
          </h2>
          <p className="text-base mb-8 text-white/55">
            Real answers from real work in Bath & BANES.
          </p>
          <FAQAccordion faqs={homepageFAQs} />
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] mb-16" />

        {/* Row 2: Testimonials — 2-column grid */}
        <div>
          <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">Proof</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3 mb-2">
            What Clients Say
          </h2>
          <p className="text-base mb-8 text-white/55">
            Straight from tradespeople we've worked with.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl border border-white/[0.06] bg-[#0E1628]/60"
              >
                {t.result && (
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4 bg-primary/[0.12] text-primary border border-primary/20"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {t.result}
                  </div>
                )}

                <blockquote className="text-[15px] leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center text-coral font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        {t.business} · {t.location}
                      </div>
                    </div>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQTestimonials;
