'use client';

import cn from 'classnames';
import Link from 'next/link';
import GlassNav from "@/assets/menu/glassnav.svg";
import HomeIcon from "@/assets/menu/home.svg";
import SavedIcon from "@/assets/menu/saved.svg";
import OrdersIcon from "@/assets/menu/orders.svg";
import ProfileIcon from "@/assets/menu/profile.svg";
import styles from './Navbar.module.scss';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const NAV_LINK: Record<string, string> = {
  home: "Головна",
  saved: "Збережені",
  orders: "Угоди",
  profile: "Профіль",
};

const IconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  home: HomeIcon,
  saved: SavedIcon,
  orders: OrdersIcon,
  profile: ProfileIcon,
};

export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {Object.entries(NAV_LINK).map(([key, value]) => {
          const IconComponent = IconMap[key];
          const normalizedKey = key === 'home' ? '/' : `/${key}`;
          
          if (!IconComponent) return null;
          
          return (
            <li key={key} className={styles.navbar__item}>
              <Link href={normalizedKey} className={cn(
                styles.navbar__link,
                { [styles.navbar__linkActive]: pathname === normalizedKey }
              )}>
                <IconComponent className={styles.navbar__icon} />
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}