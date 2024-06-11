/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: "/next-auth",
  assetPrefix: "/next-auth/",
};

export default nextConfig;
