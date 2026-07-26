'use client';
import React from 'react';
import Link from 'next/link';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';
import ServicePageHero from '../components/ServicePageHero';

const heroFeatures = ['From £150', 'Audit + fixes', 'Plain-English report', 'No long-term contract'];

const checks = [
  { area: 'Page speed', detail: 'Core Web Vitals (LCP, CLS, INP) measured on real devices. Most trade sites have a 4-6s LCP — Google wants under 2.5s.' },
  { area: 'Mobile usability', detail: 'Tested across iPhone SE, Pixel, iPad. Buttons tappable? Text readable without zoom? Google uses mobile-first indexing.' },
  { area: 'Schema markup', detail: 'LocalBusiness, Service, FAQPage, BreadcrumbList. Missing schema = no rich results in Google.' },
  { area: 'Broken links', detail: '404s, 500s, redirect chains. Each one is a dead-end for Google and a frustration for visitors.' },
  { area: 'Crawl and indexing', detail: 'robots.txt, sitemap.xml, canonical tags, noindex where it should not be. Google may be ignoring your best pages.' },
  { area: 'HTTPS and security', detail: 'SSL certificate, mixed content warnings, HSTS. Without HTTPS you are invisible in modern browsers.' },
  { area: 'Image optimisation', detail: 'WebP, AVIF, srcset, lazy loading, alt text. Images are usually 60-80% of page weight on a trade site.' },
  { area: 'Structured data validation', detail: 'Schema.org validation. Errors here mean Google silently ignores your markup.' },
];

const faqs = [
  { q: 'What is technical SEO?', a: 'Everything under the hood that helps Google find, crawl, understand and rank your pages. Page speed, schema, mobile usability, broken links, sitemaps — the parts visitors do not see but Google cares about deeply.' },
  { q: 'How is it different from regular SEO?', a: 'Regular (on-page) SEO is about the words and content on your page. Technical SEO is about the plumbing. A trade site can have perfect content but still rank poorly if the technical layer is broken.' },
  { q: 'How long does a technical SEO audit take?', a: 'A full audit takes 4-6 hours. We scan your site, test on real devices, validate the schema, and write a report. Most fixes can be done within a week of the audit.' },
  { q: 'Do I need both Local SEO and Technical SEO?', a: 'They are complementary. Local SEO gets you in the Map Pack for "[trade] Bath" queries. Technical SEO makes sure your website is fast and accessible to Google so the rest of your SEO work actually pays off. Most clients get both.' },
  { q: 'Will it work for my Wix / Squarespace / WordPress site?', a: 'Yes. The technical issues are usually the same — page speed, schema, mobile, broken links. We work with all platforms. If a platform limitation cannot be fixed (rare), we will tell you in the audit.' },
];

export default function TechnicalSEO() {
  return (
    <>
      <ServicePageHero
        badge="Technical SEO"
        title="Fix what's holding your site back in search."
        highlight="(Without rebuilding it.)"
        description="Technical SEO for trade websites in Bath, Bristol, BANES and South Glos. We audit the plumbing — page speed, schema markup, broken links, crawl issues, mobile usability — then fix what we find. From £150, no long-term contract."
        features={heroFeatures}
        ctaText="Book a technical audit"
        ctaSecondary="See what we check"
        rightPanel={
          <div className="bg-dark-card border border-white/10 rounded-2xl p-6">
            <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-4">
              Common findings
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span className="text-gray-300">4-6s page load (Google wants under 2.5s)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span className="text-gray-300">Missing LocalBusiness schema</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span className="text-gray-300">No sitemap or broken sitemap</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span className="text-gray-300">50+ broken links from old service areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span className="text-gray-300">Mobile text too small on iPhone SE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                <span className="text-gray-300">No canonical tags = duplicate content</span>
              </li>
            </ul>
          </div>
        }
      />

      {/* What we check */}
      <section className="py-20 bg-dark-lighter/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-mono tracking-[0.12em] uppercase text-primary mb-3">
              What we check
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              8 things every technical audit covers.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The plumbing that determines whether your content actually ranks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {checks.map(({ area, detail }) => (
              <div key={area} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{area}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[11px] font-mono tracking-[0.12em] uppercase text-primary mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Two ways to engage.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 sm:p-8">
              <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500 mb-2">Audit only</p>
              <div className="text-4xl font-bold text-white mb-1">£150</div>
              <p className="text-sm text-gray-400 mb-5">One-off. Written report. No fixes.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Full technical audit (8 areas)</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> 3-5 page written report</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Prioritised fix list</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> You or your dev does the fixes</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 sm:p-8 relative">
              <span className="absolute -top-3 right-6 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">Most chosen</span>
              <p className="text-[11px] font-mono uppercase tracking-wider text-primary mb-2">Audit + fixes</p>
              <div className="text-4xl font-bold text-white mb-1">From £300</div>
              <p className="text-sm text-gray-400 mb-5">One-off. We do the work.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Full technical audit</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> All priority fixes implemented</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> Before/after Lighthouse scores</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span> 30 days of post-fix support</li>
              </ul>
            </div>
          </div>
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
