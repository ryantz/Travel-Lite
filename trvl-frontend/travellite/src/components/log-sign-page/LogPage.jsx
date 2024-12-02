import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { PageContext } from "../../Context/PageContext";
import "./logPage.css";
import axios from "axios";
import axiosInstance from "../../api/apiUrl";
import { AuthContext } from "../../Context/AuthContext";

const LogPage = ({ onClose }) => {
  const { goTo } = useContext(PageContext);
  const { handleUserLogin } = useContext(AuthContext);
  const [close, setClose] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axiosInstance.post(
        "/auth/login",
        { username, password },
        { withCredentials: true },
      );
      setMessage("Login Successfully");
      localStorage.setItem("username", username);
      handleUserLogin(true);
    } catch (error) {
      if (error.response) {
        setMessage("Login Failed: " + error.response.data);
      } else {
        setMessage("Login failed: " + error.message);
      }
    }
  };

  return (
    <>
      {close ? null : (
        <form onSubmit={handleSubmit}>
          <div className="logpage-wrap">
            <div className="logpage-toprow">
              <button type="button">
                <img
                  src={assets.closeWindowIcon}
                  alt="closeWindow"
                  onClick={onClose}
                ></img>
              </button>
            </div>
            <div className="logpage-greeting">Welcome Back!</div>
            <div className="logpage-input-area">
              <div className="logpage-userpass">
                <input
                  type="text"
                  value={username}
                  className="logpage-input"
                  placeholder="Enter username/email"
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                  type="password"
                  value={password}
                  className="logpage-input"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button type="submit" className="logpage-submit">
                Login
              </button>
              <p className="post-message">{message}</p>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default LogPage;
