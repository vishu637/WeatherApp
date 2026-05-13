import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {

  const [value, setValue] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!value.trim()) return;

    onSearch(value.trim());
  };

  return (

    <form
      className="search-bar"
      onSubmit={handleSubmit}
    >

      <div className="search-input-wrapper">

        <FiSearch className="search-icon" />

        <input
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          type="text"
          placeholder="Search city weather..."
          autoComplete="off"
        />

      </div>

      <button type="submit">
        Search
      </button>

    </form>
  );
}

export default SearchBar;
