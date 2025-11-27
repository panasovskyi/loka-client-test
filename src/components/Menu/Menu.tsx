import Link from "next/link";
import GlassMap from "../../assets/menu/glassmap.svg";

import styles from "./Menu.module.scss";
import { Navbar } from './components/Navbar';



export default function Menu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.menu__mapWrapper}>
        <Link href="/map" className={styles.menu__mapLink}>
          <GlassMap className={styles.menu__mapBackground} />
          <span className={styles.menu__mapText}>Мапа</span>
        </Link>
      </div>
      <Navbar />
    </nav>
  );
}


