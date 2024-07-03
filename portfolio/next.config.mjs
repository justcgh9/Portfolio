/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Portfolio', 
    assetPrefix: '/Portfolio',
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'imgs.xkcd.com',
            port: '',
            pathname: '/comics/**',
          },
        ],
      },
};

export default nextConfig;
