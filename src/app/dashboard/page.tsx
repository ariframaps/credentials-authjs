import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import Link from "next/link";
import Overview from "./_components/Overview";
import Latest from "./_components/Latest";

export default function Page() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.content__header}`}>
          <h2 className="font-semibold text-[16px] xs:text-[22px] phone:text-[28px] w-min xs:w-max">
            Reservaton Overview
          </h2>
          <HeaderButton />
        </div>
        {/* component */}
        <Overview />
        {/* component */}
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.content__header}`}>
          <h2 className="font-semibold text-[16px] xs:text-[22px] phone:text-[28px] ">
            Latest Booking
          </h2>
          <HeaderButton />
        </div>
        {/* component */}
        <Latest />
        {/* component */}
      </div>
    </div>
  );
}

const HeaderButton = () => {
  return (
    <Link href={"/reservation"}>
      <Button
        variant={"transparent"}
        className="font-medium phone:font-semibold text-[12px] px-[16px] py-[8px] phone:px-[20px] phone:py-[12px]">
        See all reservation
      </Button>
    </Link>
  );
};
