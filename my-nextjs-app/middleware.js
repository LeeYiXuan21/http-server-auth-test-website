// middleware.js

import { NextResponse } from 'next/server';
import basicAuth from 'basic-auth';

const username = process.env.BASIC_AUTH_USERNAME || 'username';
const password = process.env.BASIC_AUTH_PASSWORD || 'password';

export async function middleware(req) {
  // Define the protected paths
  const protectedPaths = ['/basicauth.html'];

  if (protectedPaths.includes(req.nextUrl.pathname)) {
    const user = basicAuth(req);

    if (!user || user.name !== username || user.pass !== password) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }
  }

  return NextResponse.next();
}
