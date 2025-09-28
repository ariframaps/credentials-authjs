"use server";

import { User } from "next-auth";
import { sessionCheck } from "./sessionCheck";

export default async function getUser(): Promise<User | null> {
  const res = await sessionCheck();
  return res;
}
