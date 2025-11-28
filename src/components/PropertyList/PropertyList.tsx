import Card from '../Card/Card';
import styles from './PropertyList.module.scss';

type Props = {
  cn: string;
}

// 

export const PropertyList: React.FC<Props> = ({cn}) => {
  return (
    <ul className={styles.propertyList}>
      {Array.from({ length: 10 }, (_, index) => index + 1).map(el => (
        <li key={el} className={styles.propertyList__item}>
          {' '}
          <Card />{' '}
        </li>
      ))}
    </ul>
  )
}