module.exports = {
  basePath: '/leeyixuan21.github.io', 
  assetPrefix: '/leeyixuan21.github.io/', 
  trailingSlash: true,
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
