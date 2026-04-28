"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../components/AdminSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Quick auth check — try fetching analytics (protected route)
    fetch("/api/analytics")
      .then((res) => {
        if (!res.ok) {
          router.replace("/admin");
        }
        setChecking(false);
      })
      .catch(() => {
        router.replace("/admin");
      });
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
