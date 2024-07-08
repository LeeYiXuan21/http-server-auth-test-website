// server.js

const express = require('express');
const basicAuth = require('basic-auth');

const app = express();

// Function to check credentials
function check(credentials) {
  return credentials && credentials.name === 'username' && credentials.pass === 'password';
}

// Middleware for basic authentication
function basicAuthMiddleware(req, res, next) {
  const credentials = basicAuth(req);

  if (!credentials || !check(credentials)) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).send('Access denied');
  }
  next();
}

// Serve static files
app.use(express.static('out'));

// Use basic auth middleware for specific routes
app.use('/basicauth.html', basicAuthMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
