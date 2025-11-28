import Link from "next/link";
import GlassMap from "@/assets/menu/glassmap.svg";

import styles from "./Menu.module.scss";
import { Navbar } from './components/Navbar/Navbar';

 //<GlassMap className={styles.menu__mapBackground} />

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.menu__mapWrapper}>
        <Link href="/map" className={styles.menu__mapLink}>
          Мапа
        </Link>
      </div>
      <Navbar />
    </nav>
  );
}
