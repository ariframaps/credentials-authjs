"use client";

import Image from "next/image";
import styles from "@/styles/_infopage.module.scss";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className={`${styles.main} h-[100vh]`}>
      <section className={`${styles.main__container}`}>
        <Image
          src={"/not-found.png"}
          alt={"Verify your account"}
          width={48}
          height={48}
        />
        <div className={`${styles.main__container__info}`}>
          <h1 className="text-[36px] font-semibold text-neutral-primary">
            Page Not Found
          </h1>
          <p className="text-[16px] font-normal text-neutral-secondary">
            Sorry, we couldn’t find the page you were looking for. It might have
            been removed, or the link may be incorrect.
          </p>
        </div>
        <div className={`${styles.main__container__button}`}>
          <Button onClick={() => router.back()}>Go back</Button>
        </div>
      </section>
    </main>
  );
}
