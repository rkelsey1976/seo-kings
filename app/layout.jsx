import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import BaseSchemas from './BaseSchemas';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://seo-kings.co.uk'),
  title: {
    default: 'Website Design & SEO | Bath & North East Somerset – SEO Kings',
    template: '%s | SEO Kings',
  },
  description: 'We help tradespeople and small businesses in Bath & North East Somerset get found on Google. Website design, Google Business Profile, getting you on the map. Free check.',
  openGraph: { siteName: 'SEO Kings', locale: 'en_GB' },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico', sizes: 'any' }],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'GB-BST',
    'geo.placename': 'Bath',
    'theme-color': '#7C3AED',
    'msapplication-TileColor': '#0F172A',
  },
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body suppressHydrationWarning>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9JWXCPHP71" strategy="lazyOnload" />
        <Script id="ga" strategy="lazyOnload">
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
        <BaseSchemas />
        <div className="min-h-screen bg-dark grid-bg">
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
