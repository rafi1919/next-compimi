import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ppppppppp";

const authRoutePage = ["/chat", "/detailevent/[eventId]", "/home", "/profile"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const currentPath = request.nextUrl.pathname;

  if (!token && authRoutePage.includes(currentPath)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  api: {
    bodyParser: false,
  },
};
