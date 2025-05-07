/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize development experience
    if (dev && !isServer) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;