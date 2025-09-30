"use server";

import { FormsSchema } from "@/types/formsSchema";
import z from "zod";
import { Login } from "../authActions";

const signInStep2Schema = FormsSchema.pick({ password: true });
type SignInStep2Schema = z.infer<typeof signInStep2Schema>;

type SignInStep2Result =
	| { success: true }
	| ({ success: false; errors: Record<string, string> } & SignInStep2Schema);

export async function signInStep2Action(
	prevState: SignInStep2Result | null,
	formData: FormData
): Promise<SignInStep2Result> {
	const email = (formData.get("email") as string) || "";
	const password = (formData.get("password") as string) || "";

	// check is email exist in form
	if (!formData.get("email")) {
		return {
			success: false,
			password: password ?? "",
			errors: {
				email: "no email",
				root: "Email is required! redirecting..",
			},
		};
	}

	// validate password
	const parsed = signInStep2Schema.safeParse({
		password: formData.get("password"),
	});

	if (!parsed.success) {
		return {
			success: false,
			password: password ?? "",
			errors: { password: parsed.error.issues[0].message },
		};
	}

	//   login
	try {
		await Login({ email, password });
		return {
			success: true,
		};
	} catch (err) {
		let message = "Something went wrong, please try again.";
		if (err instanceof Error) message = err.message;

		return {
			success: false,
			password: password ?? "",
			errors: { root: message },
		};
	}
}
