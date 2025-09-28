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
import { useSignInStore } from "@/lib/stores/signinStore";
import { useEffect } from "react";
import LoadingComponent from "@/components/LoadingComponent";
import { XCircleIcon } from "lucide-react";
import { checkIsEmailExits } from "@/lib/actions/checkIsEmailExists";

const signInStep1Schema = FormsSchema.pick({
  email: true,
});
type SignInStep1Type = z.infer<typeof signInStep1Schema>;

export default function Page() {
  const router = useRouter();
  const formData = useSignInStore((state) => state.formData);
  const setFormData = useSignInStore((state) => state.setFormData);
  const form = useForm<SignInStep1Type>({
    resolver: zodResolver(signInStep1Schema),
  });

  const onSubmit = async (data: SignInStep1Type) => {
    try {
      const exists = await checkIsEmailExits(data.email);

      if (!exists) {
        form.setError("email", {
          type: "manual",
          message: "Email not found or not verified",
        });
        return;
      }

      setFormData({ email: data.email });
      router.push("/auth/sign-in/step-2");
      return;
    } catch (err) {
      form.setError("root", {
        type: "manual",
        message: "Something went wrong, please try again",
      });
    }
  };

  useEffect(() => {
    if (formData.email) form.setValue("email", formData.email);
  }, [form, formData.email, form.setValue]);

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

      {/* signup page button */}
      <Link href={"/auth/sign-up/step-1"}>
        <Button
          disabled={form.formState.isSubmitting}
          type="button"
          variant={"transparent"}
          className="text-black">
          Create your partner account
        </Button>
      </Link>
    </div>
  );
}
