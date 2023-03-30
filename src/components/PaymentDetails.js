import React from "react";

export default function PaymentDetails() {
  return (
    <React.Fragment>
      <div className="card checkout-page payment-section">
        <h3>Payment</h3>
        <h5>You will be charged 2 hours before the appointed time.</h5>
        <div className="card payment-method">
          <div className="form-check">
            <input
              className="form-check-input radio-pink"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Mastercard
            </label>
          </div>
        </div>
        <div className="card payment-method">
          <div className="form-check">
            <input
              className="form-check-input radio-pink"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Credit / Debit Card
            </label>
          </div>
        </div>
        <div className="card payment-method">
          <div className="form-check">
            <input
              className="form-check-input radio-pink"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" for="flexRadioDefault3">
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
