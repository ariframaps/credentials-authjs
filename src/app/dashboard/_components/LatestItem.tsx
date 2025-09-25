import Image from "next/image";
import styles from "./LatestItem.module.scss";
import MoonIcon from "@/components/svg/MoonIcon";
import DoorIcon from "@/components/svg/DoorIcon";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LatestBooking } from "@/types/dummyTypes";

const LatestItem = ({ latest }: { latest: LatestBooking }) => {
  return (
    <div className={`${styles.container}`}>
      <Image
        src={latest.guestImage}
        alt={"John Miaw"}
        width={75}
        height={75}
        className={`${styles.container__img} rounded-[8px] `}
      />

      <div className={`${styles.container__detail1}`}>
        <h4
          className={`${styles.container__detail1__name} font-semibold text-[16px] phone:text-[22px] text-neutral-primary`}>
          {latest.guestName}
        </h4>
        <ul
          className={`${styles.container__detail1__info} text-neutral-secondary text-[14px] `}>
          <li>
            <MoonIcon width={20} height={20} />
            <span>{latest.nights} Nights</span>
          </li>
          <div className={`${styles.container__detail1__info__divider}`}></div>
          <li>
            <DoorIcon width={20} height={20} />
            <span>{latest.rooms} Bedroom</span>
          </li>
        </ul>
      </div>

      <div className={`${styles.container__detail2} font-medium text-[14px]`}>
        <span className=" text-neutral-secondary">Check-out</span>
        <div>
          <Calendar width={20} height={20} />
          <span className="text-neutral-primary">{latest.checkOut}</span>
        </div>
      </div>

      <div className={`${styles.container__detail3} font-medium text-[14px]`}>
        <span className=" text-neutral-secondary">Check-out</span>
        <div>
          <Calendar width={20} height={20} />
          <span className="text-neutral-primary">{latest.checkOut}</span>
        </div>
      </div>

      <div className={`${styles.container__detail4} font-medium text-[14px]`}>
        <span className="text-neutral-secondary">Status</span>
        <span className="px-[16px] py-[3px] w-fit rounded-full text-neutral-white bg-success-main">
          {latest.status}
        </span>
      </div>

      <Button
        variant={"noborder"}
        className="block xs:hidden p-0 h-min w-min text-start xs:w-fit">
        More
      </Button>
      <Button
        variant={"noborder"}
        className="hidden xs:block p-0 h-min w-min text-start xs:w-fit">
        See Reservation
      </Button>
    </div>
  );
};

export default LatestItem;
