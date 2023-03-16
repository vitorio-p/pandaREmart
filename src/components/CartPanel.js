import React from "react";
import eggImage from "../img/dasoon-eggs.webp";
import milkImage from "../img/meiji-2l-milk.png";
import { Link } from "react-router-dom";

export default function CartPanel() {
  const state = {
    items: [
      {
        id: 1,
        name: "Dasoon Premium Fresh Egg 15S",
        price: 5,
        image: eggImage,
        quantity: 0,
      },
      {
        id: 2,
        name: "Meiji Fresh Milk 2L",
        price: 7,
        image: milkImage,
        quantity: 0,
      },
    ],
    others: {
      deliveryFee: 2,
    },
  };

  function renderItems(state) {
    let jsx = [];
    let id = 1;

    for (let item of state.items) {
      jsx.push(
        <div className="cart-box padding mb-4" id={id}>
          <div className="cart-item">
            <img className="img" src={item.image} alt="egg" />
            <div>{item.name}</div>
            <div className="cart-item-price">S$ {item.price}</div>
          </div>
          <input
            className="cart-item-quantity"
            type="number"
            id="quantity"
            name="quantity"
            placeholder="1"
            min="0"
          ></input>
        </div>
      );
      id++;
    }
    return jsx;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }

  // window.onload = () => ready();

  function ready() {
    const removeCartButton = document.getElementsByClassName("cart-remove");
    for (let i = 0; i < removeCartButton.length; i++) {
      let button = removeCartButton[i];
      button.addEventListener("click", removeCartItem);
    }
    // Quantity changes
    let quantityInputs = document.getElementsByClassName("cart-item-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i];
      input.addEventListener("change", updateTotal);
    }
  }

  function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
  }

  function updateTotal() {
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
      let cartBox = cartBoxes[i];
      let priceElement = cartBox.getElementsByClassName("cart-item-price")[0];
      let priceElementString = priceElement.innerHTML;
      let price = Number(
        priceElementString.substring(priceElementString.indexOf(" ") + 1)
      );
      let quantityElement =
        cartBox.getElementsByClassName("cart-item-quantity")[0];
      let quantity = quantityElement.value;
      total = total + price * quantity;
    }
    // Update subtotal and total
    let subTotal = document.getElementsByClassName(
      "cart-details-subtotal-value"
    )[0];
    subTotal.innerHTML = total;
    let cartTotalValue = document.getElementsByClassName("cart-total-value")[0];
    cartTotalValue.innerHTML = total + 2;
  }

  return (
    <React.Fragment>
      <div className="cart border">
        <p className="cart-title">
          <b>Your order from pandamart (Redhill)</b>
        </p>
        <div className="cart-content">{renderItems(state)}</div>
        <div className="padding">
          <div className="cart-details">
            <div className="cart-details-subtotal">
              <div>Subtotal</div>
              <div className="cart-details-subtotal-value">
                {state.items[0].price + state.items[1].price}
              </div>
            </div>

            <div className="cart-details-delivery-fee mt-1">
              <div>Delivery fees</div>
              <div>{state.others.deliveryFee}</div>
            </div>
            <div className="cart-details-total mt-1">
              <div>
                <b>Total</b>
              </div>
              <div className="cart-total-value">
                {state.items[0].price + state.others.deliveryFee}
              </div>
            </div>
          </div>
          <Link
            className="d-grid padding mt-1"
            to="/checkout"
            style={{ textDecoration: "none" }}
          >
            <button className="padding btn pink">Submit order</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
