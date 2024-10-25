import React from "react";
import "./payComp.css";
const PayComp = () => {
  return (
    <>
      <div className="payment-details">
        <input type="text" placeholder="Full name as on card"></input>
        <input type="text" placeholder="Card number"></input>
        <div className="ex-cvv">
          <input
            type="text"
            placeholder="Card expiry date"
            onFocus={(e) => (e.target.type = "date")}
          ></input>
          <input type="text" placeholder="CVV"></input>
        </div>
      </div>
    </>
  );
};

export default PayComp;
