"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import { FormsSchema } from "@/types/formsSchema";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSignUpStore } from "@/lib/stores/signupStore";
import { useEffect, useState } from "react";
import { resendVerifyEmailRequest } from "@/lib/services/apiRequests";
import LoadingComponent from "@/components/LoadingComponent";

const signUpStep1Schema = FormsSchema.pick({ email: true });
type SignUpStep1Type = z.infer<typeof signUpStep1Schema>;

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userStepState = useSignUpStore((state) => state.step);
  const formData = useSignUpStore((state) => state.formData);
  const setFormData = useSignUpStore((state) => state.setFormData);
  const nextStep = useSignUpStore((state) => state.nextStep);
  const form = useForm<SignUpStep1Type>({
    resolver: zodResolver(signUpStep1Schema),
  });

  const onSubmit = async (data: SignUpStep1Type) => {
    try {
      setIsLoading(true);
      // check email if already exists
      const checkEmail = await resendVerifyEmailRequest({ email: data.email });

      // if exists, show error message
      if (checkEmail.success == true) {
        form.setError("email", {
          type: "manual",
          message: "Email already exists",
        });
        setIsLoading(false);
        return;
      } else if (checkEmail.success == false) {
        if (
          checkEmail.errors ===
          "Can't resend email code, because account was verified."
        ) {
          form.setError("email", {
            type: "manual",
            message: "Email already exists",
          });
          setIsLoading(false);
          return;
        }
      }

      // if not exists, save email to signup state
      if (!formData.email) {
        setFormData({ email: data.email });
      }

      // update the step in the signup state
      if (userStepState === 1) {
        nextStep();
      }
      // redirect to step 2
      router.push("/auth/sign-up/step-2");
    } catch (_err) {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    form.setValue("email", formData.email || "");
  }, [formData.email, form]);

  return (
    <div className={`${styles.container}`}>
      {/* header */}
      <div className={`${styles.container__header}`}>
        <FormHeader
          title={"Create your partner account"}
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <LoadingComponent size={20} /> : "Continue"}
        </Button>
        <span className="w-full block h-[1px] bg-neutral-separator"></span>
      </form>

      {/* login page button */}
      <Link href={"/auth/sign-in/step-1"}>
        <Button type="button" variant={"transparent"} className="text-black">
          Login
        </Button>
      </Link>
    </div>
  );
}
