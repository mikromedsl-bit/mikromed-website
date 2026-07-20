import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/applications",
        permanent: true
      },
      {
        source: "/prodotti",
        destination: "/applications",
        permanent: true
      },
      {
        source: "/products-opportunities",
        destination: "/applications",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
