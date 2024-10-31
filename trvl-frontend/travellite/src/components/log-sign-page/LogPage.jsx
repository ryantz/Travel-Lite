import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { PageContext } from "../../Context/PageContext";
import "./logPage.css";
import axios from "axios";
import axiosInstance from "../../api/apiUrl";
const LogPage = () => {
  const { goTo } = useContext(PageContext);
  const [close, setClose] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const closeHandler = () => {
    setClose(true);
  };

  const HandleLogin = async (event) => {
    event.preventDefault();
    axiosInstance
      .post("/auth/login", {
        username,
        password,
      })
      .then(() => {
        setMessage("Login Successful");
      })
      .catch((error) => {
        setMessage("Login failed" + error.response.data);
      });
  };

  return (
    <>
      {close ? null : (
        <form onSubmit={HandleLogin}>
          <div className="logpage-wrap">
            <div className="logpage-toprow">
              <button type="button">
                <img
                  src={assets.closeWindowIcon}
                  alt="closeWindow"
                  onClick={closeHandler}
                ></img>
              </button>
            </div>
            <div className="logpage-greeting">Welcome Back!</div>
            <div className="logpage-input-area">
              <div className="logpage-userpass">
                <input
                  type="text"
                  className="logpage-input"
                  placeholder="Enter username/email"
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                  type="text"
                  className="logpage-input"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button type="submit" className="logpage-submit">
                Login
              </button>
              <p>{message}</p>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default LogPage;
