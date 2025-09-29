import Image from "next/image";
import styles from "./OverviewItem.module.scss";
import MoonIcon from "@/components/svg/MoonIcon";
import DoorIcon from "@/components/svg/DoorIcon";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Reservation } from "@/dummydata/reservations";

const OverviewItem = ({ reservation }: { reservation: Reservation }) => {
	return (
		<div className={`${styles.container}`}>
			<Image
				src={reservation.guestImage}
				alt={"John Miaw"}
				width={75}
				height={75}
				className={`${styles.container__img} rounded-[8px] `}
			/>
			<div className={`${styles.container__detail1}`}>
				<h4
					className={`${styles.container__detail1__name} font-semibold text-[16px] phone:text-[22px] text-neutral-primary`}>
					{reservation.guestName}
				</h4>
				<ul
					className={`${styles.container__detail1__info} text-neutral-secondary text-[14px] `}>
					<li>#{reservation.id}</li>
					<div
						className={`${styles.container__detail1__info__divider}`}></div>
					<li>
						<MoonIcon width={20} height={20} />
						<span>{reservation.nights} Nights</span>
					</li>
					<div
						className={`${styles.container__detail1__info__divider}`}></div>
					<li>
						<DoorIcon width={20} height={20} />
						<span>{reservation.rooms} Bedroom</span>
					</li>
				</ul>
			</div>
			<span
				className={`${styles.container__detail2} font-medium text-[16px] text-neutral-primary `}>
				{reservation.bookingDate}
			</span>
			<div
				className={`${styles.container__detail3} text-neutral-secondary text-[14px] font-normal `}>
				<div>
					<Calendar width={20} height={20} />
					<span>
						{reservation.checkIn} - {reservation.checkOut}
					</span>
				</div>
				<span>
					Arrival : {reservation.arrivalTime} -{" "}
					{reservation.arrivalTime}
				</span>
			</div>
			<span
				className={`${styles.container__detail4} font-semibold text-[18px] `}>
				$ {reservation.price}
			</span>
			<Button
				variant={"noborder"}
				className="block xs:hidden p-0 h-min w-min text-start xs:w-fit">
				More
			</Button>
			<Button
				variant={"noborder"}
				className="hidden xs:block p-0 w-fit h-min">
				Detail Order
			</Button>
		</div>
	);
};

export default OverviewItem;
