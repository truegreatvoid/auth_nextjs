'use server'

import axios from "axios";
import { setSessionCookie, clearSessionCookie } from "./cookies";

export async function login({ email, password }: { email: string; password: string }) {
  const res = await axios.post("http://127.0.0.1:8000/api/login/", {
    email,
    password,
  });

  await setSessionCookie(res.data.access);
  return res.data;
}

export async function logout() {
  await clearSessionCookie();
}
