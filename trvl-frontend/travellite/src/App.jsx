import { useContext } from "react";
import "./App.css";
import Base from "./components/base-layout/Base";
import CheckoutPage from "./components/checkout-page/CheckoutPage";
import HomePage from "./components/home-page/HomePage";
import LandingPage from "./components/landing-page/LandingPage";
import UserProfile from "./components/user-profile/UserProfile";
import { AuthContextProvider } from "./Context/AuthContext";

import { PageContext, PageContextProvider } from "./Context/PageContext";

const AppContent = () => {
  const { currentPage } = useContext(PageContext);

  return (
    <Base>
      {currentPage === "home" && <HomePage />}
      {currentPage === "landing" && <LandingPage />}
      {currentPage === "checkout" && <CheckoutPage />}
      {currentPage === "userProf" && <UserProfile />}
    </Base>
  );
};

function App() {
  return (
    <div className="App">
      <PageContextProvider>
        <AuthContextProvider>
          <AppContent />
        </AuthContextProvider>
      </PageContextProvider>
    </div>
  );
}

export default App;
