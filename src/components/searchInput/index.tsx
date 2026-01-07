import { useState } from "react";
import styles from "./searchInput.module.css";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <input
      value={inputValue}
      onChange={handleChange}
      type="text"
      placeholder="Search by name..."
      className={styles.input}
    />
  );
}
