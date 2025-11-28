import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import { Slider } from './components/Slider/Slider';
import styles from "./SliderSection.module.scss";

import Link from "next/link";

type Props = {
  title: string;
  link: string;
};

export const SliderSection: React.FC<Props> = ({ title, link }) => {
  return (
    <div className={styles.sliderSection}>
      <div className={styles.sliderSection__head}>
        <Link href="/" className={styles.sliderSection__link}>
          {title}
        </Link>
        <ArrowRightIcon />
      </div>
      <div className={styles.sliderSection__sliderWrapper}>
        <Slider />
      </div>
    </div>
  );
};
