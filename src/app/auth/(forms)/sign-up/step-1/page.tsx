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
import { XCircleIcon } from "lucide-react";

const signUpStep1Schema = FormsSchema.pick({ email: true });
type SignUpStep1Type = z.infer<typeof signUpStep1Schema>;

export default function Page() {
  const router = useRouter();
  const formData = useSignUpStore((state) => state.formData);
  const setFormData = useSignUpStore((state) => state.setFormData);
  const form = useForm<SignUpStep1Type>({
    resolver: zodResolver(signUpStep1Schema),
  });

  const onSubmit = async (data: SignUpStep1Type) => {
    try {
      const res = await resendVerifyEmailRequest({ email: data.email });

      // if email already exists
      if (
        res.success === true ||
        res.errors === "Can't resend email code, because account was verified."
      ) {
        form.setError("email", {
          type: "manual",
          message: "Email already exists",
        });
        return;
      }

      setFormData({ email: data.email });
      router.push("/auth/sign-up/step-2");
    } catch (err) {
      console.error(err);
      form.setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  useEffect(() => {
    if (formData.email) form.setValue("email", formData.email);
  }, [formData.email, form.setValue]);

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
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <LoadingComponent size={20} />
          ) : (
            "Continue"
          )}
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
