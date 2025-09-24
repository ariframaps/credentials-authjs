"use client";

import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import { useSignUpStore } from "../../../../../lib/stores/signupStore";
import { Input } from "@/components/ui/input";
import LoadingComponent from "@/components/LoadingComponent";
import { useState } from "react";
import {
  resendVerifyEmailRequest,
  verifyEmailRequest,
} from "@/lib/services/apiRequests";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const formData = useSignUpStore((state) => state.formData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email) {
      router.replace("/auth/sign-up/step-1");
      return;
    }

    setIsLoading(true);
    await verifyEmailRequest({ email: formData.email as string, code })
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
      router.push("/auth/sign-up/step-1");
      return;
    }

    setIsLoading(true);
    await resendVerifyEmailRequest({ email: formData.email as string })
      .then((res) => {
        if (res.success) {
          alert("Verification email successfully resent");
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
            Enter verify code here
          </h1>
          <p className="text-[16px] font-normal text-neutral-secondary">
            We sent you an email with a verification link to{" "}
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
