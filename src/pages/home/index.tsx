import { useCallback, useMemo, useState } from "react";

import { generateMockData } from "../../data/generateMockData";
import { Filters, SearchInput, VirtualizedList } from "../../components";
import { useCachedFilter } from "../../hooks/useCachedFilter";
import { useDebounce } from "../../hooks/useDebounce";

import styles from "./homePage.module.css";

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 1000);

  const items = useMemo(() => generateMockData(5000), []);
  const filteredItems = useCachedFilter(items, debouncedSearchText);

  const handleSearch = useCallback((value: string) => {
    setSearchText(value);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Filters />
      </div>

      <div className={styles.right}>
        <SearchInput onSearch={handleSearch} />
        <VirtualizedList items={filteredItems} />
      </div>
    </div>
  );
}
