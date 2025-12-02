import { PropertyList } from '@/components/PropertyList/PropertyList';
import styles from './Slider.module.scss';

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__track}>
        <PropertyList cn="slider" />
      </div>
    </div>
  );
}