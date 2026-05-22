import LocalSEOPeasedown from '../../../src/views/LocalSEOPeasedown';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Local SEO Peasedown St John | Get in the Map Pack from £150/month | SEO Kings' },
  description: 'We get Peasedown St John trades and local businesses into the Google map pack and ranking on page one. GBP optimisation, website SEO, review growth. From £150/month. Free audit — no obligation.',
  alternates: { canonical: 'https://seo-kings.co.uk/local-seo/peasedown-st-john' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Local SEO', path: '/local-seo' },
        { name: 'Peasedown St John', path: '/local-seo/peasedown-st-john' },
      ]} />
      <LocalSEOPeasedown />
    </>
  );
}
