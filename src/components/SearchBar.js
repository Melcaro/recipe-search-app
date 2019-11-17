import React from 'react';
import PropTypes from 'prop-types';
import './css/searchBar.css';

const SearchBar = ({ value, onChange, onKeyDown, onClick }) => {
  return (
    <div className="searchBar">
      <input
        className="inputSearch"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        type="text"
        placeholder="search"
      />
      <button className="buttonSearch" onClick={onClick}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export { SearchBar };
