import Image from "next/image";
import styles from "./layout.module.scss";
import Link from "next/link";
import { GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <button className={`${styles.header__info__languageBtn}`}>
            <GlobeIcon width={24} height={24} />
            <span>En</span>
          </button>
          <span className="h-full w-[1px] bg-neutral-subtle"></span>
          <Link href={"/help"}>
            <Button
              variant={"transparent"}
              className="cursor-pointer px-[24px] py-[12px] rounded-[8px] text-neutral-white font-semibold text-[12px] hover:bg-brand-green-color-01">
              Help
            </Button>
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
