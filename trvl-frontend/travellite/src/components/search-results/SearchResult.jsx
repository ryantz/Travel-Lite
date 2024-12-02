import React, { useContext } from "react";
import { PageContext } from "../../Context/PageContext";
import { useSelectedFlight } from "../../Context/SelectedFlightContext";
import "./searchResult.css";

// TODO: add backend logic here to display flights
const SearchResult = ({ flight }) => {
  const { setSelectedFlight } = useSelectedFlight();
  const { goTo } = useContext(PageContext);

  const calcDuration = (departureTime, arrivalTime) => {
    const depart = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const durationInMs = arrival - depart;

    const hours = Math.floor(durationInMs / (1000 * 60 * 60));
    const mins = Math.floor((durationInMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${mins}m`;
  };

  const extractTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const duration = calcDuration(flight.departureTime, flight.arrivalTime);

  const handleChoose = () => {
    setSelectedFlight(flight);
    goTo("checkout");
  };

  return (
    <div className="sr-wrap">
      <div className="srelements" id="sr-company">
        {flight.company}
      </div>
      <div className="srelements" id="sr-details">
        <div className="ori-dest">
          {flight.origin} to {flight.destination}
        </div>
        <div className="timing">
          {`Departure: ${extractTime(flight.departureTime)} \n Arrival: ${extractTime(flight.arrivalTime)}`}
        </div>
        <div className="duration">Total Duration: {duration}</div>
      </div>
      <div className="srelements" id="sr-price">
        ${flight.price}
      </div>
      <div className="srelements" id="sr-choose">
        <button type="submit" id="choosebtn" onClick={handleChoose}>
          Choose
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
