import "server-only";

import { auth } from "@/auth";
import { User } from "next-auth";
import { redirect } from "next/navigation";

export async function sessionCheck(): Promise<User> {
  const session = await auth();
  if (!session || !session.user) return redirect("/auth");

  return session.user;
}
