import { createContext, useContext, useState } from "react";

const SelectedFlightContext = createContext();

export const SelectedFlightProvider = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <SelectedFlightContext.Provider
      value={{ selectedFlight, setSelectedFlight }}
    >
      {children}
    </SelectedFlightContext.Provider>
  );
};

export const useSelectedFlight = () => useContext(SelectedFlightContext);
