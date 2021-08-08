import React, { useState } from "react";
import "./SearchBar.css";
import { useGlobalContext } from "../../../Global/GlobalContext";

const SearchBar = () => {
  const { handleSearch } = useGlobalContext();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="我想搜尋..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={() => {
          handleSearch(searchQuery);
        }}
      >
        查詢
      </button>
    </form>
  );
};

export default SearchBar;
