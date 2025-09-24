"use client";

import React, { useEffect, useState } from "react";
import LatestItem from "./LatestItem";
import styles from "./Latest.module.scss";
import Message from "@/components/Message";
import { getLatestRequest } from "@/lib/services/dummyApiRequests";
import { LatestBooking } from "@/types/dummyTypes";
import LoadingComponent from "@/components/LoadingComponent";

const Latest = () => {
  const [Latest, setLatest] = useState<LatestBooking[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const getLatest = async () => {
      setIsFetching(true);
      try {
        const data = await getLatestRequest();
        if (data.success) {
          setLatest(data.data);
        } else {
          setError(data.errors);
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setIsFetching(false); // now runs after request finishes
      }
    };

    getLatest();
  }, []);

  if (isFetching)
    return (
      <div className="h-[30vh] bg-neutral-white">
        <LoadingComponent />
      </div>
    );
  if (error)
    return (
      <div className="h-[30vh]">
        <Message message={error} />{" "}
      </div>
    );

  return (
    <div
      className={`${styles.container} rounded-[16px] divide-y-[1px] divide-neutral-separator bg-neutral-white`}>
      {Latest && Latest.map((item, i) => <LatestItem key={i} latest={item} />)}
    </div>
  );
};

export default Latest;
