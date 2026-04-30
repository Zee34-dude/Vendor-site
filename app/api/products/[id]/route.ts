import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/lib/models/Product";
import { checkAuth } from "@/lib/auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const isAdmin = await checkAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const updateData: any = {};
    
    // Extract text fields
    ["name", "price", "description", "category"].forEach(key => {
      const value = formData.get(key);
      if (value) {
        updateData[key] = key === "price" ? Number(value) : value;
      }
    });

    const imageFile = formData.get("image") as File;
    
    await dbConnect();

    // If a new image is provided, upload it
    if (imageFile && typeof imageFile !== "string") {
      const imageUrl = await uploadToCloudinary(imageFile);
      updateData.image = imageUrl;
    }

    const product = await Product.findByIdAndUpdate(params.id, updateData, { new: true });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error: any) {
    console.error("Product update error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
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
