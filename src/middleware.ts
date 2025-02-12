/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

const AuthRoutes = ["/login", "/register"];
const roleBasedRoutes = {
  user: [/^\/user-dashboard/],
  admin: [/^\/admin-dashboard/],
};

type Role = keyof typeof roleBasedRoutes;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies()?.get("access-token")?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }

  const decode = jwtDecode(accessToken) as any;

  if (decode?.role && roleBasedRoutes[decode?.role as Role]) {
    const routes = roleBasedRoutes[decode?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/admin-dashboard/:page*",
    "/user-dashboard/:page*",
  ],
};
