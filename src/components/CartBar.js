import React from "react";
import ViewCart from "../ViewCart";
import { ReactComponent as WhiteCartSVG } from "../svg/ic-cart-white.svg";

export default class CartBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="border d-grid">
          <button className="btn pink" onClick={ViewCart}>
            <WhiteCartSVG className="position-absolute start-0"/>
            <span>View Cart</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
