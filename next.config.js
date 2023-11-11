/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {  // NOTE: Do we need this here?
  //   serverActions: true,
  // },
  images: {
    // loader: "imgix", // NOTE: Do we need this here?
    // path: process.env.NEXT_IMAGEKIT_PUBLIC_ENDPOINT,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.punkapi.com",
      },
      {
        protocol: "https",
        hostname: "swiperjs.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
