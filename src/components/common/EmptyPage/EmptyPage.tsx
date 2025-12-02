import Image from 'next/image';
import styles from './EmptyPage.module.scss';
import Link from 'next/link';

type Props = {
  page: string;
}

export const EmptyPage: React.FC<Props> = ({page}) => {
  return (
    <div>
      <div className={styles.empty}>
        <Image
          className={styles.empty__img}
          src="/img/saved/empty-box.png"
          width={280}
          height={280}
          alt="empty box"
        />

        <p className={styles.empty__text}>
          Перегляньте оголошення на головній
        </p>

        <Link href="/" className={styles.empty__button}>На головну</Link>
      </div>
    </div>
  )
}