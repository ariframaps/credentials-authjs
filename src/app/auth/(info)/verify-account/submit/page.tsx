"use client";

import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import { useSignUpStore } from "../../../../../lib/stores/signupStore";
import { Input } from "@/components/ui/input";
import LoadingComponent from "@/components/LoadingComponent";
import {
  resendVerifyEmailRequest,
  verifyEmailRequest,
} from "@/lib/services/apiRequests";
import { useRouter } from "next/navigation";
import { FormsSchema } from "@/types/formsSchema";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "@/components/InputComponent";

const submitResetPasswordSchema = FormsSchema.pick({
  code: true,
  email: true,
});
type SubmitResetPasswordType = z.infer<typeof submitResetPasswordSchema>;

export default function Page() {
  const router = useRouter();
  const formData = useSignUpStore((state) => state.formData);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [code, setCode] = useState<string>("");
  const form = useForm<SubmitResetPasswordType>({
    resolver: zodResolver(submitResetPasswordSchema),
  });

  const onSubmit = async (data: SubmitResetPasswordType) => {
    if (!formData.email) {
      router.replace("/auth/sign-up/step-1");
      return;
    }

    try {
      const res = await verifyEmailRequest({
        email: data.email,
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

  const resendVerif = async () => {
    if (!formData.email) {
      router.push("/auth/sign-up/step-1");
      return;
    }

    try {
      const res = await resendVerifyEmailRequest({ email: formData.email });

      if (res.success) {
        alert("Verification email successfully resent");
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
            Enter verify code here
          </h1>
          <p className="text-[16px] font-normal text-neutral-secondary">
            We sent you an email with a verification link to{" "}
            <span className="font-semibold">{formData.email || ""}</span>. To
            confirm your account please input the code in the email we just
            sent.
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="">
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
            </div>
            <Button disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? (
                <LoadingComponent size={20} />
              ) : (
                "Verify"
              )}
            </Button>
          </form>
          <Button
            onClick={() => resendVerif()}
            disabled={form.formState.isSubmitting}
            type="button"
            variant={"transparent"}>
            {form.formState.isSubmitting ? (
              <LoadingComponent size={20} />
            ) : (
              "Resend"
            )}
          </Button>
        </div>
      </section>
    </div>
  );
}
