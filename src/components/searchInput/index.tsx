import { memo, useState } from "react";
import styles from "./searchInput.module.css";

interface SearchInputProps {
  onSearch: (value: string) => void;
  initialValue: string;
}

function SearchInputComponent({ onSearch, initialValue }: SearchInputProps) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
   if(!value){
    onSearch("")
   }
  };

  const handleClick = ()=>{
    onSearch(inputValue)
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search by name..."
        value={inputValue}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button} onClick={handleClick}>search</button>
    </div>
  );
}

export default memo(SearchInputComponent);
