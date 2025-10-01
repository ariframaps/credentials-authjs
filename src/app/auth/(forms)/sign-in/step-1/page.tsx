"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSignInStore } from "@/lib/stores/signinStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import LoadingComponent from "@/components/LoadingComponent";
import { XCircleIcon } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.scss";
import { signInStep1Action } from "@/lib/actions/form/signInStep1Action";

export default function Page() {
	const router = useRouter();
	const formData = useSignInStore((s) => s.formData);
	const setSignInStore = useSignInStore((s) => s.setFormData);
	const [state, formAction, isPending] = useActionState(
		signInStep1Action,
		null
	);

	// iF success → update zustand + redirect
	useEffect(() => {
		if (state?.success) {
			setSignInStore({ email: state.email });
			router.push("/auth/sign-in/step-2");
		}
	}, [state, setSignInStore, router]);

	return (
		<div className={styles.container}>
			{/* header */}
			<div className={styles.container__header}>
				<FormHeader
					title="Sign in to manage your property"
					subtitle="Create an account to list and manage your property."
				/>
			</div>

			{/* form */}
			<form action={formAction} className={styles.container__form}>
				<div className={styles.container__form__inputs}>
					<InputComponent
						name="email"
						label="Email Address"
						isError={
							state?.success ? false : !!state?.errors?.email
						}
						message={
							!state?.success
								? (state?.errors?.email as string)
								: undefined
						}>
						<Input
							type="text"
							name="email"
							id="email"
							placeholder="Enter your email address"
							defaultValue={state?.email ?? formData.email ?? ""}
							isError={
								state?.success ? false : !!state?.errors?.email
							}
						/>
					</InputComponent>
				</div>

				{!state?.success && state?.errors?.root && (
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

			{/* signup page button */}
			<Link href="/auth/sign-up/step-1">
				<Button
					disabled={isPending}
					type="button"
					variant="transparent"
					className="text-black">
					Create your partner account
				</Button>
			</Link>
		</div>
	);
}
