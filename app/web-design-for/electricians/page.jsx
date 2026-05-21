import WebDesignForElectricians from '../../../src/views/WebDesignForElectricians';
import BreadcrumbSchema from '../../BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Web Design for Electricians Bath & Somerset | From £250 | SEO Kings' },
  description: 'Websites for electricians that rank on Google and win EICR and EV charger jobs. NICEIC/NAPIT badge, accreditation pages, photo upload. Bath and Somerset from £250.',
  alternates: { canonical: 'https://seo-kings.co.uk/web-design-for/electricians' },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: 'Web Design for Electricians', path: '/web-design-for/electricians' },
      ]} />
      <WebDesignForElectricians />
    </>
  );
}
