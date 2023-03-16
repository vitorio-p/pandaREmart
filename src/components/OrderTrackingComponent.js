import React from "react";
import { Link } from "react-router-dom";

export default function OrderTrackingComponent() {
  return (
    <React.Fragment>
      <div className="card otp-component">
        <h3>Success!</h3>
        <br />
        <div>Estimated delivery time</div>
        <h4>20 - 30 mins</h4>
        <div>Next delivery date</div>
        <h4>23 Mar 2023</h4>
        <div>Next delivery time</div>
        <h4>4:00 PM</h4>
        <Link to="/">
          <button className="btn pink">Edit cart</button>
        </Link>
        <button className="btn pink">Edit date and time</button>
      </div>
    </React.Fragment>
  );
}
