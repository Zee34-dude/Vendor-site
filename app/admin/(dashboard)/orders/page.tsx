"use client";

import { useEffect, useState } from "react";

interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  customerName: string;
  phone: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "completed";
  note: string;
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const fetchOrders = () => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((d) => {
        setOrders(d);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const res = await fetch(`/api/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      fetchOrders();
    } else {
      alert("Failed to update order");
    }
  };

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl font-black text-gray-900">Orders</h1>
        <div className="flex gap-2">
          {(["all", "pending", "completed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors capitalize ${
                filter === f
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {f} {f === "all" ? `(${orders.length})` : `(${orders.filter((o) => o.status === f).length})`}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
          <p className="text-5xl mb-4">📋</p>
          <p className="text-gray-500 font-medium">No orders found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((order) => (
            <div key={order._id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{order.customerName}</h3>
                  <p className="text-sm text-gray-400">
                    {order.phone} • {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-lg text-gray-900">₦{order.total.toLocaleString()}</span>
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border-0 cursor-pointer outline-none ${
                      order.status === "pending"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-green-50 text-green-700"
                    }`}
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">Items</p>
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm py-1">
                    <span className="text-gray-700">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-gray-500 font-medium">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                {order.note && (
                  <p className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-200">
                    <strong>Note:</strong> {order.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
