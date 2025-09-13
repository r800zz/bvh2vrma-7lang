/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Export as a static site
  basePath: '/bvh2vrma-7lang', // Match the path for GitHub Pages
  assetPrefix: '/bvh2vrma-7lang', // Adjust paths for loading CSS and JS

  webpack(config) {
    config.module.rules.push({
      test: /\.vrm$/u,
      type: 'asset',
    })
    return config
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}

module.exports = nextConfig
