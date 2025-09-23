import Image from "next/image";
import styles from "./OverviewItem.module.scss";
import MoonIcon from "@/components/svg/MoonIcon";
import DoorIcon from "@/components/svg/DoorIcon";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const OverviewItem = () => {
  return (
    <div className={`${styles.container}`}>
      <Image
        src={"/Customer-avatar.png"}
        alt={"John Miaw"}
        width={48}
        height={48}
        className={`rounded-[8px] `}
      />
      <div className={`${styles.container__detail1}`}>
        <h4
          className={`${styles.container__detail1__name} font-semibold text-[16px] phone:text-[22px] text-neutral-primary`}>
          Guy Hawkins
        </h4>
        <ul
          className={`${styles.container__detail1__info} text-neutral-secondary text-[14px] `}>
          <li>#12029283</li>
          <div className={`${styles.container__detail1__info__divider}`}></div>
          <li>
            <MoonIcon width={20} height={20} />
            <span>1 Nights</span>
          </li>
          <div className={`${styles.container__detail1__info__divider}`}></div>
          <li>
            <DoorIcon width={20} height={20} />
            <span>5 Bedroom</span>
          </li>
        </ul>
      </div>
      <span
        className={`${styles.container__detail2} font-medium text-[16px] text-neutral-primary `}>
        31 October
      </span>
      <div
        className={`${styles.container__detail3} text-neutral-secondary text-[14px] font-normal `}>
        <div>
          <Calendar width={20} height={20} />
          <span>7 Des 2021 - 8 Des 2021 </span>
        </div>
        <span>Arrival : 1:00 PM - 1:00 PM</span>
      </div>
      <span
        className={`${styles.container__detail4} font-semibold text-[18px] `}>
        $ 100.00
      </span>
      <Button variant={"noborder"} className="p-0 w-fit h-min">
        Detail Order
      </Button>
    </div>
  );
};

export default OverviewItem;
