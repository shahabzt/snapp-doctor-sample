import { useCallback, useMemo, useState } from "react";

import { generateMockData } from "../../data/generateMockData";
import {
  CategoryFilter,
  PriceFilter,
  SearchInput,
  StatusFilter,
  VirtualizedList,
} from "../../components";
import { useDebounce } from "../../hooks/useDebounce";
import { applyFilters } from "../../utils/applyFilters";

import type { FiltersTypes } from "../../types/filters.types";
import type { Item } from "../../types/item.types";

import styles from "./homePage.module.css";

export default function HomePage() {
 const [filters, setFilters] = useState<FiltersTypes & { search: string }>({
  category: null,
  status: null,
  minPrice: null,
  maxPrice: null,
  search: "",
});

  const debouncedMinPrice = useDebounce(filters.minPrice);
  const debouncedMaxPrice = useDebounce(filters.maxPrice);
  const debouncedSearch = useDebounce(filters.search)

  const items = useMemo(() => generateMockData(50), []);

  const filteredItems = useMemo(() => {
    let filtered = applyFilters(items, {
      ...filters,
      minPrice: debouncedMinPrice,
      maxPrice: debouncedMaxPrice,
    });

    if (debouncedSearch) {
      const lower = debouncedSearch.toLowerCase();
      filtered = filtered.filter((item: Item) =>
        item.name.toLowerCase().includes(lower.trim())
      );
    }

    return filtered;
  }, [items, filters, debouncedMinPrice, debouncedMaxPrice, debouncedSearch]);

  const handleSearch = useCallback((value: string) => {
    setFilters((prev) => ({ ...prev, search: value }));
  }, []);

  const handleCategoryChange = useCallback(
    (value: FiltersTypes["category"]) => {
      setFilters((prev) => ({ ...prev, category: value }));
    },
    []
  );

  const handlePriceChange = useCallback(
    (min: FiltersTypes["minPrice"], max: FiltersTypes["maxPrice"]) => {
      setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
    },
    []
  );

  const handleStatusChange = useCallback((value: FiltersTypes["status"]) => {
    setFilters((prev) => ({ ...prev, status: value }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CategoryFilter
          value={filters.category}
          onChange={handleCategoryChange}
        />
        <PriceFilter
          min={filters.minPrice}
          max={filters.maxPrice}
          onChange={handlePriceChange}
        />
        <StatusFilter value={filters.status} onChange={handleStatusChange} />
      </div>

      <div className={styles.right}>
        <SearchInput onSearch={handleSearch} initialValue={""} />
        <VirtualizedList items={filteredItems} />
      </div>
    </div>
  );
}
