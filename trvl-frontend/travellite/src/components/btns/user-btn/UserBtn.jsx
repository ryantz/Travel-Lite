import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../../api/apiUrl";
import { assets } from "../../../assets/assets";
import { AuthContext } from "../../../Context/AuthContext";
import "./userBtn.css";

//TODO: replace placeholder username with db pulled one
const UserBtn = () => {
  const { handleUserLogin } = useContext(AuthContext);

  const username = localStorage.getItem("username");

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/user/logout");
      console.log(res.data);

      localStorage.removeItem("username");
      handleUserLogin(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="userbtn-wrap">
        <button className="userbtn" type="submit">
          {username || "try again"}
        </button>
        <button className="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default UserBtn;
