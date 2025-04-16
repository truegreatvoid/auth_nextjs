'use server'

import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = "accessToken";

export async function setSessionCookie(token: string) {
  const store = await cookies();
  store.set(SESSION_COOKIE_NAME, token, {
    path: '/',
    maxAge: 60 * 60 * 24,
  });
}

export async function getSessionToken(): Promise<string | null> {
  const store = await cookies()
  const token = store.get(SESSION_COOKIE_NAME);
  return token?.value || null;
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(SESSION_COOKIE_NAME);
}
