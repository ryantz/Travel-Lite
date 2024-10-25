import HomeBtn from "../btns/home-btn/HomeBtn";
import LogSign from "../btns/log-sign-btn/LogSign";
import UserBtn from "../btns/user-btn/UserBtn";

import "./base.css";

const Base = ({ children }) => {
  return (
    <>
      <div className="base-top-row">
        <HomeBtn />
        <LogSign />
      </div>
      <div className="base-middle-field">{children}</div>
    </>
  );
};

export default Base;
