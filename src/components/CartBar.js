import React from "react";
import ViewCart from "../ViewCart";
import { ReactComponent as WhiteCartSVG } from "../svg/ic-cart-white.svg";

export default class CartBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="fixed-bottom">
          <div className="d-grid px-2">
            <button className="btn pink" onClick={ViewCart}>
              <WhiteCartSVG />
              <span>View Cart</span>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
