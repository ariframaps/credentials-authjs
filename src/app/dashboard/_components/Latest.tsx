import { Suspense } from "react";
import { getLatestRequest } from "@/lib/services/dummyApiRequests";
import LatestContent from "./LatestContent";
import LoadingComponent from "@/components/LoadingComponent";
import Message from "@/components/Message";

export default async function Latest() {
  const data = await getLatestRequest();

  if (!data.success) {
    return (
      <div className="h-[30vh]">
        <Message message={data.errors ?? "Failed to load"} />
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingComponent />}>
      <LatestContent latest={data.data} />
    </Suspense>
  );
}
