import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei', 'three', 'framer-motion', '@phosphor-icons/react', '@tabler/icons-react', 'lucide-react'],
  },
  // Optimize production bundle
  productionBrowserSourceMaps: false,
  compress: true,
  // Empty turbopack config to silence warning
  turbopack: {},
};

export default nextConfig;