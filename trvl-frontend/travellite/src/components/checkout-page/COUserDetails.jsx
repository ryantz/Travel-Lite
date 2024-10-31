import React, { useContext } from "react";
import { ComponentContext } from "../../Context/ComponentContext";
import UserDetails from "../user-profile/UserDetails";
import "./coUserDetails.css";

const COUserDetails = () => {
  const { goToCmpnt } = useContext(ComponentContext);
  return (
    <>
      <p id="coud-title">Who?</p>
      <div className="coud-container">
        <UserDetails />
      </div>
      <div className="coud-submit">
        <button
          className="coud-proceed"
          onClick={() => goToCmpnt("classSelect")}
        >
          Proceed
        </button>
      </div>
    </>
  );
};

export default COUserDetails;
