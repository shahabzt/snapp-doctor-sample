import { memo } from "react";
import { CATEGORIES } from "../../../data/generateMockData";
import type { FiltersTypes } from "../../../types/filters.types";
import styles from "./categoryFilters.module.css";

type Category = Pick<FiltersTypes, "category">["category"];

interface CategoryFilterProps {
  value: Category;
  onChange: (value: Category) => void;
}

function CategoryFilterComponent({ value, onChange }: CategoryFilterProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value || null);
  };

  return (
    <div className={styles.group}>
      <label className={styles.label}>Category</label>
      <select
        className={styles.select}
        value={value || ""}
        onChange={handleChange}
      >
        <option value="">All</option>
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(CategoryFilterComponent);
