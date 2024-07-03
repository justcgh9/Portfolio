/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Portfolio', 
    assetPrefix: 'https://github.com/justcgh9/Portfolio/tree/gh-pages',
    images: {
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
