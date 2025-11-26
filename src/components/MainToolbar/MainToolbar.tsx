"use client";

import Link from "next/link";
import FaqIcon from "../../assets/icons/faq.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import styles from "./MainToolbar.module.scss";
import { useState } from "react";

export const MainToolbar = () => {
  const [isActive, setIsActive] = useState("rent");

  return (
    <div className={styles.mainToolbar}>
      <div className={styles.mainToolbar__top}>
        <Link
          href="/"
          className={
            isActive === "faq"
              ? `${styles.mainToolbar__link} ${styles.mainToolbar__linkActive}`
              : styles.mainToolbar__link
          }
          onClick={() => setIsActive("faq")}
        >
          <FaqIcon className={styles.icon} />
        </Link>
        <div className={styles.mainToolbar__toggler}>
          <button
            className={`${styles.mainToolbar__btn} ${
              isActive === "rent" && styles.mainToolbar__btnActive
            }`}
            onClick={() => setIsActive("rent")}
          >
            Оренда
          </button>
          <button
            className={`${styles.mainToolbar__btn} ${
              isActive === "sell" && styles.mainToolbar__btnActive
            }`}
            onClick={() => setIsActive("sell")}
          >
            Продаж
          </button>
        </div>
        <Link
          href="/"
          className={
            isActive === "profile"
              ? `${styles.mainToolbar__link} ${styles.mainToolbar__linkActive}`
              : styles.mainToolbar__link
          }
          onClick={() => setIsActive("profile")}
        >
          <ProfileIcon
            className={styles.icon}
          />
        </Link>
      </div>
      <div className={styles.mainToolbar__bottom}>
        <div className={styles.mainToolbar__dropdown}>
          <p className={styles.mainToolbar__option}>Ужгород</p>
          <Link
            href="/"
            className={styles.mainToolbar__searchBtn}
          >
            <ArrowRightIcon
              className={styles.icon}
            />
          </Link>
        </div>
        <button
          className={styles.mainToolbar__filter}
        >
          <FilterIcon
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  );
};
