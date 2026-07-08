'use client';

import { useState, useEffect, useRef } from 'react';
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
  'Other',
];

const HOW_FOUND_OPTIONS = [
  'Word of mouth',
  'Google search',
  'Facebook / social',
  'Flyers / leaflets',
  'Checkatrade / Bark',
  'Other',
];

const FRUSTRATIONS = [
  'Not enough enquiries',
  'Work dries up in quiet periods',
  'Competing on price',
  'Relying on word of mouth',
  "Don't know where my customers come from",
];

const WEBSITE_STATUS_OPTIONS = [
  { id: 'no', label: "No website yet" },
  { id: 'yes', label: 'Yes, I have a website' },
  { id: 'old', label: "Yes, but it's out of date" },
];

const WEBSITE_COST = 250;
const TOTAL_STEPS = 4;

// ─── Helpers ───────────────────────────────────────────────────────────────────

function fmt(n) {
  return n.toLocaleString('en-GB');
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function StepDots({ current, total }) {
  return (
    <div className="flex items-center gap-1.5 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i < current
              ? 'w-4 h-2 bg-primary'
              : i === current
              ? 'w-6 h-2 bg-primary'
              : 'w-2 h-2 bg-white/20'
          }`}
        />
      ))}
    </div>
  );
}

function StepHeader({ step, title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-2">
        Step {step} of {TOTAL_STEPS}
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-2">
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
    </div>
  );
}

function SliderInput({ label, sublabel, value, min, max, step = 1, prefix = '', suffix = '', onChange, formatValue }) {
  const pct = ((value - min) / (max - min)) * 100;
  const display = formatValue ? formatValue(value) : `${prefix}${value}${suffix}`;

  return (
    <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
      <div className="flex items-baseline justify-between mb-1">
        <label className="text-white font-medium text-sm">{label}</label>
        <span className="text-2xl font-bold text-primary tabular-nums">{display}</span>
      </div>
      {sublabel && <p className="text-gray-500 text-xs mb-4">{sublabel}</p>}
      <div className="relative mt-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 appearance-none rounded-full cursor-pointer"
          style={{
            background: `linear-gradient(to right, #E8715A ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
          }}
        />
        <div className="flex justify-between mt-1.5 text-[11px] text-gray-600">
          <span>{prefix}{min}{suffix}</span>
          <span>{prefix}{max}{suffix}</span>
        </div>
      </div>
    </div>
  );
}

