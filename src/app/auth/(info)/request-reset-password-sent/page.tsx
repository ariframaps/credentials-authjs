"use client";
import Image from "next/image";
import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import { useSignInStore } from "../../_stores/signinStore";
import { useEffect, useState } from "react";
import { censorEmail } from "@/lib/cencorEmail";

export default function Page() {
  const formData = useSignInStore((state) => state.formData);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(censorEmail(formData.email || ""));
  }, [formData]);

  return (
    <main className={`${styles.main}`}>
      <section className={`${styles.main__container}`}>
        <Image
          src={"/CheckCircle.png"}
          alt={"Verify your account"}
          width={48}
          height={48}
        />
        <div className={`${styles.main__container__info}`}>
          <h1 className="text-[36px] font-semibold text-neutral-primary">
            Check your inbox
          </h1>
          <p className="text-[16px] font-normal text-neutral-secondary">
            We just emailed instructions and a reset password link to{" "}
            <span className="font-semibold">{email}</span>. It might take a few
            minutes to arrive.
          </p>
        </div>
        <div className={`${styles.main__container__button}`}>
          <Button>Open your email</Button>
        </div>
      </section>
    </main>
  );
}
