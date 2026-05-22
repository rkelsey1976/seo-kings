'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import PricingModal from '../components/PricingModal';
import { TRADE_LOCATION_META } from '../constants/tradeLocationMeta';

const pricing = [
  {
    name: 'Starter',
    price: '£250',
    desc: '5-page site with Bath service page, mobile-friendly, SEO-ready',
    features: ['5 pages including Bath page', 'Mobile-responsive design', 'Click-to-call on every page', 'Google Maps embedding for Bath', 'Basic SEO setup', 'Contact form'],
  },
  {
    name: 'Professional',
    price: '£350',
    desc: '8-page site with service + area pages, gallery, review integration',
    features: ['8 pages including Bath + 2 service pages', 'Before/after photo gallery', 'Google reviews integration', 'Service area pages for Bath neighbourhoods', 'Enhanced local SEO', 'Monthly reporting for 3 months'],
  },
  {
    name: 'Premium',
    price: '£450',
    desc: 'Full site with blog, local SEO campaign, monthly reporting',
    features: ['12+ pages with full service + area structure', 'Blog with Bath-specific content', '6-month local SEO campaign', 'Google Business Profile optimisation', 'Citation building across Bath directories', 'Monthly reporting and strategy calls'],
  },
];

const WebDesignForTradeLocation = ({ params: staticParams }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const tradeSlug = staticParams?.tradeSlug;
  const data = TRADE_LOCATION_META[tradeSlug];

  if (!data) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/web-design-for" className="hover:text-white transition-colors">Web Design for Trades</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={`/web-design-for/${data.tradeSlug}`} className="hover:text-white transition-colors">{data.tradeName}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-light">Bath</li>
            </ol>
          </nav>
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
            Web Design for {data.tradeName} in Bath
          </span>
          <div className="flex flex-wrap gap-3 mb-6">
            {['From £250', '6 months free hosting', 'Live in under 2 weeks'].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t}
              </div>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {data.headline}
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
            {data.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary hover:bg-primary-light text-dark px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center">
              Get a Free Website Quote
            </Link>
            <a href="tel:07702264921" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3" aria-label="Call SEO Kings on 07702 264 921">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              07702 264 921
            </a>
          </div>
        </div>
      </section>

      {/* Why Bath is different for this trade */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">Why {data.tradeName.toLowerCase()} in Bath need a local website</h2>
          <p className="text-gray-400 mb-8">
            Bath is not like anywhere else in Somerset. The housing stock, the planning rules, the customer expectations — they're all shaped by 2,000 years of history. Your website needs to reflect that.
          </p>
          <ul className="space-y-4">
            {data.bathSpecifics.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bath areas served */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">Bath areas we build websites for</h2>
          <p className="text-gray-400 mb-8">
            Your website should list the specific Bath neighbourhoods you work in. Customers search "{data.tradeName.toLowerCase().replace('&', '').trim()} Widcombe" or "{data.tradeName.toLowerCase().replace('&', '').trim()} Lansdown" — not just "Bath". We build pages for each area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.bathAreas.map((area, index) => (
              <div key={index} className="bg-dark-lighter rounded-lg px-4 py-3 text-gray-300 text-sm border border-white/5">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build for Bath trades */}
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">What we build for {data.tradeName.toLowerCase()} in Bath</h2>
          <p className="text-gray-400 mb-8">
            Every Bath trade website we build includes the essentials plus Bath-specific content that your customers are searching for.
          </p>
          <div className="grid gap-4">
            {[
              { title: 'Bath landing page', desc: 'Dedicated page targeting "{data.tradeName.toLowerCase()} Bath" with local knowledge, Bath areas served, and Bath-specific issues' },
              { title: 'Service pages', desc: 'Individual pages for each service you offer, optimised for Bath search terms' },
              { title: 'Bath areas coverage', desc: 'List every Bath neighbourhood you cover — Widcombe, Lansdown, Larkhall, Combe Down and more' },
              { title: 'Mobile-first design', desc: 'Most Bath searches happen on mobile. Click-to-call, fast loading, clear layout on any screen' },
              { title: 'Google Business Profile', desc: 'We optimise your GBP for Bath and the BA1/BA2 postcodes so you appear in the map pack' },
              { title: 'Review integration', desc: 'Display your Google reviews prominently — trust is everything for Bath homeowners choosing a trade' },
            ].map((item, index) => (
              <div key={index} className="bg-dark/50 rounded-xl p-6 border border-white/5">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center leading-tight tracking-tight">Website packages for Bath {data.tradeName.toLowerCase()}</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Every package includes a Bath-specific landing page, mobile-first design, and local SEO setup. No hidden costs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((tier, index) => (
              <div key={index} className={`rounded-2xl p-6 border ${index === 1 ? 'bg-primary/5 border-primary/30' : 'bg-dark-lighter border-white/5'}`}>
                <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
                <p className="text-primary text-3xl font-bold mb-2">{tier.price}</p>
                <p className="text-gray-400 text-sm mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="max-w-3xl mx-auto mt-6 rounded-xl border border-white/10 bg-dark-card p-5">
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
      <section className="py-24 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">Web design for {data.tradeName.toLowerCase()} in Bath — FAQs</h2>
            <p className="text-gray-400">Common questions from Bath {data.tradeName.toLowerCase()} about websites and local SEO.</p>
          </div>
          <FAQAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link href={`/local-seo/${data.tradeSlug}`} className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium">
              Local SEO for {data.tradeName}
            </Link>
            <Link href={`/web-design-for/${data.tradeSlug}`} className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium">
              Web Design for {data.tradeName}
            </Link>
            <Link href="/local-seo/bath" className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium">
              Local SEO in Bath
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