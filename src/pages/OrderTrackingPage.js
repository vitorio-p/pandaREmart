import React from "react";
import NavBar from "../components/NavBar";
import OrderTrackingComponent from "../components/OrderTrackingComponent";

export default function OrderTrackingPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="otp">
        <OrderTrackingComponent />
      </div>
    </React.Fragment>
  );
}
