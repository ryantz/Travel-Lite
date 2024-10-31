import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputContextProvider = ({ children }) => {
  const [input, setInput] = useState([]);

  const registerData = () => {
    const newData = `Data ${input.length + 1}`;
    setInput((existing) => [...existing, newData]);

    return (
      <InputContext.Provider value={{ input, newData }}>
        {children}
      </InputContext.Provider>
    );
  };
};
