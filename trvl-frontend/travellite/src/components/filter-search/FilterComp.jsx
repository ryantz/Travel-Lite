import React from "react";
import "./filterComp.css";
const FilterComp = ({ value }) => {
  return (
    <>
      <div className="filter-element-wrap">
        <br></br>
        {value}
        <div className="select-wrap">
          <select></select>
        </div>
      </div>
    </>
  );
};

export default FilterComp;
