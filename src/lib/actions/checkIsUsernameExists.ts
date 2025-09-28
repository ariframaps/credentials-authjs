"use server";

import { resendVerifyEmailRequest } from "@/lib/services/apiRequests";

export async function checkIsUsernameExists(
  username: string
): Promise<boolean> {
  const res = await resendVerifyEmailRequest({ email: username });
  return (
    res.success ||
    res.errors === "Can't resend email code, because account was verified."
  );
}
