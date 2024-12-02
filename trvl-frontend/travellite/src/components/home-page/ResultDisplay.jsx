import React, { useState } from "react";
import axiosInstance from "../../api/apiUrl";
import SearchResult from "../search-results/SearchResult";
import "./resultDisplay.css";
const ResultDisplay = ({ flightResults }) => {
  return (
    <>
      <div className="resultdisp-wrap">
        {flightResults.length === 0 ? (
          <p> no flights found </p>
        ) : (
          flightResults.map((flight, index) => (
            <SearchResult key={index} flight={flight} />
          ))
        )}
      </div>
    </>
  );
};

export default ResultDisplay;
