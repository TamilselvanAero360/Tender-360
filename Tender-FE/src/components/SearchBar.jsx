import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder = "Search..." }) => {
  return (
    <div className="searchbar-container">
      <FaSearch className="searchbar-icon" />
      <input
        type="text"
        className="searchbar-input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
