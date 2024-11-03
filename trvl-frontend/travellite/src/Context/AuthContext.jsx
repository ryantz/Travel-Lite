import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const handleUserLogin = (sts) => {
    setIsLogged(sts);
    console.log("User login status: ", sts);
  };
  return (
    <AuthContext.Provider value={{ isLogged, handleUserLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
