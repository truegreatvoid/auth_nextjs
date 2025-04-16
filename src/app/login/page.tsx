// src/app/login/page.tsx
import { redirect } from "next/navigation";
import { getSessionToken } from "@/lib/cookies";
import { LoginForm } from "@/components/partials/LoginForm";

export default async function LoginPage() {
  const token = await getSessionToken();
  if (token) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Faça login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
