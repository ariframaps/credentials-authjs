"use server";

import { signInRequest } from "@/lib/services/apiRequests";

export async function checkIsEmailExits(email: string): Promise<boolean> {
  const res = await signInRequest({ email, password: "" });
  if (!res.success && res.errors === "Wrong password.") return true;
  return false;
}
