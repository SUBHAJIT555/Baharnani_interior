import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "10.109.56.76",
    "http://10.109.56.76:3000",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v2.corporategiftsdubaii.ae",
        pathname: "/_next/static/media/**",
      },
    ],
  },
};

export default nextConfig;
