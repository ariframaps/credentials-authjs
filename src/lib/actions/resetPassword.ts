"use server";

import {
  forgotPasswordRequest,
  resetPasswordRequest,
} from "@/lib/services/apiRequests";

export async function resetPassword(
  email: string,
  new_password: string,
  code: string
): Promise<boolean> {
  const res = await resetPasswordRequest({
    email,
    password: new_password,
    code,
  });
  if (!res.success) throw new Error(res.errors);
  return true;
}

export async function requestResetPassword(email: string): Promise<boolean> {
  const res = await forgotPasswordRequest({
    email,
  });
  if (!res.success) throw new Error(res.errors);
  return true;
}
