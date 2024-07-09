/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.xkcd.com",
        port: "",
        pathname: "/comics/**",
      },
    ],
  },
};

export default nextConfig;
