'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

// ─── Constants ─────────────────────────────────────────────────────────────────

const TRADES = [
  'Plumber',
  'Electrician',
  'Roofer',
  'Builder',
  'Painter & Decorator',
  'Cleaner',
  'Landscaper',
  'Kitchen Fitter',
  'Bathroom Fitter',
  'Heating Engineer',
  'Plasterer',
  'Gas Engineer',
];

// ─── Message generators ────────────────────────────────────────────────────────

function generateCasualMessages({ yourName, customerName, jobDone, gbpUrl }) {
  const name = yourName || 'your trader';
  const customer = customerName || 'there';
  const job = jobDone || 'the job';
  const url = gbpUrl || '[your Google review link]';

  return [
    `Hi ${customer}! Just wanted to say thanks for having me round to ${job}. Really glad I could help 👍 If you've got 2 mins, it would mean a lot if you left us a quick Google review — it really helps the business. Here's the link: ${url} Cheers, ${name}`,
    `Hey ${customer}, hope everything's working well after ${job}! If you were happy with the work, would you mind leaving a Google review? Takes less than a minute and really helps us out 🙏 ${url} Thanks, ${name}`,
    `Hi ${customer} 👋 Just checking in — all good since I ${job}? If so, a quick Google review would be amazing if you get the chance: ${url} No worries if not, but every review makes a big difference! ${name}`,
  ];
}

function generateProfessionalMessages({ yourName, customerName, jobDone, gbpUrl }) {
  const name = yourName || 'your trader';
  const customer = customerName || 'there';
  const job = jobDone || 'the recent work';
  const url = gbpUrl || '[your Google review link]';

  return [
    `Dear ${customer}, Thank you for choosing ${name} for ${job}. I hope you're pleased with the result. If you have a moment, I'd be very grateful if you could leave a Google review — it helps other customers find us and means a great deal to the business. ${url} Many thanks, ${name}`,
    `Hi ${customer}, I just wanted to follow up and make sure you're happy with ${job}. If you are, it would be a real help if you could spare a minute to leave a Google review. Your feedback makes a huge difference to a small business like ours. ${url} Thank you very much, ${name}`,
    `Good ${customer}, Thank you for trusting me with ${job}. It was a pleasure to work for you. If you were satisfied with the service, a Google review would be enormously appreciated — it helps customers in your area find reliable tradespeople. ${url} With thanks, ${name}`,
  ];
}

// ─── Copy button ───────────────────────────────────────────────────────────────

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
        copied
          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : 'bg-white/[0.06] text-gray-400 hover:bg-white/10 hover:text-white border border-white/[0.06]'
      }`}
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

// ─── WhatsApp button ───────────────────────────────────────────────────────────

function WhatsAppButton({ text }) {
  const encoded = encodeURIComponent(text);
  return (
    <a
      href={`https://wa.me/?text=${encoded}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all"
    >
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Send via WhatsApp
    </a>
  );
}

// ─── Message card ──────────────────────────────────────────────────────────────

function MessageCard({ number, text, isEmpty }) {
  return (
    <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary">
          Variation {number}
        </span>
        {!isEmpty && (
          <div className="flex items-center gap-2">
            <CopyButton text={text} />
            <WhatsAppButton text={text} />
          </div>
        )}
      </div>
      <p className={`text-sm leading-relaxed whitespace-pre-line ${isEmpty ? 'text-gray-600 italic' : 'text-gray-300'}`}>
        {isEmpty
          ? 'Fill in your details to see your personalised message'
          : text}
      </p>
    </div>
  );
}

// ─── JSON-LD schema ────────────────────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/review-request-generator',
      url: 'https://seo-kings.co.uk/review-request-generator',
      name: 'Free Google Review Request Generator for Tradespeople | SEO Kings',
      description: 'Generate a personalised WhatsApp message asking your customer for a Google review. Free tool for plumbers, electricians, builders and trades across the UK.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Review Request Generator' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/review-request-generator',
      telephone: '+447702264921',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '16a Culvers Road',
        addressLocality: 'Keynsham',
        addressRegion: 'Bath and North East Somerset',
        postalCode: 'BS31 2DW',
        addressCountry: 'GB',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 51.4145, longitude: -2.4965 },
      areaServed: [{ '@type': 'City', name: 'Bath' }, { '@type': 'City', name: 'Keynsham' }],
      priceRange: '££',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:30' },
      ],
    },
  ],
};

// ─── Main component ────────────────────────────────────────────────────────────

