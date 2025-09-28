import LatestContent from "./LatestContent";
import Message from "@/components/Message";
import { getLatest } from "@/lib/actions/getReservation";

export default async function Latest() {
  try {
    const data = await getLatest();
    return <LatestContent latest={data} />;
  } catch (error) {
    return (
      <div className="h-[30vh]">
        <Message message={(error as Error).message} />
      </div>
    );
  }
}
