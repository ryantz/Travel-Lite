import React from "react";
import HomeBtn from "../btns/home-btn/HomeBtn";
import LogSign from "../btns/log-sign-btn/LogSign";
import UserBtn from "../btns/user-btn/UserBtn";
import LandingPage from "../landing-page/LandingPage";

import "./base.css";

const Base = () => {
  return (
    <>
      <div className="base-top-row">
        <HomeBtn />
        <LogSign />
      </div>
      <div className="base-middle-field">
        <LandingPage />
      </div>
      <div className="base-bottom-field"></div>
    </>
  );
};

export default Base;
