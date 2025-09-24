"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import { z } from "zod";
import { FormsSchema } from "@/types/formsSchema";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignInStore } from "@/app/auth/_stores/signinStore";
import { useEffect } from "react";
import { resendVerifyEmailRequest } from "@/lib/services/apiRequests";

const signInStep1Schema = FormsSchema.pick({
  email: true,
});

type SignInStep1Type = z.infer<typeof signInStep1Schema>;

export default function Page() {
  const router = useRouter();
  const userStepState = useSignInStore((state) => state.step);
  const formData = useSignInStore((state) => state.formData);
  const setFormData = useSignInStore((state) => state.setFormData);
  const nextStep = useSignInStore((state) => state.nextStep);
  const goToStep = useSignInStore((state) => state.goToStep);

  const form = useForm<SignInStep1Type>({
    resolver: zodResolver(signInStep1Schema),
  });

  const onSubmit = async (data: SignInStep1Type) => {
    // check email if exists
    const checkEmail = await resendVerifyEmailRequest({ email: data.email });

    // if exists, show error message
    if (checkEmail.success == true) {
      form.setError("email", {
        type: "manual",
        message: "Email not found",
      });
      return;
    } else if (checkEmail.success == false) {
      if (
        !(
          checkEmail.errors ===
          "Can't resend email code, because account was verified."
        )
      ) {
        form.setError("email", {
          type: "manual",
          message: "Email not found",
        });
        return;
      }
    }

    // if exists, store email in state
    if (!formData.email) {
      setFormData({ email: data.email });
    }

    // next step
    if (userStepState == 1) {
      nextStep();
    }

    // redirect to step 2
    router.push("/auth/sign-in/step-2");
  };

  useEffect(() => {
    if (userStepState == 0) {
      goToStep(1);
      return;
    }
    form.setValue("email", formData.email || "");
  }, [userStepState, router]);

  return (
    <div className={`${styles.container}`}>
      {/* header */}
      <div className={`${styles.container__header}`}>
        <FormHeader
          title={"Sign in to manage your property"}
          subtitle={"Create an account to list and manage your property."}
        />
      </div>

      {/* form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`${styles.container__form}`}>
        <div className={`${styles.container__form__inputs}`}>
          <InputComponent
            name={"email"}
            label={"Email Address"}
            isError={form.formState.errors.email ? true : false}
            message={form.formState.errors.email?.message}>
            <Input
              {...form.register("email")}
              type="text"
              name="email"
              isError={form.formState.errors.email ? true : false}
              id="email"
              placeholder="Enter your email address"
            />
          </InputComponent>
        </div>
        <Button type="submit">Continue</Button>
        <span className="w-full block h-[1px] bg-neutral-separator"></span>
      </form>

      {/* signup page button */}
      <Link href={"/auth/sign-up/step-1"}>
        <Button type="button" variant={"transparent"} className="text-black">
          Create your partner account
        </Button>
      </Link>
    </div>
  );
}
