import React from "react";
import { assets } from "../../../assets/assets";
import "./userBtn.css";

//TODO: replace placeholder username with db pulled one
const UserBtn = () => {
  return (
    <>
      <div className="userbtn-wrap">
        <button className="userbtn" type="submit">
          <img src={assets.userIcon} alt="user-icon"></img>
          username
        </button>
      </div>
    </>
  );
};

export default UserBtn;
