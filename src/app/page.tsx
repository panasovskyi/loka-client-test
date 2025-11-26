import { MainToolbar } from '@/components/MainToolbar/MainToolbar';
import styles from "./page.module.scss";

import { SliderSection } from "@/components/SliderSection/SliderSection";

export default function Homepage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.page__toolbar}>
          <MainToolbar />
        </div>
        <div className={styles.page__sections}>
          <section className={styles.page__premium}>
            <SliderSection title="Преміум" link="/" />
          </section>
          <section className={styles.page__all}>
            <SliderSection title="Усі" link="/" />
          </section>
        </div>
      </div>
    </div>
  );
}
