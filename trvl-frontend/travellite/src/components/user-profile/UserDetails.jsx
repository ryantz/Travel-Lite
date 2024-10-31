import axios from "axios";
import React, { useEffect, useState } from "react";
import "./userDetails.css";
const UserDetails = () => {
  /*
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users/2");
        console.log("API res: ", res.data);
        setUsers(res.data);
      } catch (e) {
        console.error("Error fetching users...", e);
      }
    };
    fetchUsers();
  }, []);
*/
  const toDateHandler = (e) => {
    e.target.type = "date";
  };
  return (
    <>
      <div className="ud-wrap">
        <button className="editDetails">Edit</button>
        <div className="up-names">
          <input type="text" className="names" readOnly></input>
          <input type="text" className="names" readOnly></input>
        </div>
        <div className="up-minfo">
          <input
            type="text"
            id="minfo-dob"
            className="more-info"
            placeholder="Date of birth"
            onFocus={toDateHandler}
          ></input>
          <select className="more-info" id="minfo-gender" readOnly>
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
            readOnly
          ></input>
        </div>
        <div className="up-pinfo">
          <input
            type="text"
            className="pass-info"
            placeholder="Passport Number"
            readOnly
          ></input>
          <input
            type="text"
            className="pass-info"
            placeholder="Passport Issue Date"
            onFocus={toDateHandler}
            readOnly
          ></input>
          <input
            type="text"
            className="pass-info"
            placeholder="Passport Expiry Date"
            onFocus={toDateHandler}
            readOnly
          ></input>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
