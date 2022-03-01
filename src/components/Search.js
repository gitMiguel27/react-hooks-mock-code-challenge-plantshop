import React, { useState } from "react";

function Search({ onSearch }) {

  const [searchText, setSearchText] = useState('');

  function handleChange(event) {
    const searchString = event.target.value;
    setSearchText(searchString);
    
    onSearch(searchString)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchText}
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
