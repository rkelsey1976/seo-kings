'use client';
import { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import SectionTag from '../components/SectionTag';

const PDF_PATH = '/downloads/local-seo-checklist-for-trades.pdf';

const SECTIONS = [
  {
    heading: 'Google Business Profile — the fastest win',
    items: [
      'Profile claimed and verified',
      'Primary category is your exact trade ("Plumber", not "Contractor")',
      'Every service listed, each with a short description',
      '10+ real photos of your work — add more monthly',
      'Opening hours accurate, including holidays',
      'Phone number matches your website exactly',
      'Service areas list the suburbs you actually cover',
      'One post a month minimum — a job, a review, an offer',
    ],
  },
  {
    heading: 'Reviews — the biggest ranking lever',
    items: [
      'Ask every satisfied customer, the same day',
      'Send a direct review link, not "find us on Google"',
      'Aim for two or more new reviews a month',
      'Reply to every review within a week',
      'Happy customers asked to mention trade + area',
    ],
  },
  {
    heading: 'Your website',
    items: [
      'Loads in under 3 seconds on a phone',
      'HTTPS — the padlock shows',
      'Click-to-call number at the top of every page',
      'A page for each service you offer',
      'The towns you serve named in real sentences',
      'Name, address and phone identical to your GBP',
    ],
  },
  {
    heading: 'Consistency across the web',
    items: [
      'Same details on Yell, Checkatrade, Facebook and other directories',
      'No old addresses or numbers left anywhere',
      'Facebook page details match your GBP',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/tools/local-seo-checklist',
      url: 'https://seo-kings.co.uk/tools/local-seo-checklist',
      name: 'The Local SEO Checklist for Trades — Free PDF | SEO Kings',
      description:
        'The 22 things that decide whether a trade business shows up on Google Maps — Google Business Profile, reviews, website and citations. Free printable PDF.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Trades Growth Hub', item: 'https://seo-kings.co.uk/tools' },
          { '@type': 'ListItem', position: 3, name: 'Local SEO Checklist' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      name: 'The Local SEO Checklist for Trades',
      description: 'A 22-point checklist covering Google Business Profile, reviews, website basics and citation consistency for trade businesses.',
      step: SECTIONS.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.heading,
        itemListElement: s.items.map((text, j) => ({ '@type': 'HowToDirection', position: j + 1, text })),
      })),
    },
  ],
};

export default function ChecklistDownload() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'checklist-download', email: email.trim() }).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('done');
      window.open(PDF_PATH, '_blank');
    } catch {
      // Never block the download on a form hiccup — the PDF is the promise.
      setStatus('done');
      window.open(PDF_PATH, '_blank');
    }
  }

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero + gate */}
      <section className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag className="mb-6">Free download</SectionTag>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                The Local SEO Checklist <span className="text-primary">for Trades</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                The 22 things that decide whether your business shows up when someone nearby
                searches for your trade. It&apos;s the same list we work through in paid audits —
                printable, tickable, no jargon.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Most trades can tick fewer than half. That&apos;s not a scare line — it&apos;s why
                the Google Map Pack is winnable for whoever fixes these first.
              </p>
            </div>

            <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8">
              {status === 'done' ? (
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">Your checklist is ready</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    If it didn&apos;t open automatically, download it here:
                  </p>
                  <a
                    href={PDF_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors mb-4"
                  >
                    Download the PDF
                  </a>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Work through it, and if you&apos;d rather we checked for you —{' '}
                    <Link href="/contact" className="text-primary hover:underline">the audit is free</Link>.
                  </p>
                </div>
              ) : (
                <form
                  name="checklist-download"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="checklist-download" />
                  <p className="hidden">
                    <label>Don&apos;t fill this in: <input name="bot-field" /></label>
                  </p>
                  <h2 className="text-xl font-bold text-white mb-3">Get the PDF</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Pop your email in and the checklist opens straight away.
                  </p>
                  <label htmlFor="checklist-email" className="sr-only">Email address</label>
                  <input
                    id="checklist-email"
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourtrade.co.uk"
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 mb-4"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-60"
                  >
                    {status === 'sending' ? 'One second…' : 'Send me the checklist'}
                  </button>
                  <p className="text-gray-600 text-xs leading-relaxed mt-4">
                    Occasional local SEO tips for trades, nothing else. Unsubscribe any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The checklist itself, on the page */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag className="mb-4">What&apos;s on it</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight tracking-tight">
            All 22 points, right here
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {SECTIONS.map((section) => (
              <div key={section.heading} className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                <h3 className="text-white font-semibold text-sm mb-4">{section.heading}</h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mt-8 max-w-2xl">
            No secrets held back — the PDF is the same list in printable form. If working through
            it raises questions, the{' '}
            <Link href="/google-business-profile-score-checker" className="text-primary hover:underline">GBP Score Checker</Link>{' '}
            scores the profile section for you in two minutes, and{' '}
            <Link href="/contact" className="text-primary hover:underline">the full audit is free</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
