import { memo } from "react";
import type { FiltersTypes } from "../../../types/filters.types";
import styles from "./statusFilters.module.css";

type Status = Pick<FiltersTypes, "status">["status"];

interface StatusFilterProps {
  value: Status | null;
  onChange: (value: Status | null) => void;
}

function StatusFilterComponent({ value, onChange }: StatusFilterProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((e.target.value || null) as Status | null);
  };

  return (
    <div className={styles.group}>
      <label className={styles.label}>Status</label>
      <div className={styles.statusGroup}>
        <label>
          <input
            type="radio"
            name="status"
            value="active"
            checked={value === "active"}
            onChange={handleChange}
          />{" "}
          Active
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="inactive"
            checked={value === "inactive"}
            onChange={handleChange}
          />{" "}
          Inactive
        </label>
      </div>
    </div>
  );
}

export default memo(StatusFilterComponent);
