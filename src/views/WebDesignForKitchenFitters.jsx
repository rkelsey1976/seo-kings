'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const features = [
  'Project gallery with before/after photos — the #1 thing kitchen customers want to see before they call',
  'Dedicated service pages: kitchen fitting, kitchen design, worktops, appliances',
  'Planning permission page for Bath — addresses conservation area concerns head-on',
  'Trustatrader and FMB badges displayed prominently — trust signals that convert',
  'Google Business Profile optimised for kitchen fitting categories',
  'Service area pages for every town you cover',
  'Review integration — show your Google, Trustatrader and FMB ratings',
  'Mobile-first design — kitchen research happens on phones during evenings and weekends',
];

const recommendedPages = [
  { page: 'Home', detail: 'Gallery hook, click-to-call, service summary, reviews and badges' },
  { page: 'Kitchen fitting', detail: 'Core service — process, materials, timelines, gallery' },
  { page: 'Kitchen design', detail: 'Design-led customers search for this separately — needs its own page' },
  { page: 'Worktops', detail: 'Granite, quartz, laminate — high search volume with local intent' },
  { page: 'Appliances', detail: 'Integrated appliances, appliance installation — targets specific searches' },
  { page: 'Planning permission', detail: 'Bath conservation area rules — answers the question before they ask it' },
  { page: 'Bath area page', detail: 'Period property expertise, Georgian kitchens, Bath stone — local authority knowledge' },
  { page: 'About', detail: 'FMB/Trustatrader badges, years experience, team photo — essential trust signals' },
];

