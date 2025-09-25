"use client";

import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputComponent } from "@/components/InputComponent";
import FormHeader from "@/components/FormHeader";
import Link from "next/link";
import LeftArrow from "@/components/svg/LeftArrow";
import InfoIcon from "@/components/svg/InfoIcon";
import { FormsSchema } from "@/types/formsSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSignUpStore } from "@/lib/stores/signupStore";
import { resendVerifyEmailRequest } from "@/lib/services/apiRequests";
import LoadingComponent from "@/components/LoadingComponent";

const signUpStep2Schema = FormsSchema.pick({
  firstname: true,
  lastname: true,
  username: true,
  phone: true,
});

type SignUpStep2Type = z.infer<typeof signUpStep2Schema>;

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>("");
  const userStepState = useSignUpStore((state) => state.step);
  const formData = useSignUpStore((state) => state.formData);
  const setFormData = useSignUpStore((state) => state.setFormData);
  const nextStep = useSignUpStore((state) => state.nextStep);
  const form = useForm<SignUpStep2Type>({
    resolver: zodResolver(signUpStep2Schema),
  });

  const onSubmit = async (data: SignUpStep2Type) => {
    if (!formData.email) {
      form.setError("root", {
        type: "manual",
        message: "Redirecting..",
      });
      setIsLoading(true);
      setTimeout(() => {
        router.replace("/auth/sign-up/step-1");
      }, 3000);
      return;
    }

    if (!countryCode) {
      form.setError("phone", {
        type: "manual",
        message: "Country code is required",
      });
      return;
    }

    setIsLoading(true);
    // check useername if already exists
    const checkUsername = await resendVerifyEmailRequest({
      email: data.username,
    });

    // if exists, show error message
    if (checkUsername.success == true) {
      form.setError("username", {
        type: "manual",
        message: "Username already taken",
      });
      setIsLoading(false);
      return;
    } else if (checkUsername.success == false) {
      if (
        checkUsername.errors ===
        "Can't resend email code, because account was verified."
      ) {
        form.setError("username", {
          type: "manual",
          message: "Username already taken",
        });
        setIsLoading(false);
        return;
      }
    }

    // save data to signup state
    setFormData({
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      phone: data.phone,
      countryCode: countryCode,
    });
    // set step state to 3
    if (userStepState === 2) {
      nextStep();
    }
    // // redirect to step 3
    router.push("/auth/sign-up/step-3");
  };

  useEffect(() => {
    form.reset({
      firstname: formData.firstname || "",
      lastname: formData.lastname || "",
      username: formData.username || "",
      phone: formData.phone || "",
    });
    setCountryCode(formData.countryCode || "");
  }, [form, formData]);

  return (
    <div className={`${styles.container}`}>
      {/* back to previous step button */}

      <Link
        href={"/auth/sign-up/step-1"}
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
          title={"Contact details"}
          subtitle={
            "Create your partner account create an account to list and manage your property"
          }
        />
      </div>

      {/* form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`${styles.container__form}`}>
        <div className={`${styles.container__form__inputs}`}>
          {/* first name */}
          <InputComponent
            name={"firstName"}
            label={"First name"}
            isError={form.formState.errors.firstname ? true : false}
            message={form.formState.errors.firstname?.message}>
            <Input
              {...form.register("firstname")}
              type="text"
              name="firstname"
              isError={form.formState.errors.firstname ? true : false}
              id="firstname"
              placeholder="Enter your first name"
            />
          </InputComponent>
          {/* last name */}
          <InputComponent
            name={"lastName"}
            label={"Last name"}
            isError={form.formState.errors.lastname ? true : false}
            message={form.formState.errors.lastname?.message}>
            <Input
              {...form.register("lastname")}
              type="text"
              name="lastname"
              isError={form.formState.errors.lastname ? true : false}
              id="lastname"
              placeholder="Enter your Last name"
            />
          </InputComponent>
          {/* user name */}
          <InputComponent
            name={"username"}
            label={"Username"}
            isError={form.formState.errors.username ? true : false}
            message={form.formState.errors.username?.message}>
            <Input
              {...form.register("username")}
              type="text"
              name="username"
              isError={form.formState.errors.username ? true : false}
              id="username"
              placeholder="Enter your username"
            />
          </InputComponent>
          {/* phone number */}
          <InputComponent
            name={"phone"}
            label={"Phone number"}
            isError={form.formState.errors.phone ? true : false}
            message={form.formState.errors.phone?.message}>
            <div className="relative flex items-center">
              <Select
                onValueChange={setCountryCode}
                defaultValue={formData.countryCode || undefined}>
                <SelectTrigger className="absolute px-[16px] border-r-[1px] border-neutral-input rounded-none min-w-[75px]">
                  <SelectValue placeholder="+1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+62">+62</SelectItem>
                  <SelectItem value="+94">+94</SelectItem>
                  <SelectItem value="+9">+9</SelectItem>
                </SelectContent>
              </Select>
              <Input
                {...form.register("phone")}
                type="tel"
                name="phone"
                isError={form.formState.errors.phone ? true : false}
                id="phone"
                placeholder="(888) 888-8888"
                className="ps-[91px]"
              />
            </div>
          </InputComponent>
        </div>
        <div
          className={`${styles.container__form__info} bg-info-surface border-l-[6px] border-info-main rounded-[8px]`}>
          <InfoIcon width={28} height={28} viewBox="0 0 28 28" />
          <span className="text-[12px] font-normal text-neutral-primary">
            {`We'll text a two-factor authentication code to this number when you
            sign in.`}
          </span>
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            form.formState.errors.root ? (
              form.formState.errors.root.message
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
