import WebsiteRedesign from '../../src/views/WebsiteRedesign';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Website Redesign Bath from £250 | SEO Kings' },
  description: 'Fast website redesigns for trades in Bath & Somerset. SEO-ready, mobile-first, rankings protected. From £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-redesign' },
};

export default function Page() {
  return <WebsiteRedesign />;
}
