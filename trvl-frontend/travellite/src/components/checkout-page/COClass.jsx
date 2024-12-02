import React, { useContext } from "react";
import {
    ComponentContext,
    useComponentContext,
} from "../../Context/ComponentContext";
import ClassComp from "./ClassComp";
import "./coClass.css";
const COClass = () => {
    const { goToCmpnt } = useContext(ComponentContext);
    const { navigateTo, handleClassSelect } = useComponentContext();

    const handleProceed = () => {
        navigateTo("seatSelect");
    };

    const handleClassChange = (className) => {
        handleClassSelect(className);
    };

    return (
        <>
            <p id="coc-title">Class?</p>
            <div className="coc-container">
                <ClassComp />
                <ClassComp />
            </div>
            <div className="coc-submit">
                <button className="coc-proceed" onClick={handleProceed}>
                    Proceed
                </button>
            </div>
        </>
    );
};

export default COClass;
