import React from "react";

export default function DeliveryDetails() {
  return (
    <React.Fragment>
      <h1>Delivery details</h1>

      <div className="form-check form-switch form-check-reverse">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
        />
        <label className="form-check-label" for="flexSwitchCheckReverse">
          Recurring order
        </label>
      </div>
    </React.Fragment>
  );
}
