/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'objectstorage.eu-frankfurt-1.oraclecloud.com',
        port: '',
        pathname: '/n/fr0trzcie6nl/b/pizza/o/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dyka4vajb/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
