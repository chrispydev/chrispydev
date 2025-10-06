import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname
  },
  images: {
    domains: ['cdn.sanity.io'],
  }
};

export default nextConfig;
