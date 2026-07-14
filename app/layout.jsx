import './globals.css';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import BaseSchemas from './BaseSchemas';
import Navbar from '../src/components/PillNav';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import WhatsAppButton from '../src/components/WhatsAppButton';
import GrainTexture from '../src/components/library/GrainTexture';
import CookieBanner from '../src/components/CookieBanner';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata = {
  metadataBase: new URL('https://seo-kings.co.uk'),
  title: {
    default: 'SEO Kings | Website Design Bath & North East Somerset',
    template: '%s | SEO Kings',
  },
  description: 'We help tradespeople and small businesses in Bath & North East Somerset get found on Google. Website Design and Website Designer services, Google Business Profile, getting you on the map. Free check.',
  openGraph: {
    siteName: 'SEO Kings',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SEO Kings — Website Design & Local SEO for Bath & North East Somerset' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seokings',
    title: 'SEO Kings | Website Design Bath & North East Somerset',
    description: 'Website Design and Local SEO for tradespeople and small businesses. Get found on Google.',
    images: [{ url: 'https://seo-kings.co.uk/og-image.jpg', width: 1200, height: 630, alt: 'SEO Kings — Website Design & Local SEO for Bath & North East Somerset' }],
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico', sizes: 'any' }],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'GB-BAS',
    'geo.placename': 'Bath',
    'theme-color': '#E8715A',
    'msapplication-TileColor': '#0B1324',
  },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <BaseSchemas />
        {/* Google Consent Mode v2 — must run before gtag.js */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          try {
            var consent = localStorage.getItem('cookie_consent');
            if (consent === 'granted') {
              gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted'
              });
            }
          } catch(e) {}
        `}} />
      </head>
      <body suppressHydrationWarning>
        <GrainTexture opacity={0.04} blendMode="multiply" zIndex={9999} />
        <CookieBanner />
        <WhatsAppButton />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9JWXCPHP71" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-9JWXCPHP71');`}
        </Script>
        <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="business" />
          <input type="text" name="service" />
          <input type="url" name="website" />
          <textarea name="message" />
          <input name="bot-field" />
        </form>
        <div className="min-h-screen bg-dark">
          <ScrollToTop />
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
