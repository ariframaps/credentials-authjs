import Image from "next/image";
import styles from "./layout.module.scss";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.container}`}>
      <section className={`${styles.container__left} font-normal text-[14px]`}>
        <div className={`${styles.container__left__content} `}>
          {/* === CHILDREN DISINI */}
          {children}
          {/* === CHILDREN DISINI */}

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
      <Image
        className={`${styles.container__banner}`}
        src={"/auth-banner.png"}
        alt={"Go For Umrah"}
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
