import React from "react";

const Search = () => {
  return (
    <div className="main-nav-start">
      <div className="search-wrapper">
        <i data-feather="search" aria-hidden="true" />
        <input type="text" placeholder="Enter keywords ..." required />
      </div>
    </div>
  );
};

export default Search;
