import { createContext, useContext, useState } from "react";

export const ComponentContext = createContext();

export const ComponentContextProvider = ({ children }) => {
  const [currentCmpnt, setCurrentCmpnt] = useState("userDetails");
  const [history, setHistory] = useState(["userDetails"]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const navigateTo = (component) => {
    setHistory((prevHistory) => [...prevHistory, component]);
    setCurrentCmpnt(component);
  };

  const navigateBack = () => {
    setHistory((prevHistory) => {
      if (prevHistory.length > 1) {
        const newHistory = prevHistory.slice(0, -1);
        setCurrentCmpnt(newHistory[newHistory.length - 1]);
        return newHistory;
      } else {
        setCurrentCmpnt("home");
        return prevHistory;
      }
    });
  };

  const handleClassSelect = (className) => {
    setSelectedClass(className);
  };

  const handleSeatSelection = (seatId) => {
    if (!bookedSeats.include(seatId)) {
      setSelectedSeats([...selectedSeats, seatId]);
      setBookedSeats([...bookedSeats, seatId]);
    } else {
      alert("Seat is already booked!");
    }
  };

  const goToCmpnt = (cmpnt) => {
    setCurrentCmpnt(cmpnt);
  };

  return (
    <ComponentContext.Provider
      value={{
        currentCmpnt,
        navigateTo,
        navigateBack,
        history,
        selectedSeats,
        selectedClass,
        handleClassSelect,
        handleSeatSelection,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponentContext = () => useContext(ComponentContext);
