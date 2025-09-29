"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";
import InfoIcon from "@/components/svg/InfoIcon";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { useSignUpStore } from "@/lib/stores/signupStore";
import LoadingComponent from "@/components/LoadingComponent";
import { signUpStep2Action } from "@/lib/actions/form/signUpStep2Action";
import { XCircleIcon } from "lucide-react";

export default function Page() {
	const router = useRouter();
	const formData = useSignUpStore((state) => state.formData);
	const setFormData = useSignUpStore((state) => state.setFormData);
	const [state, formAction, isPending] = useActionState(
		signUpStep2Action,
		null
	);

	useEffect(() => {
		if (!state?.success && state?.errors.email) {
			setTimeout(() => {
				router.replace("/auth/sign-up/step-1");
			}, 3000);
		}

		if (state?.success) {
			setFormData({
				firstname: state.firstname,
				lastname: state.lastname,
				username: state.username,
				phone: state.phone,
				countryCode: state.countrycode,
			});
			router.push("/auth/sign-up/step-3");
		}
	}, [state?.success, state, router, setFormData]);

	return (
		<div className={`${styles.container}`}>
			{/* back to previous step button */}

			<Link
				href={"/auth/sign-up/step-1"}
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
					title={"Contact details"}
					subtitle={
						"Create your partner account create an account to list and manage your property"
					}
				/>
			</div>

			{/* form */}
			<form action={formAction} className={`${styles.container__form}`}>
				<div className={`${styles.container__form__inputs}`}>
					<input
						type="hidden"
						defaultValue={formData.email ?? ""}
						name="email"
						hidden
					/>
					{/* first name */}
					<InputComponent
						name={"firstname"}
						label={"First name"}
						isError={
							state?.success ? false : !!state?.errors.firstname
						}
						message={
							state?.success ? undefined : state?.errors.firstname
						}>
						<Input
							type="text"
							name="firstname"
							defaultValue={
								state?.firstname ?? formData.firstname ?? ""
							}
							isError={
								state?.success
									? false
									: !!state?.errors.firstname
							}
							id="firstname"
							placeholder="Enter your first name"
						/>
					</InputComponent>
					{/* last name */}
					<InputComponent
						name={"lastname"}
						label={"Last name"}
						isError={
							state?.success ? false : !!state?.errors.lastname
						}
						message={
							state?.success ? undefined : state?.errors.lastname
						}>
						<Input
							type="text"
							name="lastname"
							defaultValue={
								state?.lastname ?? formData.lastname ?? ""
							}
							isError={
								state?.success
									? false
									: !!state?.errors.lastname
							}
							id="lastname"
							placeholder="Enter your Last name"
						/>
					</InputComponent>
					{/* user name */}
					<InputComponent
						name={"username"}
						label={"Username"}
						isError={
							state?.success ? false : !!state?.errors.username
						}
						message={
							state?.success ? undefined : state?.errors.username
						}>
						<Input
							type="text"
							name="username"
							defaultValue={
								state?.username ?? formData.username ?? ""
							}
							isError={
								state?.success
									? false
									: !!state?.errors.username
							}
							id="username"
							placeholder="Enter your username"
						/>
					</InputComponent>
					{/* phone number */}
					<InputComponent
						name={"phone"}
						label={"Phone number"}
						isError={state?.success ? false : !!state?.errors.phone}
						message={
							state?.success ? undefined : state?.errors.phone
						}>
						<div className="relative flex items-center">
							<Select
								name="countrycode"
								defaultValue={
									formData.countryCode || undefined
								}>
								<SelectTrigger
									defaultValue={
										state?.countrycode ??
										formData.countryCode ??
										undefined
									}
									className="absolute px-[16px] border-r-[1px] border-neutral-input rounded-none min-w-[75px]">
									<SelectValue placeholder="+1" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="+1">+1</SelectItem>
									<SelectItem value="+62">+62</SelectItem>
									<SelectItem value="+94">+94</SelectItem>
									<SelectItem value="+9">+9</SelectItem>
								</SelectContent>
							</Select>
							<Input
								type="tel"
								name="phone"
								defaultValue={
									state?.phone ?? formData.phone ?? ""
								}
								isError={
									state?.success
										? false
										: !!state?.errors.phone
								}
								id="phone"
								placeholder="(888) 888-8888"
								className="ps-[91px]"
							/>
						</div>
					</InputComponent>
				</div>
				<div
					className={`${styles.container__form__info} bg-info-surface border-l-[6px] border-info-main rounded-[8px]`}>
					<InfoIcon width={28} height={28} viewBox="0 0 28 28" />
					<span className="text-[12px] font-normal text-neutral-primary">
						{`We'll text a two-factor authentication code to this number when you
            sign in.`}
					</span>
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
		</div>
	);
}
