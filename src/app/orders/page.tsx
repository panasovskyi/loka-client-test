'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import { EmptyPage } from '@/components/common/EmptyPage/EmptyPage';
import { Menu } from '@/components/Menu/Menu';
import { PropertyList } from '@/components/PropertyList/PropertyList';

export default function Orders() {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <div className={styles.orders}>
      <div className="container">
        {isEmpty ? (
          <EmptyPage page='orders' />
        ) : (

            <PropertyList cn="orders" order={true} biggerGap="gap" />

        )}
        <Menu />
      </div>
    </div>
  )

}