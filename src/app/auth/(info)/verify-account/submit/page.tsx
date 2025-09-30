"use client";

import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingComponent from "@/components/LoadingComponent";
import { useRouter } from "next/navigation";
import { InputComponent } from "@/components/InputComponent";
import { XCircleIcon } from "lucide-react";
import { useActionState, useEffect } from "react";
import { verifyAccountAction } from "@/lib/actions/form/verifyAccountAction";
import { useSignInStore } from "@/lib/stores/signinStore";

export default function Page() {
	const router = useRouter();
	const resetSignInState = useSignInStore((state) => state.reset);
	const [state, formAction, isPending] = useActionState(
		verifyAccountAction,
		null
	);

	useEffect(() => {
		if (state?.success) {
			resetSignInState();
			router.push("/auth/sign-in/step-1");
		}
	}, [state, state?.success, router, resetSignInState]);

	return (
		<div className={`${styles.main}`}>
			<section className={`${styles.main__container}`}>
				<div className={`${styles.main__container__info}`}>
					<h1 className="text-[36px] font-semibold text-neutral-primary">
						Enter verify code here
					</h1>
					<p className="text-[16px] font-normal text-neutral-secondary">
						To confirm your account please input the code in the
						email we just sent.
					</p>
					<form
						action={formAction}
						// onSubmit={form.handleSubmit(onSubmit)}
					>
						<div className="mb-5">
							<InputComponent
								name={"email"}
								label={"Email Address"}
								isError={
									state?.success
										? false
										: !!state?.errors.email
								}
								message={
									state?.success
										? undefined
										: state?.errors.email
								}>
								<Input
									// {...form.register("email")}
									type="text"
									name="email"
									defaultValue={
										!state?.success ? state?.email : ""
									}
									isError={
										state?.success
											? false
											: !!state?.errors.email
									}
									id="email"
									placeholder="Enter your email address"
								/>
							</InputComponent>
							<InputComponent
								name={"code"}
								label={"code"}
								isError={
									state?.success
										? false
										: !!state?.errors.code
								}
								message={
									state?.success
										? undefined
										: state?.errors.code
								}>
								<Input
									// {...form.register("code")}
									type="text"
									name="code"
									defaultValue={
										!state?.success ? state?.code : ""
									}
									isError={
										state?.success
											? false
											: !!state?.errors.code
									}
									id="code"
									placeholder="Enter your code here"
								/>
							</InputComponent>
						</div>
						{!state?.success && state?.errors.root && (
							<div
								className={`flex items-center p-3 mb-5 gap-2 bg-red-50 border-l-[6px] border-text-danger-tertiary rounded-[8px]`}>
								<XCircleIcon
									width={20}
									height={20}
									className="text-text-danger-tertiary"
								/>
								<span className="text-[14px] font-normal text-start text-red-800">
									{state.errors.root}
								</span>
							</div>
						)}
						<Button disabled={isPending} type="submit">
							{isPending ? (
								<LoadingComponent size={20} />
							) : (
								"Verify"
							)}
						</Button>
					</form>
				</div>
			</section>
		</div>
	);
}
