import React from 'react';
import './index.css';
const Search = ({ placeholder, searchChange }) => {
  return (
    <div>
      <input type='search' placeholder={placeholder} onChange={searchChange} />
    </div>
  );
};

export default Search;
