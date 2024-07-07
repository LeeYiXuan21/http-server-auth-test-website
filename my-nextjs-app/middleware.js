import { NextResponse } from 'next/server';

const username = process.env.BASIC_AUTH_USERNAME;
const password = process.env.BASIC_AUTH_PASSWORD;

export function middleware(req) {
  const authHeader = req.headers.get('authorization');
  console.log(`Authorization header received: ${authHeader}`);

  if (!authHeader) {
    console.log("No Authorization header received");
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"'
      }
    });
  }

  const auth = authHeader.split(' ')[1];
  const [user, pass] = Buffer.from(auth, 'base64').toString().split(':');
  console.log(`Decoded username: ${user}, password: ${pass}`);

  if (user === username && pass === password) {
    return NextResponse.next();
  }

  console.log(`Authentication failed for user: ${user}`);
  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"'
    }
  });
}
