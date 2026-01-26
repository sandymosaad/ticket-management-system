import { NextResponse } from "next/server";
import { supabase } from "./app/lib/supabaseClient"; 

export async function middleware(req) {
  const url = req.nextUrl.clone();
  
  const protectedPaths = ["/tickets", "/tickets/edit"];

  if (protectedPaths.some(path => url.pathname.startsWith(path))) {
    const token = req.cookies.get("sb-access-token")?.value;

    if (!token) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

  
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tickets/:path*"],
};