const faqs = [
  {
    q: 'Does my kitchen fitting business need a website or just a Google Business Profile?',
    a: 'Both — and they work better together. Your Google Business Profile gets you into the Map Pack when someone searches "kitchen fitter near me". Your website is where they go to see your before/after photos, check your FMB or Trustatrader credentials and decide whether to book a consultation. Kitchen fitting is a high-value purchase — customers need reassurance before they call. A profile without a website loses jobs to fitters who show their work. We set up and optimise both.',
  },
  {
    q: 'Do I need a project gallery on my website?',
    a: 'Absolutely. Before/after photos are the single most important content on a kitchen fitters website. Customers want to see the quality of your work before they pick up the phone. A strong gallery with before shots, during construction and the finished kitchen builds confidence and generates more enquiries than any amount of text. We build galleries that load fast and look great on mobile.',
  },
  {
    q: 'Should I have separate pages for kitchen fitting and kitchen design?',
    a: 'Yes. "Kitchen fitting" and "kitchen design" are different search intents. Someone searching "kitchen design Bath" is looking for a design-led service — they want to see your ideas and creativity. Someone searching "kitchen fitter Bath" may already have a design and needs installation. Separate pages target both audiences properly. Your homepage cannot rank for both equally well.',
  },
  {
    q: 'Do I need a planning permission page if I work in Bath?',
    a: 'Yes — it is a significant advantage. Bath has a high concentration of period properties in conservation areas, and kitchen work in these homes often requires planning permission or listed building consent. A page that addresses this directly reassures customers that you understand the local rules and can handle the process. It also targets searches like "kitchen planning permission Bath" and "conservation area kitchen Bath", which your competitors almost certainly ignore.',
  },
  {
    q: 'Should I display my Trustatrader and FMB badges on the site?',
    a: 'Yes — prominently. Kitchen fitting is a high-value purchase and trust is the biggest barrier to enquiry. Trustatrader verification and FMB membership are two of the strongest trust signals in the trades. They should be visible on every page — ideally in the footer and prominently on your service and about pages. We build this in as standard.',
  },
  {
    q: 'How many pages does a kitchen fitter website need?',
    a: 'A minimum of 5–7 for a solid local ranking: home, kitchen fitting, kitchen design, worktops or appliances, a planning permission page for your area, an about page and a contact page. A Bath area page and service area pages for towns you cover add significant ranking power over time. We will discuss the right structure for your business during the free audit.',
  },
  {
    q: 'How quickly can you build my kitchen fitter website?',
    a: 'Most sites are live within 2 weeks of receiving your content. We need your services, areas covered, before/after photos, FMB/Trustatrader details and any existing branding. We can write the copy for you too. The gallery is typically the part that takes longest to pull together — we will help you organise it for maximum impact.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/web-design-for/kitchen-fitters',
      url: 'https://seo-kings.co.uk/web-design-for/kitchen-fitters',
      name: 'Web Design for Kitchen Fitters | SEO Kings',
      description: 'Websites for kitchen fitters in Bath & Somerset. Fast, mobile-first, built to rank for local search. Project galleries, before/after photos, FMB badge display, dedicated service pages, Google Business Profile included. From £399.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Web Design for Kitchen Fitters' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://seo-kings.co.uk/web-design-for/kitchen-fitters/#service',
      name: 'Web Design for Kitchen Fitters',
      description: 'Website design for kitchen fitting businesses in Bath and North East Somerset. Fast, mobile-first sites with project galleries, before/after photos, FMB/Trustatrader badge display, dedicated service pages, and Google Business Profile optimisation.',
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Bath' },
        { '@type': 'City', name: 'Keynsham' },
        { '@type': 'City', name: 'Midsomer Norton' },
      ],
      offers: {
        '@type': 'Offer',
        price: '399',
        priceCurrency: 'GBP',
        description: 'Kitchen fitter website from £399 including Google Business Profile set-up',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/web-design-for/kitchen-fitters',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Somerset',
        postalCode: 'BS31 2DW',
        addressCountry: 'GB',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

const WebDesignForKitchenFitters = () => {
  return (
    <>
      <SEO
        title="Web Design for Kitchen Fitters Bath & Somerset | From £399"
        description="Websites for kitchen fitters in Bath & Somerset. Fast, mobile-first, built for local search. Project galleries, before/after photos, FMB badges, service pages, Google Business Profile included. From £399."
        canonical="/web-design-for/kitchen-fitters"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Web Design for Kitchen Fitters' },
        ]}
        schemas={[schema]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>
              Web design for trades · Kitchen Fitters
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Web Design for{' '}
              <span style={{ color: '#E8715A' }}>Kitchen Fitters</span>
              {' '}in Bath & Somerset
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-6">
              Kitchen fitting is a visual, trust-driven business. Customers spend weeks browsing before/after photos, reading reviews and comparing fitters before they ever pick up the phone. If your website doesn't showcase your work beautifully and prominently display your credentials, those enquiries go to the fitter whose site does.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              We build websites for kitchen fitters in Bath, Keynsham, Midsomer Norton and across North East Somerset — with project galleries, before/after photos, FMB and Trustatrader badge display, dedicated service pages, and Google Business Profile optimisation as standard. From £399.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200" style={{ backgroundColor: '#C25245' }}>
                Get a Free Audit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+447702264921" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border border-white/10 hover:border-white/20 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                07702 264 921
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {['From £399', 'FMB/Trustatrader badges included', 'Before/after gallery as standard', 'Live in under 2 weeks'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 shrink-0" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why kitchen fitter sites fail */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>The problem</p>
            <h2 className="text-3xl font-bold text-white mb-6">Why most kitchen fitter websites don't generate enquiries</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The majority of kitchen fitter websites either bury their portfolio in a clunky gallery that's slow to load on mobile, or they don't show one at all. Kitchen fitting is a visual business — if customers can't see your before/after photos clearly and quickly, they won't call. A few stock images and a paragraph about "quality workmanship" isn't enough.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Beyond the gallery problem, many kitchen fitter sites try to cover every service on a single page. "Kitchen fitting, design, worktops, appliances — we do it all" crammed onto one services page means you rank for none of those searches individually. Google's algorithm looks for a page specifically about "kitchen design Bath" or "worktop installation Keynsham" — not a catch-all that mentions everything once.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Then there's trust. Kitchen installs cost thousands and disrupt your home for weeks. Customers need reassurance before they commit — FMB membership, Trustatrader reviews, planning permission expertise for period properties. A professional site that communicates all of this clearly converts enquiries that a generic template loses.
            </p>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>What's included</p>
              <h2 className="text-3xl font-bold text-white mb-6">Built specifically for kitchen fitting businesses</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every site we build for a kitchen fitter is designed around how kitchen customers actually search — gallery first, services second, trust throughout. Not a generic template with your logo dropped in.
              </p>
              <ul className="space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#E8715A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Recommended site structure</p>
              <p className="text-sm text-gray-400 mb-6">Pages that give you the best chance of ranking for every service you offer — not just one catch-all services page.</p>
              <ul className="space-y-4">
                {recommendedPages.map((item) => (
                  <li key={item.page} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                    <div className="text-white font-semibold text-sm mb-1">{item.page}</div>
                    <div className="text-gray-500 text-xs">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Pricing</p>
            <h2 className="text-3xl font-bold text-white mb-6">Straightforward pricing, no surprises</h2>
            <div className="space-y-4 mb-8">
              {[
                { name: 'Starter', desc: '1-page site — home, services summary, contact', price: 'From £399' },
                { name: 'Professional', desc: '3-page site — home, 1 service page with gallery, contact', price: 'From £599' },
                { name: 'Full', desc: '5+ pages — home, service pages, before/after gallery, planning permission, about', price: 'From £999' },
              ].map((pkg) => (
                <div key={pkg.name} className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0">
                  <div>
                    <div className="text-white font-semibold text-sm">{pkg.name}</div>
                    <div className="text-gray-500 text-xs">{pkg.desc}</div>
                  </div>
                  <div className="font-bold shrink-0 ml-4" style={{ color: '#E8715A' }}>{pkg.price}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-6">All packages include Google Business Profile set-up and optimisation. No hidden fees. No lock-in contracts.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200" style={{ backgroundColor: '#C25245' }}>
              Get a Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>Local knowledge</p>
            <h2 className="text-3xl font-bold text-white mb-6">We know the Bath & Somerset kitchen fitting market</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Bath has one of the highest concentrations of period properties in the country — Georgian townhouses, Victorian terraces and listed buildings that require specialist knowledge when it comes to kitchen work. Conservation area restrictions in BA1 and BA2 mean that kitchen fitters who understand planning permission, listed building consent and Bath stone construction have a genuine advantage. A website that addresses these concerns directly converts customers who would otherwise be unsure whether their project is even possible.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Georgian kitchens in Bath present particular challenges — asymmetrical rooms, original features that must be preserved, and strict local authority requirements for any structural changes. Kitchen fitters who can demonstrate this expertise online win the high-value period property work that generic fitters can't handle. A dedicated Bath area page targeting these searches is a significant competitive advantage.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Keynsham, Midsomer Norton and Radstock have a different mix — more modern housing estates, growing new-build developments, and lower online competition than the city. A well-optimised site and Google Business Profile in these areas can reach the Map Pack faster than the same work would take in central Bath. We're based in Keynsham and build sites for trades across the whole area. We know which searches convert in each postcode and build every site to target them specifically.
            </p>
            <address className="not-italic text-sm text-gray-400 leading-relaxed border-l-2 pl-4" style={{ borderColor: '#E8715A' }}>
              SEO Kings<br />
              16a Culvers Road<br />
              Keynsham, Somerset<br />
              BS31 2DW<br />
              <a href="tel:+447702264921" className="hover:text-white transition-colors">07702 264 921</a>
            </address>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4" style={{ color: '#E8715A' }}>FAQs</p>
            <h2 className="text-3xl font-bold text-white mb-10">Common questions about kitchen fitter websites</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-6" style={{ color: '#E8715A' }}>Related services</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/local-seo" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Local SEO for Kitchen Fitters</div>
                <div className="text-xs text-gray-500">Ongoing SEO to rank higher in Bath & Somerset — from £150/month</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/google-business-profile" className="flex items-center justify-between p-5 bg-dark-card border border-white/[0.06] rounded-xl hover:border-white/10 transition-colors group">
              <div>
                <div className="text-sm font-semibold text-white mb-1">Google Business Profile</div>
                <div className="text-xs text-gray-500">Get into the Map Pack for kitchen fitting searches in your area</div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default WebDesignForKitchenFitters;