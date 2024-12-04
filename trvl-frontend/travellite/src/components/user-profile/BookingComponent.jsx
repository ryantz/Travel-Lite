import React from "react";
import "./userProfile.css";

const BookingComponent = ({ booking }) => {
  const { flights, bookingDate, status } = booking;
  const { company, origin, destination, price } = flights;

  return (
    <div className="up-booking">
      <div className="up-fcompany">{company}</div>
      <div className="up-details">
        Flight Route:
        <br />
        {origin} → {destination}
        <br />
        <br />
        Date of booking | price:
        <br />
        {new Date(bookingDate).toLocaleDateString()} | ${price}
      </div>
      <div className="up-status">{status}</div>
    </div>
  );
};

export default BookingComponent;
