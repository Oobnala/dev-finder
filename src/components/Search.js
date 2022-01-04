import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import './Search.scss';

const Search = () => {
  const [error, setError] = useState(false);

  return (
    <div className="search">
      <SearchIcon className="search__icon" />
      <input
        className="search__input"
        placeholder="Search GitHub username..."
      />
      <div className="search__error">{error && <h2>No Results</h2>}</div>
      <button className="search__btn">Search</button>
    </div>
  );
};

export default Search;
