/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
const withMDX = require("@next/mdx")();

const nextConfig = {
  pageExtensions: ["tsx", "mdx"], // ここを追加
  experimental: {
    appDir: true,
  },
};
module.exports = withMDX({
  nextConfig,
});
module.exports = withPWA({});
