import Blog from '../../src/pages/Blog';

export const revalidate = 3600;

export default function Page() {
  return <Blog />;
}
