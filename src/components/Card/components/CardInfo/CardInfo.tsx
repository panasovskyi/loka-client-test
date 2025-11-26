import LocationIcon from "../../../../assets/icons/location.svg";
import styles from "./CardInfo.module.scss";

export const CardInfo = () => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardInfo__address}>
        <LocationIcon />
        <div className={styles.cardInfo__location}>
          <p className={styles.cardInfo__street}>вул. Івана Франка, 43</p>
          <p className={styles.cardInfo__city}>Ужгород</p>
        </div>
      </div>
      <span className={styles.cardInfo__details}>3 кімнати | 70 м²</span>
      <div className={styles.cardInfo__prices}>
        <span className={styles.cardInfo__priceUSDT}>400 USDT</span>
        <span className={styles.cardInfo__priceUAH}>16,839 грн</span>
      </div>
      <p className={styles.cardInfo__meta}>Дата публікації: 10.12.2025</p>
    </div>
  );
};
