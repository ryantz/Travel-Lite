import React, { useState } from "react";
import HomeBtn from "../btns/home-btn/HomeBtn";
import LogSign from "../btns/log-sign-btn/LogSign";
import UserBtn from "../btns/user-btn/UserBtn";
import CheckoutBase from "../checkout-page/CheckoutBase";
import HomePage from "../home-page/HomePage";
import LandingPage from "../landing-page/LandingPage";
import UserProfile from "../user-profile/UserProfile";

import "./base.css";

const Base = () => {
  return (
    <>
      <div className="base-top-row">
        <HomeBtn />
        <LogSign />
      </div>
      <div className="base-middle-field">
        <CheckoutBase />
      </div>
    </>
  );
};

export default Base;
