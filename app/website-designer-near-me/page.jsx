import WebDesignerNearMe from '../../src/pages/WebDesignerNearMe';

export const revalidate = 3600;

export const metadata = {
  title: 'Website Designer Near Me | Bath, Keynsham, Radstock & Somerset – SEO Kings',
  description: 'Looking for a website designer near you? We cover Bath, Keynsham, Midsomer Norton, Radstock & all of Bath and North East Somerset. Web design from £399. Free audit.',
  keywords: 'website designer near me, web designer near me, local website designer, website designer Bath, website designer Keynsham, website designer Midsomer Norton, website designer Radstock, website designer Somerset, website design near me',
  alternates: { canonical: 'https://seo-kings.co.uk/website-designer-near-me' },
};

export default function Page() {
  return <WebDesignerNearMe />;
}
