"use client";

import Image from "next/image";
import styles from "@/styles/_infopage.module.scss";
import NavButton from "@/components/NavButton";

export default function Page() {
  return (
    <main className={`${styles.main} h-[100vh]`}>
      <section className={`${styles.main__container}`}>
        <Image
          src={"/Cancel.png"}
          alt={"Verify your account"}
          width={48}
          height={48}
        />
        <div className={`${styles.main__container__info}`}>
          <h1 className="text-[36px] font-semibold text-neutral-primary">
            Something Went Wrong
          </h1>
          <p className="text-[16px] font-normal text-neutral-secondary">
            An unexpected error occurred while loading this page. Please try
            again, or go back to the homepage.
          </p>
        </div>
        <div className={`${styles.main__container__button}`}>
          <NavButton variant={"transparent"} type="refresh">
            Refresh page
          </NavButton>
        </div>
      </section>
    </main>
  );
}
