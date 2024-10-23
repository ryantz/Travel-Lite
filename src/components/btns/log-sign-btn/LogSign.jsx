import React, { useState } from "react";
import LogPage from "../../log-sign-page/LogPage";
import SignPage from "../../log-sign-page/SignPage";
import "./logSign.css";

const LogSign = () => {
  const [sClick, setsClick] = useState(false);
  const [lClick, setlClick] = useState(false);

  const sHandler = () => {
    setsClick((sClick) => !sClick);
  };
  const lHandler = () => {
    setlClick((lClick) => !lClick);
  };

  return (
    <>
      <div className="logsign-wrap">
        <button className="logsign-btns" id="sign-btn" onClick={sHandler}>
          sign up
        </button>
        <button className="logsign-btns" id="log-btn" onClick={lHandler}>
          login
        </button>
      </div>
      {sClick ? <SignPage /> : null}
      {lClick ? <LogPage /> : null}
    </>
  );
};

export default LogSign;
