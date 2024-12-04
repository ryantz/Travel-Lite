import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/apiUrl";
import "./userDetails.css";

const UserDetails = () => {
  // NOTE: pull data from db, diplay on fields
  const [isEditing, setIsEditing] = useState(false);
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

  useEffect(() => {
    if (userData) {
      setUserDetails({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        gender: userData.gender || "",
        dob: userData.dob || "",
        nationality: userData.nationality || "",
        passNum: userData.passNum || "",
        passIss: userData.passIss || "",
        passExp: userData.passExp || "",
      });
    }
  }, [userData]);

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
      if (userData) {
        await axiosInstance.patch(`/user/${username}/details`, userDetails);
        setMessage("User Details updated!");
      } else {
        await axiosInstance.post(`/user/${username}/details`, userDetails);
        setMessage("User Details saved!");
      }
      setIsEditing(false);
      const res = await axiosInstance.get(`user/${username}/details`);
      setUserData(res.data);
    } catch (error) {
      if (error.response) {
        setMessage("User Details not saved!: ", error.response.body);
      } else {
        setMessage("User Details not saved!: ", error.message);
      }
    }
  };

  return (
    <>
      <div className="edit-btn">
        <button
          className="eBtn"
          onClick={() => {
            if (isEditing) {
              setIsEditing(false);
            } else {
              setIsEditing(true);
              if (userData) {
                setUserDetails({ ...userData });
              }
            }
          }}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <form onSubmit={handleDetailsSubmit}>
        <div className="ud-wrap">
          <div className="up-names">
            <input
              type="text"
              name="firstName"
              value={userDetails.firstName}
              className="names"
              readOnly={!isEditing}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="lastName"
              value={userDetails.lastName}
              className="names"
              readOnly={!isEditing}
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
              readOnly={!isEditing}
              onChange={handleChange}
              onFocus={toDateHandler}
            ></input>
            <select
              className="more-info"
              name="gender"
              value={userDetails.gender}
              disabled={!isEditing}
              onChange={handleChange}
              id="minfo-gender"
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="M">M</option>
              <option value="F">F</option>
              <option value="dns">Others</option>
            </select>
            <input
              type="text"
              name="nationality"
              value={userDetails.nationality}
              className="more-info"
              id="minfo-nation"
              placeholder="Nationality"
              readOnly={!isEditing}
              onChange={handleChange}
            ></input>
          </div>
          <div className="up-pinfo">
            <input
              type="text"
              name="passNum"
              value={userDetails.passNum}
              className="pass-info"
              placeholder="Passport Number"
              readOnly={!isEditing}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="passIss"
              value={userDetails.passIss}
              className="pass-info"
              placeholder="Passport Issue Date"
              onFocus={toDateHandler}
              readOnly={!isEditing}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="passExp"
              value={userDetails.passExp}
              className="pass-info"
              placeholder="Passport Expiry Date"
              onFocus={toDateHandler}
              readOnly={!isEditing}
              onChange={handleChange}
            ></input>
          </div>
          {isEditing && (
            <button type="submit" className="userDet-submit">
              Submit
            </button>
          )}
          <p className="signMessage">{message}</p>
        </div>
      </form>
    </>
  );
};

export default UserDetails;
