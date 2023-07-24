import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("session")

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  const url = request.nextUrl.clone()
  url.pathname = "/api/login"

  const responseAPI = await fetch(url, {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  })

  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/workspace/:path*", "/config"],
}
