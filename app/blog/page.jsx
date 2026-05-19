import Blog from '../../src/views/Blog';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO & Web Design Blog | SEO Kings' },
  description: 'Practical local SEO and web design advice for tradespeople and small businesses in Bath, Keynsham and Somerset. Tips on Google Business Profile, rankings and more.',
  alternates: { canonical: 'https://seo-kings.co.uk/blog' },
};

export default function Page() {
  return <Blog />;
}
