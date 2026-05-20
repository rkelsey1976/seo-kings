/** @type {import('next').NextConfig} */
// If you see "Expected to use Webpack bindings... Turbopack bindings" error:
// Run `npm run dev` (do NOT use `next dev --turbo`). Delete the .next folder and try again.
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    cssChunking: 'loose',
  },
  async redirects() {
    return [
      {
        source: '/brandkit',
        destination: '/brandkit/index.html',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
