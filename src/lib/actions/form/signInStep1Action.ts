"use server";

import { FormsSchema } from "@/types/formsSchema";
import { checkIsEmailExits } from "@/lib/actions/checkIsEmailExists";
import z from "zod";

const signInStep1Schema = FormsSchema.pick({ email: true });
type SignInStep1Schema = z.infer<typeof signInStep1Schema>;

type SignInStep1Result =
	| ({ success: true } & SignInStep1Schema)
	| ({ success: false; errors: Record<string, string> } & SignInStep1Schema);

export async function signInStep1Action(
	prevState: SignInStep1Result | null,
	formData: FormData
): Promise<SignInStep1Result> {
	console.log("prevState:", prevState);

	const parsed = signInStep1Schema.safeParse({
		email: formData.get("email"),
	});

	if (!parsed.success) {
		return {
			success: false,
			email: (formData.get("email") as string) ?? "",
			errors: { email: parsed.error.issues[0].message },
		};
	}

	try {
		const email = parsed.data.email;
		const exists = await checkIsEmailExits(email);

		if (!exists) {
			return {
				success: false,
				email: (formData.get("email") as string) ?? "",
				errors: { email: "Email not found or not verified" },
			};
		}

		return { success: true, email };
	} catch (err) {
		console.error(err);
		return {
			success: false,
			email: (formData.get("email") as string) ?? "",
			errors: { root: "Something went wrong, please try again" },
		};
	}
}
