import React from "react";
import "./seatCompe.css";

const SeatCompe = ({ seats, onSeatSelect }) => {
    return (
        <>
            <div className="e-seat-wrapper">
                {seats.map((row, rowIndex) => (
                    <div className="e-seatwrap" key={rowIndex}>
                        {row.map((seat, colIndex) => (
                            <button
                                key={colIndex}
                                className={`e-seats ${seat.selected ? "selected" : ""}`}
                                onClick={() => onSeatSelect(rowIndex, colIndex)}
                                disabled={seat.selected}
                            >
                                {`Seat ${rowIndex * 6 + colIndex + 1}`}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default SeatCompe;
