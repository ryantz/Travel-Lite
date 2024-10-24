import React from "react";
import "./checkoutbase.css";
import MiniSearchResult from "../search-results/MiniSearchResult";
import COUserDetails from "./COUserDetails";
import COClass from "./COClass";
import COSeat from "./COSeat";
import COPay from "./COPay";

const CheckoutBase = () => {
    return (
        <>
            <div className="cobase-top">
                <div className="cobase-backwrap">
                    <button className="cobase-back">&lt; Back</button>
                </div>
                <div className="cobase-sr">
                    <MiniSearchResult />
                </div>
            </div>
            <div className="cobase-main">
                <div className="cobase-comainarea">
                    <COPay />
                </div>
            </div>
        </>
    );
};

export default CheckoutBase;
