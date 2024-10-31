import React, { useContext } from "react";
import { ComponentContext } from "../../Context/ComponentContext";
import ClassComp from "./ClassComp";
import "./coClass.css";
const COClass = () => {
    const { goToCmpnt } = useContext(ComponentContext);
    return (
        <>
            <p id="coc-title">Class?</p>
            <div className="coc-container">
                <ClassComp />
                <ClassComp />
                <ClassComp />
            </div>
            <div className="coc-submit">
                <button className="coc-proceed" onClick={() => goToCmpnt("seatSelect")}>
                    Proceed
                </button>
            </div>
        </>
    );
};

export default COClass;
