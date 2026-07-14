/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add any other image domains you plan to use
    ],
  },
  async redirects() {
    return [
      {
        source: '/marble-polishing-el-gouna',
        destination: '/services/marble-polishing',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;