import React from "react";
import SearchResult from "../search-results/SearchResult";
import "./resultDisplay.css";
const ResultDisplay = () => {
  return (
    <>
      <div className="resultdisp-wrap">
        <SearchResult />
      </div>
    </>
  );
};

export default ResultDisplay;
