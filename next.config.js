/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domain: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
