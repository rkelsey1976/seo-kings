'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

// ─── Checklist data ────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: 'basic',
    label: 'Basic Setup',
    points: 20,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { id: 'name', text: 'Business name is correct and consistent across the web', points: 4, tip: 'Your business name should match exactly on your website, social media, and any directories. Inconsistency confuses Google and hurts your local ranking.' },
      { id: 'category', text: 'Primary category is specific (e.g. "Plumber" not just "Contractor")', points: 4, tip: 'Choose the most specific category for your trade. This is one of the biggest ranking factors — Google needs to know exactly what you do.' },
      { id: 'phone', text: 'Phone number added and correct', points: 4, tip: 'Your phone number should be a local number if possible (07xxx or 01xxx/02xxx) and match what\'s on your website exactly.' },
      { id: 'website', text: 'Website URL added', points: 4, tip: 'Add your website URL. If you don\'t have a site yet, this is costing you clicks every single day.' },
      { id: 'hours', text: 'Business hours set for every day (or marked as closed)', points: 4, tip: 'Set hours for every day of the week, even if you\'re closed on some days. Profiles with complete hours rank better and build trust with potential customers.' },
    ],
  },
  {
    id: 'location',
    label: 'Location & Service Area',
    points: 15,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { id: 'verified', text: 'Address is verified with Google', points: 5, tip: 'Unverified profiles don\'t rank in the Map Pack. If you haven\'t verified yet, request the postcard or phone verification from Google immediately.' },
      { id: 'service_area', text: 'Service area towns are listed', points: 5, tip: 'Add every town you genuinely work in. This is separate from your address — it tells Google (and customers) where you travel to.' },
      { id: 'map_pin', text: 'Map pin is in the correct location', points: 5, tip: 'Check your pin on Google Maps. If it\'s dropped in the wrong street or area, drag it to the correct location — this affects which searches you appear for.' },
    ],
  },
  {
    id: 'description',
    label: 'Business Description',
    points: 15,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    items: [
      { id: 'desc_exists', text: 'Description is written (not blank)', points: 5, tip: 'A blank description is a missed opportunity. Google uses it to understand your business — and customers read it before deciding to call.' },
      { id: 'desc_keywords', text: 'Description mentions your main service AND your location', points: 5, tip: 'E.g. "Plumber in Bath" or "kitchen fitter covering Keynsham and Radstock". Naturally including your service and area helps Google match you to local searches.' },
      { id: 'desc_length', text: 'Description is at least 200 characters', points: 5, tip: 'Aim for 300–750 characters. Cover what you do, where you work, how long you\'ve been trading, and what makes you different. No keyword stuffing.' },
    ],
  },
  {
    id: 'photos',
    label: 'Photos',
    points: 20,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { id: 'logo', text: 'Logo is uploaded', points: 4, tip: 'Your logo appears next to your business name in some views. Use a clean version on a plain background — minimum 250×250px, square format.' },
      { id: 'cover', text: 'Cover photo is uploaded', points: 4, tip: 'This is the first photo customers see. Use a professional photo of your work, your van, or your team — not a generic stock image.' },
      { id: 'photos_5', text: 'At least 5 photos added', points: 4, tip: 'Profiles with more photos get significantly more views. Add photos of your work, before/after shots, your team, and your van or equipment.' },
      { id: 'photos_10', text: 'At least 10 photos added', points: 4, tip: 'Google\'s own data shows that profiles with 10+ photos get 35% more clicks. Keep adding real photos of real jobs.' },
      { id: 'photos_recent', text: 'Photos updated in the last 3 months', points: 4, tip: 'Fresh photos signal an active business. Add a new photo every couple of weeks — even just a quick snap of a completed job.' },
    ],
  },
  {
    id: 'reviews',
    label: 'Reviews',
    points: 20,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    items: [
      { id: 'reviews_5', text: 'You have at least 5 reviews', points: 5, tip: 'Five reviews is the minimum to be taken seriously. If you\'re below this, start asking every satisfied customer — most are happy to help if you make it easy.' },
      { id: 'rating', text: 'Average rating is 4.0 or above', points: 5, tip: 'Below 4.0 and most people won\'t call. If you have low ratings, respond professionally to every review and focus on getting fresh positive ones.' },
      { id: 'responded', text: 'You have responded to ALL reviews', points: 5, tip: 'Responding to reviews — including negative ones — shows Google and customers that you\'re an engaged, professional business. Never ignore a review.' },
      { id: 'asking', text: 'You actively ask customers for reviews', points: 5, tip: 'The easiest way to get reviews: send customers your Google review link directly after a job. Create a short link at g.page/[your-business] and text it to happy customers.' },
    ],
  },
  {
    id: 'activity',
    label: 'Posts & Activity',
    points: 10,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    items: [
      { id: 'recent_post', text: 'You\'ve posted an update in the last 7 days', points: 5, tip: 'Google Posts appear in your profile and signal activity. Post about a recent job, a seasonal offer, or a helpful tip. Takes 5 minutes.' },
      { id: 'regular_posts', text: 'You use Google Posts regularly (at least monthly)', points: 5, tip: 'Consistent posting keeps your profile fresh and can directly influence your Map Pack position. Aim for at least one post per week.' },
    ],
  },
];

