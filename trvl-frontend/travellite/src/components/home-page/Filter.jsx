import React from "react";
import "./filter.css";

const Filter = ({ sortBy, sortOrder, setSortBy, setSortOrder }) => {
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="filter-wrap">
      <div className="filter-element-wrap">
        <br />
        Sort By:
        <div className="select-wrap">
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="price">Price</option>
            <option value="company">Company</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>
      <div className="filter-element-wrap">
        <br />
        Order:
        <div className="select-wrap">
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
