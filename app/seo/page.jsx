import SEOServices from '../../src/views/SEOServices';
import LocalBusinessRefSchema from '../LocalBusinessRefSchema';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'SEO Services | Bath & Bristol | From £150/mo | SEO Kings' },
  description: 'SEO services for trades and small businesses in Bath and Bristol — technical SEO, on-page optimisation, content strategy, Google Business Profile and local SEO. From £150/month. Free audit.',
  alternates: { canonical: 'https://seo-kings.co.uk/seo' },
};

export default function Page() {
  return (
    <>
      <LocalBusinessRefSchema />
      <SEOServices />
    </>
  );
}
