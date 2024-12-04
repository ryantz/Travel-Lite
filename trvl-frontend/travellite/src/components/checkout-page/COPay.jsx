import React, { useContext, useEffect, useState } from "react";
import "./coPay.css";
import { assets } from "../../assets/assets";
import { useSelectedFlight } from "../../Context/SelectedFlightContext";
import axiosInstance from "../../api/apiUrl";
import { PageContext } from "../../Context/PageContext";
const COPay = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [paymentData, setPaymentData] = useState("");
  const [message, setMessage] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNum: "",
    cardExp: "",
    cvv: "",
  });
  const { selectedFlight } = useSelectedFlight();
  const { goTo } = useContext(PageContext);
  console.log(selectedFlight);
  const platformFee = 3.25;
  const finalPrice = selectedFlight.price + platformFee;

  const username = localStorage.getItem("username");

  useEffect(() => {
    const username1 = localStorage.getItem("username");
    const fetchPaymentData = async () => {
      try {
        const res = await axiosInstance.get(`/user/${username1}/payment`);
        setPaymentData(res.data);
      } catch (error) {
        if (error.response) {
          setMessage("Payment Data retreval failed!", error.response.data);
        } else {
          setMessage("Payment Data retreval failed!", error.message);
        }
      }
    };
    fetchPaymentData();
  }, [username]);

  useEffect(() => {
    if (paymentData) {
      setPaymentDetails({
        cardName: paymentData.cardName || "",
        cardNum: paymentData.cardNum || "",
        cardExp: paymentData.cardExp || "",
        cvv: paymentData.cvv || "",
      });
    }
  }, [paymentData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePaymentFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (paymentData) {
        await axiosInstance.patch(`/user/${username}/payment`, paymentDetails);
        setMessage("Payment Details updated!");
      } else {
        await axiosInstance.post(`/user/${username}/payment`, paymentDetails);
        setMessage("Payment Details saved!");
      }
      setIsEditing(false);
      const res = await axiosInstance.get(`user/${username}/payment`);
      setPaymentData(res.data);
    } catch (error) {
      if (error.response) {
        setMessage("Payment Details not saved!: ", error.response.body);
      } else {
        setMessage("Payment Details not saved!: ", error.message);
      }
    }
  };

  const handleSubmit = async () => {
    if (!username) {
      alert("Please log in to book a flight");
      return;
    }

    try {
      const userRes = await axiosInstance.get(`user/${username}`);
      const userId = userRes.data.id;
      const paymentId = paymentData ? paymentData.id : null;

      if (!paymentId) {
        alert("Payment details missing or not saved");
        return;
      }

      const bookingData = {
        userId: Number(userId),
        flightId: selectedFlight.id,
        paymentId: paymentId,
        status: "PAID",
      };

      const response = await axiosInstance.post("/bookings/book", bookingData);
      alert("Booking successful");
      console.log("Booking details: ", response.data);
      goTo("userProf");
    } catch (error) {
      if (error.response) {
        alert("booking failed", error.response.data.message);
      } else {
        console.error("Error during booking:", error.message);
        alert("an error ocurred");
      }
    }
  };
  return (
    <>
      <p id="copay-title">Payment</p>
      <div className="editp-btn">
        <button
          className="eBtn"
          onClick={() => {
            if (isEditing) {
              setIsEditing(false);
            } else {
              setIsEditing(true);
              if (paymentData) {
                setPaymentDetails({ ...paymentData });
              }
            }
          }}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
      <div className="copay-infowrap">
        <form onSubmit={handlePaymentFormSubmit}>
          <div className="copay-card">
            <img src={assets.paymentCardIcon} alt="paymentcardicons"></img>
            <input
              type="text"
              name="cardName"
              value={paymentDetails.cardName}
              readOnly={!isEditing}
              onChange={handleChange}
              className="name-number"
              placeholder="Full name as on card"
            ></input>
            <input
              type="text"
              name="cardNum"
              value={paymentDetails.cardNum}
              readOnly={!isEditing}
              onChange={handleChange}
              className="name-number"
              placeholder="Card number"
            ></input>
            <div className="ex-cvv">
              <input
                type="text"
                className="ex"
                name="cardExp"
                value={paymentDetails.cardExp}
                readOnly={!isEditing}
                onChange={handleChange}
                placeholder="Card expiry date"
                onFocus={(e) => (e.target.type = "date")}
              ></input>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                readOnly={!isEditing}
                onChange={handleChange}
                className="cvv"
                placeholder="CVV"
              ></input>
            </div>
            {isEditing && (
              <button type="submit" className="payDet-submit">
                Submit
              </button>
            )}
            <p className="signMessage">{message}</p>
          </div>
        </form>
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
              <p>Ticket Price ........... ${selectedFlight.price}</p>
              <p>Add-ons ........... $0</p>
              <p>Platform fee ........... ${platformFee}</p>
            </div>
            <div className="final-price">
              <p>Total: ${finalPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cop-submit">
        <button className="cop-proceed" onClick={handleSubmit}>
          Pay
        </button>
      </div>
    </>
  );
};

export default COPay;
