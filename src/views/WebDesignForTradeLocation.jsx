'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import SectionTag from '../components/SectionTag';
import PricingModal from '../components/PricingModal';
import { TRADE_LOCATION_META } from '../constants/tradeLocationMeta';

const pricing = [
  {
    name: 'Starter',
    price: 'From £250',
    desc: '1-page site — fast, mobile-first, SEO-ready',
    features: [
      '1-page site',
      'Mobile-responsive design',
      'Click-to-call on every page',
      'Google Maps embedding for Bath',
      'Basic SEO setup',
      'Contact form',
    ],
  },
  {
    name: 'Professional',
    price: 'From £350',
    desc: '3-page site with service pages and review integration',
    features: [
      '3 pages including Bath landing page + service page',
      'Google reviews integration',
      'Service area coverage for Bath neighbourhoods',
      'Enhanced local SEO',
      'Contact form with quote request',
    ],
  },
  {
    name: 'Full',
    price: 'From £450',
    desc: '5+ pages with full service + area structure',
    features: [
      '5+ pages with full service + area structure',
      'Google Business Profile optimisation',
      'Citation building across Bath directories',
      'Monthly reporting for 3 months',
      'Ongoing content support',
    ],
  },
];

const WebDesignForTradeLocation = ({ params: staticParams }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const tradeSlug = staticParams?.tradeSlug;
  const data = TRADE_LOCATION_META[tradeSlug];

  if (!data) return null;

  const tradeNameLower = data.tradeName.toLowerCase().replace('&', '').trim();

  return (
    <>

      {/* Hero */}
      <ServicePageHero
        badge={`Web Design for ${data.tradeName} in Bath`}
        title={`Web Design for ${data.tradeName} in`}
        highlight="Bath"
        description={data.intro}
        features={['From £250', '6 months free hosting', 'Live in under 2 weeks']}
        ctaText="Get a Free Website Quote"
        ctaSecondary="Call Us Today"
      />

      {/* Why Bath is different for this trade */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionTag className="mb-4">Why Bath is different</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Why {data.tradeName.toLowerCase()} in Bath need a local website
            </h2>
            <p className="text-gray-400 mb-8">
              Bath is not like anywhere else in Somerset. The housing stock, the planning rules, the customer expectations — they're all shaped by 2,000 years of history. Your website needs to reflect that.
            </p>
            <ul className="space-y-4">
              {data.bathSpecifics.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bath areas served */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Areas we cover</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2 leading-tight tracking-tight">Bath areas we build websites for</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Your website should list the specific Bath neighbourhoods you work in. Customers search &ldquo;{tradeNameLower} Widcombe&rdquo; or &ldquo;{tradeNameLower} Lansdown&rdquo; — not just &ldquo;Bath&rdquo;. We build pages for each area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.bathAreas.map((area, index) => (
              <div key={index} className="bg-dark-card border border-white/[0.06] rounded-xl px-4 py-3 text-gray-300 text-sm">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build for Bath trades */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">What we build</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
            What we build for {data.tradeName.toLowerCase()} in Bath
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Every Bath trade website we build includes the essentials plus Bath-specific content that your customers are searching for.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Bath landing page', desc: `Dedicated page targeting "${tradeNameLower} Bath" with local knowledge, Bath areas served, and Bath-specific issues` },
              { title: 'Service pages', desc: 'Individual pages for each service you offer, optimised for Bath search terms' },
              { title: 'Bath areas coverage', desc: 'List every Bath neighbourhood you cover — Widcombe, Lansdown, Larkhall, Combe Down and more' },
              { title: 'Mobile-first design', desc: 'Most Bath searches happen on mobile. Click-to-call, fast loading, clear layout on any screen' },
              { title: 'Google Business Profile', desc: 'We optimise your GBP for Bath and the BA1/BA2 postcodes so you appear in the map pack' },
              { title: 'Review integration', desc: 'Display your Google reviews prominently — trust is everything for Bath homeowners choosing a trade' },
            ].map((item, index) => (
              <div key={index} className="bg-dark-card border border-white/[0.06] rounded-xl p-6">
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">Pricing</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight tracking-tight">
            Website packages for Bath {data.tradeName.toLowerCase()}
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Every package includes a Bath-specific landing page, mobile-first design, and local SEO setup. No hidden costs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((tier, index) => (
              <div key={index} className={`rounded-2xl p-6 border ${index === 1 ? 'bg-primary/5 border-primary/30' : 'bg-dark-card border-white/[0.06]'}`}>
                <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
                <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 font-mono">{tier.desc.split('—')[0].trim()}</div>
                <p className="text-primary text-3xl font-bold mb-2">{tier.price}</p>
                <p className="text-gray-400 text-xs mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setModalOpen(true)} className={`w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${index === 1 ? 'bg-primary hover:bg-primary-light text-dark' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-6 rounded-xl border border-white/[0.06] bg-dark-card p-5">
            <div className="flex items-center justify-between py-1">
              <div>
                <div className="text-white font-semibold text-sm">Hosting and maintenance</div>
                <div className="text-gray-500 text-xs">SSL, daily backups, uptime monitoring, content tweaks — 6 months free, then £50/year</div>
              </div>
              <div className="font-bold shrink-0 ml-4 text-primary">6 months free</div>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            All prices one-off. Hosting free for 6 months, then £50/year. No long contracts.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTag className="mb-4">FAQs</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight tracking-tight">
              Web design for {data.tradeName.toLowerCase()} in Bath — FAQs
            </h2>
            <p className="text-gray-400 mb-10">Common questions from Bath {data.tradeName.toLowerCase()} about websites and local SEO.</p>
            <FAQAccordion faqs={data.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-6">Related services</SectionTag>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href={`/local-seo/${data.tradeSlug}`} className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO for {data.tradeName}</div>
                <div className="text-xs text-gray-500">Ongoing SEO for {data.tradeName.toLowerCase()} in Bath</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href={`/web-design-for/${data.tradeSlug}`} className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Web Design for {data.tradeName}</div>
                <div className="text-xs text-gray-500">Trade-specific website design</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/local-seo/bath" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO in Bath</div>
                <div className="text-xs text-gray-500">Ongoing SEO — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner onGetQuote={() => setModalOpen(true)} />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WebDesignForTradeLocation;