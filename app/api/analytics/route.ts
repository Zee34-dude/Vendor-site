import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Order from "@/lib/models/Order";
import Product from "@/lib/models/Product";
import { checkAuth } from "@/lib/auth";

export async function GET() {
  const isAdmin = await checkAuth();
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const totalOrders = await Order.countDocuments();
  const totalProducts = await Product.countDocuments();

  const revenueAgg = await Order.aggregate([
    { $match: { status: "completed" } },
    { $group: { _id: null, total: { $sum: "$total" } } },
  ]);
  const totalRevenue = revenueAgg[0]?.total || 0;

  const pendingOrders = await Order.countDocuments({ status: "pending" });

  // Frequent customers: group by phone, count, sort desc, limit 5
  const frequentCustomers = await Order.aggregate([
    { $group: { _id: "$phone", name: { $first: "$customerName" }, count: { $sum: 1 }, totalSpent: { $sum: "$total" } } },
    { $sort: { count: -1 } },
    { $limit: 5 },
  ]);

  // Orders over the last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const ordersOverTime = await Order.aggregate([
    { $match: { createdAt: { $gte: sevenDaysAgo } } },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        count: { $sum: 1 },
        revenue: { $sum: "$total" },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  return NextResponse.json({
    totalOrders,
    totalProducts,
    totalRevenue,
    pendingOrders,
    frequentCustomers,
    ordersOverTime,
  });
}
