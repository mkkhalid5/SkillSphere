// app/api/auth/proxy/route.ts (বা যেখানে proxy ব্যবহার করছেন)
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const url = new URL(request.url);
  
  if (!session) {
    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('callbackUrl', url.pathname + url.search);
    return NextResponse.redirect(loginUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/courses/:path*', '/myprofile'],
};