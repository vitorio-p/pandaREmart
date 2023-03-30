import React from "react";
import { Link } from "react-router-dom";

export default function OrderTrackingComponent() {
  return (
    <React.Fragment>
      <div className="card otp-component">
        <h3>Success!</h3>
        <h6>Your recurring order has been confirmed.</h6>
        <br />
        <div>Next delivery date</div>
        <h4>6 April 2023</h4>
        <div>Next delivery time</div>
        <h4>2:00 PM</h4>
        <Link to="/recurring-order">
          <button className="btn pink">Check recurring orders</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
