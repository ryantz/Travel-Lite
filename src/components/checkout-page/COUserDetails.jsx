import React from "react";
import UserDetails from "../user-profile/UserDetails";
import "./coUserDetails.css";

const COUserDetails = () => {
    return (
        <>
            <p id="coud-title">Who?</p>
            <div className="coud-container">
                <UserDetails />
            </div>
            <div className="coud-submit">
                <button className="coud-proceed">Proceed</button>
            </div>
        </>
    );
};

export default COUserDetails;
