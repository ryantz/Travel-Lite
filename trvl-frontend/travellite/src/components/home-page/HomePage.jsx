import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../../Context/PageContext";
import LandingPage from "../landing-page/LandingPage";
import MiniLanding from "../landing-page/MiniLanding";
import Filter from "./Filter";
import "./homePage.css";
import ResultDisplay from "./ResultDisplay";

const HomePage = ({ flightResults, onSearchResults }) => {
  const [filteredFlights, setFilteredFlights] = useState(flightResults);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const sortFlights = () => {
      let sortedFlights = [...flightResults];

      if (sortBy === "price") {
        sortedFlights.sort((a, b) =>
          sortOrder === "asc" ? a.price - b.price : b.price - a.price,
        );
      } else if (sortBy === "company") {
        sortedFlights.sort((a, b) =>
          sortOrder === "asc"
            ? a.company.localeCompare(b.company)
            : b.company.localeCompare(a.company),
        );
      } else if (sortBy === "duration") {
        sortedFlights.sort((a, b) =>
          sortOrder === "asc"
            ? a.duration - b.duration
            : b.duration - a.duration,
        );
      }

      setFilteredFlights(sortedFlights);
    };
    sortFlights();
  }, [sortBy, sortOrder, flightResults]);

  const handleSearchResults = (results) => {
    onSearchResults(results);
    setFilteredFlights(results);
  };

  return (
    <>
      <div className="homepage-wrap">
        <div className="homepage-landing-top">
          <MiniLanding onSearchResults={handleSearchResults} />
        </div>
        <div className="homepage-main">
          <Filter
            sortBy={sortBy}
            sortOrder={sortOrder}
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
          />
          <ResultDisplay flightResults={filteredFlights} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
