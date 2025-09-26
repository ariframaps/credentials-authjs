"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewItem from "./OverviewItem";
import Message from "@/components/Message";
import styles from "./Overview.module.scss";
import { Reservation } from "@/types/dummyTypes";

export default function OverviewContent({
  overview,
}: {
  overview: Reservation[];
}) {
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

      <TabsContent
        value="Departure"
        className="divide-y-[1px] divide-neutral-separator">
        {overview
          .filter((item) => item.type === "departure")
          .map((item, i) => (
            <OverviewItem key={i} reservation={item} />
          ))}
      </TabsContent>

      <TabsContent value="Arrival">
        {overview
          .filter((item) => item.type === "arrival")
          .map((item, i) => (
            <OverviewItem key={i} reservation={item} />
          ))}
      </TabsContent>

      <TabsContent value="Stay-over">
        <Message message="No stay-over reservation" />
      </TabsContent>
    </Tabs>
  );
}
