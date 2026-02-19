import React from 'react';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-secondary/20" />
      
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Need a Website Designer in Bath & North East Somerset?
        </h2>

        <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          Website design and getting you on Google — so you get more customers. Your competitors are already there. Don&apos;t miss out on local jobs.
        </p>

        <p className="text-gray-400 mb-8">
          We serve trades across:
        </p>
        <p className="text-gray-300 mb-8 font-medium">
          Bath • Keynsham • Midsomer Norton • Radstock • Peasedown St John • Paulton • Saltford • Timsbury
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link href="/contact" className="w-full sm:w-auto bg-white text-dark px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark text-center">
            Get Your Free Check Today
          </Link>
          <Link href="/web-design" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary">
            Website Design From £399
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          No obligation. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
