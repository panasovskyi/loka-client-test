"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.scss";
import { TopToolbar } from "@/components/TopToolbar/TopToolbar";
import { PropertyList } from "@/components/PropertyList/PropertyList";
import { Menu } from "@/components/Menu/Menu";
import Image from "next/image";
import { EmptyPage } from '@/components/common/EmptyPage/EmptyPage';

export default function Saved() {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className={styles.saved}>
      <div className="container">
        {isEmpty ? (
          <EmptyPage page='saved' />
        ) : (
          <div className={styles.saved__filled} onClick={() => setIsEmpty(true)}>
            <TopToolbar hideIcons={true} />
              <PropertyList cn="saved" order={false} />
          </div>
        )}
        <Menu />
      </div>
    </div>
  );
}
