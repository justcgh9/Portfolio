/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/your-repo-name', 
    assetPrefix: '/your-repo-name/',
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
