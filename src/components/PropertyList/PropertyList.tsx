import { Card } from "../Card/Card";
import styles from "./PropertyList.module.scss";

type Props = {
  cn: string;
  order: boolean;
  biggerGap?: string;
};

export const PropertyList: React.FC<Props> = ({ cn, order, biggerGap }) => {
  return (
    <ul className={`${styles.propertyList} ${styles[`propertyList--${cn}`]}`}>
      {Array.from({ length: 10 }, (_, index) => index + 1).map((el) => (
        <li
          key={el}
          className={`${styles.propertyList__item} ${
            styles[`propertyList__item--${cn}`]
          }`}
        >
          {" "}
          <Card order={order} biggerGap={biggerGap} />{" "}
        </li>
      ))}
    </ul>
  );
};
