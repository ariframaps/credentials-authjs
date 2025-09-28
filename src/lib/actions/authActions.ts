"use server";

import { signIn, signOut } from "@/auth";
import { signUpRequest } from "../services/apiRequests";
import { CredentialsSignin } from "next-auth";
import {
  SigninRequestBody,
  SignupRequestBody,
} from "@/types/apiRequestBodyTypes";

export async function Login(form: SigninRequestBody): Promise<boolean> {
  try {
    await signIn("credentials", {
      redirect: false,
      ...form,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;
    console.error("singin error ", someError.cause);
    throw new Error(someError.cause?.err?.message);
  }
  return true;
}

export async function Logout() {
  return signOut({ redirectTo: "/auth" });
}

export async function createAccount(form: SignupRequestBody) {
  const res = await signUpRequest(form);
  if (!res.success) throw new Error(res.errors);
  return true;
}
