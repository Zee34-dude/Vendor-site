import { redirect } from "next/navigation";
import { checkAuth } from "@/lib/auth";
import LoginForm from "./LoginForm";

export default async function AdminPage() {
  const isAuthenticated = await checkAuth();

  if (isAuthenticated) {
    redirect("/admin/dashboard");
  }

  return <LoginForm />;
}
