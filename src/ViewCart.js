import React from "react";

export default class ViewCart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button variant="primary">Launch demo modal</button>

        <div className="d-grid">
          <h4>Time</h4>
          <h2>insert cart items here</h2>
          <h3 className="text-center">Your order from pandamart (RedHill)</h3>
          <h5>Cart content</h5>
          <h6>Subtotal</h6>
          <h6>Delivery fee</h6>
          <h6>Platform fee</h6>
          <h6>Including GST</h6>
          <h6>Discount</h6>
          <h6>
            <b>Total (incl. GST where applicable)</b>
          </h6>
          <h7>how many more for discount</h7>
          <h8>some bar</h8>
          <button className="btn pink d-grid">Go to checkout</button>
        </div>
      </React.Fragment>
    );
  }
}