export default function ReviewRequestGenerator() {
  const [yourName, setYourName] = useState('');
  const [trade, setTrade] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [jobDone, setJobDone] = useState('');
  const [gbpUrl, setGbpUrl] = useState('');
  const [tone, setTone] = useState('casual');
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const hasMinimum = yourName.trim() || customerName.trim() || jobDone.trim();

  const messages = hasMinimum
    ? tone === 'casual'
      ? generateCasualMessages({ yourName: yourName.trim(), customerName: customerName.trim(), jobDone: jobDone.trim(), gbpUrl: gbpUrl.trim() })
      : generateProfessionalMessages({ yourName: yourName.trim(), customerName: customerName.trim(), jobDone: jobDone.trim(), gbpUrl: gbpUrl.trim() })
    : ['', '', ''];

  function handleEmailSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      console.log('Review request generator email capture:', email.trim());
      setEmailSent(true);
    }
  }

  const inputClass = 'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all';
  const labelClass = 'block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide';

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary mb-4">
            Free tool for tradespeople
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Google Review Request
            <span className="block text-primary">Generator</span>
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
            Fill in a few details and get 3 ready-to-send WhatsApp messages asking your customer for a Google review — personalised, professional, and ready in seconds.
          </p>
        </div>
      </section>

      {/* Main tool */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* ── Left: form ── */}
            <div className="space-y-5">
              <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 space-y-5">

                {/* Your name */}
                <div>
                  <label className={labelClass}>Your first name</label>
                  <input
                    type="text"
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    placeholder="e.g. Richard"
                    className={inputClass}
                  />
                </div>

                {/* Trade */}
                <div>
                  <label className={labelClass}>Your trade</label>
                  <select
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select your trade…</option>
                    {TRADES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Customer name */}
                <div>
                  <label className={labelClass}>Customer's first name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Dave"
                    className={inputClass}
                  />
                </div>

                {/* Job done */}
                <div>
                  <label className={labelClass}>What job did you do?</label>
                  <input
                    type="text"
                    value={jobDone}
                    onChange={(e) => setJobDone(e.target.value)}
                    placeholder="e.g. fixed a leaking pipe under the kitchen sink"
                    className={inputClass}
                  />
                  <p className="text-xs text-gray-600 mt-1.5">Keep it brief — one short sentence works best</p>
                </div>

                {/* GBP URL */}
                <div>
                  <label className={labelClass}>Your Google Business Profile URL</label>
                  <input
                    type="url"
                    value={gbpUrl}
                    onChange={(e) => setGbpUrl(e.target.value)}
                    placeholder="https://g.page/your-business"
                    className={inputClass}
                  />
                  <p className="text-xs text-gray-600 mt-1.5">
                    Find this in Google Business Profile → Share profile
                  </p>
                </div>

                {/* Tone toggle */}
                <div>
                  <label className={labelClass}>Message tone</label>
                  <div className="flex rounded-xl overflow-hidden border border-white/[0.08] w-fit">
                    <button
                      onClick={() => setTone('casual')}
                      className={`px-5 py-2.5 text-sm font-semibold transition-all ${
                        tone === 'casual'
                          ? 'bg-primary text-white'
                          : 'bg-white/[0.04] text-gray-400 hover:text-white'
                      }`}
                    >
                      Casual
                    </button>
                    <button
                      onClick={() => setTone('professional')}
                      className={`px-5 py-2.5 text-sm font-semibold transition-all ${
                        tone === 'professional'
                          ? 'bg-primary text-white'
                          : 'bg-white/[0.04] text-gray-400 hover:text-white'
                      }`}
                    >
                      Professional
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: preview ── */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary">
                  Live preview — {tone} tone
                </p>
                {hasMinimum && (
                  <span className="text-xs text-gray-600">Click Copy or send straight to WhatsApp</span>
                )}
              </div>

              {messages.map((msg, i) => (
                <MessageCard
                  key={i}
                  number={i + 1}
                  text={msg}
                  isEmpty={!hasMinimum}
                />
              ))}

              {/* Bottom nudge */}
              <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-5 text-sm text-gray-400 leading-relaxed">
                Send a review request after every job and watch your star rating climb. Need help getting found on Google?{' '}
                <Link href="/contact" className="text-primary hover:underline font-semibold">
                  Get a free audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">
            Never forget
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-3">
            Want a weekly reminder?
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Enter your email and we'll send you a weekly prompt to request reviews after every job.
          </p>

          {emailSent ? (
            <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              You're in — we'll be in touch!
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-all"
              />
              <button
                type="submit"
                disabled={!email.trim()}
                className="bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shrink-0"
              >
                Yes please
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-4">
            More than just reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
            Want customers to find you in the first place?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Reviews help once someone finds you. Local SEO gets them there. We help tradespeople across Bath and Somerset rank in the Google Map Pack and get a steady stream of enquiries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-xl font-semibold transition-all"
            >
              Get a free audit
            </Link>
            <Link
              href="/local-seo/bath"
              className="inline-block bg-dark-card border border-white/10 hover:border-white/20 text-gray-300 px-6 py-3 rounded-xl font-medium transition-all"
            >
              Learn about Local SEO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
