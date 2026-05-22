'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ServicePageHero from '../components/ServicePageHero';
import CTABanner from '../components/CTABanner';
import FAQAccordion from '../components/FAQAccordion';

const faqs = [
  {
    q: 'Is hosting included with my website?',
    a: 'You get 6 months of hosting free with every website we build. After that, hosting is £50 per year. No surprise bills — we remind you before it renews, and there are no lock-in contracts.',
  },
  {
    q: 'What does hosting include?',
    a: 'SSL certificate (the padlock in the browser), daily automated backups, uptime monitoring with alerts, security updates, and content tweaks. If you need a phone number changed, a photo swapped, or a paragraph updated, just ask — small changes are included.',
  },
  {
    q: 'What counts as a content tweak?',
    a: 'A content tweak is a small change to the text, images or layout of your existing pages. Swapping a photo, updating a phone number, adding a testimonial, changing opening hours — all included. Larger changes like adding a new page or redesigning a section are quoted separately.',
  },
  {
    q: 'Can I host my site somewhere else?',
    a: 'Yes. Your site is yours. If you want to move it to another host, we package everything up and hand it over. But most clients stay because £50/year for hosting, backups, monitoring and content tweaks is hard to beat.',
  },
  {
    q: 'What happens if my site goes down?',
    a: 'We monitor uptime 24/7. If something goes wrong, we know about it immediately and fix it. Most issues are resolved within the hour. You do not need to call your host, open a ticket, or figure out what went wrong — we handle all of it.',
  },
  {
    q: 'How do backups work?',
    a: 'Your site is backed up daily. If anything goes wrong — a hack, an accidental delete, a broken update — we restore your site from the most recent backup. You never have to think about it.',
  },
  {
    q: 'Do I need to renew my SSL certificate?',
    a: 'No. SSL is included and renewed automatically. Your site always shows the padlock in the browser. You never have to think about certificates or expirations.',
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Free SSL Certificate',
    description: 'The padlock in the browser. Auto-renewed, always active. Google penalises sites without SSL — yours always has it.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Daily Automated Backups',
    description: 'Your entire site backed up every day. Something goes wrong, we restore from the most recent backup. You never lose work.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Uptime Monitoring',
    description: '24/7 monitoring with instant alerts. If your site goes down, we know and fix it before your customers notice.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Content Tweaks',
    description: 'Phone number changed? New photo to add? Opening hours updated? Just ask. Small changes included, no extra charge.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast UK Hosting',
    description: 'Your site runs on UK servers. Fast load times for local customers searching for your trade in Bath and Somerset.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Direct Support',
    description: 'Something wrong? Call us or message us directly. No ticket queues, no chatbots. You speak to the person who built your site.',
  },
];

