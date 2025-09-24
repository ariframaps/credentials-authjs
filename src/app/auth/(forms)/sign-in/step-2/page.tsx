"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";
import { FormsSchema } from "@/types/formsSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignInStore } from "@/app/auth/_stores/signinStore";
import { useEffect } from "react";

const signInStep2Schema = FormsSchema.pick({
  password: true,
});

type SignInStep2Type = z.infer<typeof signInStep2Schema>;

export default function Page() {
  const router = useRouter();
  const userStepState = useSignInStore((state) => state.step);
  const formData = useSignInStore((state) => state.formData);
  const goToStep = useSignInStore((state) => state.goToStep);
  const resetState = useSignInStore((state) => state.reset);
  const form = useForm<SignInStep2Type>({
    resolver: zodResolver(signInStep2Schema),
  });

  const onSubmit = (data: SignInStep2Type) => {
    console.log(data);

    // login the user with the email and password
    // if error, show error message

    // if success, reset state redirect to the dashboard
    const allSigninData = {
      ...formData,
      password: data.password,
    };

    // login

    resetState();

    router.push("/dashboard");
  };

  // redirect inside useEffect
  useEffect(() => {
    if (userStepState == 0) {
      goToStep(1);
      return;
    }
    console.log(userStepState);
    if (userStepState < 2) {
      router.replace(`/auth/sign-in/step-${userStepState}`);
      return;
    }
  }, [userStepState, router]);

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
          subtitle={"Enter your password for fahmiauliyarohman@gmail.com."}
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
        </div>
        <Link
          href={"/auth/reset-password"}
          className="text-brand-green-color-01 text-[16px] font-semibold ">
          Forgot Password ?
        </Link>
        <Button type="submit">Continue</Button>
        <span className="w-full block h-[1px] bg-neutral-separator"></span>
      </form>
    </div>
  );
}
