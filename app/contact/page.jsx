import Contact from '../../src/views/Contact';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Get a Free Quote — Web Design & SEO | SEO Kings' },
  description: 'Get a free audit and quote for web design, SEO or both. We build fast websites and rank trades and small businesses across Bath, Keynsham and Somerset.',
  alternates: { canonical: 'https://seo-kings.co.uk/contact' },
};

export default function Page() {
  return <Contact />;
}
