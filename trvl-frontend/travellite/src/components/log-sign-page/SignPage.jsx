import React, { useState } from "react";
import axiosInstance from "../../api/apiUrl";
import { assets } from "../../assets/assets";
import "./signPage.css";

const SignPage = ({ onClose }) => {
  const [close, setClose] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    const epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return epattern.test(email);
  };

  const validatePassword = (password) => {
    const pPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return pPattern.test(password);
  };
  const handleSignup = async (event) => {
    event.preventDefault();

    setErrors({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    let formIsValid = true;

    if (!validateEmail(email)) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    }

    if (username.trim() === "") {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username cannot be empty.",
      }));
    }

    if (!validatePassword(password)) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Passwords must be at least 8 characters long, contain at least 1 uppercase and 1 number.",
      }));
    }

    if (password !== confirmPassword) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match.",
      }));
    }

    if (!formIsValid) {
      return;
    }

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
  return (
    <>
      {close ? null : (
        <form onSubmit={handleSignup}>
          <div className="signpage-wrap">
            <div className="signpage-toprow">
              <button type="button" onClick={onClose}>
                <img src={assets.closeWindowIcon} alt="closeWindow"></img>
              </button>
            </div>
            <div className="signpage-greeting">Come Aboard!</div>
            <div className="signpage-input-area">
              <div className="signpage-userpass">
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={email}
                    className="signpage-input"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  {errors.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={username}
                    className="signpage-input"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                  {errors.username && (
                    <p className="error-message">{errors.username}</p>
                  )}
                </div>

                <div className="input-wrapper">
                  <input
                    type="password"
                    value={password}
                    className="signpage-input"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  {errors.password && (
                    <p className="error-message">{errors.password}</p>
                  )}
                </div>
                <div className="input-wrapper">
                  <input
                    type="password"
                    className="signpage-input"
                    placeholder="Re-enter password"
                    onChange={(e) => setCPassword(e.target.value)}
                  ></input>
                  {errors.confirmPassword && (
                    <p className="error-message">{errors.confirmPassword}</p>
                  )}
                </div>
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
