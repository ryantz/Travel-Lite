import { useContext } from "react";
import "./App.css";
import Base from "./components/base-layout/Base";
import HomePage from "./components/home-page/HomePage";
import LandingPage from "./components/landing-page/LandingPage";
import CheckoutBase from "./components/checkout-page/CheckoutBase";
import { PageContext, PageContextProvider } from "./Context/PageContext";
import COClass from "./components/checkout-page/COClass";
const AppContent = () => {
  const { currentPage } = useContext(PageContext);

  return (
    <Base>
      {currentPage === "home" && <HomePage />}
      {currentPage === "landing" && <LandingPage />}
      {currentPage === "checkout" && <CheckoutBase />}
    </Base>
  );
};
function App() {
  return (
    <div className="App">
      <PageContextProvider>
        <AppContent />
      </PageContextProvider>
    </div>
  );
}

export default App;
