import Services from '../../src/pages/Services';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design & Local SEO Services Bath | SEO Kings' },
  description: 'Website design from £399, Google Business Profile set-up, and local SEO for trades in Bath & North East Somerset. See all services and pricing.',
  alternates: { canonical: 'https://seo-kings.co.uk/services' },
};

export default function Page() {
  return <Services />;
}
