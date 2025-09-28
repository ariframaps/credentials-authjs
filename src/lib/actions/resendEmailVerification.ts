"use server";

import { resendVerifyEmailRequest } from "@/lib/services/apiRequests";

export async function resendEmailVerification(email: string): Promise<boolean> {
  const res = await resendVerifyEmailRequest({ email });
  if (!res.success) throw new Error(res.errors);
  return true;
}
