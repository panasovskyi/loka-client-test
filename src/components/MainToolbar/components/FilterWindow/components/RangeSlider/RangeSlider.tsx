"use client";

import React, { useState, useCallback, ChangeEvent } from "react";
import styles from "./RangeSlider.module.scss";

interface RangeValues {
  min: number;
  max: number;
}

interface RangeSliderProps {
  min: number;
  max: number;
  initialMin: number;
  initialMax: number;

  onChange: (values: RangeValues) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  initialMin,
  initialMax,
  onChange,
}) => {
  const [minValue, setMinValue] = useState<number>(initialMin);
  const [maxValue, setMaxValue] = useState<number>(initialMax);

  const getPercent = useCallback(
    (value: number): number => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const minPos: number = getPercent(minValue);
  const maxPos: number = getPercent(maxValue);

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawValue = Number(event.target.value);

    const value = Math.min(rawValue, maxValue - 1);

    setMinValue(value);
    onChange({ min: value, max: maxValue });
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawValue = Number(event.target.value);

    const value = Math.max(rawValue, minValue + 1);

    setMaxValue(value);
    onChange({ min: minValue, max: value });
  };

  return (
    <div className={styles.rangeContainer}>
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
        className={styles.inputMin}
        style={{ zIndex: minValue > max - 100 ? 5 : 3 }}
      />

      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
        className={styles.inputMax}
      />

      <div className={styles.slider}>
        <div className={styles.sliderTrack} />
        <div
          className={styles.sliderRange}
          style={{
            left: `${minPos}%`,
            width: `${maxPos - minPos}%`,
          }}
        />
        <div
          className={styles.sliderThumb__left}
          style={{ left: `${minPos}%` }}
        />
        <div
          className={styles.sliderThumb__right}
          style={{ left: `${maxPos}%` }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
