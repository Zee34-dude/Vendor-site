import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Order from "@/lib/models/Order";
import { checkAuth } from "@/lib/auth";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const isAdmin = await checkAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const body = await req.json();
  const order = await Order.findByIdAndUpdate(params.id, body, { new: true });

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  return NextResponse.json(order);
}
