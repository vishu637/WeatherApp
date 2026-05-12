import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(value.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
