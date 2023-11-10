import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { languages } from "./services/i18n/config";

acceptLanguage.languages([...languages]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware() {
  return NextResponse.next();
}
