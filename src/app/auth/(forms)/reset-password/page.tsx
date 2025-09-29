"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";
import { XCircleIcon } from "lucide-react";
import LoadingComponent from "@/components/LoadingComponent";
import { requestResetPassword } from "@/lib/actions/resetPassword";

// const resetPasswordSchema = FormsSchema.pick({
//   email: true,
// });
// type ResetPasswordType = z.infer<typeof resetPasswordSchema>;

export default function Page() {
	// const router = useRouter();
	// const form = useForm<{email: string}>({
	//   // resolver: zodResolver(resetPasswordSchema),
	// });

	const onSubmit = async (data: { email: string }) => {
		try {
			await requestResetPassword(data.email);
			// router.push("/auth/request-reset-password-sent");
			return;
		} catch (err) {
			if (err instanceof Error) {
				// form.setError("root", {
				//   type: "manual",
				//   message: err.message,
				// });
			}
		}
	};

	return (
		<div className={`${styles.container}`}>
			{/* back to previous step button */}
			<Link
				href={"/auth/sign-in/step-2"}
				className={`${styles.container__backBtn} text-neutral-primary font-semibold text-[18px]`}>
				<LeftArrow
					className="text-brand-green-color-01"
					width={20}
					height={20}
					viewBox="0 0 20 20"
				/>
				Back
			</Link>

			{/* header */}
			<div className={`${styles.container__header}`}>
				<FormHeader
					title={"Forgot your password ?"}
					subtitle={
						"Confirm your username and we'll send you a link to reset your password."
					}
				/>
			</div>

			{/* form */}
			<form
				// onSubmit={form.handleSubmit(onSubmit)}
				className={`${styles.container__form}`}>
				<div className={`${styles.container__form__inputs}`}>
					<InputComponent
						name={"email"}
						label={"Email Address"}
						isError={
							"form.formState.errors.email ? true : false" ===
							"form.formState.errors.email ? true : false"
						}
						message={"form.formState.errors.email?.message"}>
						<Input
							// {...form.register("email")}
							type="text"
							name="email"
							// isError={form.formState.errors.email ? true : false}
							id="email"
							placeholder="Enter your email address"
						/>
					</InputComponent>
				</div>
				{/* {form.formState.errors.root && (
          <div
            className={`${styles.container__form__info} bg-red-50 border-l-[6px] border-text-danger-tertiary rounded-[8px]`}>
            <XCircleIcon
              width={28}
              height={28}
              className="text-text-danger-tertiary"
            />
            <span className="text-[12px] font-normal text-red-800">
              {form.formState.errors.root?.message}
            </span>
          </div>
        )} */}
				<Button
					disabled={
						"form.formState.isSubmitting" ===
						"form.formState.isSubmitting"
					}
					type="submit">
					{/* {form.formState.isSubmitting ? (
            <LoadingComponent size={20} />
          ) : (
            "Continue"
          )} */}
				</Button>
				<span className="w-full block h-[1px] bg-neutral-separator"></span>
			</form>
		</div>
	);
}
