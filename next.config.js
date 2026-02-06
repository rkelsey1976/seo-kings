/** @type {import('next').NextConfig} */
// If you see "Expected to use Webpack bindings... Turbopack bindings" error:
// Run `npm run dev` (do NOT use `next dev --turbo`). Delete the .next folder and try again.
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
