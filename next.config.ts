import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images:{
    unoptimized:true,
  },
  env: {
    apiUrl: 'http://34.93.164.131/api/v1'
  }
};

export default nextConfig;
