import React from "react";
import "./coPay.css";
import { assets } from "../../assets/assets";
const COPay = () => {
  return (
    <>
      <p id="copay-title">Payment</p>

      <div className="copay-infowrap">
        <div className="copay-card">
          <img src={assets.paymentCardIcon} alt="paymentcardicons"></img>
          <input
            type="text"
            className="name-number"
            placeholder="Full name as on card"
          ></input>
          <input
            type="text"
            className="name-number"
            placeholder="Card number"
          ></input>
          <div className="ex-cvv">
            <input
              type="text"
              className="ex"
              placeholder="Card expiry date"
              onFocus={(e) => (e.target.type = "date")}
            ></input>
            <input type="text" className="cvv" placeholder="CVV"></input>
          </div>
        </div>
        <div className="copay-summary">
          <p className="sum-title">Summary</p>
          <div className="promo-area">
            <input
              type="text"
              className="copromo"
              placeholder="Promo code"
            ></input>
            <button type="submit" className="promosubmit">
              Redeem
            </button>
          </div>
          <div className="payment-wrap">
            <div className="price-breakdown">
              <p>Ticket Price ........... $PLACEHOLDER</p>
              <p>Add-ons ........... $PLACEHOLDER</p>
              <p>Platform fee ........... $PLACEHOLDER</p>
            </div>
            <div className="final-price">
              <p>Total: $PLACEHOLDER</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cop-submit">
        <button className="cop-proceed">Pay</button>
      </div>
    </>
  );
};

export default COPay;
