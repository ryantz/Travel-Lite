import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    return storedAuthStatus === "true";
  });

  const handleUserLogin = (sts) => {
    setIsLogged(sts);
    localStorage.setItem("isAuthenticated", sts.toString());
    console.log("User login status: ", sts);
  };

  const handleUserLogout = () => {
    setIsLogged(false);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "isAuthenticated") {
        setIsLogged(e.newValue === "true");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogged, handleUserLogin, handleUserLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
