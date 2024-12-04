import { useContext, useState } from "react";
import "./App.css";
import Base from "./components/base-layout/Base";
import CheckoutPage from "./components/checkout-page/CheckoutPage";
import HomePage from "./components/home-page/HomePage";
import LandingPage from "./components/landing-page/LandingPage";
import AdminFlight from "./components/user-profile/AdminFlight";
import UserProfile from "./components/user-profile/UserProfile";
import { AuthContextProvider } from "./Context/AuthContext";

import { PageContext, PageContextProvider } from "./Context/PageContext";
import { SelectedFlightProvider } from "./Context/SelectedFlightContext";

const AppContent = () => {
  const { currentPage } = useContext(PageContext);
  const [flightResults, setFlightResults] = useState([]);

  const handleSearchResults = (results) => {
    setFlightResults(results);
  };

  return (
    <Base>
      {currentPage === "home" && (
        <HomePage
          flightResults={flightResults}
          onSearchResults={handleSearchResults}
        />
      )}
      {currentPage === "landing" && (
        <LandingPage onSearchResults={handleSearchResults} />
      )}
      {currentPage === "checkout" && <CheckoutPage />}
      {currentPage === "userProf" && <UserProfile />}
      {currentPage === "adminPage" && <AdminFlight />}
    </Base>
  );
};

function App() {
  return (
    <div className="App">
      <PageContextProvider>
        <AuthContextProvider>
          <SelectedFlightProvider>
            <AppContent />
          </SelectedFlightProvider>
        </AuthContextProvider>
      </PageContextProvider>
    </div>
  );
}

export default App;
