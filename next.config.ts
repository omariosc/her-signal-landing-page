import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/her-signal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/her-signal/' : '',
};

export default nextConfig;
