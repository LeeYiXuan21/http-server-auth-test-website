import { NextResponse } from 'next/server';

// Ensure username and password are set from environment variables
const username = process.env.BASIC_AUTH_USERNAME || 'default_username';
const password = process.env.BASIC_AUTH_PASSWORD || 'default_password';

export function middleware(req) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader) {
    console.warn('No Authorization header found');
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"'
      }
    });
  }

  const auth = authHeader.split(' ')[1];
  const [user, pass] = Buffer.from(auth, 'base64').toString().split(':');

  if (user === username && pass === password) {
    return NextResponse.next();
  }

  console.warn(`Unauthorized access attempt: username: ${user}, password: ${pass}`);
  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"'
    }
  });
}

export const config = {
  matcher: ['/basicauth/:path*']
};
