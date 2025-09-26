"use server";

import z from "zod";
import { signIn, signOut } from "@/auth";
import {
  signInRequestBody,
  signUpRequest,
  signUpRequestBody,
} from "../services/apiRequests";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

type LoginType = z.infer<typeof signInRequestBody>;

export async function Login(
  form: LoginType
): Promise<{ ok: boolean; error: string | undefined }> {
  try {
    await signIn("credentials", {
      redirect: false,
      ...form,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;
    console.log("singin error ", someError.cause);
    return {
      ok: false,
      error: someError.cause?.err?.message,
    };
  }
  return {
    ok: true,
    error: undefined,
  };
}

export async function Logout() {
  return signOut({ redirectTo: "/auth" });
}

type SignupType = z.infer<typeof signUpRequestBody>;

export async function createAccount(form: SignupType) {
  const res = await signUpRequest(form);

  if (!res.success) {
    throw new Error(res.errors || "Signup failed");
  }

  return true;
}
