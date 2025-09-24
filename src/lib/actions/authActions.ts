"use server";

import z from "zod";
import { signIn, signOut } from "@/auth";
import {
  signInRequest,
  signInRequestBody,
  signUpRequest,
  signUpRequestBody,
} from "../services/apiRequests";
import { getUserInfoRequest } from "../services/dummyApiRequests";

type LoginType = z.infer<typeof signInRequestBody>;
export async function Login(form: LoginType) {
  console.log(form);

  // sign in
  const res = await signInRequest({
    ...form,
  });
  if (!res.success) {
    throw new Error(res.errors);
  }

  // get userinfo
  const getUserInfo = await getUserInfoRequest();
  if (!getUserInfo.success) {
    throw new Error(getUserInfo.errors);
  }

  await signIn("credentials", {
    email: form.email,
    id: res.data.id,
    username: getUserInfo.data.username,
    redirectTo: "/dashboard",
  });
}

export async function Logout() {
  await signOut({ redirectTo: "/auth" });
}

type SignupType = z.infer<typeof signUpRequestBody>;
export async function createAccount(form: SignupType) {
  console.log(form);

  // sign up
  const res = await signUpRequest({
    ...form,
  });
  if (!res.success) {
    throw new Error(res.errors);
  }

  return true;
}
