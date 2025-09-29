"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";
import { useRouter } from "next/navigation";
import { useSignInStore } from "@/lib/stores/signinStore";
import { XCircleIcon } from "lucide-react";
import LoadingComponent from "@/components/LoadingComponent";
import { useActionState, useEffect } from "react";
import { signInStep2Action } from "@/lib/actions/form/signInStep2Action";

export default function Page() {
	const router = useRouter();
	const formData = useSignInStore((state) => state.formData);
	const resetState = useSignInStore((state) => state.reset);
	const [state, formAction, isPending] = useActionState(
		signInStep2Action,
		null
	);

	useEffect(() => {
		if (!state?.success && state?.errors.email) {
			console.log("redirecting to email field...");
			setTimeout(() => {
				return router.replace("/auth/sign-in/step-1");
			}, 2000);
		}

		if (state?.success) {
			console.log("success");
			resetState();
			router.push("/dashboard");
		}
	}, [state, state?.success, router]);

	return (
		<div className={`${styles.container}`}>
			{/* back to previous step button */}
			<Link
				href={"/auth/sign-in/step-1"}
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
					title={"Enter your password"}
					subtitle={`Enter your password for ${formData.email || ""}`}
				/>
			</div>

			{/* form */}
			<form action={formAction} className={`${styles.container__form}`}>
				<div className={`${styles.container__form__inputs}`}>
					{/* password*/}
					<input
						type="text"
						hidden
						name="email"
						defaultValue={formData.email ?? ""}
					/>
					<InputComponent
						name={"password"}
						label={"Password"}
						isError={
							!!state?.success ? false : !!state?.errors.password
						}
						message={
							state?.success
								? undefined
								: (state?.errors?.password as string)
						}>
						<Input
							type="password"
							name="password"
							defaultValue={state?.password ?? ""}
							isError={
								!!state?.success
									? false
									: !!state?.errors.password
							}
							id="password"
							placeholder="Enter your password"
						/>
					</InputComponent>
				</div>
				<Link
					href={"/auth/reset-password"}
					className="text-brand-green-color-01 text-[16px] font-semibold ">
					Forgot Password ?
				</Link>
				{!state?.success && state?.errors.root && (
					<div
						className={`${styles.container__form__info} bg-red-50 border-l-[6px] border-text-danger-tertiary rounded-[8px]`}>
						<XCircleIcon
							width={28}
							height={28}
							className="text-text-danger-tertiary"
						/>
						<span className="text-[12px] font-normal text-red-800">
							{state.errors.root}
						</span>
					</div>
				)}
				<Button disabled={isPending} type="submit">
					{isPending ? <LoadingComponent size={20} /> : "Continue"}
				</Button>
				<span className="w-full block h-[1px] bg-neutral-separator"></span>
			</form>
		</div>
	);
}
