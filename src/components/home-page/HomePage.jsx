import React from "react";
import LandingPage from "../landing-page/LandingPage";
import MiniLanding from "../landing-page/MiniLanding";
import Filter from "./Filter";
import "./homePage.css";
import ResultDisplay from "./ResultDisplay";

const HomePage = () => {
  return (
    <>
      <div className="homepage-wrap">
        <div className="homepage-landing-top">
          <MiniLanding />
        </div>
        <div className="homepage-main">
          <Filter />
          <ResultDisplay />
        </div>
      </div>
    </>
  );
};

export default HomePage;
