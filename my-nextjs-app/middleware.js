// middleware.js
import base64 from 'base-64';

const USERNAME = process.env.BASIC_AUTH_USERNAME;
const PASSWORD = process.env.BASIC_AUTH_PASSWORD;

export function basicAuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
    const auth = authHeader.split(' ')[1];
    const credentials = base64.decode(auth).split(':');
    const username = credentials[0];
    const password = credentials[1];
    
    if (username === USERNAME && password === PASSWORD) {
      return next();
    }
  }
  
  res.setHeader('WWW-Authenticate', 'Basic realm="Access to the site"');
  res.status(401).end('Authentication required');
}
