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
  const [isActive, setIsActive] = useState(true)

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {Object.entries(NAV_LINK).map(([key, label]) => {
          const IconComponent = IconMap[key];

          if (!IconComponent) return null;

          return (
            <li key={key} className={styles.navbar__item}>
              <Link href={key} className={cn(
                styles.navbar__link,
                { [styles.navbar__linkActive]: isActive }
              )}>
                <IconComponent className={styles.navbar__icon} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}