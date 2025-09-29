"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";
import { useRouter } from "next/navigation";
import { useSignUpStore } from "@/lib/stores/signupStore";
import { XCircleIcon } from "lucide-react";
import LoadingComponent from "@/components/LoadingComponent";
import { useActionState, useEffect } from "react";
import { signUpStep3Action } from "@/lib/actions/form/signUpStep3Action";

export default function Page() {
	const router = useRouter();
	const formData = useSignUpStore((state) => state.formData);
	const [state, formAction, isPending] = useActionState(
		signUpStep3Action,
		null
	);

	useEffect(() => {
		//   if no email then redirect to email field
		if (!state?.success && state?.errors.email) {
			setTimeout(() => {
				router.replace("/auth/sign-up/step-1");
			}, 3000);
			return;
		}

		// if no username then redirect to contact details field
		if (!state?.success && state?.errors.username) {
			setTimeout(() => {
				router.replace("/auth/sign-up/step-2");
			}, 3000);
			return;
		}

		// if success
		if (state?.success) {
			router.push("/auth/verify-account");
			return;
		}
	}, [state, state?.success, router]);

	return (
		<div className={`${styles.container}`}>
			{/* back to previous step button */}

			<Link
				href={"/auth/sign-up/step-2"}
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
					title={"Create password"}
					subtitle={
						"Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers."
					}
				/>
			</div>

			{/* form */}
			<form action={formAction} className={`${styles.container__form}`}>
				<div className={`${styles.container__form__inputs}`}>
					{/* hidden field */}
					<input
						name="email"
						type="hidden"
						hidden
						defaultValue={formData.email || ""}
					/>
					<input
						name="username"
						type="hidden"
						hidden
						defaultValue={formData.username || ""}
					/>
					<input
						name="firstname"
						type="hidden"
						hidden
						defaultValue={formData.firstname || ""}
					/>
					<input
						name="lastname"
						type="hidden"
						hidden
						defaultValue={formData.lastname || ""}
					/>
					<input
						name="phone"
						type="hidden"
						hidden
						defaultValue={formData.phone || ""}
					/>
					<input
						name="countryCode"
						type="hidden"
						hidden
						defaultValue={formData.countryCode || ""}
					/>

					{/* password*/}
					<InputComponent
						name={"password"}
						label={"Password"}
						isError={
							state?.success ? false : !!state?.errors.password
						}
						message={
							state?.success ? undefined : state?.errors.password
						}>
						<Input
							type="password"
							name="password"
							defaultValue={
								state?.success ? "" : state?.password ?? ""
							}
							isError={
								state?.success
									? false
									: !!state?.errors.password
							}
							id="password"
							placeholder="Enter your password"
						/>
					</InputComponent>
					{/*confirm password*/}
					<InputComponent
						name={"confirmPassword"}
						label={"Confirm password"}
						isError={
							state?.success
								? false
								: !!state?.errors.confirmPassword
						}
						message={
							state?.success
								? undefined
								: state?.errors.confirmPassword
						}>
						<Input
							type="password"
							name="confirmPassword"
							defaultValue={
								state?.success
									? ""
									: state?.confirmPassword ?? ""
							}
							isError={
								state?.success
									? false
									: !!state?.errors.confirmPassword
							}
							id="confirmPassword"
							placeholder="Enter your confirm password"
						/>
					</InputComponent>
				</div>
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
					{isPending ? (
						<LoadingComponent size={20} />
					) : (
						"Create account"
					)}
				</Button>
				<span className="w-full block h-[1px] bg-neutral-separator"></span>
			</form>
		</div>
	);
}
