import React from "react";
import LatestItem from "./LatestItem";
import styles from "./Latest.module.scss";

const Latest = () => {
  return (
    <div
      className={`${styles.container} rounded-[16px] divide-y-[1px] divide-neutral-separator bg-neutral-white`}>
      <LatestItem />
      <LatestItem />
      <LatestItem />
    </div>
  );
};

export default Latest;
