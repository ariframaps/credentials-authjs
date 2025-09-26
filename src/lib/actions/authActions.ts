"use server";

import z from "zod";
import { signIn, signOut } from "@/auth";
import {
  signInRequest,
  signInRequestBody,
  signUpRequest,
  signUpRequestBody,
} from "../services/apiRequests";

type LoginType = z.infer<typeof signInRequestBody>;
export async function Login(form: LoginType) {
  // sign in
  const res = await signInRequest({
    ...form,
  });
  if (!res.success) {
    throw new Error(res.errors);
  }

  await signIn("credentials", {
    email: form.email,
    id: res.data.id,
    redirectTo: "/dashboard",
  });
}

export async function Logout() {
  await signOut({ redirectTo: "/auth" });
}

type SignupType = z.infer<typeof signUpRequestBody>;
export async function createAccount(form: SignupType) {
  // sign up
  const res = await signUpRequest({
    ...form,
  });
  if (!res.success) {
    throw new Error(res.errors);
  }

  return true;
}
