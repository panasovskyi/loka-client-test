import { DateSelect } from "../Date/Date";
import { Range } from "../Range/Range";
import { Rooms } from "../Rooms/Rooms";
import { StatusToggler } from "../StatusToggler/StatusToggler";
import styles from "./Filter.module.scss";

type Range = {
  min: number;
  max: number;
};

type RangeType = "money" | "area" | "";

enum FilterTitle {
  Price = "Вартість",
  Area = "Площа",
  Rooms = "Кількість кімнат",
  Status = "Тип об'єкта",
  Date = "Дата публікації",
}

enum Room {
  One = "1",
  Two = "2",
  ThreePlus = "3+",
}

enum Date {
  Day = "24 години",
  Week = "7 днів",
  All = "увесь час",
}

type Props = {
  resetKey?: number;
  minValue?: number;
  maxValue?: number;
  floorValue?: number;
  ceilValue?: number;
  handleChange?: (value: Range) => void;
  title: FilterTitle;
  rangeType?: RangeType;

  setPremium?: (value: boolean | null) => void;
  premium?: boolean | null;

  handleRoomSelect?: (value: Room) => void;
  rooms?: Room[];

  handleDateSelect?: (value: Date) => void;
  date?: Date | null;
};

export const Filter: React.FC<Props> = ({
  premium,
  setPremium = () => {},

  rooms,
  handleRoomSelect = () => {},

  date,
  handleDateSelect = () => {},

  resetKey,
  minValue,
  maxValue,
  floorValue,
  ceilValue,
  handleChange = () => {},
  title,
  rangeType = "",
}) => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.filter__title}>{title}</h3>
      <div className={styles.filter__options}>
        {(title === FilterTitle.Area || title === FilterTitle.Price) && (
          <Range
            resetKey={resetKey ?? 0}
            minValue={minValue ?? 0}
            maxValue={maxValue ?? 0}
            floorValue={floorValue ?? 0}
            ceilValue={ceilValue ?? 0}
            handleChange={handleChange}
            rangeType={rangeType}
          />
        )}

        {title === FilterTitle.Status && (
          <StatusToggler premium={premium ?? null} setPremium={setPremium} />
        )}

        {title === FilterTitle.Rooms && (
          <Rooms rooms={rooms} handleRoomSelect={handleRoomSelect} />
        )}

        {title === FilterTitle.Date && (
          <DateSelect date={date ?? null} handleDateSelect={handleDateSelect} />
        )}
      </div>
    </div>
  );
};
