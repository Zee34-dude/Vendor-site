"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { label: "Products", href: "/admin/products", icon: "🍽️" },
  { label: "Orders", href: "/admin/orders", icon: "📋" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  };

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col shrink-0">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-black text-primary">BUJEE</h2>
        <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
        >
          <span className="text-lg">🚪</span>
          Logout
        </button>
        <Link
          href="/"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-400 hover:bg-gray-800 hover:text-white transition-colors mt-1"
        >
          <span className="text-lg">🏠</span>
          View Store
        </Link>
      </div>
    </aside>
  );
}
