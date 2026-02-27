import type {NextConfig} from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.NODE_ENV === 'production';
const configuredBasePath = isGithubPages ? '/Portfolio-Website' : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: configuredBasePath,
  assetPrefix: configuredBasePath ? `${configuredBasePath}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
