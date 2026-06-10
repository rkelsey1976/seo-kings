'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

// ─── Schema ────────────────────────────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Invoice & Quote Template Generator',
      url: 'https://seo-kings.co.uk/invoice-template-generator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
      provider: { '@id': 'https://seo-kings.co.uk/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://seo-kings.co.uk/invoice-template-generator',
      url: 'https://seo-kings.co.uk/invoice-template-generator',
      name: 'Free Invoice & Quote Template Generator for Tradespeople | SEO Kings',
      description:
        'Create a free professional invoice or quote template for your trade business in 2 minutes. Customise with your details and download as PDF. No signup needed.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': 'https://seo-kings.co.uk/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://seo-kings.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Invoice & Quote Template Generator' },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://seo-kings.co.uk/#organization',
      name: 'SEO Kings',
      url: 'https://seo-kings.co.uk/invoice-template-generator',
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
      priceRange: '££',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is this invoice template generator free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — completely free. No signup, no email required. Fill in your details, download as PDF, and use it straight away.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use this invoice template on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The generator works on mobile, tablet and desktop. To download as PDF on mobile, use the print option and select "Save as PDF" from your printer options.',
          },
        },
        {
          '@type': 'Question',
          name: "What's the difference between an invoice and a quote?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A quote is sent before the job starts — it tells the customer what the work will cost. An invoice is sent after the job is done — it requests payment for work completed.',
          },
        },
      ],
    },
  ],
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

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

const PAYMENT_TERMS = [
  { label: 'Due on receipt', value: 0 },
  { label: '7 days', value: 7 },
  { label: '14 days', value: 14 },
  { label: '30 days', value: 30 },
];

