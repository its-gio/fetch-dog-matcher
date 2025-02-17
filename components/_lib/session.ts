"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = process.env.NEXT_PUBLIC_SESSION_SECRET;
const encodedKey = new TextEncoder().encode(key);

const cookieSettings = {
  name: "session",
  duration: 60 * 60 * 1000, // 1 hour
  options: {
    httpOnly: true,
    secure: true,
    path: "/",
  },
};

export async function encrypt(payload: { [key: string]: string | Date }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encodedKey);
}

export async function dencrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    throw new Error("Invalid session");
  }
}

export async function createSession(userEmail: string) {
  const expires = new Date(Date.now() + cookieSettings.duration);
  const session = await encrypt({ userEmail, expires });

  (await cookies()).set(cookieSettings.name, session, {
    ...cookieSettings.options,
    expires,
  });

  redirect("/search");
}

export async function verifySession() {
  const cookie = (await cookies()).get(cookieSettings.name)?.value || "";
  const session = await dencrypt(cookie);
  if (!session) return redirect("/");
}

export async function deleteSession() {
  (await cookies()).delete(cookieSettings.name);
  redirect("/");
}
