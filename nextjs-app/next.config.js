/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  // Specify the exportPathMap for static export
  exportPathMap: function () {
      return {
          '/': { page: '/' },
          // Add other pages here if needed
      };
  },
  // Optionally configure other Next.js options
  // For example, target: 'serverless' if using Vercel
};