import Link from "next/link";
import GlassMap from "@/assets/menu/mapbg.svg";
import styles from './Map.module.scss';

export const Map = () => {
  return (
    <div className={styles.map}>
      <GlassMap className={styles.map__bg} />
      <Link href="/map" className={styles.map__link}>
        Мапа
      </Link>
    </div>
  )
}