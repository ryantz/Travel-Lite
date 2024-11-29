import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/apiUrl";
import "./userDetails.css";

const UserDetails = () => {
  // NOTE: pull data from db, diplay on fields

  const [userData, setUserData] = useState("");
  const [message, setMessage] = useState("");
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    nationality: "",
    passNum: "",
    passIss: "",
    passExp: "",
    cardName: "",
    cardNum: "",
    cardExp: "",
    cvv: "",
  });

  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axiosInstance.get(`/user/${username}/details`);
        setUserData(res.data);
      } catch (error) {
        if (error.response) {
          setMessage("Data retreval failed! " + error.response.data);
        } else {
          setMessage("Data retreval failed! " + error.message);
        }
      }
    };

    fetchUserData();
  }, [username]);

  const toDateHandler = (e) => {
    e.target.type = "date";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleDetailsSubmit = async (event) => {
    event.preventDefault();

    try {
      await axiosInstance.post(`/user/${username}/details`, userDetails);
      setMessage("User Details saved!");
    } catch (error) {
      if (error.response) {
        setMessage("User Details not saved!: ", error.response.body);
      } else {
        setMessage("User Details not saved!: ", error.message);
      }
    }
  };

  console.log(userData);
  return (
    <>
      {userData ? (
        <div className="ud-wrap">
          <div className="up-names">
            <input
              type="text"
              value={userData.firstName}
              className="names"
              readOnly
            ></input>
            <input
              type="text"
              value={userData.lastName}
              className="names"
              readOnly
            ></input>
          </div>
          <div className="up-minfo">
            <input
              type="text"
              value={userData.dob}
              id="minfo-dob"
              className="more-info"
              placeholder="Date of birth"
              onFocus={toDateHandler}
            ></input>
            <select
              className="more-info"
              value={userData.gender}
              id="minfo-gender"
            >
              <option value="" disabled selected>
                Gender
              </option>
              <option value="M">M</option>
              <option value="F">F</option>
              <option value="dns">Others</option>
            </select>
            <input
              type="text"
              value={userData.nationality}
              className="more-info"
              id="minfo-nation"
              placeholder="Nationality"
              readOnly
            ></input>
          </div>
          <div className="up-pinfo">
            <input
              type="text"
              value={userData.passNum}
              className="pass-info"
              placeholder="Passport Number"
              readOnly
            ></input>
            <input
              type="text"
              value={userData.passIss}
              className="pass-info"
              placeholder="Passport Issue Date"
              onFocus={toDateHandler}
              readOnly
            ></input>
            <input
              type="text"
              value={userData.passExp}
              className="pass-info"
              placeholder="Passport Expiry Date"
              onFocus={toDateHandler}
              readOnly
            ></input>
          </div>
        </div>
      ) : (
        <form onSubmit={handleDetailsSubmit}>
          <div className="ud-wrap">
            <div className="up-names">
              <input
                type="text"
                name="firstName"
                value={userDetails.firstName}
                className="names"
                onChange={handleChange}
              ></input>
              <input
                type="text"
                name="lastName"
                value={userDetails.lastName}
                className="names"
                onChange={handleChange}
              ></input>
            </div>
            <div className="up-minfo">
              <input
                type="text"
                name="dob"
                value={userDetails.dob}
                id="minfo-dob"
                className="more-info"
                placeholder="Date of birth"
                onChange={handleChange}
                onFocus={toDateHandler}
              ></input>
              <select
                name="gender"
                className="more-info"
                value={userDetails.gender}
                onChange={handleChange}
                id="minfo-gender"
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="dns">Others</option>
              </select>
              <input
                name="nationality"
                type="text"
                value={userDetails.nationality}
                className="more-info"
                id="minfo-nation"
                placeholder="Nationality"
                onChange={handleChange}
              ></input>
            </div>
            <div className="up-pinfo">
              <input
                name="passNum"
                type="text"
                value={userDetails.passNum}
                className="pass-info"
                placeholder="Passport Number"
                onChange={handleChange}
              ></input>
              <input
                type="text"
                name="passIss"
                value={userDetails.passIss}
                className="pass-info"
                placeholder="Passport Issue Date"
                onFocus={toDateHandler}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                name="passExp"
                value={userDetails.passExp}
                className="pass-info"
                placeholder="Passport Expiry Date"
                onFocus={toDateHandler}
                onChange={handleChange}
              ></input>
            </div>
            <button type="submit" className="userDet-submit">
              submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default UserDetails;
