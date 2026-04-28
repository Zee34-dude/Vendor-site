import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/lib/models/Product";
import { checkAuth } from "@/lib/auth";

export async function GET() {
  await dbConnect();
  const products = await Product.find({}).sort({ createdAt: -1 });
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const isAdmin = await checkAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const body = await req.json();
  const { name, price, description, image, category } = body;

  if (!name || !price || !description || !image || !category) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const product = await Product.create({ name, price, description, image, category });
  return NextResponse.json(product, { status: 201 });
}
