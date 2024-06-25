import { NextResponse, NextRequest } from 'next/server'

const signedinPages = ['/', '/playlist', '/library'];

export default function middleware(req: NextRequest) {
 
  if (signedinPages.includes(req.nextUrl.pathname)) {
    const token = req.cookies.get('TUNZ_ACCESS_TOKEN'); 
  
    if (!token) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }
  }

  
  return NextResponse.next();
}