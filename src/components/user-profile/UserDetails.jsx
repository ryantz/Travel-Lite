import React from "react";
import "./userDetails.css";
const UserDetails = () => {
  const toDateHandler = (e) => {
    e.target.type = "date";
  };
  return (
    <>
      <div className="up-names">
        <input type="text" className="names" placeholder="First name"></input>
        <input type="text" className="names" placeholder="Last name"></input>
      </div>
      <div className="up-minfo">
        <input
          type="text"
          id="minfo-dob"
          className="more-info"
          placeholder="Date of birth"
          onFocus={toDateHandler}
        ></input>
        <select className="more-info" id="minfo-gender">
          <option value="" disabled selected>
            Gender
          </option>
          <option value="M">M</option>
          <option value="F">F</option>
          <option value="dns">Others</option>
        </select>
        <input
          type="text"
          className="more-info"
          id="minfo-nation"
          placeholder="Nationality"
        ></input>
      </div>
      <div className="up-pinfo">
        <input
          type="text"
          className="pass-info"
          placeholder="Passport Number"
        ></input>
        <input
          type="text"
          className="pass-info"
          placeholder="Passport Issue Date"
          onFocus={toDateHandler}
        ></input>
        <input
          type="text"
          className="pass-info"
          placeholder="Passport Expiry Date"
          onFocus={toDateHandler}
        ></input>
      </div>
    </>
  );
};

export default UserDetails;
