import { useContext } from "react";
import {
    ComponentContext,
    ComponentContextProvider,
} from "../../Context/ComponentContext";
import { SeatProvider } from "../../Context/SeatContext";
import CheckoutBase from "./CheckoutBase";
import COClass from "./COClass";
import COPay from "./COPay";
import COSeat from "./COSeat";
import COUserDetails from "./COUserDetails";

const CheckoutPageDetails = () => {
    const { currentCmpnt } = useContext(ComponentContext);

    return (
        <CheckoutBase>
            {currentCmpnt === "userDetails" && <COUserDetails />}
            {currentCmpnt === "classSelect" && <COClass />}
            {currentCmpnt === "seatSelect" && <COSeat />}
            {currentCmpnt === "payment" && <COPay />}
        </CheckoutBase>
    );
};

const CheckoutPage = () => {
    return (
        <ComponentContextProvider>
            <SeatProvider>
                <CheckoutPageDetails />
            </SeatProvider>
        </ComponentContextProvider>
    );
};

export default CheckoutPage;
