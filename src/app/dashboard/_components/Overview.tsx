import { Suspense } from "react";
import { getOverviewRequest } from "@/lib/services/dummyApiRequests";
import LoadingComponent from "@/components/LoadingComponent";
import OverviewContent from "./OverviewContent";
import Message from "@/components/Message";

export default async function Overview() {
  const data = await getOverviewRequest();

  if (!data.success) {
    return (
      <div className="h-[30vh]">
        <Message message={data.errors ?? "Failed to load"} />
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingData />}>
      <OverviewContent overview={data.data} />
    </Suspense>
  );
}

function LoadingData() {
  return (
    <div className="h-[30vh] w-full">
      <LoadingComponent />
    </div>
  );
}
