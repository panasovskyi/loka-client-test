import Card from '../Card/Card';
import styles from './Slider.module.scss';

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__track}>
        <ul className={styles.slider__list}>
          {Array.from({ length: 10 }, (_, index) => index + 1).map(el => (
            <li key={el} className={styles.slider__item}>
              {' '}
              <Card />{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}