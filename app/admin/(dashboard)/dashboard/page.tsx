"use client";

import { useEffect, useState } from "react";

interface Analytics {
  totalOrders: number;
  totalProducts: number;
  totalRevenue: number;
  pendingOrders: number;
  frequentCustomers: { _id: string; name: string; count: number; totalSpent: number }[];
  ordersOverTime: { _id: string; count: number; revenue: number }[];
}

export default function DashboardPage() {
  const [data, setData] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return <p className="text-red-500">Failed to load analytics.</p>;
  }

  const stats = [
    { label: "Total Orders", value: data.totalOrders, icon: "📦", color: "bg-blue-50 text-blue-600" },
    { label: "Revenue", value: `₦${data.totalRevenue.toLocaleString()}`, icon: "💰", color: "bg-green-50 text-green-600" },
    { label: "Products", value: data.totalProducts, icon: "🍽️", color: "bg-purple-50 text-purple-600" },
    { label: "Pending", value: data.pendingOrders, icon: "⏳", color: "bg-orange-50 text-orange-600" },
  ];

  const maxCount = Math.max(...(data.ordersOverTime.map((d) => d.count)), 1);

  return (
    <div>
      <h1 className="text-3xl font-black text-gray-900 mb-8">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${s.color}`}>
                {s.icon}
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            <p className="text-2xl font-black text-gray-900 mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders Over Time - Simple Bar Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Orders (Last 7 Days)</h2>
          {data.ordersOverTime.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-8">No orders in the last 7 days yet.</p>
          ) : (
            <div className="flex items-end gap-3 h-40">
              {data.ordersOverTime.map((d) => (
                <div key={d._id} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-gray-700">{d.count}</span>
                  <div
                    className="w-full bg-primary/80 rounded-t-lg transition-all"
                    style={{ height: `${(d.count / maxCount) * 100}%`, minHeight: "8px" }}
                  ></div>
                  <span className="text-[10px] text-gray-400">
                    {new Date(d._id).toLocaleDateString("en", { weekday: "short" })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Frequent Customers */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Top Customers</h2>
          {data.frequentCustomers.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-8">No customers yet.</p>
          ) : (
            <div className="space-y-4">
              {data.frequentCustomers.map((c, i) => (
                <div key={c._id} className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{c.name}</p>
                    <p className="text-xs text-gray-400">{c._id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm text-gray-900">{c.count} orders</p>
                    <p className="text-xs text-gray-400">₦{c.totalSpent.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
