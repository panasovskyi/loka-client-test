import styles from './Button.module.scss';

type Props = {
  iconLink?: string;
  textContent?: string;
};

export const Button: React.FC<Props> = ({ }) => {
  return <button className={styles.button}></button>
}