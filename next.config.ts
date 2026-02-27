import type {NextConfig} from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Optimize for static export / GitHub Pages
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.iconify.design',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Allow optional basePath/assetPrefix for project pages
  basePath: configuredBasePath || undefined,
  assetPrefix: configuredBasePath || undefined,
  devIndicators: {
    buildActivity: false,
  }
};

export default nextConfig;
