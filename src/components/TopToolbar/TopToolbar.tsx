"use client";

import Link from "next/link";
import FaqIcon from "@/assets/icons/faq.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import styles from "./TopToolbar.module.scss";
import { useState } from "react";

type Props = {
  hideIcons: boolean;
};

export const TopToolbar: React.FC<Props> = ({ hideIcons }) => {
  const [isActive, setIsActive] = useState("rent");

  return (
    <div className={styles.toolbar}>
      {hideIcons ? (
        <div className={styles.toolbar__placeholder} />
      ) : (
        <Link
          href="/faq"
          className={
            isActive === "faq"
              ? `${styles.toolbar__link} ${styles.toolbar__linkActive}`
              : styles.toolbar__link
          }
          onClick={() => setIsActive("faq")}
        >
          <FaqIcon className={styles.icon} />
        </Link>
      )}
      <div className={styles.toolbar__toggler}>
        <button
          className={`${styles.toolbar__btn} ${
            isActive === "rent" && styles.toolbar__btnActive
          }`}
          onClick={() => setIsActive("rent")}
        >
          Оренда
        </button>
        <button
          className={`${styles.toolbar__btn} ${
            isActive === "sell" && styles.toolbar__btnActive
          }`}
          onClick={() => setIsActive("sell")}
          disabled
        >
          Продаж
        </button>
      </div>

      {hideIcons ? (
        <div className={styles.toolbar__placeholder} />
      ) : (
        <Link
          href="/profile"
          className={
            isActive === "profile"
              ? `${styles.toolbar__link} ${styles.toolbar__linkActive}`
              : styles.toolbar__link
          }
          onClick={() => setIsActive("profile")}
        >
          <ProfileIcon className={styles.icon} />
        </Link>
      )}
    </div>
  );
};
