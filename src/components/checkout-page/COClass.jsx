import React from "react";
import ClassComp from "./ClassComp";
import "./coClass.css";
const COClass = () => {
    return (
        <>
            <p id="coc-title">Class?</p>
            <div className="coc-container">
                <ClassComp />
                <ClassComp />
                <ClassComp />
            </div>
            <div className="coc-submit">
                <button className="coc-proceed">Proceed</button>
            </div>
        </>
    );
};

export default COClass;
