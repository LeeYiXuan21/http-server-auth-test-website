// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const isAuthPage = url.pathname.startsWith('/basicauth');

  if (isAuthPage) {
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }

    const auth = authHeader.split(' ')[1];
    const decodedAuth = Buffer.from(auth, 'base64').toString();
    const [username, password] = decodedAuth.split(':');

    const expectedUsername = process.env.BASIC_AUTH_USERNAME || 'username';
    const expectedPassword = process.env.BASIC_AUTH_PASSWORD || 'password';

    if (username !== expectedUsername || password !== expectedPassword) {
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
