"use client";
import styles from "./Latest.module.scss";
import LatestItem from "./LatestItem";
import { LatestBooking } from "@/types/dummyTypes";

export default function LatestContent({ latest }: { latest: LatestBooking[] }) {
  return (
    <div
      className={`${styles.container} rounded-[16px] divide-y-[1px] divide-neutral-separator bg-neutral-white`}>
      {latest.map((item, i) => (
        <LatestItem key={i} latest={item} />
      ))}
    </div>
  );
}
