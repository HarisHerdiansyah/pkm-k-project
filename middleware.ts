import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { ERROR } from './lib/constants';

const allowedOrigins = ['http://localhost:3000'];

export async function middleware(req: NextRequest) {
  const requestOrigin = req.nextUrl.origin;

  if (!allowedOrigins.includes(requestOrigin)) {
    return NextResponse.json(
      { message: 'Request Not Allowed' },
      { status: ERROR.FORBIDDEN },
    );
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    if (req.nextUrl.pathname.startsWith('/api')) {
      return NextResponse.json(
        { message: 'Request Not Allowed' },
        { status: ERROR.FORBIDDEN },
      );
    }
    return NextResponse.redirect(new URL('/login', requestOrigin));
  }

  if (req.nextUrl.pathname.includes('/cms') && token.role !== 'ADMIN') {
    return NextResponse.json(
      { message: 'Request Not Allowed' },
      { status: ERROR.FORBIDDEN },
    );
  }

  // ? After login all user will redirect to /home
  if (req.nextUrl.pathname.startsWith('/home') && token.role === 'ADMIN') {
    return NextResponse.redirect(new URL('/cms/dashboard', requestOrigin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/cms/:path',
    '/vr',
    '/cms/:path',
    '/home',
    '/product',
    '/profile',
  ],
};
