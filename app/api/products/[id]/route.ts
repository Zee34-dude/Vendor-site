import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/lib/models/Product";
import { checkAuth } from "@/lib/auth";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const isAdmin = await checkAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const body = await req.json();
  const product = await Product.findByIdAndUpdate(params.id, body, { new: true });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const isAdmin = await checkAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const product = await Product.findByIdAndDelete(params.id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
