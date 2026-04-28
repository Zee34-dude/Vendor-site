import { NextRequest, NextResponse } from "next/server";
import { ADMIN_PASSWORD } from "@/lib/data";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (password === ADMIN_PASSWORD) {
    const token = await signToken({ role: "admin" });
    await setAuthCookie(token);
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: "Wrong password" }, { status: 401 });
}
