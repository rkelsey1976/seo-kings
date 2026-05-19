'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie_consent', 'granted');
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'denied');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[10000] bg-[#0f1a2e] border-t border-white/10 p-4 sm:p-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-400 flex-1 leading-relaxed">
          We use cookies to understand how visitors use our site and to improve our service.{' '}
          <Link href="/privacy" className="underline hover:text-white transition-colors">
            Privacy policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-white border border-white/10 hover:border-white/20 rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold text-[#0B1324] rounded-lg transition-colors hover:bg-[#d65a3f]"
            style={{ backgroundColor: '#E8715A' }}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
