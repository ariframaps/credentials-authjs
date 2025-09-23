import Image from "next/image";
import styles from "./LatestItem.module.scss";
import MoonIcon from "@/components/svg/MoonIcon";
import DoorIcon from "@/components/svg/DoorIcon";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const LatestItem = () => {
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

      <div className={`${styles.container__detail2} font-medium text-[14px]`}>
        <span className=" text-neutral-secondary">Check-out</span>
        <div>
          <Calendar width={20} height={20} />
          <span className="text-neutral-primary">8 Des 2021</span>
        </div>
      </div>

      <div className={`${styles.container__detail3} font-medium text-[14px]`}>
        <span className=" text-neutral-secondary">Check-out</span>
        <div>
          <Calendar width={20} height={20} />
          <span className="text-neutral-primary">8 Des 2021</span>
        </div>
      </div>

      <div className={`${styles.container__detail4} font-medium text-[14px]`}>
        <span className="text-neutral-secondary">Status</span>
        <span className="px-[16px] py-[3px] rounded-full text-neutral-white bg-success-main">
          Confirmed
        </span>
      </div>

      <Button
        variant={"noborder"}
        className="p-0 h-min w-min text-start xs:w-fit">
        See Reservation
      </Button>
    </div>
  );
};

export default LatestItem;
