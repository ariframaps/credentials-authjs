import "server-only";

import { auth } from "@/auth";
import { User } from "next-auth";

export async function sessionCheck(): Promise<User | null> {
  const session = await auth();
  if (!session || !session.user) return null;
  return session.user;
}
