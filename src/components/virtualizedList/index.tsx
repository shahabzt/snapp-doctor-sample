import type { Item } from "../../types/item.types";
import styles from "./virtualizedList.module.css";

interface VirtualizedListProps {
  items: Item[];
}

export default function VirtualizedList({ items }: VirtualizedListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.header}>
              <div>name: {item.name}</div>
              <div>{item.category}</div>
            </div>
            <div className={styles.footer}>
              <div> Visit Price: ${item.price}</div>
              <div>Status: {item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
