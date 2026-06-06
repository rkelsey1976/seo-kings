import WebsiteROICalculator from '../../src/views/WebsiteROICalculator';

export const metadata = {
  title: { absolute: 'Website ROI Calculator for Tradespeople — Is a Website Worth It? | SEO Kings' },
  description:
    'Find out how many extra jobs your website needs to pay for itself. Free calculator for plumbers, electricians, builders and tradespeople across Bath and the UK.',
  alternates: { canonical: 'https://seo-kings.co.uk/website-roi-calculator' },
};

export default function Page() {
  return <WebsiteROICalculator />;
}
