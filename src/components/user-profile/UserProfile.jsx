import React from "react";
import UserDetails from "./UserDetails";
import MiniSearchResult from "../search-results/MiniSearchResult";
import "./userProfile.css";

//TODO: Maybe login sign up buttons should change...
const UserProfile = () => {
  return (
    <div className="up-wrap">
      <div className="up-profileinfo">
        <p> Your Profile </p>
        <div className="up-userd">
          <UserDetails />
        </div>
      </div>
      <div className="up-prev">
        <p> Where You've Been! </p>
        <div className="up-prevd">
          <MiniSearchResult />
          <MiniSearchResult />
          <MiniSearchResult />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
