const basicAuth = require('basic-auth');
import { NextResponse } from 'next/server';

const AUTH_USER = 'username';
const AUTH_PASS = 'password';

export default function middleware(req, res) {
    // Check if the request path matches basicauth.html
    if (req.url.includes('basicauth.html')) {
        const authHeader = req.headers.get('Authorization');

        if (!authHeader) {
            return new NextResponse('Unauthorized', {
                status: 401,
                headers: {
                    'WWW-Authenticate': 'Basic realm="Authorization Required"'
                }
            });
        }

        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');

        if (username !== AUTH_USER || password !== AUTH_PASS) {
            console.log('Authentication failed');
            return new NextResponse('Unauthorized', {
                status: 401,
                headers: {
                    'WWW-Authenticate': 'Basic realm="Authorization Required"'
                }
            });
        }
        console.log('Authentication succeeded');
    }

    // If authenticated or not targeting basicauth.html, continue with the API logic
    return NextResponse.next();
}
