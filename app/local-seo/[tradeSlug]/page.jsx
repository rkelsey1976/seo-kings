import LocalSEOTrade from '../../../src/pages/LocalSEOTrade';

export function generateStaticParams() {
  return [{ tradeSlug: 'plumbers' }, { tradeSlug: 'electricians' }, { tradeSlug: 'roofers' }];
}

export default function Page({ params }) {
  return <LocalSEOTrade params={params} />;
}
