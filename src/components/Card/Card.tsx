'use client';

import Link from "next/link";
import styles from "./Card.module.scss";
import Image from "next/image";
import HeartIcon from '../../assets/icons/heart.svg';
import { CardInfo } from './components/CardInfo/CardInfo';

export default function Card() {
  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link href="/" className={styles.card}>
      <div className={styles.card__container}>
        <div className={styles.card__imgWrapper}>
          <button className={styles.card__savedBtn} onClick={handleSaveClick}>
            <HeartIcon className={styles.card__savedBtnIcon} />
          </button>
          <Image
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
