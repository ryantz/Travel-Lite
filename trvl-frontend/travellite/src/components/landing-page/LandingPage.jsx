import React, { useContext, useState } from "react";
import axiosInstance from "../../api/apiUrl";
import { PageContext } from "../../Context/PageContext";
import "./landingPage.css";

const LandingPage = ({ onSearchResults }) => {
  const [tType, settType] = useState(false);
  const [buttonName, setbuttonName] = useState("one-way");
  const { goTo } = useContext(PageContext);
  const [queryDetails, setQueryDetails] = useState({
    departureTime: "",
    destination: "",
    origin: "",
    pax: "",
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

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post(
        "/public/flights/landingSearch",
        queryDetails,
      );
      console.log(response.data);
      if (typeof onSearchResults === "function") {
        onSearchResults(response.data);
        goTo("home");
      } else {
        console.error("onSearchResults is not a function");
      }
    } catch (error) {
      console.error("Error fetching flight data", error);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setQueryDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
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
            <br />
            <select
              className="landingpage-input"
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
          <div className="landingpage-when">
            <label for="when">When?</label>
            <br />
            <input
              type="datetime-local"
              className="landingpage-input"
              id="departureTime"
              onChange={handleChange}
            />
            {tType && (
              <input
                type="datetime-local"
                className="landingpage-input"
                id="when2"
                onChange={handleChange}
              />
            )}
          </div>
          <div className="landingpage-where">
            <label for="where">Where?</label>
            <br />
            <input
              type="text"
              className="landingpage-input"
              id="origin"
              onChange={handleChange}
              placeholder="Origin"
            />
            <input
              type="text"
              className="landingpage-input"
              id="destination"
              onChange={handleChange}
              placeholder="Destination"
            />
          </div>
        </div>
        <button
          className="landingpage-submit"
          type="button"
          onClick={handleSubmit}
        >
          Show me How!
        </button>
      </div>
    </>
  );
};

export default LandingPage;
