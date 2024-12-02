import React from "react";
import { useSelectedFlight } from "../../Context/SelectedFlightContext";
import "./miniSearchResult.css";
const MiniSearchResult = () => {
  const { selectedFlight } = useSelectedFlight();

  if (!selectedFlight) {
    return <div className="minisr-wrap">No flight selected</div>;
  }
  return (
    <div className="minisr-wrap">
      <div className="minisrelements" id="minisr-company">
        {selectedFlight.company}
      </div>
      <div className="minisrelements" id="minisr-details">
        {selectedFlight.origin} to {selectedFlight.destination}
        <br />
        <br />
        Departure:{" "}
        {new Date(selectedFlight.departureTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
        <br />
        Arrival:{" "}
        {new Date(selectedFlight.arrivalTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div className="minisrelements" id="minisr-price">
        ${selectedFlight.price}
      </div>
    </div>
  );
};

export default MiniSearchResult;
