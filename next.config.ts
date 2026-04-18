import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
