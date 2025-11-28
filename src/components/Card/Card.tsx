'use client';

import cn from 'classnames';
import Link from "next/link";
import styles from "./Card.module.scss";
import Image from "next/image";
import HeartIcon from '@/assets/icons/heart.svg';
import { CardInfo } from './components/CardInfo/CardInfo';
import { useState } from 'react';

export default function Card() {
  const [isActive, setIsActive] = useState(false);

  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(!isActive)
  };

  return (
    <Link href="/" className={styles.card}>
      <div className={styles.card__container}>
        <div className={styles.card__imgWrapper}>
          <button className={styles.card__savedBtn} onClick={handleSaveClick}>
            <HeartIcon className={cn(styles.card__savedBtnIcon, { [styles.card__savedBtnIconActive]: isActive})} />
          </button>
          <Image
            className={styles.card__img}
            src="/img/test/test-property-img.webp"
            width={220}
            height={168}
            alt="test-image"
          />
          <span className={styles.card__premiumLabel}>Преміум</span>
        </div>
        <CardInfo />
      </div>
    </Link>
  );
}