const hostingRightPanel = (
  <div className="relative bg-dark-card border border-white/10 rounded-2xl p-8">
    <p className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-6">Why SEO Kings</p>
    <div className="space-y-4">
      {[
        { label: 'Free with every website', value: '6 months' },
        { label: 'Annual price after that', value: '£50/yr' },
        { label: 'Years of experience', value: '22' },
        { label: 'Uptime monitoring', value: '24/7' },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
          <span className="text-gray-400 text-sm">{label}</span>
          <span className="text-xl font-bold text-white">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const Hosting = () => {
  return (
    <>
      <SEO
        title="Website Hosting for Trades — Bath & Somerset | SEO Kings"
        description="Website hosting with SSL, daily backups, uptime monitoring and content tweaks. 6 months free with every website, then £50/year. No lock-in. Bath & Somerset."
        canonical="/hosting"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Hosting' },
        ]}
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://seo-kings.co.uk/services' },
              { '@type': 'ListItem', position: 3, name: 'Website Hosting', item: 'https://seo-kings.co.uk/hosting' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://seo-kings.co.uk/hosting/#service',
            serviceType: 'Website Hosting',
            name: 'Website Hosting and Maintenance',
            description: 'Website hosting with SSL, daily backups, uptime monitoring and content tweaks for trades and local businesses in Bath & Somerset. 6 months free, then £50/year.',
            provider: { '@id': 'https://seo-kings.co.uk/#organization' },
            areaServed: { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
            offers: {
              '@type': 'Offer',
              name: 'Annual Hosting and Maintenance',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: 199,
                priceCurrency: 'GBP',
                unitText: 'per year',
              },
              description: 'SSL, daily backups, uptime monitoring, content tweaks. First 6 months free with every website.',
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://seo-kings.co.uk/hosting' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          },
        ]}
      />

      <ServicePageHero
        badge="Website Hosting"
        title="Hosting That Handles Itself"
        highlight="So You Don't Have To"
        description="SSL, backups, monitoring, content tweaks — all included. 6 months free with every website, then £50/year. You focus on the job. We keep your site fast, secure and online."
        features={['6 months free', '£50/year after', 'No lock-in contracts', 'Direct support']}
        ctaText="Get Your Free Audit"
        rightPanel={hostingRightPanel}
      />

      {/* What you get */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">What is included</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4 leading-tight tracking-tight">
              Everything your site needs to stay live and secure
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No shopping around for SSL providers, backup plugins, or monitoring tools. We handle all of it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <div className="mb-4 text-primary">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-dark-lighter border-y border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 leading-tight tracking-tight">
            Simple, flat-rate hosting
          </h2>
          <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 mb-6">
            <div className="text-5xl font-bold mb-2 text-primary">£50<span className="text-xl font-medium text-gray-400">/year</span></div>
            <p className="text-gray-400 mb-6">6 months free with every website, then £50/year. No lock-in.</p>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {[
                'Free SSL certificate — auto-renewed',
                'Daily automated backups',
                '24/7 uptime monitoring with instant alerts',
                'Security updates applied automatically',
                'Content tweaks included (text, photos, hours)',
                'UK-based fast hosting',
                'Direct support — speak to your developer',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500">
            Hosting renews annually. We email you before renewal. Cancel anytime. No cancellation fees.
          </p>
        </div>
      </section>

      {/* Why not go elsewhere */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary">Why our hosting</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-6 leading-tight tracking-tight">
                Not just hosting — peace of mind
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Lots of hosts are cheaper. None of them include content tweaks, direct support from your developer, or proactive monitoring. GoDaddy, 123-Reg, Heart Internet — they sell you space on a server and wish you luck.
                </p>
                <p>
                  With us, if your site goes down at 2am on a Sunday, we fix it. If you need a phone number changed on a Friday evening, you message us and it is done. Your site is hosted by the person who built it — not a call centre.
                </p>
                <p>
                  £50/year works out at less than £5/month. For that, you never have to think about SSL renewals, backup plugins, server updates, or why your site is slow. We handle all of it.
                </p>
              </div>
            </div>
            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Us vs typical hosting</h3>
              <div className="space-y-4">
                {[
                  { ours: 'SSL included, auto-renewed', theirs: 'SSL extra or manual renewal' },
                  { ours: 'Daily backups, one-click restore', theirs: 'Weekly backups, if any' },
                  { ours: '24/7 uptime monitoring', theirs: 'You notice when it is down' },
                  { ours: 'Content tweaks included', theirs: 'Extra charge per change' },
                  { ours: 'Direct developer support', theirs: 'Call centre or ticket queue' },
                  { ours: 'Security updates applied for you', theirs: 'You apply them yourself' },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4 text-sm">
                    <div className="flex-1">
                      <span className="inline-block px-2 py-0.5 bg-green-500/10 text-green-400 text-xs font-medium rounded mb-1">Us</span>
                      <p className="text-gray-300">{row.ours}</p>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-0.5 bg-red-500/10 text-red-400 text-xs font-medium rounded mb-1">Typical</span>
                      <p className="text-gray-500">{row.theirs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-dark-lighter border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">Hosting FAQs</h2>
            <p className="text-lg text-gray-400">Everything you need to know about website hosting with SEO Kings.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Hosting;