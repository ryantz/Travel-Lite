import React, { useState } from "react";
import "./miniLanding.css"; // You should already have styles
import axiosInstance from "../../api/apiUrl"; // Same axios call as in LandingPage

const MiniLanding = ({ onSearchResults }) => {
  const [tType, settType] = useState(false);
  const [buttonName, setbuttonName] = useState("one-way");
  const [queryDetails, setQueryDetails] = useState({
    departureTime: "",
    destination: "",
    origin: "",
    pax: "",
  });

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

  const handleChange = (event) => {
    const { id, value } = event.target;
    setQueryDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post(
        "/public/flights/landingSearch",
        queryDetails,
      );
      if (typeof onSearchResults === "function") {
        onSearchResults(response.data);
      } else {
        console.error("onSearchResults is not a function");
      }
    } catch (error) {
      console.error("Error fetching flight data", error);
    }
  };

  return (
    <>
      <div className="minilanding-wrap">
        <div className="minilanding-input-wrap">
          <div className="minilanding-who">
            <label htmlFor="miniwho">Who?</label>
            <br />
            <select
              className="minilanding-input"
              id="pax"
              onChange={handleChange}
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
            <label htmlFor="miniwhen">When?</label>
            <br />
            <input
              type="datetime-local"
              className="minilanding-input"
              id="departureTime"
              onChange={handleChange}
            />
            {tType && (
              <input
                type="datetime-local"
                className="minilanding-input"
                id="returnTime"
                onChange={handleChange}
              />
            )}
          </div>
          <div className="minilanding-where">
            <label htmlFor="miniwhere">Where?</label>
            <input
              type="text"
              className="minilanding-input"
              id="origin"
              onChange={handleChange}
              placeholder="Origin"
            />
            <input
              type="text"
              className="minilanding-input"
              id="destination"
              onChange={handleChange}
              placeholder="Destination"
            />
          </div>

          <div className="minilanding-submit-wrap">
            <MiniTripTypeButton />
            <button
              className="minilanding-submit"
              type="submit"
              onClick={handleSubmit}
            >
              Show me How!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniLanding;
