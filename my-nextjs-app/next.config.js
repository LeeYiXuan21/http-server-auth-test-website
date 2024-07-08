module.exports = {
  basePath: '/leeyixuan21.github.io', 
  assetPrefix: '/leeyixuan21.github.io/', 
  trailingSlash: true,
  output: 'export',
  async generateStaticParams() {
    return {
      '/': { page: '/' },
      '/basicauth': { page: '/basicauth' }, // Example for basicauth.html
      // Add more paths as needed
    };
  }
};
