import React, { useRef } from 'react';

import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import './Search.scss';

const Search = (props) => {
  const { search, error } = props;
  const usernameInputRef = useRef();

  const searchHandler = () => {
    search(usernameInputRef.current.value);
  };

  return (
    <div className="search">
      <SearchIcon className="search__icon" />
      <input
        ref={usernameInputRef}
        className="search__input"
        placeholder="Search GitHub username..."
      />
      <div className="search__error">{error && <h2>No Results</h2>}</div>
      <button onClick={searchHandler} className="search__btn">
        Search
      </button>
    </div>
  );
};

export default Search;
