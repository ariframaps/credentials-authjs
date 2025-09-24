import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(req: NextRequest) {
  const session = await auth();
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Not logged in
  if (!session) {
    if (pathname === "/auth") {
      return NextResponse.redirect(new URL("/auth/sign-in/step-1", req.url));
    }
    if (pathname === "/auth/sign-in") {
      return NextResponse.redirect(new URL("/auth/sign-in/step-1", req.url));
    }
    if (pathname === "/auth/sign-up") {
      return NextResponse.redirect(new URL("/auth/sign-up/step-1", req.url));
    }
    if (pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/auth/sign-in/step-1", req.url));
    }
  }

  // Logged in
  if (session) {
    // prevent accessing auth pages when logged in
    if (pathname === "/auth" || pathname.startsWith("/auth/")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

// 👇 Only run on auth routes + dashboard
export const config = {
  matcher: ["/", "/dashboard", "/auth", "/auth/:path*"],
};
