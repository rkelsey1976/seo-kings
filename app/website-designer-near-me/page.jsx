import WebDesignerNearMe from '../../src/pages/WebDesignerNearMe';

export const revalidate = 3600;

export const metadata = {
  title: 'Website Designer Near Me | Bath, Keynsham, Radstock & Somerset – SEO Kings',
  description: 'Looking for a website designer near you? We cover Bath, Keynsham, Midsomer Norton, Radstock & all of Bath and North East Somerset. Web design from £399. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-near-me' },
};

export default function Page() {
  return <WebDesignerNearMe />;
}
