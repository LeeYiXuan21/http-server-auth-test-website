// middleware.js
const basicAuth = require('basic-auth');
import { NextResponse } from 'next/server';

export default function middleware(req, res) {
    const user = basicAuth(req);

    if (!user || user.name !== 'username' || user.pass !== 'password') {
        return new NextResponse('Unauthorized', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Authorization Required"'
            }
        });
    }

    // If authenticated, continue with the API logic
    return NextResponse.next();
}