const TOTAL_POINTS = CATEGORIES.reduce((sum, cat) => sum + cat.points, 0);

const GRADE_BANDS = [
  { min: 90, grade: 'A', label: 'Excellent', message: 'Your GBP is working hard for you — this is the standard that wins Map Pack positions.', colour: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/30' },
  { min: 70, grade: 'B', label: 'Good', message: 'A few tweaks could push you into the Map Pack. Focus on the items below.', colour: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
  { min: 50, grade: 'C', label: 'Needs work', message: 'You\'re leaving enquiries on the table. Fix the gaps below and you\'ll see a real difference.', colour: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30' },
  { min: 0, grade: 'D', label: 'Major gaps', message: 'Your competitors are getting calls you should be getting. Start with the basics below.', colour: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' },
];

function getBand(score) {
  return GRADE_BANDS.find((b) => score >= b.min);
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function CheckItem({ item, state, onChange }) {
  const isYes = state === true;
  const isNo = state === false;

  return (
    <div className={`rounded-xl border p-4 transition-all duration-200 ${
      isYes ? 'border-green-500/40 bg-green-500/5' : isNo ? 'border-red-500/30 bg-red-500/5' : 'border-white/[0.06] bg-dark-card'
    }`}>
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-200 leading-snug">{item.text}</p>
          <p className="text-xs text-primary mt-0.5">{item.points} {item.points === 1 ? 'point' : 'points'}</p>
        </div>
        <div className="flex gap-2 shrink-0 mt-0.5">
          <button
            onClick={() => onChange(item.id, isYes ? null : true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isYes
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                : 'bg-white/[0.06] text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => onChange(item.id, isNo ? null : false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isNo
                ? 'bg-red-500/80 text-white shadow-lg shadow-red-500/20'
                : 'bg-white/[0.06] text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            No
          </button>
        </div>
      </div>

      {/* Tip — shown when answered No */}
      {isNo && (
        <div className="mt-3 flex gap-2 text-xs text-amber-300/90 bg-amber-400/5 border border-amber-400/15 rounded-lg px-3 py-2">
          <svg className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{item.tip}</span>
        </div>
      )}
    </div>
  );
}

function CategorySection({ category, answers, onChange }) {
  const scored = category.items.reduce((sum, item) => answers[item.id] === true ? sum + item.points : sum, 0);
  const answered = category.items.filter((item) => answers[item.id] !== undefined).length;
  const pct = Math.round((scored / category.points) * 100);

  return (
    <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            {category.icon}
          </div>
          <div>
            <h2 className="text-white font-semibold text-sm">{category.label}</h2>
            <p className="text-xs text-gray-500">{category.points} points available</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold text-white">{scored}</span>
          <span className="text-gray-500 text-sm">/{category.points}</span>
          {answered > 0 && (
            <div className="text-xs text-gray-600 mt-0.5">{answered}/{category.items.length} answered</div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/[0.06] rounded-full mb-5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: pct >= 80 ? '#22c55e' : pct >= 50 ? '#E8715A' : '#ef4444',
          }}
        />
      </div>

      {/* Items */}
      <div className="space-y-3">
        {category.items.map((item) => (
          <CheckItem
            key={item.id}
            item={item}
            state={answers[item.id]}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

function ScoreRing({ score, total }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  const band = getBand(pct);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <circle
            cx="44" cy="44" r={radius}
            fill="none"
            stroke={pct >= 90 ? '#22c55e' : pct >= 70 ? '#60a5fa' : pct >= 50 ? '#E8715A' : '#ef4444'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.6s ease, stroke 0.3s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white leading-none">{score}</span>
          <span className="text-xs text-gray-500">/{total}</span>
        </div>
      </div>
      {band && (
        <div className={`mt-2 px-3 py-0.5 rounded-full text-xs font-semibold ${band.colour} ${band.bg} border ${band.border}`}>
          {band.grade} — {band.label}
        </div>
      )}
    </div>
  );
}

// ─── Results panel ─────────────────────────────────────────────────────────────

function ResultsPanel({ answers, score }) {
  const pct = Math.round((score / TOTAL_POINTS) * 100);
  const band = getBand(pct);

  const missed = CATEGORIES.flatMap((cat) =>
    cat.items
      .filter((item) => answers[item.id] === false)
      .map((item) => ({ ...item, category: cat.label }))
  ).sort((a, b) => b.points - a.points);

  const unanswered = CATEGORIES.flatMap((cat) =>
    cat.items.filter((item) => answers[item.id] === undefined)
  ).length;

  const answeredCount = CATEGORIES.flatMap((cat) => cat.items).filter(
    (item) => answers[item.id] !== undefined
  ).length;
  const totalItems = CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0);

  if (answeredCount < totalItems) {
    return (
      <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 text-center">
        <p className="text-gray-400 text-sm">
          Answer all {totalItems} questions to see your full results.{' '}
          <span className="text-primary">{unanswered} remaining.</span>
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border p-6 ${band.bg} ${band.border}`}>
      <div className="text-center mb-6">
        <p className={`text-xs font-mono tracking-[0.12em] uppercase ${band.colour} mb-2`}>Your result</p>
        <h2 className="text-2xl font-bold text-white mb-1">
          {pct}/100 — {band.label}
        </h2>
        <p className="text-gray-300 text-sm max-w-sm mx-auto">{band.message}</p>
      </div>

      {missed.length > 0 && (
        <div className="mt-4">
          <h3 className="text-white font-semibold text-sm mb-3">
            Fix these to improve your score ({missed.reduce((s, i) => s + i.points, 0)} points up for grabs):
          </h3>
          <div className="space-y-2">
            {missed.map((item) => (
              <div key={item.id} className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-200 text-xs leading-snug">{item.text}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.category} · {item.points} pts</p>
                  <p className="text-amber-300/80 text-xs mt-1">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {missed.length === 0 && (
        <div className="flex items-center gap-2 justify-center text-green-400 text-sm mt-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          You've ticked every box — excellent work.
        </div>
      )}

      {/* CTA */}
      <div className="mt-6 bg-dark-card border border-white/[0.06] rounded-xl p-5 text-center">
        <p className="text-white font-semibold text-sm mb-1">Want us to fix this for you?</p>
        <p className="text-gray-400 text-xs mb-4">
          We do a full GBP optimisation for £100 — categories, description, service area, photos and keywords set up correctly for local search.
        </p>
        <Link
          href="/contact?service=gbp"
          className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all"
        >
          Get a free GBP audit from SEO Kings →
        </Link>
      </div>
    </div>
  );
}

// ─── Sticky score bar ──────────────────────────────────────────────────────────

function StickyScore({ score, total, pct }) {
  const band = getBand(pct);
  return (
    <div className="sticky top-0 z-30 bg-[#0B1324]/90 backdrop-blur border-b border-white/[0.06] py-3">
      <div className="max-w-2xl mx-auto px-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-white font-bold text-lg leading-none">
            {score}<span className="text-gray-500 text-sm font-normal">/{total}</span>
          </div>
          {band && (
            <span className={`hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${band.colour} ${band.bg} border ${band.border}`}>
              {band.grade} — {band.label}
            </span>
          )}
        </div>
        <div className="flex-1 max-w-xs">
          <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${pct}%`,
                background: pct >= 90 ? '#22c55e' : pct >= 70 ? '#60a5fa' : pct >= 50 ? '#E8715A' : '#ef4444',
              }}
            />
          </div>
        </div>
        <div className="text-xs text-gray-500 shrink-0">{pct}%</div>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/google-business-profile-score-checker',
      url: 'https://seo-kings.co.uk/google-business-profile-score-checker',
      name: 'Google Business Profile Score Checker — Free GBP Audit Tool | SEO Kings',
      description: 'Check your Google Business Profile score in 2 minutes. Free interactive checklist for tradespeople — see exactly what\'s stopping you from appearing in Google Maps.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'GBP Score Checker' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/google-business-profile-score-checker',
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

export default function GBPScoreChecker() {
  const [answers, setAnswers] = useState({});
  const resultsRef = useRef(null);

  const score = CATEGORIES.flatMap((cat) => cat.items).reduce(
    (sum, item) => (answers[item.id] === true ? sum + item.points : sum),
    0
  );

  const answeredCount = Object.keys(answers).length;
  const totalItems = CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0);
  const pct = Math.round((score / TOTAL_POINTS) * 100);
  const allAnswered = answeredCount === totalItems;

  function handleChange(id, value) {
    setAnswers((prev) => {
      if (value === null) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: value };
    });
  }

  // Scroll to results when all questions answered
  useEffect(() => {
    if (allAnswered && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [allAnswered]);

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Sticky score bar */}
      {answeredCount > 0 && (
        <StickyScore score={score} total={TOTAL_POINTS} pct={pct} />
      )}

      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary mb-4">
            Free tool for tradespeople
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
            Google Business Profile
            <span className="block text-primary">Score Checker</span>
          </h1>
          <p className="text-gray-400 leading-relaxed mb-6">
            Answer yes or no to each question. You'll get a score out of 100, a grade, and a prioritised list of exactly what to fix — in about 2 minutes.
          </p>

          {/* Score ring — shown once started */}
          {answeredCount > 0 && (
            <div className="flex justify-center mb-6">
              <ScoreRing score={score} total={TOTAL_POINTS} />
            </div>
          )}

          {/* Progress */}
          {answeredCount > 0 && (
            <p className="text-xs text-gray-500">
              {answeredCount} of {totalItems} answered
              {allAnswered && <span className="text-green-400 ml-2">— scroll down to see your full results</span>}
            </p>
          )}
        </div>
      </section>

      {/* Checklist */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
          {CATEGORIES.map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              answers={answers}
              onChange={handleChange}
            />
          ))}

          {/* Results */}
          <div ref={resultsRef}>
            <ResultsPanel answers={answers} score={score} />
          </div>

          {/* Reset */}
          {answeredCount > 0 && (
            <div className="text-center pb-4">
              <button
                onClick={() => setAnswers({})}
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-4">
            Done for you
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-4">
            Don't want to do it yourself?
          </h2>
          <p className="text-gray-400 mb-6">
            We'll optimise your whole Google Business Profile for £100 — categories, keywords, description, service area, and a quick-win audit. One-off, no monthly fee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?service=gbp"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-xl font-semibold transition-all"
            >
              Get your GBP optimised — £100
            </Link>
            <Link
              href="/google-business-profile"
              className="inline-block bg-dark-card border border-white/10 hover:border-white/20 text-gray-300 px-6 py-3 rounded-xl font-medium transition-all"
            >
              Learn more about GBP optimisation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
