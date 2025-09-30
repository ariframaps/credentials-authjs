"use server";

import { FormsSchema } from "@/types/formsSchema";
import z from "zod";
import { resetPassword } from "../resetPassword";

const resetPasswordSchema = FormsSchema.pick({
	code: true,
	password: true,
	email: true,
	confirmPassword: true,
});
type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

type ResetPasswordResult =
	| { success: true }
	| ({
			success: false;
			errors: Record<string, string>;
	  } & ResetPasswordSchema);

export async function ResetPasswordAction(
	prevState: ResetPasswordResult | null,
	formData: FormData
): Promise<ResetPasswordResult> {
	const email = (formData.get("email") as string) || "";
	const code = (formData.get("code") as string) || "";
	const password = (formData.get("password") as string) || "";
	const confirmPassword = (formData.get("confirmPassword") as string) || "";

	// validate input
	const parsed = resetPasswordSchema.safeParse({
		email,
		code,
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
			email,
			code,
			password,
			confirmPassword,
		};
	}

	// Password confirmation check
	if (password !== confirmPassword) {
		return {
			success: false,
			errors: {
				root: "Password must match with confirm password!",
			},
			email,
			code,
			password,
			confirmPassword,
		};
	}

	//   reset
	try {
		await resetPassword(email, password, code);
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
			password: password ?? "",
			confirmPassword: confirmPassword ?? "",
			errors: { root: message },
		};
	}
}
