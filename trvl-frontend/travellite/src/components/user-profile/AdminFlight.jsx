import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/apiUrl";
import AddFlightComp from "./AddFlightComp";
import "./adminFlight.css";
import ViewAll from "./ViewAll";

const AdminFlight = () => {
  const [activeComp, setActiveComp] = useState("viewAll");
  return (
    <div className="af-wrap">
      <div className="af-mainarea">
        <div className="af-buttons">
          <button onClick={() => setActiveComp("viewAll")}>
            View all flights
          </button>
          <button onClick={() => setActiveComp("addFlights")}>
            Add Flights
          </button>
        </div>
      </div>
      <div className="af-info">
        {activeComp === "addFlights" ? <AddFlightComp /> : <ViewAll />}
      </div>
    </div>
  );
};

export default AdminFlight;
