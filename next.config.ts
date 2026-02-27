import type {NextConfig} from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.NODE_ENV === 'production';
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubPages ? '/Portfolio-Website' : '');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: configuredBasePath || undefined,
  assetPrefix: configuredBasePath ? `${configuredBasePath}/` : undefined,
};

export default nextConfig;
