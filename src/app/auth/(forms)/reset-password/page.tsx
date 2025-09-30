"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";
import LoadingComponent from "@/components/LoadingComponent";
import { requestResetPassword } from "@/lib/actions/resetPassword";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useSignInStore } from "@/lib/stores/signinStore";
import { checkIsEmailExits } from "@/lib/actions/checkIsEmailExists";
import { useSignUpStore } from "@/lib/stores/signupStore";

export default function Page() {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [state, setState] = useState<null | "pending" | "error">(null);
	const [error, setError] = useState<string>("");
	const setSignInState = useSignInStore((state) => state.setFormData);
	const resetSignUpState = useSignUpStore((state) => state.reset);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setState("pending");

		try {
			const isEmailExists = await checkIsEmailExits(email);
			if (!isEmailExists) throw new Error("Email not found");

			await requestResetPassword(email);

			setSignInState({ email });
			resetSignUpState();
			router.push("/auth/request-reset-password-sent");
			setState(null);
			return;
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("Something went wrong");
			}

			setState("error");
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
				onSubmit={(e) => onSubmit(e)}
				className={`${styles.container__form}`}>
				<div className={`${styles.container__form__inputs}`}>
					<InputComponent
						name={"email"}
						label={"Email Address"}
						isError={state === "error"}
						message={error}>
						<Input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							name="email"
							isError={state === "error"}
							id="email"
							placeholder="Enter your email address"
						/>
					</InputComponent>
				</div>
				<Button disabled={state === "pending"} type="submit">
					{state === "pending" ? (
						<LoadingComponent size={20} />
					) : (
						"Continue"
					)}
				</Button>
				<span className="w-full block h-[1px] bg-neutral-separator"></span>
			</form>
		</div>
	);
}
