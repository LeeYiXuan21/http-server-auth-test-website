// middleware.js
const basicAuth = require('basic-auth');

function basicAuthMiddleware(req, res, next) {
    const user = basicAuth(req);

    if (!user || user.name !== 'username' || user.pass !== 'password') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.status(401).send('Unauthorized');
    }

    return next();
}

module.exports = {
    basicAuthMiddleware
};