function todayStr() {
  return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

function dueDateStr(termsDays) {
  if (termsDays === 0) return 'On receipt';
  const d = new Date();
  d.setDate(d.getDate() + termsDays);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

function formatGBP(n) {
  const num = parseFloat(n) || 0;
  return `£${num.toFixed(2)}`;
}

const emptyRow = () => ({ desc: '', qty: '', price: '' });

// ─── Input component ───────────────────────────────────────────────────────────

function Field({ label, children, hint }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1.5">
        {label}
        {hint && <span className="text-gray-500 font-normal ml-1.5 text-xs">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  'w-full bg-[#0B1324] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 transition-colors';

const selectCls =
  'w-full bg-[#0B1324] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-primary/60 transition-colors appearance-none cursor-pointer';

// ─── Main component ────────────────────────────────────────────────────────────

export default function InvoiceGenerator() {
  const [step, setStep] = useState(1); // 1 | 2 | 3
  const [docType, setDocType] = useState('invoice'); // 'invoice' | 'quote'
  const [showCta, setShowCta] = useState(false);
  const printTimerRef = useRef(null);

  // Business details
  const [biz, setBiz] = useState({
    name: '',
    trade: '',
    contact: '',
    phone: '',
    email: '',
    town: '',
    vatRegistered: false,
    vatNumber: '',
    paymentTerms: 0,
    logoDataUrl: '',
  });

  // Invoice/quote fields (editable on preview)
  const [doc, setDoc] = useState({
    customerName: '',
    customerAddress: '',
    docNumber: '001',
    rows: [emptyRow(), emptyRow(), emptyRow()],
    paymentDetails: 'Bank transfer — please use the invoice number as your reference.',
  });

  // Show CTA after 10s on step 3
  useEffect(() => {
    if (step === 3) {
      const t = setTimeout(() => setShowCta(true), 10000);
      return () => clearTimeout(t);
    }
    setShowCta(false);
  }, [step]);

  // ── Logo upload ──────────────────────────────────────────────────────────────
  function handleLogoUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setBiz((b) => ({ ...b, logoDataUrl: ev.target.result }));
    reader.readAsDataURL(file);
  }

  // ── Row helpers ──────────────────────────────────────────────────────────────
  function updateRow(i, field, val) {
    setDoc((d) => {
      const rows = [...d.rows];
      rows[i] = { ...rows[i], [field]: val };
      return { ...d, rows };
    });
  }
  function addRow() {
    setDoc((d) => ({ ...d, rows: [...d.rows, emptyRow()] }));
  }
  function removeRow(i) {
    setDoc((d) => ({ ...d, rows: d.rows.filter((_, idx) => idx !== i) }));
  }

  // ── Totals ───────────────────────────────────────────────────────────────────
  const subtotal = doc.rows.reduce((sum, r) => {
    const qty = parseFloat(r.qty) || 0;
    const price = parseFloat(r.price) || 0;
    return sum + qty * price;
  }, 0);
  const vat = biz.vatRegistered ? subtotal * 0.2 : 0;
  const total = subtotal + vat;

  // ── Print ────────────────────────────────────────────────────────────────────
  function handlePrint() {
    setShowCta(true);
    window.print();
  }

  // ─── STEP 1 ─────────────────────────────────────────────────────────────────
  if (step === 1) {
    return (
      <>
        <SEO schemas={[schema]} />
        <div className="min-h-screen bg-dark py-20 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-4">
                Free tool for tradespeople
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
                Invoice &amp; Quote Template Generator
              </h1>
              <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
                Fill in your business details and get a professional, print-ready template in 2 minutes.
                No signup. No email. Completely free.
              </p>
            </div>

            {/* Step indicator */}
            <StepBar step={1} />

            {/* Type cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                {
                  type: 'invoice',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: 'Invoice Template',
                  desc: 'Sent after the job is done. Requests payment from the customer for work already completed.',
                  badge: 'Most popular',
                },
                {
                  type: 'quote',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  ),
                  title: 'Quote Template',
                  desc: 'Sent before the job starts. Tells the customer exactly what the work will cost them.',
                  badge: null,
                },
              ].map(({ type, icon, title, desc, badge }) => (
                <button
                  key={type}
                  onClick={() => { setDocType(type); setStep(2); }}
                  className="group relative bg-dark-card border border-white/[0.06] hover:border-primary/40 rounded-2xl p-7 text-left transition-all hover:bg-[#111827]"
                >
                  {badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-mono tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1">
                      {badge}
                    </span>
                  )}
                  <div className="text-primary mb-4">{icon}</div>
                  <h2 className="text-white font-semibold text-lg mb-2">{title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  <div className="mt-5 text-primary text-sm font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    Choose this <span>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // ─── STEP 2 ─────────────────────────────────────────────────────────────────
  if (step === 2) {
    return (
      <>
        <SEO schemas={[schema]} />
        <div className="min-h-screen bg-dark py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10 text-center">
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-3">
                Step 2 of 3
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Your business details
              </h1>
            </div>

            <StepBar step={2} />

            <div className="mt-10 bg-dark-card border border-white/[0.06] rounded-2xl p-6 sm:p-8 space-y-5">
              {/* Logo upload */}
              <Field label="Your logo" hint="optional — PNG, JPG or SVG">
                <div className="flex items-start gap-4">
                  {biz.logoDataUrl ? (
                    <div className="relative shrink-0 w-20 h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={biz.logoDataUrl} alt="Logo preview" className="w-full h-full object-contain p-1" />
                      <button
                        onClick={() => setBiz((b) => ({ ...b, logoDataUrl: '' }))}
                        className="absolute top-0.5 right-0.5 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                        title="Remove logo"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <label className="shrink-0 w-20 h-20 bg-[#0B1324] border border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 transition-colors group">
                      <svg className="w-6 h-6 text-gray-600 group-hover:text-primary/60 mb-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors">Upload</span>
                      <input type="file" accept="image/png,image/jpeg,image/svg+xml" className="hidden" onChange={handleLogoUpload} />
                    </label>
                  )}
                  <p className="text-xs text-gray-500 leading-relaxed pt-1">
                    Your logo will appear in the top-left of the template and will print correctly. If you skip this, your business name appears in bold instead.
                  </p>
                </div>
              </Field>

              <div className="border-t border-white/[0.06]" />

              {/* Business name */}
              <Field label="Business / trading name">
                <input
                  className={inputCls}
                  placeholder="e.g. Smith Plumbing Services"
                  value={biz.name}
                  onChange={(e) => setBiz((b) => ({ ...b, name: e.target.value }))}
                />
              </Field>

              {/* Trade */}
              <Field label="Your trade">
                <div className="relative">
                  <select
                    className={selectCls}
                    value={biz.trade}
                    onChange={(e) => setBiz((b) => ({ ...b, trade: e.target.value }))}
                  >
                    <option value="">Select your trade…</option>
                    {TRADES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <ChevronDown />
                </div>
              </Field>

              {/* Name */}
              <Field label="Your name">
                <input
                  className={inputCls}
                  placeholder="e.g. John Smith"
                  value={biz.contact}
                  onChange={(e) => setBiz((b) => ({ ...b, contact: e.target.value }))}
                />
              </Field>

              {/* Phone */}
              <Field label="Phone number">
                <input
                  className={inputCls}
                  type="tel"
                  placeholder="e.g. 07700 900 123"
                  value={biz.phone}
                  onChange={(e) => setBiz((b) => ({ ...b, phone: e.target.value }))}
                />
              </Field>

              {/* Email */}
              <Field label="Email address">
                <input
                  className={inputCls}
                  type="email"
                  placeholder="e.g. john@smithplumbing.co.uk"
                  value={biz.email}
                  onChange={(e) => setBiz((b) => ({ ...b, email: e.target.value }))}
                />
              </Field>

              {/* Town */}
              <Field label="Town / city">
                <input
                  className={inputCls}
                  placeholder="e.g. Bath"
                  value={biz.town}
                  onChange={(e) => setBiz((b) => ({ ...b, town: e.target.value }))}
                />
              </Field>

              {/* VAT */}
              <Field label="VAT registered?">
                <div className="flex gap-3">
                  {[true, false].map((v) => (
                    <button
                      key={String(v)}
                      onClick={() => setBiz((b) => ({ ...b, vatRegistered: v }))}
                      className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                        biz.vatRegistered === v
                          ? 'bg-primary/10 border-primary/40 text-primary'
                          : 'border-white/[0.1] text-gray-400 hover:border-white/20'
                      }`}
                    >
                      {v ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              </Field>

              {biz.vatRegistered && (
                <Field label="VAT number">
                  <input
                    className={inputCls}
                    placeholder="e.g. GB123456789"
                    value={biz.vatNumber}
                    onChange={(e) => setBiz((b) => ({ ...b, vatNumber: e.target.value }))}
                  />
                </Field>
              )}

              {/* Payment terms */}
              <Field label="Payment terms">
                <div className="relative">
                  <select
                    className={selectCls}
                    value={biz.paymentTerms}
                    onChange={(e) => setBiz((b) => ({ ...b, paymentTerms: Number(e.target.value) }))}
                  >
                    {PAYMENT_TERMS.map(({ label, value }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  <ChevronDown />
                </div>
              </Field>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium border border-white/[0.1] text-gray-400 hover:border-white/20 hover:text-white transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors"
              >
                Preview my template →
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ─── STEP 3: Preview ─────────────────────────────────────────────────────────
  const termLabel = PAYMENT_TERMS.find((t) => t.value === biz.paymentTerms)?.label || 'Due on receipt';
  const isInvoice = docType === 'invoice';
  const docLabel = isInvoice ? 'INVOICE' : 'QUOTE';

  return (
    <>
      <SEO schemas={[schema]} />

      {/* ── Print styles ─────────────────────────────────────────────── */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #invoice-preview, #invoice-preview * { visibility: visible !important; }
          #invoice-preview {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          @page { margin: 1.2cm; size: A4; }
        }
      `}</style>

      <div className="min-h-screen bg-dark py-16 px-4 no-print">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-secondary mb-1">
                Step 3 of 3
              </p>
              <h1 className="text-xl font-bold text-white tracking-tight">
                Your {isInvoice ? 'invoice' : 'quote'} template is ready
              </h1>
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-white/[0.1] text-gray-400 hover:border-white/20 hover:text-white transition-colors"
              >
                ← Edit details
              </button>
              <button
                onClick={handlePrint}
                className="px-5 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
              <button
                onClick={() => { setStep(1); setBiz({ name:'',trade:'',contact:'',phone:'',email:'',town:'',vatRegistered:false,vatNumber:'',paymentTerms:0,logoDataUrl:'' }); setDoc({ customerName:'',customerAddress:'',docNumber:'001',rows:[emptyRow(),emptyRow(),emptyRow()],paymentDetails:'Bank transfer — please use the invoice number as your reference.' }); }}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-white/[0.1] text-gray-400 hover:border-white/20 hover:text-white transition-colors"
              >
                Start over
              </button>
            </div>
          </div>

          {/* Step bar */}
          <StepBar step={3} />

          {/* Hint */}
          <p className="text-xs text-gray-500 mt-4 mb-6">
            You can still edit the customer details and line items directly in the preview below.
          </p>

          {/* ── THE INVOICE / QUOTE PREVIEW ────────────────────────────── */}
          <div
            id="invoice-preview"
            style={{
              background: '#ffffff',
              color: '#1a1a2e',
              fontFamily: "'Georgia', 'Times New Roman', serif",
              maxWidth: '800px',
              margin: '0 auto',
              padding: '48px 52px 40px',
              boxShadow: '0 4px 40px rgba(0,0,0,0.35)',
              borderRadius: '4px',
              fontSize: '13px',
              lineHeight: '1.55',
            }}
          >
            {/* ── Header row ──────────────────────────────────────────── */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '36px', gap: '24px' }}>
              {/* Brand */}
              <div style={{ flex: 1 }}>
                {biz.logoDataUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={biz.logoDataUrl}
                    alt={biz.name || 'Logo'}
                    style={{ maxHeight: '72px', maxWidth: '200px', objectFit: 'contain', marginBottom: '8px', display: 'block' }}
                  />
                ) : (
                  <div style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', letterSpacing: '-0.02em', fontFamily: 'Arial, sans-serif', marginBottom: '4px' }}>
                    {biz.name || 'Your Business Name'}
                  </div>
                )}
                {biz.logoDataUrl && biz.name && (
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#334155', fontFamily: 'Arial, sans-serif', marginBottom: '4px' }}>
                    {biz.name}
                  </div>
                )}
                <div style={{ color: '#64748b', fontSize: '12px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
                  {[biz.trade, biz.town].filter(Boolean).join(' · ')}
                  {biz.phone && <><br />{biz.phone}</>}
                  {biz.email && <><br />{biz.email}</>}
                  {biz.vatRegistered && biz.vatNumber && <><br />VAT No: {biz.vatNumber}</>}
                </div>
              </div>

              {/* Doc type + number */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#E8715A', letterSpacing: '-0.02em', fontFamily: 'Arial, sans-serif', marginBottom: '4px' }}>
                  {docLabel}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'Arial, sans-serif', lineHeight: '1.8' }}>
                  <span style={{ fontWeight: '600', color: '#334155' }}>{docLabel} No: </span>
                  <PreviewInput
                    value={doc.docNumber}
                    onChange={(v) => setDoc((d) => ({ ...d, docNumber: v }))}
                    style={{ width: '60px', textAlign: 'right', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#334155', fontWeight: '600' }}
                    placeholder="001"
                  />
                  <br />
                  <span style={{ fontWeight: '600', color: '#334155' }}>Date: </span>{todayStr()}
                  {biz.paymentTerms > 0 && (
                    <>
                      <br /><span style={{ fontWeight: '600', color: '#334155' }}>Due: </span>{dueDateStr(biz.paymentTerms)}
                    </>
                  )}
                  {biz.paymentTerms === 0 && (
                    <>
                      <br /><span style={{ fontWeight: '600', color: '#334155' }}>Due: </span>On receipt
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* ── Horizontal rule ─────────────────────────────────────── */}
            <div style={{ height: '2px', background: 'linear-gradient(90deg, #E8715A 0%, #e8715a44 100%)', marginBottom: '28px', borderRadius: '2px' }} />

            {/* ── Bill to ─────────────────────────────────────────────── */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8715A', fontFamily: 'Arial, sans-serif', marginBottom: '8px' }}>
                {isInvoice ? 'Invoice to' : 'Quote for'}
              </div>
              <PreviewInput
                value={doc.customerName}
                onChange={(v) => setDoc((d) => ({ ...d, customerName: v }))}
                placeholder="Customer name"
                style={{ display: 'block', fontSize: '15px', fontWeight: '700', color: '#0f172a', fontFamily: 'Arial, sans-serif', marginBottom: '2px', width: '100%' }}
              />
              <PreviewTextarea
                value={doc.customerAddress}
                onChange={(v) => setDoc((d) => ({ ...d, customerAddress: v }))}
                placeholder="Customer address (click to edit)"
                style={{ color: '#475569', fontSize: '12px', fontFamily: 'Arial, sans-serif', width: '100%', lineHeight: '1.7' }}
              />
            </div>

            {/* ── Line items table ─────────────────────────────────────── */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  {['Description', 'Qty', 'Unit Price', 'Total'].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        padding: '10px 12px',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#64748b',
                        textAlign: i === 0 ? 'left' : 'right',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {doc.rows.map((row, i) => {
                  const rowTotal = (parseFloat(row.qty) || 0) * (parseFloat(row.price) || 0);
                  return (
                    <tr
                      key={i}
                      style={{
                        borderBottom: '1px solid #f1f5f9',
                        background: i % 2 === 0 ? '#ffffff' : '#fafbfc',
                      }}
                    >
                      <td style={{ padding: '9px 12px', verticalAlign: 'middle' }}>
                        <PreviewInput
                          value={row.desc}
                          onChange={(v) => updateRow(i, 'desc', v)}
                          placeholder="Describe work done…"
                          style={{ width: '100%', fontSize: '13px', color: '#1e293b', fontFamily: 'Arial, sans-serif' }}
                        />
                      </td>
                      <td style={{ padding: '9px 12px', textAlign: 'right', verticalAlign: 'middle' }}>
                        <PreviewInput
                          value={row.qty}
                          onChange={(v) => updateRow(i, 'qty', v)}
                          placeholder="1"
                          style={{ width: '44px', textAlign: 'right', fontSize: '13px', color: '#1e293b', fontFamily: 'Arial, sans-serif' }}
                        />
                      </td>
                      <td style={{ padding: '9px 12px', textAlign: 'right', verticalAlign: 'middle' }}>
                        <span style={{ color: '#64748b', fontSize: '12px', marginRight: '2px' }}>£</span>
                        <PreviewInput
                          value={row.price}
                          onChange={(v) => updateRow(i, 'price', v)}
                          placeholder="0.00"
                          style={{ width: '72px', textAlign: 'right', fontSize: '13px', color: '#1e293b', fontFamily: 'Arial, sans-serif' }}
                        />
                      </td>
                      <td style={{ padding: '9px 12px', textAlign: 'right', fontSize: '13px', fontWeight: '600', color: '#1e293b', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          {rowTotal > 0 ? formatGBP(rowTotal) : '—'}
                          {doc.rows.length > 1 && (
                            <button
                              onClick={() => removeRow(i)}
                              title="Remove row"
                              className="no-print"
                              style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer', padding: '0 2px', marginLeft: '2px' }}
                            >
                              ×
                            </button>
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Add row button */}
            <div className="no-print" style={{ marginBottom: '20px' }}>
              <button
                onClick={addRow}
                style={{
                  fontSize: '12px',
                  color: '#E8715A',
                  background: 'none',
                  border: '1px dashed #E8715A44',
                  borderRadius: '6px',
                  padding: '5px 14px',
                  cursor: 'pointer',
                  fontFamily: 'Arial, sans-serif',
                  transition: 'border-color 0.15s',
                }}
              >
                + Add row
              </button>
            </div>

            {/* ── Totals ──────────────────────────────────────────────── */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '28px' }}>
              <div style={{ minWidth: '260px', fontFamily: 'Arial, sans-serif' }}>
                <TotalRow label="Subtotal" value={formatGBP(subtotal)} />
                {biz.vatRegistered && <TotalRow label="VAT (20%)" value={formatGBP(vat)} />}
                <div style={{ height: '1px', background: '#E8715A', margin: '8px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '4px 0' }}>
                  <span style={{ fontWeight: '800', fontSize: '15px', color: '#0f172a' }}>TOTAL</span>
                  <span style={{ fontWeight: '800', fontSize: '18px', color: '#E8715A' }}>{formatGBP(total)}</span>
                </div>
              </div>
            </div>

            {/* ── Payment details ──────────────────────────────────────── */}
            <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '16px 18px', marginBottom: '24px', fontFamily: 'Arial, sans-serif' }}>
              <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8715A', marginBottom: '6px' }}>
                Payment details
              </div>
              <PreviewTextarea
                value={doc.paymentDetails}
                onChange={(v) => setDoc((d) => ({ ...d, paymentDetails: v }))}
                placeholder="Your bank details or payment instructions…"
                style={{ color: '#475569', fontSize: '12px', fontFamily: 'Arial, sans-serif', width: '100%', background: 'transparent', lineHeight: '1.6' }}
              />
              <div style={{ marginTop: '6px', fontSize: '12px', color: '#94a3b8' }}>
                Payment terms: {termLabel}
              </div>
            </div>

            {/* ── Footer ──────────────────────────────────────────────── */}
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '14px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                {docLabel} generated by{' '}
                <span style={{ color: '#E8715A', fontWeight: '600' }}>SEO Kings</span>{' '}
                — professional websites for tradespeople |{' '}
                <span style={{ color: '#94a3b8' }}>seo-kings.co.uk</span>
              </div>
            </div>
          </div>

          {/* ── CTA prompt ──────────────────────────────────────────────── */}
          {showCta && (
            <div className="mt-8 bg-dark-card border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold text-sm">Want your business to look this professional online?</p>
                <p className="text-gray-400 text-sm mt-1">Get a trade website from £250 — fast, local-SEO ready, live in two weeks.</p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                Get a website from £250 →
              </Link>
            </div>
          )}

          {/* ── FAQ ─────────────────────────────────────────────────────── */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is this invoice template generator free?',
                  a: 'Yes — completely free. No signup, no email required. Fill in your details, download as PDF, and use it straight away.',
                },
                {
                  q: "What's the difference between an invoice and a quote?",
                  a: 'A quote is sent before the job starts — it tells the customer what the work will cost. An invoice is sent after the job is done — it requests payment for work completed.',
                },
                {
                  q: 'How do I download as PDF?',
                  a: "Click the \"Download PDF\" button. Your browser's print dialog will open — select \"Save as PDF\" as the destination. On mobile, choose \"Print\" and then save to PDF. The template is designed to print beautifully on A4.",
                },
                {
                  q: 'Can I save and reuse this template?',
                  a: 'Once downloaded as a PDF, you have a permanent copy. For a reusable template, download and keep the PDF — or bookmark this page and fill it in each time (your details will be cleared on refresh).',
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-dark-card border border-white/[0.06] rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function StepBar({ step }) {
  return (
    <div className="flex items-center gap-0 mt-6">
      {[1, 2, 3].map((n, i) => (
        <div key={n} className="flex items-center flex-1">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
              n < step
                ? 'bg-primary text-white'
                : n === step
                ? 'bg-primary text-white ring-2 ring-primary/30'
                : 'bg-white/[0.06] text-gray-500'
            }`}
          >
            {n < step ? (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            ) : n}
          </div>
          {i < 2 && (
            <div className={`flex-1 h-0.5 mx-1 ${n < step ? 'bg-primary/60' : 'bg-white/[0.06]'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

// Inline editable input for the preview (looks like text, edits on click)
function PreviewInput({ value, onChange, placeholder, style = {} }) {
  return (
    <input
      className="no-print-border preview-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        background: 'transparent',
        border: 'none',
        outline: 'none',
        padding: '1px 2px',
        ...style,
      }}
    />
  );
}

// Inline editable textarea for preview
function PreviewTextarea({ value, onChange, placeholder, style = {} }) {
  return (
    <textarea
      className="preview-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={2}
      style={{
        background: 'transparent',
        border: 'none',
        outline: 'none',
        resize: 'none',
        padding: '1px 2px',
        display: 'block',
        ...style,
      }}
    />
  );
}

function TotalRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', fontSize: '13px' }}>
      <span style={{ color: '#64748b' }}>{label}</span>
      <span style={{ fontWeight: '600', color: '#334155' }}>{value}</span>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
