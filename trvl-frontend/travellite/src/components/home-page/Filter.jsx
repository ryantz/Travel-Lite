import React from "react";
import FilterComp from "../filter-search/FilterComp";
import "./filter.css";
const Filter = () => {
  return (
    <>
      <div className="filter-wrap">
        <FilterComp value="Companies" />
        <FilterComp value="Timings" />
        <FilterComp value="Type" />
      </div>
    </>
  );
};

export default Filter;
