import React, { useContext } from "react";
import { PageContext } from "../../Context/PageContext";
import UserDetails from "../user-profile/UserDetails";
import "./coUserDetails.css";

const COUserDetails = () => {
  const { goTo } = useContext(PageContext);
  return (
    <>
      <p id="coud-title">Who?</p>
      <div className="coud-container">
        <UserDetails />
      </div>
      <div className="coud-submit">
        <button className="coud-proceed" onClick={() => goTo("class")}>
          Proceed
        </button>
      </div>
    </>
  );
};

export default COUserDetails;
