
import { memo } from "react";
import styles from "./priceFilters.module.css";

interface PriceFilterProps {
  min: number | null;
  max: number | null;
  onChange: (min: number | null, max: number | null) => void;
}

function PriceFilterComponent({ min, max, onChange }: PriceFilterProps) {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value ? Number(e.target.value) : null, max);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(min, e.target.value ? Number(e.target.value) : null);
  };

  return (
    <div className={styles.group}>
      <label className={styles.label}>Price Range</label>
      <div className={styles.priceRange}>
        <input
          maxLength={3}
          type="number"
          placeholder="Min"
          className={styles.input}
          onChange={handleMinChange}
        />
        <input
          maxLength={3}
          type="number"
          placeholder="Max"
          className={styles.input}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
}

export default memo(PriceFilterComponent);
