import WebsiteRedesign from '../../src/views/WebsiteRedesign';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Redesign Bath & Bristol from £250 | SEO Kings' },
  description: 'Fast website redesigns for trades in Bath, Bristol & Somerset. SEO-ready, mobile-first, rankings protected. From £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-redesign' },
};

export default function Page() {
  return <WebsiteRedesign />;
}
