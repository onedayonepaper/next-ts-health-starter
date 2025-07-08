/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors. Only enable if you know what you're doing.
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig