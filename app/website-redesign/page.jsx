import WebsiteRedesign from '../../src/pages/WebsiteRedesign';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Redesign | Rebuild Your Site from £399 | SEO Kings' },
  description: 'Website redesign for trades and local businesses. Fast, SEO-ready rebuilds from £399. Bath, Keynsham, Trowbridge and Somerset. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-redesign' },
};

export default function Page() {
  return <WebsiteRedesign />;
}
