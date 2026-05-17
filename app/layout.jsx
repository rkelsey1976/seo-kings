import './globals.css';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import BaseSchemas from './BaseSchemas';
import Navbar from '../src/components/PillNav';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import WhatsAppButton from '../src/components/WhatsAppButton';
import GrainTexture from '../src/components/library/GrainTexture';

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
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico', sizes: 'any' }],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'GB-BST',
    'geo.placename': 'Bath',
    'theme-color': '#E8715A',
    'msapplication-TileColor': '#0B1324',
    'twitter:card': 'summary_large_image',
    'twitter:site': '@seokings',
    'twitter:title': 'SEO Kings | Website Design Bath & North East Somerset',
    'twitter:description': 'Website Design and Local SEO for tradespeople and small businesses. Get found on Google.',
    'twitter:image': 'https://seo-kings.co.uk/og-image.jpg',
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
      </head>
      <body suppressHydrationWarning>
        <GrainTexture opacity={0.04} blendMode="multiply" zIndex={9999} />
        <WhatsAppButton />
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
