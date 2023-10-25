/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'objectstorage.eu-frankfurt-1.oraclecloud.com',
        port: '',
        pathname: '/n/fr0trzcie6nl/b/pizza/o/**',
      },
    ],
  },
};

module.exports = nextConfig;
