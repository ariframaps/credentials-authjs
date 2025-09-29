"use server";

import { FormsSchema } from "@/types/formsSchema";
import z from "zod";
import { checkIsUsernameExists } from "../checkIsUsernameExists";

// pick form schema
const signUpStep2Schema = FormsSchema.pick({
	firstname: true,
	lastname: true,
	username: true,
	phone: true,
});
type SignUpStep2Type = z.infer<typeof signUpStep2Schema>; // create type from that schema

// create result return function type
type SignUpStep2Result =
	| ({ success: true; countrycode: string } & SignUpStep2Type)
	| ({
			success: false;
			errors: Record<string, string>;
			countrycode: string;
	  } & SignUpStep2Type);

// create action function
export async function signUpStep2Action(
	prevState: SignUpStep2Result | null,
	formData: FormData
): Promise<SignUpStep2Result> {
	// get form values
	const email = (formData.get("email") as string) || "";
	const username = (formData.get("username") as string) || "";
	const firstname = (formData.get("firstname") as string) || "";
	const lastname = (formData.get("lastname") as string) || "";
	const phone = (formData.get("phone") as string) || "";
	const countrycode = (formData.get("countrycode") as string) || "";

	// check is email already filled?
	if (!email) {
		return {
			success: false,
			errors: {
				root: "Email must be filled first! Redirecting..",
				email: "no email",
			},
			username,
			lastname,
			firstname,
			phone,
			countrycode,
		};
	}

	// validate values
	const parsed = signUpStep2Schema.safeParse({
		username,
		firstname,
		lastname,
		phone,
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
			username,
			firstname,
			lastname,
			phone,
			countrycode,
		};
	}

	// check country coede
	if (!countrycode) {
		return {
			success: false,
			errors: { phone: "Country code is required" },
			username,
			firstname,
			lastname,
			phone,
			countrycode,
		};
	}

	// check is username exists
	const isUsernameTaken = await checkIsUsernameExists(username);
	if (isUsernameTaken) {
		return {
			success: false,
			errors: { username: "Username already taken" },
			username,
			firstname,
			lastname,
			phone,
			countrycode,
		};
	}

	// return success
	return {
		success: true,
		username,
		firstname,
		lastname,
		phone,
		countrycode,
	};
}
