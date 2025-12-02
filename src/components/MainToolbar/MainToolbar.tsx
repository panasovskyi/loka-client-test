"use client";

import FilterIcon from "@/assets/icons/filter.svg";
import styles from "./MainToolbar.module.scss";
import { useState } from "react";
import { TopToolbar } from '../TopToolbar/TopToolbar';

type Props = {
  setIsDropdown: (value: boolean) => void;
  setIsFilter: (value: boolean) => void;
  city: string;
}

export const MainToolbar: React.FC<Props> = ({ setIsDropdown, setIsFilter, city }) => {
  return (
    <div className={styles.mainToolbar}>
      <TopToolbar hideIcons={false} />
      <div className={styles.mainToolbar__bottom}>
        <div
          className={styles.mainToolbar__dropdown}
          
        >
          <button className={styles.mainToolbar__option} onClick={() => setIsDropdown(true)}>{city}</button>
        </div>
        <button className={styles.mainToolbar__filter} onClick={() => setIsFilter(true)}>
          <FilterIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
