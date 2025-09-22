import Link from "next/link";
import styles from "./_styles/layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.container__children} font-normal text-[14px]`}>
        {children}
        <p className="text-center text-neutral-secondary">
          By signing in or creating an account, you agree with our{" "}
          <Link href={"/terms-and-conditions"}>
            <span className="text-brand-green-color-01 font-semibold">
              Terms & conditions
            </span>
          </Link>{" "}
          and{" "}
          <Link href={"/privacy-statement"}>
            <span className="text-brand-green-color-01 font-semibold">
              Privacy statement
            </span>
          </Link>
        </p>
      </div>
      <p className="text-neutral-subtle font-normal text-[14px]">
        All rights reserved. Copyright 2022 – GoForUmrah.com™
      </p>
    </section>
  );
}
