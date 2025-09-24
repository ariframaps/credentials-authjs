"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewItem from "./OverviewItem";
import Message from "@/components/Message";
import styles from "./Overview.module.scss";
import { useEffect, useState } from "react";
import { Reservation } from "@/types/dummyTypes";
import { getOverviewRequest } from "@/lib/services/dummyApiRequests";
import LoadingComponent from "@/components/LoadingComponent";

const Overview = () => {
  const [overview, setOverview] = useState<Reservation[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const getOverview = async () => {
      setIsFetching(true);
      try {
        const data = await getOverviewRequest();
        if (data.success) {
          setOverview(data.data);
        } else {
          setError(data.errors);
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setIsFetching(false); // now runs after request finishes
      }
    };

    getOverview();
  }, []);

  if (error)
    return (
      <div className="h-[30vh]">
        <Message message={error} />{" "}
      </div>
    );

  return (
    <Tabs
      defaultValue="Departure"
      className={`${styles.container} bg-neutral-white rounded-[16px] divide-y-[1px] divide-neutral-separator`}>
      <TabsList>
        <TabsTrigger value="Departure">Departure</TabsTrigger>
        <TabsTrigger value="Arrival">
          <div className="flex items-center gap-[8px] ">
            Arrival
            <span className="flex justify-center items-center size-[20px] rounded-full bg-brand-green-color-01 text-neutral-white font-semibold text-[12px] ">
              1
            </span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="Stay-over">Stay-over</TabsTrigger>
      </TabsList>
      {isFetching ? (
        <div className="h-[30vh]">
          <LoadingComponent />
        </div>
      ) : (
        <>
          <TabsContent
            value="Departure"
            className="divide-y-[1px] divide-neutral-separator">
            {overview &&
              overview.map((item, i) => {
                if (item.type === "departure") {
                  return <OverviewItem key={i} reservation={item} />;
                }
              })}
          </TabsContent>
          <TabsContent value="Arrival">
            {overview &&
              overview.map((item, i) => {
                if (item.type === "arrival") {
                  return <OverviewItem key={i} reservation={item} />;
                }
              })}
          </TabsContent>
          <TabsContent value="Stay-over">
            <Message message="No stay-over reservation" />
          </TabsContent>
        </>
      )}
    </Tabs>
  );
};

export default Overview;
