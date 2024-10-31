import React from "react";
import "./miniSearchResult.css";
const SearchResult = () => {
  return (
    <div className="minisr-wrap">
      <div className="minisrelements" id="minisr-company">
        Company 1
      </div>
      <div className="minisrelements" id="minisr-details">
        Details
      </div>
      <div className="minisrelements" id="minisr-price">
        Price
      </div>
    </div>
  );
};

export default SearchResult;
