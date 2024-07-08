// next.config.js

module.exports = {
    // basePath: '/leeyixuan21.github.io', // Replace with your GitHub repository name
    // assetPrefix: '/leeyixuan21.github.io/', // Replace with your GitHub repository name
    // trailingSlash: true,
    output: 'export',
    async redirects() {
      return [
        {
          source: '/basicauth',
          destination: '/basicauth.html',
          permanent: true,
        },
      ];
    },
  };
  