import WebsiteRedesign from '../../src/views/WebsiteRedesign';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Redesign Bath & Somerset | From £250 | SEO Kings' },
  description: 'Website redesign for trades and local businesses in Bath, Keynsham & Somerset. Fast, SEO-ready rebuilds from £250. Rankings protected. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-redesign' },
};

export default function Page() {
  return <WebsiteRedesign />;
}
