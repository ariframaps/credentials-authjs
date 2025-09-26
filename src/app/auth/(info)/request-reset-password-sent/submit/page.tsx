"use client";

import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingComponent from "@/components/LoadingComponent";
import { resetPasswordRequest } from "@/lib/services/apiRequests";
import { useRouter } from "next/navigation";
import { FormsSchema } from "@/types/formsSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "@/components/InputComponent";
import Link from "next/link";
import { XCircleIcon } from "lucide-react";

const submitResetPasswordSchema = FormsSchema.pick({
  code: true,
  password: true,
  email: true,
  confirmPassword: true,
});
type SubmitResetPasswordType = z.infer<typeof submitResetPasswordSchema>;

export default function Page() {
  const router = useRouter();
  const form = useForm<SubmitResetPasswordType>({
    resolver: zodResolver(submitResetPasswordSchema),
  });

  const onSubmit = async (data: SubmitResetPasswordType) => {
    // Password confirmation check
    if (data.password !== data.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    try {
      const res = await resetPasswordRequest({
        email: data.email,
        new_password: data.password,
        code: data.code,
      });

      if (res.success) {
        router.push("/auth/sign-in/step-1");
      } else {
        form.setError("root", { type: "manual", message: res.errors });
      }
    } catch (err) {
      console.error(err);
      form.setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className={`${styles.main}`}>
      <section className={`${styles.main__container}`}>
        <div className={`${styles.main__container__info}`}>
          <h1 className="text-[36px] font-semibold text-neutral-primary">
            Enter your new password
          </h1>
          <p className="text-[16px] font-normal text-neutral-secondary">
            To confirm your account please input the code in the email we just
            sent.
          </p>

          {/* form */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="mb-5">
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
              <InputComponent
                name={"code"}
                label={"code"}
                isError={form.formState.errors.code ? true : false}
                message={form.formState.errors.code?.message}>
                <Input
                  {...form.register("code")}
                  type="text"
                  name="code"
                  isError={form.formState.errors.code ? true : false}
                  id="code"
                  placeholder="Enter your code here"
                />
              </InputComponent>
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
                  placeholder="Enter your new password here"
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
                "Verify"
              )}
            </Button>
          </form>
          <Link href={"/auth/reset-password"}>
            <Button
              disabled={form.formState.isSubmitting}
              type="button"
              variant={"transparent"}>
              {form.formState.isSubmitting ? (
                <LoadingComponent size={20} />
              ) : (
                "Resend"
              )}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
