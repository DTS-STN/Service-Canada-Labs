import { NextRequest, NextResponse } from "next/server";


//regex to check if there's an extension in the path, ie .jpg
const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  console.log("middleware >>>>>>>>>>>>>>>>>>>>>> middleware")
  console.log("req.nextUrl.pathname", req.nextUrl.pathname)
  console.log("req.headers", req.headers)
  console.log("req.referrer", req.referrer)
  console.log("req.url", req.url)
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.pathname !== "/" && req.nextUrl.locale === "default") {
    return NextResponse.redirect(
      new URL(`/en${req.nextUrl.pathname}`, req.url)
    );
  }
}
