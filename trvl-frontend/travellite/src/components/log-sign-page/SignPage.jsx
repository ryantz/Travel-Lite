import React, { useState } from "react";
import axiosInstance from "../../api/apiUrl";
import { assets } from "../../assets/assets";
import "./signPage.css";

const SignPage = () => {
  const [close, setClose] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      await axiosInstance.post("/auth/signup", { email, username, password });
      setMessage("Signed up successfully!");
    } catch (error) {
      if (error.response) {
        setMessage("Sign up failed: ", error.response.body);
      } else {
        setMessage("Sign up failed: ", error.message);
      }
    }
  };
  const closeHandler = () => {
    setClose(true);
  };
  return (
    <>
      {close ? null : (
        <form onSubmit={handleSignup}>
          <div className="signpage-wrap">
            <div className="signpage-toprow">
              <button type="button" onClick={closeHandler}>
                <img src={assets.closeWindowIcon} alt="closeWindow"></img>
              </button>
            </div>
            <div className="signpage-greeting">Come Aboard!</div>
            <div className="signpage-input-area">
              <div className="signpage-userpass">
                <input
                  type="text"
                  value={email}
                  className="signpage-input"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  type="text"
                  value={username}
                  className="signpage-input"
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                  type="text"
                  value={password}
                  className="signpage-input"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                  type="text"
                  className="signpage-input"
                  placeholder="Re-enter password"
                ></input>
              </div>
              <button className="signpage-submit">Sign up</button>
            </div>
            <p className="signMessage">{message}</p>
          </div>
        </form>
      )}
    </>
  );
};

export default SignPage;
