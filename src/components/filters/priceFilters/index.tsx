import {  forwardRef, useRef, useImperativeHandle } from "react";
import styles from "./priceFilters.module.css";

interface PriceFilterProps {
  onChange: (min: number | null, max: number | null) => void;
}

export interface PriceRefs {
  min: HTMLInputElement | null;
  max: HTMLInputElement | null;
}

const PriceFilterComponent = forwardRef<PriceRefs, PriceFilterProps>(
  ({ onChange }, ref) => {
    const minRef = useRef<HTMLInputElement | null>(null);
    const maxRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      min: minRef.current,
      max: maxRef.current,
    }));

    const handleChange = () => {
      const minValue = minRef.current?.value ?? "";
      const maxValue = maxRef.current?.value ?? "";

      if (!minValue && !maxValue) {
        onChange(null, null);
        return;
      }

      onChange(
        minValue ? Number(minValue) : null,
        maxValue ? Number(maxValue) : null
      );
    };

    return (
      <div className={styles.group}>
        <label className={styles.label}>Price Range</label>

        <div className={styles.priceRange}>
          <input
            ref={minRef}
            type="number"
            placeholder="Min"
            className={styles.input}
            onChange={handleChange}
          />

          <input
            ref={maxRef}
            type="number"
            placeholder="Max"
            className={styles.input}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
);

export default PriceFilterComponent;
