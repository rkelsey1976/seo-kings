'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const BASE_PRICE = 250;
const PER_PAGE = 50;
const MAX_PAGES = 30;

const addOns = [
  {
    id: 'gbp',
    label: 'Google Business Profile setup',
    price: 100,
    description: 'Claim, verify & optimise for the Map Pack',
  },
  {
    id: 'logo',
    label: 'Logo design',
    price: 100,
    description: 'Professional logo in PNG, SVG & PDF formats',
  },
];

const PricingCalculator = ({ onClose }) => {
  const [pages, setPages] = useState(1);
  const [selected, setSelected] = useState(new Set());

  const toggleAddon = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const sitePrice = BASE_PRICE + (pages - 1) * PER_PAGE;
  const addOnTotal = addOns
    .filter((a) => selected.has(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  const total = sitePrice + addOnTotal;

  const fillPercent = ((pages - 1) / (MAX_PAGES - 1)) * 100;

  const contactHref = `/contact?pages=${pages}&total=${total}`;

  return (
    <div className="space-y-8">

      {/* Page slider */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="text-sm font-semibold text-white">Number of pages</label>
          <span className="text-3xl font-bold text-primary">{pages}</span>
        </div>
        <input
          type="range"
          min={1}
          max={MAX_PAGES}
          value={pages}
          onChange={(e) => setPages(Number(e.target.value))}
          className="pricing-range w-full"
          style={{
            background: `linear-gradient(to right, #E8715A ${fillPercent}%, rgba(255,255,255,0.12) ${fillPercent}%)`,
          }}
          aria-label="Number of pages"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>1 page</span>
          <span>30 pages</span>
        </div>
      </div>

      {/* Add-ons */}
      <div>
        <p className="text-sm font-semibold text-white mb-4">Add-ons</p>
        <div className="space-y-3">
          {addOns.map((addon) => (
            <label
              key={addon.id}
              className="flex items-start gap-3 cursor-pointer group p-3 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all"
            >
              <div className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  checked={selected.has(addon.id)}
                  onChange={() => toggleAddon(addon.id)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                    selected.has(addon.id)
                      ? 'border-primary bg-primary'
                      : 'border-white/20 bg-transparent'
                  }`}
                >
                  {selected.has(addon.id) && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white font-medium">{addon.label}</span>
                  <span className="text-sm font-semibold text-primary ml-3">+£{addon.price}</span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{addon.description}</div>
              </div>
            </label>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4 pl-1">
          Local SEO from £150/mo — ask us about ongoing packages.
        </p>
      </div>

      {/* Price breakdown */}
      <div className="border-t border-white/[0.08] pt-6 space-y-2.5">
        <div className="flex justify-between text-sm text-gray-400">
          <span>
            Website ({pages} {pages === 1 ? 'page' : 'pages'})
          </span>
          <span>£{sitePrice}</span>
        </div>
        {addOns
          .filter((a) => selected.has(a.id))
          .map((a) => (
            <div key={a.id} className="flex justify-between text-sm text-gray-400">
              <span>{a.label}</span>
              <span>+£{a.price}</span>
            </div>
          ))}
        <div className="flex justify-between items-center pt-4 border-t border-white/[0.08]">
          <span className="text-white font-semibold">Estimated total</span>
          <div className="text-right">
            <span className="text-4xl font-bold text-primary">£{total}</span>
            <p className="text-xs text-gray-600 mt-1">one-off payment</p>
          </div>
        </div>
        <p className="text-xs text-gray-600">6 months free hosting included with every website.</p>
      </div>

      {/* CTAs */}
      <div className="space-y-3 pt-2">
        <Link
          href={contactHref}
          onClick={onClose}
          className="block w-full text-center bg-primary hover:opacity-90 text-dark py-4 rounded-xl font-semibold transition-opacity"
        >
          Get your free quote
        </Link>
        <a
          href="tel:07702264921"
          className="block w-full text-center border border-white/10 hover:border-white/20 text-gray-300 hover:text-white py-3 rounded-xl text-sm font-medium transition-colors"
        >
          Or call 07702 264 921
        </a>
      </div>
    </div>
  );
};

export default PricingCalculator;
