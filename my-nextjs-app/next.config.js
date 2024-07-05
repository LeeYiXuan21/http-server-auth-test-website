module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  // Removed exportPathMap as it's not needed with app directory
  // Ensure basePath and assetPrefix are correctly set if deploying to a subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/my-nextjs-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-nextjs-app/' : '',
};
