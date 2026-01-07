import styles from "./SearchInput.module.css";

export default function SearchInput() {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      className={styles.input}
    />
  );
}
