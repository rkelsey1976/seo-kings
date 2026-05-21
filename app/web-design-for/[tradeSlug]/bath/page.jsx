import WebDesignForTradeLocation from '../../../../src/views/WebDesignForTradeLocation';
import BreadcrumbSchema from '../../../BreadcrumbSchema';
import { TRADE_LOCATION_META } from '../../../../src/constants/tradeLocationMeta';

export function generateStaticParams() {
  return Object.keys(TRADE_LOCATION_META).map(tradeSlug => ({ tradeSlug }));
}

export function generateMetadata({ params }) {
  const slug = params?.tradeSlug;
  const meta = TRADE_LOCATION_META[slug];
  if (!meta) return {};
  return {
    title: { absolute: meta.metaTitle },
    description: meta.metaDescription,
    alternates: { canonical: `https://seo-kings.co.uk/web-design-for/${slug}/bath` },
  };
}

export default function Page({ params }) {
  const slug = params?.tradeSlug;
  const meta = TRADE_LOCATION_META[slug];
  if (!meta) return null;
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Web Design for Trades', path: '/web-design-for' },
        { name: `Web Design for ${meta.tradeName}`, path: `/web-design-for/${slug}` },
        { name: 'Bath', path: `/web-design-for/${slug}/bath` },
      ]} />
      <WebDesignForTradeLocation params={params} />
    </>
  );
}