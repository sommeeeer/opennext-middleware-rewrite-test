export const dynamic = "force-dynamic";

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return Response.json({
    "route.ts": "test",
    "request.nextUrl.pathname": request.nextUrl.pathname
  })
}