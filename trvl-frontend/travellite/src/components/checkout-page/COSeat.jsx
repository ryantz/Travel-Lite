import React, { useContext, useState } from "react";
import {
    ComponentContext,
    useComponentContext,
} from "../../Context/ComponentContext";
import "./coSeat.css";
import SeatCompb from "./SeatCompb";
import SeatCompe from "./SeatCompe";
const COSeat = () => {
    const { goToCmpnt } = useContext(ComponentContext);
    const { navigateTo, handleClassSelect } = useComponentContext();

    const [seats, setSeats] = useState(
        Array(2)
            .fill()
            .map(() => Array(6).fill({ selected: false })),
    );

    const handleSeatSelect = (row, col) => {
        const newSeats = [...seats];
        if (!newSeats[row][col].selected) {
            newSeats[row][col] = { selected: true };
            setSeats(newSeats);
        }
    };

    const handleProceed = () => {
        navigateTo("payment");
    };
    return (
        <>
            <p id="cos-title">Seats?</p>
            <div className="cos-container">
                <div className="cos-planebody">
                    <div className="cos-e">
                        <SeatCompe seats={seats} onSeatSelect={handleSeatSelect} />
                    </div>
                </div>
            </div>
            <div className="cos-submit">
                <button className="cos-proceed" onClick={handleProceed}>
                    Proceed
                </button>
            </div>
        </>
    );
};

export default COSeat;
