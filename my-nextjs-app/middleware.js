// middleware.js

export default function(req, res, next) {
  // Basic authentication logic
  const auth = { login: 'username', password: 'password' }; // Replace with your credentials

  // parse login and password from headers
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  // Verify login and password
  if (!login || !password || login !== auth.login || password !== auth.password) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access denied');
  } else {
    // User authenticated
    next();
  }
}
