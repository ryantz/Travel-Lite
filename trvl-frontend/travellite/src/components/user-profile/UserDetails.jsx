import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/apiUrl";
import "./userDetails.css";

const UserDetails = () => {
  // NOTE: pull data from db, diplay on fields

  const [userData, setUserData] = useState("");
  const [message, setMessage] = useState("");
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
  console.log(userData);
  return (
    <>
      {userData ? (
        <div className="ud-wrap">
          <button className="editDetails">Edit</button>
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
      ) : null}
    </>
  );
};

export default UserDetails;
