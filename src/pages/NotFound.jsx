import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="Oops! The page you're looking for doesn't exist. Let's get you back on track."
        noIndex={true}
      />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* 404 Number */}
          <div className="relative mb-8">
            <span className="text-[12rem] sm:text-[16rem] font-bold text-white/5 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
            Looks like this page got lost in the search results. 
            Don't worry — unlike your competitors, we know how to get found.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow"
            >
              Go Home
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="border-t border-white/5 pt-8">
            <p className="text-sm text-gray-500 mb-4">Maybe you were looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Our Services', href: '/#services' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'About Us', href: '/about' },
                { name: 'Get a Free Audit', href: '/contact' },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
