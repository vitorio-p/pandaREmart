import React from "react";
import breadImage from "../img/bread.jpeg";
import eggImage from "../img/dasoon-eggs.webp";
import milkImage from "../img/meiji-2l-milk.png";

export default function CartDetails() {
  const state = {
    items: [
      {
        id: 1,
        name: "Dasoon Premium Fresh Egg 15S",
        price: 5,
        quantity: 1,
      },
      {
        id: 2,
        name: "Meiji Fresh Milk 2L",
        price: 7,
        quantity: 1,
      },
    ],
  };

  function renderItems(state) {
    let jsx = [];
    let id = 1;

    for (let item of state.items) {
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
    return jsx;
  }

  return (
    <React.Fragment>
      <div className="card checkout-page">
        <h3>Cart details</h3>
        <div className="cart-content">{renderItems(state)}</div>
        <div className="side-by-side">
          <div>Subtotal</div>
          <div>S$ 12</div>
        </div>
        <div className="side-by-side">
          <div>Delivery fee</div>
          <div>S$ 2</div>
        </div>
        <div className="side-by-side">
          <div>Total</div>
          <div>S$ 14</div>
        </div>
      </div>
    </React.Fragment>
  );
}
