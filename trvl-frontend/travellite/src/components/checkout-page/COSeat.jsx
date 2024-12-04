import React, { useContext } from "react";
import {
  ComponentContext,
  useComponentContext,
} from "../../Context/ComponentContext";
import "./coSeat.css";
import SeatCompb from "./SeatCompb";
import SeatCompe from "./SeatCompe";
const COSeat = () => {
  const { goToCmpnt } = useContext(ComponentContext);
  const { navigateTo } = useComponentContext();

  const handleProceed = () => {
    navigateTo("payment");
  };
  return (
    <>
      <p id="cos-title">Seats?</p>
      <div className="cos-container">
        <div className="cos-planebody">
          <div className="cos-e">
            <SeatCompe />
            <SeatCompe />
            <SeatCompe />
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
