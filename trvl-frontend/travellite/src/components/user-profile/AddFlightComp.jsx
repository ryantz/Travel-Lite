import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/apiUrl";
import "./adminFlight.css";

const AddFlightComp = () => {
  const [flightTypes, setFlightTypes] = useState([]);
  const [message, setMessage] = useState("");
  const [flightDetails, setFlightDetails] = useState({
    flightNumber: "",
    company: "",
    departureTime: "",
    arrivalTime: "",
    origin: "",
    destination: "",
    price: "",
    seatCount: "",
    type: "",
  });

  useEffect(() => {
    const fetchFlightTypes = async () => {
      try {
        const res = await axiosInstance.get("/public/flights/types");
        setFlightTypes(res.data);
      } catch (error) {
        console.error("Error fetching flight types:", error);
      }
    };
    fetchFlightTypes();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlightDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const flightDTO = {
      ...flightDetails,
      price: parseFloat(flightDetails.price),
      seatCount: parseInt(flightDetails.seatCount, 10),
    };

    console.log("Flight DTO:", flightDTO);

    try {
      const res = await axiosInstance.post("/public/flights/add", flightDTO);
      setFlightDetails({
        flightNumber: "",
        company: "",
        departureTime: "",
        arrivalTime: "",
        origin: "",
        destination: "",
        price: "",
        seatCount: "",
        type: "",
      });

      setMessage("Flight added successfully!");
      setTimeout(() => {
        setMessage("");
      }, 5000);

      console.log("Flight added successfully", res.data);
    } catch (error) {
      console.error("Error adding flight", error);
    }
  };

  return (
    <form className="af-info-dets" onSubmit={handleSubmit}>
      <h3> Add flights </h3>
      <div className="af-info-1">
        <h4>Flight number & Company</h4>
        <input
          type="text"
          placeholder="Enter the flight number"
          name="flightNumber"
          value={flightDetails.flightNumber}
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="text"
          placeholder="Enter the company name"
          name="company"
          value={flightDetails.company}
          onChange={handleInputChange}
          required
        ></input>
      </div>
      <div className="af-info-1">
        <h4>Arrival & Departure</h4>
        <input
          type="datetime-local"
          name="departureTime"
          value={flightDetails.departureTime}
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="datetime-local"
          name="arrivalTime"
          value={flightDetails.arrivalTime}
          onChange={handleInputChange}
          required
        ></input>
      </div>
      <div className="af-info-1">
        <h4>Origin & Destination</h4>
        <input
          type="text"
          placeholder="Enter the origin"
          name="origin"
          value={flightDetails.origin}
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="text"
          placeholder="Enter the destination"
          name="destination"
          value={flightDetails.destination}
          onChange={handleInputChange}
          required
        ></input>
      </div>
      <div className="af-info-1">
        <h4>Price & Seat count</h4>
        <input
          type="text"
          placeholder="Enter the price"
          name="price"
          step="0.01"
          value={flightDetails.price}
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="text"
          placeholder="Enter the seat count"
          name="seatCount"
          value={flightDetails.seatCount}
          onChange={handleInputChange}
          required
        ></input>
      </div>
      <div className="af-info-1">
        <h4>Flight type</h4>
        <select
          name="type"
          value={flightDetails.type}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select flight type
          </option>
          {flightTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="af-info-1">
        <button type="submit">submit</button>
      </div>
      {message && (
        <div className="af-success">
          <p>{message}</p>
        </div>
      )}
    </form>
  );
};

export default AddFlightComp;
