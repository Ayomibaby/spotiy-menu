import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  console.log(req,"jhb");
  // const token = await getToken({ req, secret: process.env.NEXT_PUBLIC_JWT_SECRET });
  const token = await getToken({ req, secret: process.env.NEXT_PUBLIC_JWT_SECRET  });
  const { pathname, origin } = req.nextUrl;
  if (pathname.includes("/api/auth") || token) {
    console.log(token, "kl");
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    console.log(token, "kljj");
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/",
};
