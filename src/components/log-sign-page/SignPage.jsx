import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./signPage.css";

const SignPage = () => {
  const [close, setClose] = useState(false);

  const closeHandler = () => {
    setClose(true);
  };
  return (
    <>
      {close ? null : (
        <div className="signpage-wrap">
          <div className="signpage-toprow">
            <button type="button" onClick={closeHandler}>
              <img src={assets.closeWindowIcon} alt="closeWindow"></img>
            </button>
          </div>
          <div className="signpage-greeting">Come Aboard!</div>
          <div className="signpage-input-area">
            <div className="signpage-userpass">
              <input
                type="text"
                className="signpage-input"
                placeholder="Enter email"
              ></input>
              <input
                type="text"
                className="signpage-input"
                placeholder="Enter username"
              ></input>
              <input
                type="text"
                className="signpage-input"
                placeholder="Enter password"
              ></input>
              <input
                type="text"
                className="signpage-input"
                placeholder="Re-enter password"
              ></input>
            </div>
            <button className="signpage-submit">Sign up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignPage;
