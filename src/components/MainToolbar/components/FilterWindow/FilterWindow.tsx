"use client";

import CloseIcon from "@/assets/icons/arrow-down.svg";
import styles from "./FilterWindow.module.scss";
import { useState } from "react";
import { Filter } from "./components/Filter/Filter";

type Props = {
  setIsFilter: (value: boolean) => void;
};

type Range = {
  min: number;
  max: number;
};

enum FilterTitle {
  Price = "Вартість",
  Area = "Площа",
  Rooms = "Кількість кімнат",
  Status = "Тип об'єкта",
  Date = "Дата публікації",
}

enum Room {
  One = '1',
  Two = '2',
  ThreePlus = '3+',
}

enum Date {
  Day = '24 години',
  Week = '7 днів',
  All = 'увесь час',
}

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
        <Filter
          resetKey={resetKey}
          minValue={priceRange.min}
          maxValue={priceRange.max}
          floorValue={0}
          ceilValue={1500}
          handleChange={handlePriceChange}
          title={FilterTitle.Price}
          rangeType="money"
        />

        <Filter handleRoomSelect={handleRoomSelect} title={FilterTitle.Rooms} rooms={rooms} />

        <Filter
          title={FilterTitle.Status}
          premium={premium}
          setPremium={setPremium}
        />

        <Filter
          resetKey={resetKey}
          minValue={areaRange.min}
          maxValue={areaRange.max}
          floorValue={30}
          ceilValue={200}
          handleChange={handleAreaChange}
          title={FilterTitle.Area}
          rangeType="area"
        />

        <Filter
          title={FilterTitle.Date} handleDateSelect={setDate} date={date} />
      </div>
    </div>
  );
};
