import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="search-button" aria-label="Search">
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
