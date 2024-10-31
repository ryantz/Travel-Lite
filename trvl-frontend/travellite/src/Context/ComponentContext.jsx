import { createContext, useState } from "react";

export const ComponentContext = createContext();

export const ComponentContextProvider = ({ children }) => {
  const [currentCmpnt, setCurrentCmpnt] = useState("userDetails");

  const goToCmpnt = (cmpnt) => {
    setCurrentCmpnt(cmpnt);
  };
  return (
    <ComponentContext.Provider value={{ currentCmpnt, goToCmpnt }}>
      {children}
    </ComponentContext.Provider>
  );
};
