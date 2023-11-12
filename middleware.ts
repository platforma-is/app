import { NextRequest, NextResponse, userAgent } from "next/server";
import isBot from "isbot";

export function middleware(req: NextRequest) {
  const { ua } = userAgent(req);

  if (req.nextUrl.pathname.includes("/api/form")) {
    if (isBot(ua)) {
      const url = req.nextUrl.clone();
      url.pathname = "/api/bot";

      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}
