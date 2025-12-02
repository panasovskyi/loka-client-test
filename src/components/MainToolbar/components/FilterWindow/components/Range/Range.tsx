import RangeSlider from '../RangeSlider/RangeSlider';
import styles from './Range.module.scss';

type Range = {
  min: number;
  max: number;
};


type RangeType = 'money' | 'area' | '';

type Props = {
  resetKey: number;
  minValue: number;
  maxValue: number;
  floorValue: number;
  ceilValue: number;
  handleChange: (value: Range) => void;
  rangeType: RangeType;
}

export const Range: React.FC<Props> = ({ resetKey, minValue, maxValue, floorValue, ceilValue, handleChange, rangeType }) => {
  const inputMinValue = rangeType === 'money' ? `$${minValue}` : `${minValue} м\u00B2`;
  const inputMaxValue = rangeType === 'money' ? `$${maxValue}` : `${maxValue} м\u00B2`;

  return (
    <div className={styles.range}>
      <div className={styles.range__slider}>
        <RangeSlider
          key={resetKey}
          min={floorValue}
          max={ceilValue}
          initialMin={minValue}
          initialMax={maxValue}
          onChange={handleChange}
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
            value={inputMinValue}
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
            value={inputMaxValue}
            readOnly
          />
        </div>
      </div>
    </div>
  )
}