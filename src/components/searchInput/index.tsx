import { forwardRef } from "react";
import styles from "./searchInput.module.css";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInputComponent = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (ref && typeof ref !== "function" && ref.current) {
        onSearch(ref.current.value);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") {
        onSearch("");
      }
    };

    return (
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          ref={ref}
          type="text"
          onChange={handleChange}
          placeholder="Search by name..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    );
  }
);

export default SearchInputComponent;
