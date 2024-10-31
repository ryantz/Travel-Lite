import React, { useState } from "react";
import "./miniLanding.css";
const MiniLanding = () => {
  const [tType, settType] = useState(false);
  const [buttonName, setbuttonName] = useState("one-way");

  const MiniTripTypeButton = () => {
    const tripHandler = () => {
      setbuttonName((text) => (text === "one-way" ? "round-trip" : "one-way"));
      settType((tType) => !tType);
    };
    return (
      <button className="mini-trip-type" onClick={tripHandler}>
        {buttonName}
      </button>
    );
  };

  return (
    <>
      <div className="minilanding-wrap">
        <div className="minilanding-input-wrap">
          <div className="minilanding-who">
            <label for="miniwho">Who?</label>
            <br></br>
            <select
              className="minilanding-input"
              id="miniwho"
              placeholder="Pax"
            >
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
          <div className="minilanding-when">
            <label for="miniwhen">When?</label>
            <br></br>
            <input
              type="date"
              className="minilanding-input"
              id="miniwhen"
              placeholder="From"
            ></input>
            {tType ? (
              <input
                type="date"
                className="minilanding-input"
                id="miniwhen2"
                placeholder="Till"
              ></input>
            ) : null}
          </div>
          <div className="minilanding-where">
            <label for="miniwhere">Where?</label>
            <br></br>
            <input
              type="text"
              className="minilanding-input"
              id="miniwhere"
              placeholder="Origin"
            ></input>
            <br></br>
            <input
              type="text"
              className="minilanding-input"
              id="miniwhere2"
              placeholder="Destination"
            ></input>
          </div>
          <div className="minilanding-submit-wrap">
            <MiniTripTypeButton />
            <button className="minilanding-submit" type="submit">
              Show me How!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniLanding;
