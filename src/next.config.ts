import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
};

export default nextConfig;
