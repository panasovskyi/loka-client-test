"use client";

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

export const FilterWindow: React.FC<Props> = ({ setIsFilter }) => {
  const [priceRange, setPriceRange] = useState<Range>({ min: 0, max: 1200 });
  const [areaRange, setAreaRange] = useState<Range>({ min: 30, max: 200 });
  const handlePriceChange = (values: Range) => {
    setPriceRange(values);
  };
  const handleAreaChange = (values: Range) => {
    setAreaRange(values);
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
        <button className={styles.modal__reset}>Скинути всі</button>
      </div>
      <div className={styles.modal__content}>
          <div className={styles.filter}>
            <h3 className={styles.filter__title}>Вартість</h3>
            <div className={styles.filter__options}>
              <div className={styles.range}>
                <div className={styles.range__slider}>
                  <RangeSlider
                    min={0}
                    max={1500}
                    initialMax={priceRange.max}
                    initialMin={priceRange.min}
                    onChange={handlePriceChange}
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
                      placeholder="$0"
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
                      placeholder="$1200"
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
                  <button className={styles.rooms__button}>1 кімната</button>
                </li>
                <li className={styles.rooms__item}>
                  <button className={styles.rooms__button}>2 кімнати</button>
                </li>
                <li className={styles.rooms__item}>
                  <button className={styles.rooms__button}>3 кімнати</button>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.filter}>
            <h3 className={styles.filter__title}>Тип об&apos;єкта</h3>
            <div className={styles.filter__options}>
              <div className={styles.filterToggler}>
                <button className={styles.filterToggler__button}>Преміум</button>
                <button className={styles.filterToggler__button}>
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
                      placeholder="30 м&#178;"
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
                      placeholder="180 м&#178;"
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
                  <button className={styles.date__button}>24 год</button>
                </li>
                <li className={styles.date__item}>
                  <button className={styles.date__button}>7 днів</button>
                </li>
                <li className={styles.date__item}>
                  <button className={styles.date__button}>увесь час</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
 
  );
};
