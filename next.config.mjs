/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

   images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'i.pravatar.cc',
          },
        ],
      },
};

export default nextConfig;
