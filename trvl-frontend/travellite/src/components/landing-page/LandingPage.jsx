import React, { useContext, useState } from "react";
import { PageContext } from "../../Context/PageContext";
import "./landingPage.css";

const LandingPage = () => {
  const [tType, settType] = useState(false);
  const [buttonName, setbuttonName] = useState("one-way");
  const { goTo } = useContext(PageContext);
  const [queryDetails, setQueryDetails] = useState({
    departureTime: "",
    destination: "",
  });

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
              type="datetime-local"
              className="landingpage-input"
              id="when"
              placeholder="From"
            ></input>
            {tType ? (
              <input
                type="datetime-local"
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
        <button
          className="landingpage-submit"
          type="submit"
          onClick={() => goTo("home")}
        >
          Show me How!
        </button>
      </div>
      )
    </>
  );
};

export default LandingPage;
