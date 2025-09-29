"use server";

import { FormsSchema } from "@/types/formsSchema";
import z from "zod";
import { checkIsEmailExits } from "../checkIsEmailExists";

// get schema types from zod
const signUpStep1Schema = FormsSchema.pick({ email: true });
type SignUpStep1Schema = z.infer<typeof signUpStep1Schema>;

// create result return type
type SignUpStep1Result =
	| ({ success: true } & SignUpStep1Schema)
	| ({ success: false; errors: Record<string, string> } & SignUpStep1Schema);

// function prevstate and form data props
export async function signUpStep1Action(
	prevState: SignUpStep1Result | null,
	formData: FormData
): Promise<SignUpStep1Result> {
	const email = (formData.get("email") as string) || "";

	// validate input
	const parsed = signUpStep1Schema.safeParse({
		email,
	});
	if (!parsed.success) {
		return {
			success: false,
			email: email,
			errors: { email: parsed.error.issues[0].message },
		};
	}

	// check is email exists or not
	const isEmailExists = await checkIsEmailExits(email);
	if (isEmailExists) {
		return {
			success: false,
			email: email,
			errors: { root: "Email already exists." },
		};
	}

	// return success
	return {
		success: true,
		email: email,
	};
}
