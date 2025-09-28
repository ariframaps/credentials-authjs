"use server";

import { verifyEmailRequest } from "@/lib/services/apiRequests";

export async function verifyEmail(
  email: string,
  code: string
): Promise<boolean> {
  const res = await verifyEmailRequest({
    email,
    code,
  });
  if (!res.success) throw new Error(res.errors);
  return true;
}
