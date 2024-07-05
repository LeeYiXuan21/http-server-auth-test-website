module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        // Add paths for all your static pages
        '/basicauth1': { page: '/basicauth1' },
        '/basicauth2': { page: '/basicauth2' },
        // Repeat for all 100 pages
      };
    },
    // Configure basePath if your repository name is different from the project name
    basePath: process.env.NODE_ENV === 'production' ? '/my-nextjs-app' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-nextjs-app/' : ''
  };
  
