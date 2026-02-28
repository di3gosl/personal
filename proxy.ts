import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // --- Protect admin routes (except the login page) ---
    if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
        const token = await getToken({ req: request });

        if (!token || token.role !== "ADMIN") {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
