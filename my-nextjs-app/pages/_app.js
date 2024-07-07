// pages/_app.js
import { basicAuthMiddleware } from '../middleware';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ ctx }) => {
  // Apply basic auth middleware to all routes
  if (typeof window === 'undefined') {
    ctx.req.on('unauthorized', (res) => {
      if (res && res.statusCode === 401) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Access to the site"');
        res.statusCode = 401;
        res.end('Authentication required');
      }
    });
  }
};

export default MyApp;
