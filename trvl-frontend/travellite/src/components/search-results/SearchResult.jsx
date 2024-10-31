import React, { useContext } from "react";
import { PageContext } from "../../Context/PageContext";
import "./searchResult.css";
const SearchResult = () => {
  const { goTo } = useContext(PageContext);
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
        <button type="submit" id="choosebtn" onClick={() => goTo("checkout")}>
          Choose
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
