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
import { useSignInStore } from "@/lib/stores/signinStore";
import { useState } from "react";
import { Login } from "@/lib/actions/authActions";
import { XCircleIcon } from "lucide-react";
import LoadingComponent from "@/components/LoadingComponent";

const signInStep2Schema = FormsSchema.pick({
  password: true,
});

type SignInStep2Type = z.infer<typeof signInStep2Schema>;

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formData = useSignInStore((state) => state.formData);
  const resetState = useSignInStore((state) => state.reset);
  const form = useForm<SignInStep2Type>({
    resolver: zodResolver(signInStep2Schema),
  });

  const onSubmit = async (data: SignInStep2Type) => {
    if (!formData.email) {
      form.setError("password", {
        type: "manual",
        message: "Email is required",
      });
      setIsLoading(true);
      setTimeout(() => {
        router.replace("/auth/sign-in/step-1");
      }, 3000);
      return;
    }

    const allSigninData = {
      email: formData.email,
      password: data.password,
    };

    setIsLoading(true);
    // login
    await Login(allSigninData).catch((err: unknown) => {
      if (err instanceof Error) {
        form.setError("root", {
          type: "manual",
          message: err.message,
        });
        return;
      }
    });

    resetState();
    return;
  };

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
          subtitle={`Enter your password for ${formData.email}`}
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
        <Button type="submit">
          {isLoading ? (
            form.formState.errors.root ? (
              "Redirecting.."
            ) : (
              <LoadingComponent size={20} />
            )
          ) : (
            "Continue"
          )}
        </Button>
        <span className="w-full block h-[1px] bg-neutral-separator"></span>
      </form>
    </div>
  );
}
