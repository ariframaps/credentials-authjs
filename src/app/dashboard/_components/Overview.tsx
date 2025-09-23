import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewItem from "./OverviewItem";
import Message from "@/components/Message";
import styles from "./Overview.module.scss";

const Overview = () => {
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
        <OverviewItem />
        <OverviewItem />
        <OverviewItem />
      </TabsContent>
      <TabsContent value="Arrival">
        <Message message="No arrival reservation today" />
      </TabsContent>
      <TabsContent value="Stay-over">
        <Message message="No stay-over reservation" />
      </TabsContent>
    </Tabs>
  );
};

export default Overview;
