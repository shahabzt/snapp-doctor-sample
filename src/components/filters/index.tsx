import styles from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <label className={styles.label}>Category</label>
        <select className={styles.select}>
          <option value="">All</option>
          <option value="doctor">Doctor</option>
          <option value="dentist">Dentist</option>
          <option value="clinic">Clinic</option>
          <option value="lab">Lab</option>
        </select>
      </div>

      <div className={styles.group}>
        <label className={styles.label}>Price Range</label>
        <div className={styles.priceRange}>
          <input type="number" placeholder="Min" className={styles.input} />
          <input type="number" placeholder="Max" className={styles.input} />
        </div>
      </div>

      <div className={styles.group}>
        <label className={styles.label}>Status</label>
        <div className={styles.statusGroup}>
          <label>
            <input type="radio" name="status" value="active" /> Active
          </label>
          <label>
            <input type="radio" name="status" value="inactive" /> Inactive
          </label>
        </div>
      </div>
    </div>
  );
}
