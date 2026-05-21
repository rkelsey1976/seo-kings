import LocalSEOTrade from '../../../src/views/LocalSEOTrade';
import TradePageSchema from './TradePageSchema';
import { TRADE_META } from '../../../src/constants/tradeMeta';

export function generateStaticParams() {
  return [
    { tradeSlug: 'plumbers' },
    { tradeSlug: 'electricians' },
    { tradeSlug: 'roofers' },
    { tradeSlug: 'builders' },
    { tradeSlug: 'landscapers' },
    { tradeSlug: 'cleaners' },
    { tradeSlug: 'painters-decorators' },
    { tradeSlug: 'kitchen-fitters' },
    { tradeSlug: 'bathroom-fitters' },
    { tradeSlug: 'heating-engineers' },
    { tradeSlug: 'plasterers' },
  ];
}

export function generateMetadata({ params }) {
  const slug = params?.tradeSlug;
  const meta = TRADE_META[slug];
  if (!meta) return {};
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    alternates: { canonical: `https://seo-kings.co.uk/local-seo/${slug}` },
  };
}

export default function Page({ params }) {
  return (
    <>
      <TradePageSchema slug={params?.tradeSlug} />
      <LocalSEOTrade params={params} />
    </>
  );
}
