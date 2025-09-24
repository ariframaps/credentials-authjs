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
import { useEffect } from "react";
import { useSignUpStore } from "@/app/auth/_stores/signupStore";

const signUpStep3Schema = FormsSchema.pick({
  password: true,
  confirmPassword: true,
});

type SignUpStep3Type = z.infer<typeof signUpStep3Schema>;

export default function Page() {
  const router = useRouter();
  const userStepState = useSignUpStore((state) => state.step);
  const formData = useSignUpStore((state) => state.formData);
  const resetState = useSignUpStore((state) => state.reset);
  const goToStep = useSignUpStore((state) => state.goToStep);
  const form = useForm<SignUpStep3Type>({
    resolver: zodResolver(signUpStep3Schema),
  });

  const onSubmit = (data: SignUpStep3Type) => {
    try {
      // check if password and confirm password match
      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords do not match");
      }
      // submit the form data to the server
      const allSignupData = {
        ...formData,
        phone: `${formData.countryCode}${formData.phone}`,
        password: data.password,
      };

      // if successful, redirect to the verify page
      router.push("/auth/verify-account");
      resetState();
    } catch (error) {
      form.setError("confirmPassword", {
        type: "manual",
        message: (error as any).message,
      });
      return;
    }
  };

  // redirect inside useEffect
  useEffect(() => {
    if (userStepState == 0) {
      goToStep(1);
      return;
    }
    if (userStepState < 3) {
      router.replace(`/auth/sign-up/step-${userStepState}`);
      return;
    }
  }, [userStepState, router]);

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
        <Button type="submit">Create Account</Button>
        <span className="w-full block h-[1px] bg-neutral-separator"></span>
      </form>
    </div>
  );
}
