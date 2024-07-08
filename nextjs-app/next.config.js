// next.config.js
module.exports = {
  middleware: function (handler) {
      return function (req, res) {
          // Apply middleware based on route matching
          if (req.url.includes('basicauth.html')) {
              return middleware(req, res);
          }
          return handler(req, res);
      };
  },
  async rewrites() {
    return [
        // Rewrite requests for / to serve public/index.html
        {
            source: '/../',
            destination: '/../index.html',
        },
        // Add other rewrite rules for specific pages if needed
    ];
},
};
