'use client';

import styles from "./Menu.module.scss";
import { Navbar } from './components/Navbar/Navbar';
import { Map } from './components/Map/Map';
import { usePathname } from 'next/navigation';


export const Menu = () => {
  const pathname = usePathname(); 

  return (
    <nav className={styles.menu}>
      {pathname === '/' && (
        <Map />
      )}
      <Navbar />
    </nav>
  );
}