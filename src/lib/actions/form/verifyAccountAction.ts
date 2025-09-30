"use server";

import { FormsSchema } from "@/types/formsSchema";
import z from "zod";
import { verifyEmail } from "../verifyEmail";

const verifyAccountSchema = FormsSchema.pick({ email: true, code: true });
type VerifyAccountSchema = z.infer<typeof verifyAccountSchema>;

type VerifyAccountResult =
	| { success: true }
	| ({
			success: false;
			errors: Record<string, string>;
	  } & VerifyAccountSchema);

export async function verifyAccountAction(
	prevState: VerifyAccountResult | null,
	formData: FormData
): Promise<VerifyAccountResult> {
	const email = (formData.get("email") as string) || "";
	const code = (formData.get("code") as string) || "";

	// validate input
	const parsed = verifyAccountSchema.safeParse({
		email,
		code,
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
			email,
			code,
		};
	}

	//   verify
	try {
		await verifyEmail(email, code);
		return {
			success: true,
		};
	} catch (err) {
		let message = "Something went wrong, please try again.";
		if (err instanceof Error) message = err.message;

		return {
			success: false,
			email: email ?? "",
			code: code ?? "",
			errors: { root: message },
		};
	}
}
