import { NextRequest, NextResponse } from "next/server"
import { getSession } from "./libs/auth"

export async function middleware(request:NextRequest) {
    const pathname = request.nextUrl.pathname
    const session  = await getSession()
    if(pathname.startsWith('/dashboard') && !session){
        return NextResponse.redirect(new URL(`/login?callback=${encodeURIComponent(pathname)}`, request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}