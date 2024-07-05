module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    // Configure basePath if your repository name is different from the project name
    basePath: process.env.NODE_ENV === 'production' ? '/my-nextjs-app' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-nextjs-app/' : ''
  };
  
