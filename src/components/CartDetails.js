import React from "react";
import { Link } from "react-router-dom";

export default function CartDetails(props) {

  function renderItems() {
    let jsx = [];
    let id = 1;

    for (let item of props.state.items) {
      if (item.quantity !== 0) {
        jsx.push(
          <div className="cart-box padding" id={id}>
            <div className="cart-details-item">
              <div>{item.quantity} ×</div>
              <div className="padding">{item.name}</div>
              <div className="cart-item-price">S$ {item.price}</div>
            </div>
          </div>
        );
        id++;
      }
    }
    return jsx;
  }

  return (
    <React.Fragment>
      <div className="card checkout-page">
        <h3>Cart details</h3>
        <div className="cart-content">{renderItems(props)}</div>
        <div className="side-by-side">
          <div>Subtotal</div>
          <div>S$ {props.state.others.subtotal}</div>
        </div>
        <div className="side-by-side">
          <div>Delivery fee</div>
          <div>S$ {props.state.others.deliveryFee}</div>
        </div>
        <div className="side-by-side">
          <div>Total</div>
          <div>S$ {props.state.others.total}</div>
        </div>
        <Link
            className="d-grid padding mt-1"
            to="/"
            style={{ textDecoration: "none" }}
            state={props}
          >
            <button className="padding btn pink">Edit order</button>
          </Link>
      </div>
    </React.Fragment>
  );
}
