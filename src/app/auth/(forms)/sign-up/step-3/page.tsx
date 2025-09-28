"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";
import { FormsSchema } from "@/types/formsSchema";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSignUpStore } from "@/lib/stores/signupStore";
import { createAccount } from "@/lib/actions/authActions";
import { XCircleIcon } from "lucide-react";
import LoadingComponent from "@/components/LoadingComponent";
import { SignupRequestBody } from "@/types/apiRequestBodyTypes";

const signUpStep3Schema = FormsSchema.pick({
  password: true,
  confirmPassword: true,
});
type SignUpStep3Type = z.infer<typeof signUpStep3Schema>;

export default function Page() {
  const router = useRouter();
  const formData = useSignUpStore((state) => state.formData);
  const form = useForm<SignUpStep3Type>({
    resolver: zodResolver(signUpStep3Schema),
  });

  const onSubmit = async (data: SignUpStep3Type) => {
    // Check required fields from previous steps
    if (
      !formData.email ||
      !formData.username ||
      !formData.firstname ||
      !formData.lastname ||
      !formData.phone
    ) {
      form.setError("root", {
        type: "manual",
        message: "All fields need to be filled first!",
      });
      setTimeout(() => router.replace("/auth/sign-up/step-1"), 3000);
      return;
    }

    // Password confirmation check
    if (data.password !== data.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    }

    const allSignupData = {
      ...formData,
      phone: `${formData.countryCode}${formData.phone}`,
      password: data.password,
    };

    try {
      await createAccount(allSignupData as SignupRequestBody);
      router.push("/auth/verify-account");
    } catch (err) {
      if (err instanceof Error) {
        form.setError("root", {
          type: "manual",
          message: err.message,
        });
      }
    }
  };

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`${styles.container__form}`}>
        <div className={`${styles.container__form__inputs}`}>
          {/* password*/}
          <InputComponent
            name={"password"}
            label={"Password"}
            isError={form.formState.errors.password ? true : false}
            message={form.formState.errors.password?.message}>
            <Input
              {...form.register("password")}
              type="password"
              name="password"
              isError={form.formState.errors.password ? true : false}
              id="password"
              placeholder="Enter your password"
            />
          </InputComponent>
          {/*confirm password*/}
          <InputComponent
            name={"confirmPassword"}
            label={"Confirm password"}
            isError={form.formState.errors.confirmPassword ? true : false}
            message={form.formState.errors.confirmPassword?.message}>
            <Input
              {...form.register("confirmPassword")}
              type="password"
              name="confirmPassword"
              isError={form.formState.errors.confirmPassword ? true : false}
              id="confirmPassword"
              placeholder="Enter your confirm password"
            />
          </InputComponent>
        </div>
        {form.formState.errors.root && (
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
        )}
        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? (
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
