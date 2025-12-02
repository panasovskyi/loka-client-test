import cn from "classnames";
import styles from './StatusToggler.module.scss';

type Props = {
  setPremium: (value: boolean |null) => void;
  premium: boolean | null;
}

export const StatusToggler: React.FC<Props> = ({premium, setPremium}) => {
  return (
    <div className={styles.toggler}>
      <button
        className={cn(styles.toggler__button, { [styles.toggler__buttonActive]: premium === true })}
        onClick={() => setPremium(true)}
      >
        Преміум
      </button>

      <button
        className={cn(styles.toggler__button, { [styles.toggler__buttonActive]: premium === false })}
        onClick={() => setPremium(false)}
      >
        Звичайний
      </button>
    </div>
  )
}