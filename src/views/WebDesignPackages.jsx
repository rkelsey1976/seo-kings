'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import PricingModal from '../components/PricingModal';

const pricingFaqs = [
  {
    q: 'How does per-page pricing work?',
    a: 'Every website starts at £250. That covers the first page — your home page with services, contact form, click-to-call, and everything a trade needs. Each additional page is £50. A 5-page site is £450. A 10-page site is £700. Simple.',
  },
  {
    q: 'What counts as a page?',
    a: 'Each separate URL is a page. Home, About, Services, Contact, and individual service pages (e.g. "Plumbing Bath", "Boiler Repairs") all count as one page each. Having a page per service is great for SEO — Google can rank each one for different searches.',
  },
  {
    q: 'Is there a minimum?',
    a: "Yes — one page at £250. That's our one-page site: a fast, mobile-first single-pager with everything a local trade needs to get found and get calls.",
  },
  {
    q: "What's included in the base price?",
    a: 'SSL, 6 months free hosting, contact form, click-to-call, mobile-responsive design, SEO basics, and UK support. Everything you need to be live and working on day one.',
  },
  {
    q: 'Can I add Google Business Profile setup?',
    a: "Yes — it's a £100 one-off add-on. We claim, verify, and fully optimise your GBP so you show in the Map Pack. It's available in the calculator or just ask us when you get in touch.",
  },
  {
    q: 'Do you offer monthly payments?',
    a: "Yes — ask us when you get in touch and we can split the cost over a few months. There's no interest and no hidden charges.",
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-packages',
      url: 'https://seo-kings.co.uk/web-design-packages',
      name: 'Web Design Packages for Trades | From £250 | SEO Kings Bath',
      description: 'Transparent per-page pricing — from £250 for one page, £50 per extra page. No monthly fees, no contracts. Build your quote in 30 seconds. Serving Bath, Keynsham & Somerset.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design Packages' , item: 'https://seo-kings.co.uk/web-design-packages' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: pricingFaqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

const processSteps = [
  { step: '01', title: 'Sign up', description: 'Fill in our form with your details. We\'ll be in touch within 24 hours to confirm scope and price.' },
  { step: '02', title: 'Design', description: 'We build your pages to a design you approve. You review and give feedback until you\'re happy.' },
  { step: '03', title: 'Development', description: 'We build your site, test on every device, and make sure everything works perfectly before launch.' },
  { step: '04', title: 'Launch', description: 'Go live with confidence. We handle everything — hosting, SSL, and Google Business Profile setup.' },
];

const included = [
  'SEO optimised',
  'Mobile responsive',
  '6 months free hosting',
  'UK support',
  'Contact form',
  'SSL certificate',
  'Click-to-call',
  'Fast, secure servers',
];

const examples = [
  { pages: 1, label: 'Sole trader starter', price: 250, description: 'One-page site — services, contact, and everything a trade needs.' },
  { pages: 3, label: 'Growing business', price: 350, description: 'Home, services, and contact. Room for a gallery or testimonials.' },
  { pages: 5, label: 'Established trade', price: 450, description: 'Full site with individual service pages for better local rankings.' },
  { pages: 10, label: 'Multi-service business', price: 700, description: 'A page per service — maximum coverage for "[trade] near me" searches.' },
];

const WebDesignPackages = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
            Transparent pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Simple per-page pricing.<br />
            <span className="text-primary">No surprises.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Every website starts at <span className="text-white font-semibold">£250</span>. Each additional page is <span className="text-white font-semibold">£50</span>. Pick exactly what you need — nothing you don't.
          </p>
          <p className="text-sm text-gray-600 mb-4">6 months free hosting included · SSL · click-to-call · contact form</p>
          <p className="text-sm text-gray-500 mb-10">
            Rather not pay upfront?{' '}
            <Link href="/site-and-google" className="text-primary hover:underline">Site + Google is £99/month</Link>{' '}
            — same site, Google Business Profile included, own your domain always.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-3 bg-primary hover:opacity-90 text-dark px-8 py-4 rounded-xl font-semibold text-lg transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Build your quote
          </button>
        </div>
      </section>

      {/* Pricing examples */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4 text-primary">
              Example prices
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
              What does your site cost?
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Common site sizes — use the calculator to dial in your exact number of pages.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {examples.map((ex) => (
              <div
                key={ex.pages}
                className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/10 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest">
                    {ex.pages} {ex.pages === 1 ? 'page' : 'pages'}
                  </span>
                  <span className="text-2xl font-bold text-primary">£{ex.price}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{ex.label}</h3>
                <p className="text-sm text-gray-400 flex-1">{ex.description}</p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-5 text-sm font-semibold text-primary hover:text-primary-light flex items-center gap-1.5 transition-colors"
                >
                  Customise
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need more than 10 pages?{' '}
              <button onClick={() => setModalOpen(true)} className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors">
                Use the calculator
              </button>{' '}
              — it goes up to 30.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6 text-primary">
            Every website
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            What&apos;s included as standard
          </h2>
          <p className="text-gray-400 mb-10">
            Every website — regardless of size — comes with the same solid foundations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl text-gray-300 text-sm"
              >
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-dark-card border border-white/[0.06] rounded-2xl text-left max-w-2xl mx-auto">
            <h3 className="text-base font-semibold text-white mb-2">Add-ons available</h3>
            <p className="text-gray-400 text-sm mb-4">
              Google Business Profile setup (+£100), logo design (+£100), and local SEO retainers from £150/mo can all be added once you&apos;re happy with your site.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="text-primary hover:text-primary-light text-sm font-semibold flex items-center gap-1.5 transition-colors"
            >
              Price it up with add-ons
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4 text-secondary">
              Our process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
              From idea to live in 4 steps
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold font-mono text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Pricing questions answered</h2>
          <FAQAccordion faqs={pricingFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-8">
            Build your quote in 30 seconds — or just call and we'll sort it together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary text-dark px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Build your quote
            </button>
            <a
              href="tel:07702264921"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/5 transition-colors text-center"
            >
              Call 07702 264 921
            </a>
          </div>
        </div>
      </section>

      <CTABanner />

      <PricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WebDesignPackages;
