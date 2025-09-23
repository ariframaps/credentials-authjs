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
          <h2 className="font-semibold text-[28px] ">Reservaton Overview</h2>
          <Button variant={"transparent"}>
            <Link href={"/reservation"} className="font-semibold text-[12px]">
              See all reservation
            </Link>
          </Button>
        </div>
        <Overview />
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.content__header}`}>
          <h2 className="font-semibold text-[28px] ">Latest Booking</h2>
          <Button variant={"transparent"}>
            <Link href={"/reservation"} className="font-semibold text-[12px]">
              See all reservation
            </Link>
          </Button>
        </div>
        <Latest />
      </div>
    </div>
  );
}
