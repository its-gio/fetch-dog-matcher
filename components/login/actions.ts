"use server";

import { createSession } from "@/components/_lib/session";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export async function login(previousState: void | null, formData: FormData) {
  const safeResults = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!safeResults.success) {
    const errors = safeResults.error.flatten().fieldErrors;
    return console.error(errors);
  }

  const { name, email } = safeResults.data;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_API_BASE}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email }),
    }
  );

  if (!res.ok) throw new Error(res.statusText);

  await createSession(email);
}
