import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/apiUrl";
import "./viewAll.css";

const ViewAll = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axiosInstance.get("/public/flights/find");
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div className="flights-wrap">
      <h1>All Flights</h1>
      <table className="flights-table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Company</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.company}</td>
              <td>{new Date(flight.departureTime).toLocaleString()}</td>
              <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>${flight.price}</td>
              <td>{flight.seatCount}</td>
              <td>{flight.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAll;
