import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import HomeBtn from "../btns/home-btn/HomeBtn";
import LogSign from "../btns/log-sign-btn/LogSign";
import UserBtn from "../btns/user-btn/UserBtn";

import "./base.css";

const Base = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return (
    <>
      <div className="base-top-row">
        <HomeBtn />
        {isLogged ? <UserBtn /> : <LogSign />}
      </div>
      <div className="base-middle-field">{children}</div>
    </>
  );
};

export default Base;
