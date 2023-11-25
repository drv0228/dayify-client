import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="nav-bar__search">
      <input
        type="text"
        className="nav-bar__input"
        placeholder="Search in the shop"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="search__button"></button>
    </div>
  );
};

export default SearchBar;