function MultiChoice({ options, selected, onToggle }) {
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            onClick={() => onToggle(opt)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-150 ${
              active
                ? 'border-primary/50 bg-primary/10 text-white'
                : 'border-white/[0.06] bg-dark-card text-gray-400 hover:border-white/10 hover:text-gray-200'
            }`}
          >
            <div className={`w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center transition-all ${
              active ? 'border-primary bg-primary' : 'border-white/20'
            }`}>
              {active && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm">{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

function SingleChoice({ options, selected, onSelect }) {
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const active = selected === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-150 ${
              active
                ? 'border-primary/50 bg-primary/10 text-white'
                : 'border-white/[0.06] bg-dark-card text-gray-400 hover:border-white/10 hover:text-gray-200'
            }`}
          >
            <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
              active ? 'border-primary' : 'border-white/20'
            }`}>
              {active && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>
            <span className="text-sm">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Animated counter on mount
function AnimatedNumber({ target, prefix = '', suffix = '', duration = 1200 }) {
  const [displayed, setDisplayed] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    startRef.current = null;
    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return <>{prefix}{fmt(displayed)}{suffix}</>;
}

function StatCard({ label, value, prefix = '', suffix = '', highlight = false, animate = false }) {
  return (
    <div className={`rounded-2xl border p-5 ${
      highlight
        ? 'border-primary/40 bg-primary/10'
        : 'border-white/[0.06] bg-dark-card'
    }`}>
      <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-2">{label}</p>
      <p className={`text-3xl font-bold tabular-nums ${highlight ? 'text-primary' : 'text-white'}`}>
        {animate
          ? <AnimatedNumber target={value} prefix={prefix} suffix={suffix} />
          : <>{prefix}{fmt(value)}{suffix}</>
        }
      </p>
    </div>
  );
}

// Email capture
function EmailGate({ onSubmit, onSkip }) {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      console.log('ROI Calculator email capture:', email.trim());
      onSubmit(email.trim());
    }
  }

  return (
    <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-8 text-center max-w-md mx-auto">
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-5">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">
        Your numbers are ready
      </p>
      <h2 className="text-xl font-bold text-white mb-2">Get your personalised results</h2>
      <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto">
        Enter your email to get your ROI breakdown + a free website quote sent to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 bg-white/[0.06] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
        />
        <button
          type="submit"
          disabled={!email.trim()}
          className="bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shrink-0"
        >
          Send my results
        </button>
      </form>
      <button
        onClick={onSkip}
        className="mt-4 text-xs text-gray-600 hover:text-gray-400 transition-colors underline underline-offset-2"
      >
        Skip — just show me the numbers
      </button>
    </div>
  );
}

// ─── Results screen ────────────────────────────────────────────────────────────

function Results({ data, onReset }) {
  const { trade, jobValue, jobsPerMonth, extraJobs } = data;

  const monthlyRevenue = jobValue * jobsPerMonth;
  const monthlyExtra = jobValue * extraJobs;
  const annualExtra = monthlyExtra * 12;
  const fiveYear = annualExtra * 5 - WEBSITE_COST;
  const paybackMonths = WEBSITE_COST / monthlyExtra;
  const paybackDisplay =
    paybackMonths < 1
      ? 'less than 1 job'
      : paybackMonths < 2
      ? '1 job'
      : `${Math.ceil(paybackMonths)} jobs`;

  const tradeLower = trade === 'Other' ? 'tradesperson' : trade.toLowerCase();

  return (
    <div className="space-y-6">
      {/* Headline */}
      <div className="text-center">
        <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">
          Your website ROI
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-2">
          Here's what it adds up to
        </h2>
      </div>

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        <StatCard label="Current monthly revenue" value={monthlyRevenue} prefix="£" animate />
        <StatCard label="Revenue from extra jobs" value={monthlyExtra} prefix="£" animate />
        <StatCard label="Annual extra revenue" value={annualExtra} prefix="£" highlight animate />
        <StatCard label="5-year return" value={fiveYear} prefix="£" animate />
      </div>

      {/* Payback card */}
      <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">Payback point</p>
            <p className="text-gray-400 text-sm">
              At £{fmt(jobValue)} per job, your website pays for itself from{' '}
              <span className="text-white font-semibold">{paybackDisplay}</span>.
              Everything after that is profit.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative */}
      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
        <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary mb-3">
          The bottom line
        </p>
        <p className="text-gray-200 text-sm leading-relaxed">
          A {tradeLower} averaging £{fmt(jobValue)} per job needs just{' '}
          <strong className="text-white">{paybackDisplay}</strong> from their website to break even.
          At {extraJobs} extra {extraJobs === 1 ? 'job' : 'jobs'} per month, that's{' '}
          <strong className="text-white">£{fmt(annualExtra)} extra per year</strong> — or{' '}
          <strong className="text-white">£{fmt(fiveYear > 0 ? fiveYear : annualExtra * 5)} over 5 years</strong>{' '}
          from a £{WEBSITE_COST} investment.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6 text-center">
        <p className="text-white font-semibold text-sm mb-1">Ready to get started?</p>
        <p className="text-gray-400 text-xs mb-4">
          Your website from £{WEBSITE_COST} — built for trade enquiries, live in 2 weeks.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all"
        >
          Get your website for £{WEBSITE_COST} →
        </Link>
      </div>

      <div className="text-center pb-4">
        <button
          onClick={onReset}
          className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
        >
          Start over
        </button>
      </div>
    </div>
  );
}

// ─── JSON-LD schema ────────────────────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Website ROI Calculator',
      url: 'https://seo-kings.co.uk/website-roi-calculator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/website-roi-calculator',
      url: 'https://seo-kings.co.uk/website-roi-calculator',
      name: 'Website ROI Calculator for Tradespeople — Is a Website Worth It? | SEO Kings',
      description:
        'Find out how many extra jobs your website needs to pay for itself. Free calculator for plumbers, electricians, builders and tradespeople across Bath and the UK.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Website ROI Calculator' , item: 'https://seo-kings.co.uk/website-roi-calculator' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/website-roi-calculator',
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
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:30',
        },
      ],
    },
  ],
};

// ─── Main component ────────────────────────────────────────────────────────────

export default function WebsiteROICalculator() {
  const topRef = useRef(null);

  // Step data
  const [trade, setTrade] = useState('');
  const [jobValue, setJobValue] = useState(350);
  const [jobsPerMonth, setJobsPerMonth] = useState(8);
  const [extraJobs, setExtraJobs] = useState(3);
  const [howFound, setHowFound] = useState([]);
  const [websiteStatus, setWebsiteStatus] = useState('');
  const [frustrations, setFrustrations] = useState([]);

  // Wizard state
  const [step, setStep] = useState(0); // 0-indexed
  const [phase, setPhase] = useState('quiz'); // 'quiz' | 'email' | 'results'
  const [animating, setAnimating] = useState(false);

  function scrollTop() {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function toggleMulti(arr, setArr, val) {
    setArr((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  }

  // Per-step validation
  const stepValid = [
    !!trade,                                    // step 0: trade selected
    true,                                        // step 1: sliders always valid
    howFound.length > 0,                        // step 2: at least one source
    !!websiteStatus && frustrations.length > 0, // step 3: both answered
  ];

  function goNext() {
    if (animating || !stepValid[step]) return;
    setAnimating(true);
    setTimeout(() => {
      if (step < TOTAL_STEPS - 1) {
        setStep((s) => s + 1);
      } else {
        setPhase('email');
      }
      setAnimating(false);
      scrollTop();
    }, 180);
  }

  function goBack() {
    if (animating || step === 0) return;
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s - 1);
      setAnimating(false);
      scrollTop();
    }, 180);
  }

  function handleEmailSubmit(email) {
    console.log('ROI email capture:', email);
    setPhase('results');
    scrollTop();
  }

  function handleSkip() {
    setPhase('results');
    scrollTop();
  }

  function handleReset() {
    setTrade('');
    setJobValue(350);
    setJobsPerMonth(8);
    setExtraJobs(3);
    setHowFound([]);
    setWebsiteStatus('');
    setFrustrations([]);
    setStep(0);
    setPhase('quiz');
    scrollTop();
  }

  const isLastStep = step === TOTAL_STEPS - 1;

  return (
    <>
      <SEO schemas={[schema]} />

      {/* Hero */}
      <section className="pt-20 pb-10" ref={topRef}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-primary mb-4">
            Free tool for tradespeople
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
            Is a website worth it
            <span className="block text-primary">for your trade?</span>
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Answer four quick questions. We'll show you exactly how many jobs your website needs to pay for itself — and what you stand to gain.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">

          {/* ── Quiz phase ── */}
          {phase === 'quiz' && (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="h-1.5 bg-white/[0.06] rounded-full mb-4 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  />
                </div>
                <StepDots current={step} total={TOTAL_STEPS} />
              </div>

              {/* Step content */}
              <div
                className="transition-opacity duration-200"
                style={{ opacity: animating ? 0 : 1 }}
              >
                {/* ── Step 0: Trade ── */}
                {step === 0 && (
                  <>
                    <StepHeader
                      step={1}
                      title="What's your trade?"
                      subtitle="Select the one that best describes what you do."
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {TRADES.map((t) => (
                        <button
                          key={t}
                          onClick={() => setTrade(t)}
                          className={`px-3 py-3 rounded-xl border text-sm font-medium text-center transition-all duration-150 ${
                            trade === t
                              ? 'border-primary/50 bg-primary/10 text-white'
                              : 'border-white/[0.06] bg-dark-card text-gray-400 hover:border-white/10 hover:text-gray-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* ── Step 1: Jobs ── */}
                {step === 1 && (
                  <>
                    <StepHeader
                      step={2}
                      title="Tell us about your jobs"
                      subtitle="Use the sliders — you can fine-tune the numbers."
                    />
                    <div className="space-y-4">
                      <SliderInput
                        label="Average job value"
                        sublabel="What a typical job pays you — before materials"
                        value={jobValue}
                        min={50}
                        max={5000}
                        step={50}
                        prefix="£"
                        onChange={setJobValue}
                      />
                      <SliderInput
                        label="Jobs per month"
                        sublabel="How many jobs you currently take on each month"
                        value={jobsPerMonth}
                        min={1}
                        max={50}
                        onChange={setJobsPerMonth}
                        suffix=" jobs"
                      />
                    </div>
                  </>
                )}

                {/* ── Step 2: Goals ── */}
                {step === 2 && (
                  <>
                    <StepHeader
                      step={3}
                      title="Your goals"
                    />
                    <div className="space-y-4">
                      <SliderInput
                        label="Extra jobs per month that would make a real difference"
                        sublabel="Even 2–3 extra enquiries per month adds up fast"
                        value={extraJobs}
                        min={1}
                        max={20}
                        onChange={setExtraJobs}
                        suffix=" jobs"
                      />
                      <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                        <p className="text-white font-medium text-sm mb-1">
                          How do most of your current customers find you?
                        </p>
                        <p className="text-gray-500 text-xs mb-4">Tick all that apply.</p>
                        <MultiChoice
                          options={HOW_FOUND_OPTIONS}
                          selected={howFound}
                          onToggle={(v) => toggleMulti(howFound, setHowFound, v)}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* ── Step 3: Website ── */}
                {step === 3 && (
                  <>
                    <StepHeader
                      step={4}
                      title="About your website"
                    />
                    <div className="space-y-4">
                      <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                        <p className="text-white font-medium text-sm mb-4">
                          Do you currently have a website?
                        </p>
                        <SingleChoice
                          options={WEBSITE_STATUS_OPTIONS}
                          selected={websiteStatus}
                          onSelect={setWebsiteStatus}
                        />
                      </div>
                      <div className="bg-dark-card border border-white/[0.06] rounded-2xl p-6">
                        <p className="text-white font-medium text-sm mb-1">
                          What's your biggest frustration with getting new customers?
                        </p>
                        <p className="text-gray-500 text-xs mb-4">Tick all that apply.</p>
                        <MultiChoice
                          options={FRUSTRATIONS}
                          selected={frustrations}
                          onToggle={(v) => toggleMulti(frustrations, setFrustrations, v)}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={goBack}
                  disabled={step === 0}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white disabled:opacity-0 disabled:pointer-events-none transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>

                <button
                  onClick={goNext}
                  disabled={!stepValid[step]}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    stepValid[step]
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-white/[0.06] text-gray-600 cursor-not-allowed'
                  }`}
                >
                  {isLastStep ? 'Calculate my ROI' : 'Next'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {!stepValid[step] && step !== 1 && (
                <p className="text-center text-xs text-gray-600 mt-3">
                  {step === 0 ? 'Select your trade to continue' : 'Answer the questions above to continue'}
                </p>
              )}
            </>
          )}

          {/* ── Email phase ── */}
          {phase === 'email' && (
            <EmailGate onSubmit={handleEmailSubmit} onSkip={handleSkip} />
          )}

          {/* ── Results phase ── */}
          {phase === 'results' && (
            <Results
              data={{ trade, jobValue, jobsPerMonth, extraJobs, howFound, websiteStatus, frustrations }}
              onReset={handleReset}
            />
          )}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-4">
            No obligation
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight mb-4">
            Ready to see real results?
          </h2>
          <p className="text-gray-400 mb-6">
            We build trade websites from £250 — mobile-first, built to rank locally, live in 2 weeks. Speak to the person who builds your site, not a call centre.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-xl font-semibold transition-all"
            >
              Get a free quote — no obligation
            </Link>
            <Link
              href="/web-design"
              className="inline-block bg-dark-card border border-white/10 hover:border-white/20 text-gray-300 px-6 py-3 rounded-xl font-medium transition-all"
            >
              See how our websites work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
