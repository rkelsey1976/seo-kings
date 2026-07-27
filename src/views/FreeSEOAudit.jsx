'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import ServicePageHero from '../components/ServicePageHero';

const heroFeatures = ['No card needed', 'Written report in 48h', 'No follow-up pressure', 'Real recommendations'];

const included = [
  'Current ranking for your main search terms (e.g. "plumber Bath", "kitchen fitter Bristol")',
  'Google Business Profile review — categories, services, photos, hours, completeness score',
  'On-page SEO check — page titles, meta descriptions, headings, image alt text',
  'Technical issues — page speed, mobile usability, broken links, sitemap, robots.txt',
  'Citation consistency — is your name, address, phone consistent across the web?',
  'Top 3 things that, if fixed, would move the needle most',
  '3-month plan of what we would do (in plain English, no jargon)',
];

const faqs = [
  {
    q: 'What does the free SEO audit actually include?',
    a: 'A written report covering your current Google ranking, GBP quality score, on-page SEO, technical issues, citation consistency, and 3 prioritised recommendations. Most reports are 3-5 pages long.',
  },
  {
    q: 'How long does it take?',
    a: 'We send most reports within 48 hours of your submission. If you need it faster (e.g. you have a meeting this week), just say so and we will do what we can.',
  },
  {
    q: 'Is there any obligation?',
    a: 'No. No card, no follow-up sequence, no automatic retainer. If you want to work with us after reading the report, you can. If you do not, the report is still yours.',
  },
  {
    q: 'Who is the audit for?',
    a: 'Trades and small businesses in Bath, Bristol, BANES, South Glos and Somerset who already have a website and a Google Business Profile, and want to know what is holding them back on Google.',
  },
  {
    q: 'Can you do an audit if I have no website?',
    a: 'Yes — but the focus shifts to setting up the basics. We will review your Google Business Profile, your competitors, and what is realistic to launch. Most people in this position start with our one-page website from £250 instead.',
  },
  {
    q: 'Will you sell me something?',
    a: 'We will give you a clear plan. If you want to do it yourself, you can. If you want help, we offer Local SEO from £150/month and GBP optimisation for £100. We tell you the truth about what you actually need.',
  },
];

export default function FreeSEOAudit() {
  const [formOpen, setFormOpen] = useState(true);
  return (
    <>
      <ServicePageHero
        badge="Free · No obligation"
        title="Find out what's holding you back on Google."
        highlight="(In 48 hours, no card needed.)"
        description="A written SEO audit for trades in Bath, Bristol, BANES and South Glos. We check your website, your Google Business Profile, and your local search presence — then send you a 3-5 page report with the top 3 things to fix first. No follow-up pressure. The report is yours either way."
        features={heroFeatures}
        ctaText="Request my free audit"
        onGetQuote={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
        ctaSecondary="See what we check"
        breadcrumb={[{ name: 'Home', href: '/' }, { name: 'SEO', href: '/seo' }, { name: 'Free SEO Audit' }]}
        rightPanel={
          <div className="bg-dark-card border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-4">
              What you will get
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Current Google ranking', value: 'Live' },
                { label: 'GBP quality score', value: '0–100' },
                { label: 'Technical issues', value: 'All checked' },
                { label: 'Top 3 fixes', value: 'Ranked by impact' },
                { label: 'Written report', value: '3-5 pages' },
                { label: 'Cost', value: '£0' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-gray-400 text-sm">{label}</span>
                  <span className="text-base font-bold text-white">{value}</span>
                </div>
              ))}
            </ul>
          </div>
        }
      />

      {/* What's included */}
      <section className="py-20 bg-dark-lighter/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-mono tracking-[0.12em] uppercase text-primary mb-3">
              What we check
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              7 things every audit covers.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No jargon, no padding. Just the things that actually move a trade business up the Google rankings.
            </p>
          </div>
          <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 sm:p-8 space-y-4">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 text-base leading-relaxed flex-1 pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="audit-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[11px] font-mono tracking-[0.12em] uppercase text-primary mb-3">
              Get your audit
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Tell us about your business.
            </h2>
            <p className="text-gray-400">
              We will send your written report within 48 hours. No card, no follow-up pressure.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Your name</label>
                <input type="text" required className="w-full bg-dark-card border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="Rich Kelsey" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Business name</label>
                <input type="text" required className="w-full bg-dark-card border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="Acme Plumbing Ltd" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Website URL</label>
              <input type="url" className="w-full bg-dark-card border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="https://yourwebsite.co.uk" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Email</label>
              <input type="email" required className="w-full bg-dark-card border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Phone (optional)</label>
              <input type="tel" className="w-full bg-dark-card border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="07700 000000" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Your trade (so we can tailor the audit)</label>
              <select className="w-full bg-dark-card border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary">
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Builder / Extension</option>
                <option>Roofer</option>
                <option>Painter & Decorator</option>
                <option>Kitchen Fitter</option>
                <option>Bathroom Fitter</option>
                <option>Heating / Gas Engineer</option>
                <option>Cleaner</option>
                <option>Landscaper</option>
                <option>Other trade</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg">
              Send me my free audit →
            </button>
            <p className="text-xs text-gray-500 text-center">No card. We will email you within 48 hours. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-lighter/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[11px] font-mono tracking-[0.12em] uppercase text-primary mb-3">FAQs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Common questions.
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
