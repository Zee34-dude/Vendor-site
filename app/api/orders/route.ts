import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Order from "@/lib/models/Order";

export async function GET() {
  await dbConnect();
  const orders = await Order.find({}).sort({ createdAt: -1 });
  return NextResponse.json(orders);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const { customerName, phone, items, total, note } = body;

  if (!customerName || !phone || !items || !total) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const order = await Order.create({
    customerName: customerName.trim(),
    phone: phone.trim(),
    items,
    total: Number(total),
    status: "pending",
    note: note?.trim() || "",
  });

  return NextResponse.json(order, { status: 201 });
}
