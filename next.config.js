const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Export as a static site
    basePath: isDev ? '' : '/bvh2vrma-7lang', // Match the path for GitHub Pages only in production
    assetPrefix: isDev ? '' : '/bvh2vrma-7lang', // Adjust paths for loading CSS and JS only in production

    webpack(config) {
      config.module.rules.push({
        test: /\.vrm$/u,
        type: 'asset',
      });
      return config;
    },

    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
  };

  return nextConfig;
};

