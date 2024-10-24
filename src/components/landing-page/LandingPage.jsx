import React, { useState } from "react";
import HomePage from "../home-page/HomePage";
import "./landingPage.css";

const LandingPage = () => {
  const [tType, settType] = useState(false);
  const [buttonName, setbuttonName] = useState("one-way");
  const [how, setHow] = useState(false);

  const goHome = () => {
    setHow((how) => !how);
  };

  const TripTypeButton = () => {
    const tripHandler = () => {
      setbuttonName((text) => (text === "one-way" ? "round-trip" : "one-way"));
      settType((tType) => !tType);
    };
    return (
      <button className="trip-type" onClick={tripHandler}>
        {buttonName}
      </button>
    );
  };

  return (
    <>
      {how ? (
        <HomePage />
      ) : (
        <div className="landingpage-wrap">
          <div className="triptype-wrap">
            <TripTypeButton />
          </div>
          <div className="landingpage-input-wrap">
            <div className="landingpage-who">
              <label for="who">Who?</label>
              <br></br>
              <select className="landingpage-input" id="who" placeholder="Pax">
                <option value="" disabled selected>
                  Pax
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="landingpage-when">
              <label for="when">When?</label>
              <br></br>
              <input
                type="date"
                className="landingpage-input"
                id="when"
                placeholder="From"
              ></input>
              {tType ? (
                <input
                  type="date"
                  className="landingpage-input"
                  id="when2"
                  placeholder="Till"
                ></input>
              ) : null}
            </div>
            <div className="landingpage-where">
              <label for="where">Where?</label>
              <br></br>
              <input
                type="text"
                className="landingpage-input"
                id="where"
                placeholder="Origin"
              ></input>
              <br></br>
              <input
                type="text"
                className="landingpage-input"
                id="where2"
                placeholder="Destination"
              ></input>
            </div>
          </div>
          <button className="landingpage-submit" type="submit" onClick={goHome}>
            Show me How!
          </button>
        </div>
      )}
    </>
  );
};

export default LandingPage;
