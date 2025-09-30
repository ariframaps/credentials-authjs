import Message from "@/components/Message";
import LatestItem from "./LatestItem";
import styles from "./Latest.module.scss";
import getUser from "@/lib/actions/getUser";
import { LatestbookingDummyData as latest } from "@/dummydata/latest_booking";

export default async function Latest() {
	try {
		const user = await getUser();
		if (!user) throw new Error("Unauthorized");

		return (
			<div
				className={`${styles.container} rounded-[16px] divide-y-[1px] divide-neutral-separator bg-neutral-white`}>
				{latest.map((item, i) => (
					<LatestItem key={i} latest={item} />
				))}
			</div>
		);
	} catch (error) {
		return (
			<div className="h-[30vh]">
				<Message message={(error as Error).message} />
			</div>
		);
	}
}
