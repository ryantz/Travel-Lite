import React, { useContext } from "react";
import {
  ComponentContext,
  useComponentContext,
} from "../../Context/ComponentContext";
import UserDetails from "../user-profile/UserDetails";
import "./coUserDetails.css";

const COUserDetails = () => {
  const { goToCmpnt } = useContext(ComponentContext);
  const { navigateTo } = useComponentContext();

  const handleProceed = () => {
    navigateTo("seatSelect");
  };

  return (
    <>
      <p id="coud-title">Who?</p>
      <div className="coud-container">
        <UserDetails />
      </div>
      <div className="coud-submit">
        <button className="coud-proceed" onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </>
  );
};

export default COUserDetails;
