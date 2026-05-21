import GoogleBusinessProfile from '../../src/views/GoogleBusinessProfile';

export const revalidate = 3600;

export const metadata = {
  title: { absolute: 'Google Business Profile Optimisation Bath | SEO Kings' },
  description: 'One-off Google Business Profile optimisation for £100. Ongoing GBP management is included in our Local SEO packages. Add GBP to any website build for £100.',
  alternates: { canonical: 'https://seo-kings.co.uk/google-business-profile' },
};

export default function Page() {
  return <GoogleBusinessProfile />;
}
