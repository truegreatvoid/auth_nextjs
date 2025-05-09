// src/app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { getSessionToken } from "@/lib/cookies";
import { LogoutButton } from '@/components/partials/LogoutButton';

export default async function DashboardPage() {
  const token = await getSessionToken();

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="p-6">
      <h1>Bem-vindo ao Dashboard!</h1>
      <LogoutButton />
    </div>
  );
}
