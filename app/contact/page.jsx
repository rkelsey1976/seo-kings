import Contact from '../../src/views/Contact';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Get a Free Website Quote | SEO Kings' },
  description: 'Get a free website audit and quote from SEO Kings. We build fast, Google-friendly websites for tradespeople and small businesses across Bath, Keynsham and Somerset.',
  alternates: { canonical: 'https://seo-kings.co.uk/contact' },
};

export default function Page() {
  return <Contact />;
}
