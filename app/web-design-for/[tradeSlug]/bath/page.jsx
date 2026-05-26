import WebDesignForTradeLocation from '../../../../src/views/WebDesignForTradeLocation';
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
  return <WebDesignForTradeLocation params={params} />;
}