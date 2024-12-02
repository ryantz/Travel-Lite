import React, { useContext } from "react";
import "./checkoutbase.css";
import MiniSearchResult from "../search-results/MiniSearchResult";
import { useComponentContext } from "../../Context/ComponentContext";
import { PageContext } from "../../Context/PageContext";

const CheckoutBase = ({ children }) => {
  const { navigateBack, history } = useComponentContext();
  const { goTo } = useContext(PageContext);

  const handleBack = () => {
    if (history.length === 1) {
      goTo("home");
    } else {
      navigateBack();
    }
  };

  return (
    <>
      <div className="cobase-top">
        <div className="cobase-backwrap">
          <button className="cobase-back" onClick={handleBack}>
            &lt; Back
          </button>
        </div>
        <div className="cobase-sr">
          <MiniSearchResult />
        </div>
      </div>
      <div className="cobase-main">
        <div className="cobase-comainarea">{children}</div>
      </div>
    </>
  );
};

export default CheckoutBase;
