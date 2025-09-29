"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignUpStore } from "@/lib/stores/signupStore";
import { useActionState, useEffect } from "react";
import LoadingComponent from "@/components/LoadingComponent";
import { XCircleIcon } from "lucide-react";
import { signUpStep1Action } from "@/lib/actions/form/signUpStep1Action";

export default function Page() {
	const router = useRouter();
	const formData = useSignUpStore((state) => state.formData);
	const setFormData = useSignUpStore((state) => state.setFormData);
	const [state, formAction, isPending] = useActionState(
		signUpStep1Action,
		null
	);
	useEffect(() => {
		// if success then redirect and set data
		if (state?.success) {
			setFormData({ email: state.email });
			router.push("/auth/sign-up/step-2");
		}
	}, [formData.email, state, router, setFormData]);

	return (
		<div className={`${styles.container}`}>
			{/* header */}
			<div className={`${styles.container__header}`}>
				<FormHeader
					title={"Create your partner account"}
					subtitle={
						"Create an account to list and manage your property."
					}
				/>
			</div>

			{/* form */}
			<form action={formAction} className={`${styles.container__form}`}>
				<div className={`${styles.container__form__inputs}`}>
					<InputComponent
						name={"email"}
						label={"Email Address"}
						isError={state?.success ? false : !!state?.errors.email}
						message={
							state?.success ? undefined : state?.errors.email
						}>
						<Input
							type="text"
							name="email"
							defaultValue={state?.email ?? formData.email ?? ""}
							isError={
								state?.success ? false : !!state?.errors.email
							}
							id="email"
							placeholder="Enter your email address"
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
				<Button type="submit" disabled={isPending}>
					{isPending ? <LoadingComponent size={20} /> : "Continue"}
				</Button>
				<span className="w-full block h-[1px] bg-neutral-separator"></span>
			</form>

			{/* login page button */}
			<Link href={"/auth/sign-in/step-1"}>
				<Button
					type="button"
					variant={"transparent"}
					className="text-black">
					Login
				</Button>
			</Link>
		</div>
	);
}
