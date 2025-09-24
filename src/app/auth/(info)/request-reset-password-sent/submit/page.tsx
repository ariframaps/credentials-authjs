"use client";

import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import { useSignUpStore } from "../../../../../lib/stores/signupStore";
import { Input } from "@/components/ui/input";
import LoadingComponent from "@/components/LoadingComponent";
import { useState } from "react";
import {
  forgotPasswordRequest,
  resetPasswordRequest,
} from "@/lib/services/apiRequests";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const formData = useSignUpStore((state) => state.formData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email) {
      router.replace("/auth/sign-in/step-1");
      return;
    }

    setIsLoading(true);
    await resetPasswordRequest({
      email: formData.email as string,
      code,
      new_password: newPassword,
    })
      .then((res) => {
        if (res.success) {
          router.push("/auth/sign-in/step-1");
        } else {
          setIsLoading(false);
          alert(res.errors);
        }
        return;
      })
      .catch(() => {
        throw new Error("Something went wrong");
      });
  };

  const resendVerif = async () => {
    if (!formData.email) {
      router.push("/auth/sign-in/step-1");
      return;
    }

    setIsLoading(true);
    await forgotPasswordRequest({ email: formData.email as string })
      .then((res) => {
        if (res.success) {
          alert("Reset password request successfully resent");
        } else {
          setIsLoading(false);
          alert(res.errors);
        }
        setIsLoading(false);
        return;
      })
      .catch(() => {
        setIsLoading(false);
        throw new Error("Something went wrong");
      });
  };

  return (
    <div className={`${styles.main}`}>
      <section className={`${styles.main__container}`}>
        <div className={`${styles.main__container__info}`}>
          <h1 className="text-[36px] font-semibold text-neutral-primary">
            Enter your new password
          </h1>
          <p className="text-[16px] font-normal text-neutral-secondary">
            We sent you an email with a reset password link to{" "}
            <span className="font-semibold">{formData.email || ""}</span>. To
            confirm your account please input the code in the email we just
            sent.
          </p>
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <Input
                className="mb-5"
                onChange={(e) => setCode(e.target.value)}
                type="text"
                name="code"
                id="code"
                placeholder="Enter your code here"
              />
              <Input
                className="mb-5"
                onChange={(e) => setNewPassword(e.target.value)}
                type="text"
                name="new_password"
                id="new_password"
                placeholder="Enter your new password here"
              />
            </div>
            <Button disabled={isLoading} type="submit">
              {isLoading ? <LoadingComponent size={20} /> : "Verify"}
            </Button>
          </form>
          <Button
            onClick={() => resendVerif()}
            disabled={isLoading}
            type="button"
            variant={"transparent"}>
            {isLoading ? <LoadingComponent size={20} /> : "Resend"}
          </Button>
        </div>
      </section>
    </div>
  );
}
