"use server";

import { FormsSchema } from "@/types/formsSchema";
import z from "zod";
import { createAccount } from "../authActions";

// pick schema
const signUpStep3Schema = FormsSchema.pick({
	password: true,
	confirmPassword: true,
});
type SignUpStep3Type = z.infer<typeof signUpStep3Schema>; // create type from that type

// create result return form type
type SignUpStep3Result =
	| { success: true }
	| ({ success: false; errors: Record<string, string> } & SignUpStep3Type);

// create function
export async function signUpStep3Action(
	prevState: SignUpStep3Result | null,
	formData: FormData
): Promise<SignUpStep3Result> {
	// get data
	const email = (formData.get("email") as string) || "";
	const username = (formData.get("username") as string) || "";
	const firstname = (formData.get("firstname") as string) || "";
	const lastname = (formData.get("lastname") as string) || "";
	const phone = (formData.get("phone") as string) || "";
	const countrycode = (formData.get("countrycode") as string) || "";
	const password = (formData.get("password") as string) || "";
	const confirmPassword = (formData.get("confirmPassword") as string) || "";

	// check is email exist?
	if (!email) {
		return {
			success: false,
			errors: {
				email: "no email",
				root: "Email is required! redirecting..",
			},
			password,
			confirmPassword,
		};
	}

	// check is username (Except email) exists
	if (!username) {
		return {
			success: false,
			errors: {
				username: "no username",
				root: "Email is required! redirecting..",
			},
			password,
			confirmPassword,
		};
	}

	// validate input
	const parsed = signUpStep3Schema.safeParse({
		password,
		confirmPassword,
	});

	if (!parsed.success) {
		const errors: Record<string, string> = {};
		for (const issue of parsed.error.issues) {
			const field = issue.path[0] as string;
			errors[field] = issue.message;
		}
		return {
			success: false,
			errors,
			password,
			confirmPassword,
		};
	}

	// check is password and confirm password are the same
	if (password !== confirmPassword) {
		return {
			success: false,
			errors: {
				root: "Password and confirm password must same",
			},
			password,
			confirmPassword,
		};
	}

	// create account
	try {
		const allSignupData = {
			email,
			username,
			firstname,
			lastname,
			phone: `${countrycode}${phone}`,
			password,
		};
		await createAccount(allSignupData);
		return {
			success: true,
		};
	} catch (err) {
		let message = "Something went wrong, please try again.";
		if (err instanceof Error) message = err.message;

		return {
			success: false,
			password: password ?? "",
			confirmPassword: confirmPassword ?? "",
			errors: { root: message },
		};
	}

	// success
}
