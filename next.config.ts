import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    // Next.js 16 bloquea por defecto imágenes servidas desde localhost / IPs privadas
    dangerouslyAllowLocalIP: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.DOMAIN ?? 'localhost',
        port: '4000',
        pathname: '/img/**'
      }
    ]
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
