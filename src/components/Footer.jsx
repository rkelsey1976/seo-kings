import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05]" style={{ background: '#0D0F17' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20 sm:py-24">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          
          {/* Brand */}
          <div className="lg:max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <img src="/crown-logo.svg" alt="SEO Kings" width="28" height="28" className="h-7 w-auto opacity-80" />
              <span className="text-base font-bold text-white tracking-tight">SEO Kings</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Website design and local SEO for trades and small businesses across Bath, Bristol, Somerset and Wiltshire. Fast sites from £250. GBP optimisation from £100.
            </p>
          </div>

          {/* Contact + Services + Follow */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            {/* Services */}
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4 text-primary">Services</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Website Design', href: '/web-design' },
                  { label: 'Site + Google — £99/mo', href: '/site-and-google' },
                  { label: 'Web Design Packages', href: '/web-design-packages' },
                  { label: 'Web Design for Trades', href: '/web-design-for' },
                  { label: 'Google Business Profile', href: '/google-business-profile' },
                  { label: 'Local SEO', href: '/local-seo' },
                  { label: 'Website Redesign', href: '/website-redesign' },
                  { label: 'Blog', href: '/blog' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-white text-white/55"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4 text-primary">Areas</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Bath', href: '/areas/bath' },
                  { label: 'Bristol', href: '/areas/bristol' },
                  { label: 'Keynsham', href: '/areas/keynsham' },
                  { label: 'SEO Bath', href: '/seo/bath' },
                  { label: 'SEO Bristol', href: '/seo/bristol' },
                  { label: 'Local SEO Bath', href: '/local-seo/bath' },
                  { label: 'Local SEO Bristol', href: '/local-seo/bristol' },
                  { label: 'All areas →', href: '/areas' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-white text-white/55"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4 text-primary">Growth Hub</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Local SEO Checklist (PDF)', href: '/tools/local-seo-checklist' },
                  { label: 'GBP Score Checker', href: '/google-business-profile-score-checker' },
                  { label: 'Invoice & Quote Generator', href: '/invoice-template-generator' },
                  { label: 'Website ROI Calculator', href: '/website-roi-calculator' },
                  { label: 'Trades Growth Hub →', href: '/tools' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-white text-white/55"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4 text-primary">Contact</p>
              <div className="space-y-3">
                <address className="not-italic text-sm leading-relaxed text-white/55">
                  16a Culvers Road<br />
                  Keynsham, Somerset<br />
                  BS31 2DW
                </address>
                <p className="text-sm text-white/55 leading-relaxed">
                  Mon–Thu: 9am–6pm<br />
                  Fri: 9am–4:30pm<br />
                  Sat–Sun: Closed
                </p>
                <a href="tel:07702264921" className="block text-sm text-white hover:opacity-80 transition-opacity">
                  07702 264 921
                </a>
                <a
                  href="https://wa.me/447702264921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:opacity-80 transition-opacity text-white/55"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase mb-4 text-primary">Follow</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61587531959737" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/seokings"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/55">
            <span suppressHydrationWarning>© {currentYear} SEO Kings</span>
          </p>
          <div className="flex items-center gap-6 text-xs text-white/55">
            <Link href="/hosting" className="hover:text-white transition-colors">Hosting</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/credits" className="hover:text-white transition-colors">Credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
