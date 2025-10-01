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
		if (
			pathname === "/auth" ||
			pathname === "/auth/sign-in" ||
			pathname === "/dashboard" ||
			pathname === "/auth/sign-up"
		) {
			return NextResponse.redirect(
				new URL("/auth/sign-in/step-1", req.url)
			);
		}
	}

	// Logged in
	if (session) {
		// prevent accessing auth pages when logged in
		if (pathname.startsWith("/auth/")) {
			return NextResponse.redirect(new URL("/dashboard", req.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/", "/dashboard", "/auth/:path*"],
};
