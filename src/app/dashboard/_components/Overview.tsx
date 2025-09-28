import OverviewContent from "./OverviewContent";
import Message from "@/components/Message";
import { getOverview } from "@/lib/actions/getReservation";

export default async function Overview() {
  try {
    const data = await getOverview();
    return <OverviewContent overview={data} />;
  } catch (error) {
    return (
      <div className="h-[30vh]">
        <Message message={(error as Error).message} />
      </div>
    );
  }
}
