import Message from "@/components/Message";
import { getLatest } from "@/lib/actions/getReservation";
import LatestItem from "./LatestItem";
import styles from "./Latest.module.scss";

export default async function Latest() {
  try {
    const latest = await getLatest();
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
