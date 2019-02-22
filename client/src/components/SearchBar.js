import React from "react";

const SearchBar = () => {
  return (
    <div
      className="ui placeholder segment"
      style={{ backgroundColor: "#f7934acf" }}
    >
      <div className="ui icon header">
        <i className="search icon" />
        <h2>Search for Ideas by Programming Language</h2>
      </div>
      <div className="inline">
        <div className="ui huge input">
          <input className="prompt" type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
