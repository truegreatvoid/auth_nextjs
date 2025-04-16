"use server";

import { redirect } from "next/navigation";
import { getSessionToken } from "@/lib/cookies";

export async function requireSession() {
  const token = await getSessionToken();
  if (!token) {
    redirect("/login");
  }
}
