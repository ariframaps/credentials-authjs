"use server";

import { User } from "next-auth";
import { auth } from "@/auth";

export default async function getUser(): Promise<User | null> {
	const session = await auth();
	if (!session || !session.user) return null;
	return session.user;
}
