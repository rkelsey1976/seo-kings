import GoogleBusinessProfile from '../../src/pages/GoogleBusinessProfile';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Google Business Profile Optimisation Bath | SEO Kings' },
  description: 'One-off Google Business Profile optimisation for £150. We also include GBP in our Local SEO and website packages — no need to buy it separately.',
  alternates: { canonical: 'https://seo-kings.co.uk/google-business-profile' },
};

export default function Page() {
  return <GoogleBusinessProfile />;
}
