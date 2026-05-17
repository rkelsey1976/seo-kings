import '../../app/globals.css';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-[#0B1324]`}>
      <Component {...pageProps} />
    </div>
  );
}
