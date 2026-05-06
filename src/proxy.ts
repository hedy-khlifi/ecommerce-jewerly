import { NextRequest, NextResponse } from "next/server";
export function proxy(req: NextRequest) {
            return NextResponse.redirect(new URL("/", req.url));

}
export const config = {
    matcher:'/practice/:path*'
}