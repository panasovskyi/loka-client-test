"use client";

import cn from "classnames";
import CloseIcon from "@/assets/icons/arrow-down.svg";
import styles from "./FilterWindow.module.scss";
import RangeSlider from "../RangeSlider/RangeSlider";
import { useState } from "react";

type Props = {
  setIsFilter: (value: boolean) => void;
};

type Range = {
  min: number;
  max: number;
};

type Room = "1" | "2" | "3+";
type Date = "day" | 'week' | 'all';

export const FilterWindow: React.FC<Props> = ({ setIsFilter }) => {
  const [priceRange, setPriceRange] = useState<Range>({ min: 0, max: 1200 });
  const [areaRange, setAreaRange] = useState<Range>({ min: 30, max: 180 });
  const [resetKey, setResetKey] = useState(0);

  const [rooms, setRooms] = useState<Room[]>([]);
  const [date, setDate] = useState<Date | null>(null);
  const [premium, setPremium] = useState<boolean | null>(null);

  const handleRoomSelect = (value: Room) => {
    setRooms((prev) => {
      const isRoom = prev?.includes(value);
      const updated = prev.filter((r) => r !== value);

      if (!isRoom) {
        return [...prev, value];
      }

      return updated;
    });

    console.log(rooms)
  };

  const handlePriceChange = (values: Range) => {
    setPriceRange(values);
  };
  const handleAreaChange = (values: Range) => {
    setAreaRange(values);
  };

  const handleReset = () => {
    setPriceRange((prev) => ({ ...prev, min: 0, max: 1500 }));
    setAreaRange((prev) => ({ ...prev, min: 30, max: 200 }));
    setRooms([]);
    setDate(null);
    setPremium(null);
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__head}>
        <div className={styles.modal__space} />
        <button
          className={styles.modal__close}
          onClick={() => setIsFilter(false)}
        >
          <CloseIcon />
        </button>
        <button className={styles.modal__reset} onClick={handleReset}>
          Скинути всі
        </button>
      </div>
      <div className={styles.modal__content}>
        <div className={styles.filter}>
          <h3 className={styles.filter__title}>Вартість</h3>
          <div className={styles.filter__options}>
            <div className={styles.range}>
              <div className={styles.range__slider}>
                <RangeSlider
                  key={resetKey}
                  min={0}
                  max={1500}
                  initialMax={priceRange.max}
                  initialMin={priceRange.min}
                  onChange={handlePriceChange}
                />
              </div>
              <div className={styles.range__values}>
                <div
                  className={`${styles.range__field} ${styles.priceDecoration}`}
                >
                  <label htmlFor="from" className={styles.range__label}>
                    від
                  </label>
                  <input
                    type="text"
                    id="to"
                    className={styles.range__value}
                    value={`$${priceRange.min}`}
                    readOnly
                  />
                </div>
                <div className={styles.range__field}>
                  <label htmlFor="from" className={styles.range__label}>
                    до
                  </label>
                  <input
                    type="text"
                    id="to"
                    className={styles.range__value}
                    value={`$${priceRange.max}`}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.filter}>
          <h3 className={styles.filter__title}>Кількість кімнат</h3>
          <div className={styles.filter__options}>
            <ul className={styles.rooms}>
              <li className={styles.rooms__item}>
                <button
                  onClick={() => handleRoomSelect("1")}
                  className={cn(styles.rooms__button, {
                    [styles.rooms__buttonActive]: rooms.includes("1"),
                  })}
                >
                  1 кімната
                </button>
              </li>
              <li className={styles.rooms__item}>
                <button
                  className={cn(styles.rooms__button, {
                    [styles.rooms__buttonActive]: rooms.includes("2"),
                  })}
                  onClick={() => handleRoomSelect("2")}
                >
                  2 кімнати
                </button>
              </li>
              <li className={styles.rooms__item}>
                <button
                  className={cn(styles.rooms__button, {
                    [styles.rooms__buttonActive]: rooms.includes("3+"),
                  })}
                  onClick={() => handleRoomSelect("3+")}
                >
                  3+ кімнати
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.filter}>
          <h3 className={styles.filter__title}>Тип об&apos;єкта</h3>
          <div className={styles.filter__options}>
            <div className={styles.filterToggler}>
              <button
                className={cn(styles.filterToggler__button, { [styles.filterToggler__buttonActive]: premium === true })}
                onClick={() => setPremium(true)}
              >
                Преміум
              </button>

              <button
                className={cn(styles.filterToggler__button, { [styles.filterToggler__buttonActive]: premium === false })}
                onClick={() => setPremium(false)}
              >
                Звичайний
              </button>
            </div>
          </div>
        </div>

        <div className={styles.filter}>
          <h3 className={styles.filter__title}>Площа</h3>
          <div className={styles.filter__options}>
            <div className={styles.range}>
              <div className={styles.range__slider}>
                <RangeSlider
                  key={resetKey}
                  min={30}
                  max={200}
                  initialMax={areaRange.max}
                  initialMin={areaRange.min}
                  onChange={handleAreaChange}
                />
              </div>
              <div className={styles.range__values}>
                <div className={styles.range__field}>
                  <label htmlFor="from" className={styles.range__label}>
                    від
                  </label>
                  <input
                    type="text"
                    id="to"
                    className={styles.range__value}
                    value={`${areaRange.min} м²`}
                    readOnly
                  />
                </div>
                <div className={styles.range__field}>
                  <label htmlFor="from" className={styles.range__label}>
                    до
                  </label>
                  <input
                    type="text"
                    id="to"
                    className={styles.range__value}
                    value={`${areaRange.max} м²`}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.filter}>
          <h3 className={styles.filter__title}>Дата публікації</h3>
          <div className={styles.filter__options}>
            <ul className={styles.date}>
              <li className={styles.date__item}>
                <button className={cn(styles.date__button, { [styles.date__buttonActive]: date === 'day'})} onClick={() => setDate('day')}>24 год</button>
              </li>
              <li className={styles.date__item}>
                <button className={cn(styles.date__button, { [styles.date__buttonActive]: date === 'week' })} onClick={() => setDate('week')}>7 днів</button>
              </li>
              <li className={styles.date__item}>
                <button className={cn(styles.date__button, { [styles.date__buttonActive]: date === 'all' })} onClick={() => setDate('all')}>увесь час</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
