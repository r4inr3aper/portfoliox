/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.genius.com',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
