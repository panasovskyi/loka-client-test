"use client";

import { MainToolbar } from "@/components/MainToolbar/MainToolbar";
import styles from "./page.module.scss";

import { SliderSection } from "@/components/SliderSection/SliderSection";
import { useState } from "react";
import { DropdownWindow } from "@/components/MainToolbar/components/DropdownWindow/DropdownWindow";
import { FilterWindow } from "@/components/MainToolbar/components/FilterWindow/FilterWindow";
import {Menu} from '@/components/Menu/Menu';

export default function Homepage() {
  const [isDrodown, setIsDropdown] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [isCity, setIsCity] = useState("Ужгород");

  return (  
    <div className={styles.page}>
      <div className="container">
        <div className={styles.page__toolbar}>
          <MainToolbar
            setIsDropdown={setIsDropdown}
            setIsFilter={setIsFilter}
            city={isCity}
          />
        </div>
        <div className={styles.page__sections}>
          <section className={styles.page__premium}>
            <SliderSection title="Преміум" link="/" />
          </section>
          <section className={styles.page__all}>
            <SliderSection title="Усі" link="/" />
          </section>
        </div>

        {isDrodown && (
          <div className={styles.page__modal}>
            <DropdownWindow
              setIsDropdown={setIsDropdown}
              setIsCity={setIsCity}
              isCity={isCity}
            />
          </div>
        )}
        {isFilter && (
          <div className={styles.page__modal}>
            <FilterWindow setIsFilter={setIsFilter} />
          </div>
        )}

        <div className={styles.page__menu}>
          <Menu />
        </div>
      </div>
      </div>
  );
}
