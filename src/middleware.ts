import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = [
    '/dashboard',
    '/providers',
    '/loading-data',
    '/data-fetching',
    '/confirmation',
    '/authCallBack'
];
const unprotectedRoutes = ['/', '/login'];

import { auth } from './services/auth';

export default async function middleware(request: NextRequest) {
    const session = await auth();

    if (request.nextUrl.pathname === '/' && session) {
        const user = 'as'
        if (user) {
            const absoluteURL = new URL('/dashboard', request.nextUrl.origin);
            return NextResponse.redirect(absoluteURL.toString());
        } else {
            const absoluteURL = new URL('/providers', request.nextUrl.origin);
            return NextResponse.redirect(absoluteURL.toString());
        }
    }

    const isProtectedRoute = protectedRoutes.some((prefix) =>
        request.nextUrl.pathname.startsWith(prefix)
    );

    if (!session && isProtectedRoute) {
        const absoluteURL = new URL('/', request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
    if (session && unprotectedRoutes.includes(request.nextUrl.pathname)) {
        const absoluteURL = new URL('/dashboard', request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}