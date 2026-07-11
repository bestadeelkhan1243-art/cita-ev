/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'citaevcharger.co.uk',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
