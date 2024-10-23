import React, { useState } from "react";
import "./landingPage.css";

const LandingPage = () => {
  const [tType, settType] = useState(false);
  const [buttonName, setbuttonName] = useState(null);

  const tripHandler = () => {
    setbuttonName("round");
    settType((tType) => !tType);
  };
  return (
    <>
      <div className="landingpage-wrap">
        <div className="landingpage-who">
          <label for="who">Who?</label>
          <br></br>
          <input
            type="text"
            className="landingpage-input"
            id="who"
            placeholder="Pax"
          ></input>
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
          <button type="submit" className="trip-type" onClick={tripHandler}>
            Round Trip
          </button>
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
    </>
  );
};

export default LandingPage;
