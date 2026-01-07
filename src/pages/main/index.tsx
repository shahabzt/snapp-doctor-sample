import Filters from "../../components/filters";
import SearchInput from "../../components/searchInput";
import VirtualizedList from "../../components/virtualizedList";

import styles from "./main.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Filters />
      </div>

      <div className={styles.right}>
        <SearchInput />
        <div className={styles.listWrapper}>
          <VirtualizedList />
        </div>
      </div>
    </div>
  );
}
