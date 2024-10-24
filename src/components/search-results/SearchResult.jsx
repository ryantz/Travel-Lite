import React from "react";
import "./searchResult.css";
const SearchResult = () => {
  return (
    <div className="sr-wrap">
      <div className="srelements" id="sr-company">
        Company 1
      </div>
      <div className="srelements" id="sr-details">
        Details
      </div>
      <div className="srelements" id="sr-price">
        Price
      </div>
      <div className="srelements" id="sr-choose">
        <button type="submit" id="choosebtn">
          Choose
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
