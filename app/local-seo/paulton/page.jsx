import LocalSEOPaulton from '../../../src/views/LocalSEOPaulton';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Paulton | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'We get Paulton trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/paulton' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Paulton', path: '/local-seo/paulton' },
      ]} />
      <LocalSEOPaulton />
    </>
  );
}
