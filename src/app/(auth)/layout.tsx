import Image from "next/image";
import styles from "./layout.module.scss";
import GlobeIcon from "@/components/svg/GlobeIcon";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.container}`}>
      <header
        className={`${styles.header} bg-brand-blue_whale-color-01 text-neutral-white`}>
        <Image
          className={`${styles.header__logo}`}
          src={"/Logo.png"}
          alt="Go For Umrah Logo"
          width={146}
          height={26}
        />
        <div className={`${styles.header__info}`}>
          <button className={`${styles.header__languageBtn}`}>
            <GlobeIcon width={24} height={24} />
            <span>En</span>
          </button>
          <span className="h-full w-[1px] bg-neutral-subtle"></span>
          <button className="px-[24px] py-[12px] border-[1.5px] border-brand-green-color-01 rounded-[8px]">
            Help
          </button>
        </div>
      </header>
      <main className={`${styles.main}`}>
        <section className={`${styles.main__children}`}>
          {children}
          <p className="text-neutral-subtle">
            All rights reserved. Copyright 2022 – GoForUmrah.com™
          </p>
        </section>
        <Image
          className={`${styles.main__banner}`}
          src={"/auth-banner.png"}
          alt={"Go For Umrah"}
          width={500}
          height={500}
          priority
        />
      </main>
    </div>
  );
}
