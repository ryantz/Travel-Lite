import React, { createContext, useState, useContext } from "react";

const SeatContext = createContext();

export const useSeatContext = () => {
  return useContext(SeatContext);
};

export const SeatProvider = ({ children }) => {
  const [businessSeats, setBusinessSeats] = useState([
    [true, true],
    [true, true],
    [true, true],
    [true, true],
  ]);
  const [economySeats, setEconomySeats] = useState([
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ]);

  const bookSeat = (seatType, row, col) => {
    if (seatType === "business") {
      const updatedSeats = [...businessSeats];
      updatedSeats[row][col] = false;
      setBusinessSeats(updatedSeats);
    } else {
      const updatedSeats = [...economySeats];
      updatedSeats[row][col] = false;
      setEconomySeats(updatedSeats);
    }
  };

  const value = {
    businessSeats,
    economySeats,
    bookSeat,
  };

  return <SeatContext.Provider value={value}>{children}</SeatContext.Provider>;
};
