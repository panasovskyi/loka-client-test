"use client";

import cn from "classnames";
import CloseIcon from "@/assets/icons/arrow-down.svg";
import styles from "./DropdownWindow.module.scss";

const CITIES = [
  "Ужгород",
  "Львів",
  "Івано-Франківськ",
  "Київ",
  "Тернопіль",
  "Кривий Ріг",
  "Чернівці",
  "Чернігів",
  "Калуш",
  "Біла Цервква",
  "Хмельницький",
  "Бердичів",
];

type Props = {
  setIsDropdown: (value: boolean) => void;
  setIsCity: (value: string) => void;
  isCity: string;
};

export const DropdownWindow: React.FC<Props> = ({
  setIsDropdown,
  setIsCity,
  isCity,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__head}>
        <button
          onClick={() => setIsDropdown(false)}
          className={styles.modal__close}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={styles.modal__content}>
        <h3 className={styles.modal__title}>Обери місто</h3>
        <ul className={styles.modal__list}>
          {CITIES.map((city) => (
            <li key={city} className={styles.modal__item}>
              <button
                disabled={city !== "Ужгород"}
                onClick={() => {
                  setIsCity(city);
                  setIsDropdown(false);
                }}
                className={cn(styles.modal__button, {
                  [styles.modal__buttonActive]: isCity === city,
                })}
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
