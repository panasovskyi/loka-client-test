import cn from 'classnames';
import styles from './Date.module.scss';

enum Date {
  Day = '24 години',
  Week = '7 днів',
  All = 'увесь час',
}

type Props = {
  date: Date | null,
  handleDateSelect?: (value: Date) => void;
}

export const DateSelect: React.FC<Props> = ({ date, handleDateSelect = () => {} }) => {
  return (
    <ul className={styles.date}>
      <li className={styles.date__item}>
        <button
          className={cn(styles.date__button, {
            [styles.date__buttonActive]: date === Date.Day,
          })}
          onClick={() => handleDateSelect(Date.Day)}
        >
          24 год
        </button>
      </li>
      <li className={styles.date__item}>
        <button
          className={cn(styles.date__button, {
            [styles.date__buttonActive]: date === Date.Week,
          })}
          onClick={() => handleDateSelect(Date.Week)}
        >
          7 днів
        </button>
      </li>
      <li className={styles.date__item}>
        <button
          className={cn(styles.date__button, {
            [styles.date__buttonActive]: date === Date.All,
          })}
          onClick={() => handleDateSelect(Date.All)}
        >
          увесь час
        </button>
      </li>
    </ul>
  )
}