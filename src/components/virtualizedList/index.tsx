import { generateMockData } from "../../data/generateMockData";
import styles from "./virtualizedList.module.css";

export default function VirtualizedList() {
  const items = generateMockData(10000);

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
              <div>Price: ${item.price}</div>
              <div>Status: {item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
