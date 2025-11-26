import { Slider } from '../Slider/Slider';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import styles from './SliderSection.module.scss';

import Link from 'next/link';

type Props = {
  title: string;
  link: string;
};

export const SliderSection: React.FC<Props> = ({ title, link }) => {
  return (
    <div className={styles.sliderSection}>
      <div className={styles.sliderSection__head}>
        <h3 className={styles.sliderSection__title}>{title}</h3>
        <Link
          href="/"
          className={styles.mainToolBar__searchBtn}
        >
          <ArrowRightIcon
            className={styles.icon}
          />
        </Link>
      </div>
      <div className={styles.sliderSection__sliderWrapper}>
        <Slider />
      </div>
    </div>
  );
};
