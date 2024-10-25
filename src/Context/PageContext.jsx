import React, { createContext, useState } from "react";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");

  const goTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageContext.Provider value={{ currentPage, goTo }}>
      {children}
    </PageContext.Provider>
  );
};
