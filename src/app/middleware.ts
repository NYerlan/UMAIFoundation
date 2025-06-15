import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // If the request is for a page in the pages directory
  if (pathname.startsWith('/pages/')) {
    // Remove the /pages prefix and add .tsx extension
    const pagePath = pathname.replace('/pages/', '').replace(/\/$/, '');
    const pageFile = `/pages/${pagePath}.tsx`;
    
    // Check if the page file exists
    try {
      require.resolve(`./${pageFile}`);
      // If it exists, rewrite to the page
      return NextResponse.rewrite(new URL(pathname, request.url));
    } catch (error) {
      // If it doesn't exist, continue to next middleware
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
