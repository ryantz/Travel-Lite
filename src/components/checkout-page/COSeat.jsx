import React, { useContext } from "react";
import { ComponentContext } from "../../Context/ComponentContext";
import "./coSeat.css";
import SeatCompb from "./SeatCompb";
import SeatCompe from "./SeatCompe";
const COSeat = () => {
    const { goToCmpnt } = useContext(ComponentContext);
    return (
        <>
            <p id="cos-title">Seats?</p>
            <div className="cos-container">
                <div className="cos-planebody">
                    <div className="cos-e">
                        <SeatCompe />
                        <SeatCompe />
                    </div>
                    <div className="cos-b">
                        <SeatCompb />
                        <SeatCompb />
                    </div>
                </div>
            </div>
            <div className="cos-submit">
                <button className="cos-proceed" onClick={() => goToCmpnt("payment")}>
                    Proceed
                </button>
            </div>
        </>
    );
};

export default COSeat;
