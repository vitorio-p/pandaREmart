import React from "react";
import CheckoutPage from "../pages/CheckoutPage";

export default class CheckoutBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="border d-grid">
          <button className="btn pink" onClick={CheckoutPage}>
            <span>Go to checkout</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
