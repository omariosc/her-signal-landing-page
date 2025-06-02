import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Remove basePath and assetPrefix for custom domain deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/her-signal' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/her-signal/' : '',
};

export default nextConfig;
