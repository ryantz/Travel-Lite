import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../../api/apiUrl";
import { assets } from "../../../assets/assets";
import { AuthContext } from "../../../Context/AuthContext";
import { PageContext } from "../../../Context/PageContext";
import "./userBtn.css";

// DONE: replace placeholder username with db pulled one\
// TODO: route the button click into user details.

const UserBtn = () => {
  const { goTo } = useContext(PageContext);
  const { handleUserLogin } = useContext(AuthContext);
  const [role, setRole] = useState("");

  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axiosInstance.get(`/user/${username}`);
        setRole(res.data.role);
      } catch (error) {
        console.error("Failed to fetch user role:", error);
      }
    };

    if (username) {
      fetchUserRole();
    }
  }, [username]);

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

  const handleButtonClick = () => {
    if (role === "ADMIN") {
      goTo("adminPage");
    } else {
      goTo("userProf");
    }
  };

  return (
    <>
      <div className="userbtn-wrap">
        <button className="userbtn" type="submit" onClick={handleButtonClick}>
          {username || "try again"}
        </button>
        <button
          className="logoutbtn"
          onClick={() => {
            handleLogout();
            goTo("landing");
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserBtn;
