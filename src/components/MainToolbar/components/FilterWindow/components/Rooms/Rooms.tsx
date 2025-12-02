import cn from "classnames";
import styles from './Rooms.module.scss';

enum Room {
  One = '1',
  Two = '2',
  ThreePlus = '3+',
}

const ROOM_OPTIONS: { value: Room; label: string }[] = [
  { value: Room.One, label: '1 кімната' },
  { value: Room.Two, label: '2 кімнати' },
  { value: Room.ThreePlus, label: '3+ кімнати' },
];

type Props = {
  handleRoomSelect?: (value: Room) => void;
  rooms?: Room[];
}

export const Rooms: React.FC<Props> = ({ rooms, handleRoomSelect = () => {}}) => {
  return (
    <ul className={styles.rooms}>
      {ROOM_OPTIONS.map(({ value, label }) => (
        <li key={value} className={styles.rooms__item}>
          <button
            onClick={() => handleRoomSelect(value)}
            className={cn(styles.rooms__button, {
              [styles.rooms__buttonActive]: rooms?.includes(value),
            })}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  )
}