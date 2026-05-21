'use client';
import React, { useEffect, useRef } from 'react';
import PricingCalculator from './PricingCalculator';

const PricingModal = ({ isOpen, onClose }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    // Focus the panel on open for accessibility
    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Pricing calculator"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-lg bg-dark-card border border-white/10 rounded-2xl overflow-y-auto max-h-[90vh] focus:outline-none"
        style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.6)' }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-dark-card border-b border-white/[0.06] px-8 pt-8 pb-6 z-10">
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-3 text-primary">
                Pricing
              </span>
              <h2 className="text-2xl font-bold text-white leading-tight">Build your quote</h2>
              <p className="text-sm text-gray-500 mt-1">£250 base · £50 per page · no hidden fees</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-colors shrink-0"
              aria-label="Close pricing calculator"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Calculator body */}
        <div className="px-8 py-6">
          <PricingCalculator onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
