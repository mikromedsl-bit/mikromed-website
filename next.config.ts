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
        source: "/opportunities",
        destination: "/applications",
        permanent: true
      },
      {
        source: "/opportunita",
        destination: "/applications",
        permanent: true
      },
      {
        source: "/products-projects",
        destination: "/applications",
        permanent: true
      },
      {
        source: "/products-opportunities",
        destination: "/applications",
        permanent: true
      },
      {
        source: "/create-your-product",
        destination: "/collaborate",
        permanent: true
      },
      {
        source: "/technologies",
        destination: "/patents",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
