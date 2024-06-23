import React, { useState } from "react";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("city"); // Default search type

  const handleSearch = () => {
    // Handle search logic (e.g., send request to backend)
    console.log("Search Term:", searchTerm);
    console.log("Search Type:", searchType);
    // Implement search functionality based on searchType
  };

  return (
    <div>
      <h2>Search</h2>
      <form>
        <label htmlFor="searchTerm">Search Term:</label>
        <input
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label htmlFor="searchType">Search By:</label>
        <select
          id="searchType"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="city">City</option>
          <option value="type">Type</option>
          {/* Add more options as needed */}
        </select>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPage;
