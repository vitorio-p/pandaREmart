import React from "react";
import { Link } from "react-router-dom";
import breadImage from "../img/bread.jpeg";
import eggImage from "../img/dasoon-eggs.webp";
import milkImage from "../img/meiji-2l-milk.png";
import addImage from "../svg/add.svg";
import rubbishbinImage from "../svg/rubbish-bin.svg";
import subtractImage from "../svg/subtract.svg";

export default function CartPanel() {
  const state = {
    items: [
      {
        id: 0,
        name: "Dasoon Premium Fresh Egg 15S",
        price: 5,
        image: eggImage,
        quantity: 1,
      },
      {
        id: 1,
        name: "Meiji Fresh Milk 2L",
        price: 7,
        image: milkImage,
        quantity: 1,
      },
      {
        id: 2,
        name: "Gardenia Jumbo 600 Enriched White Bread",
        price: 3,
        image: breadImage,
        quantity: 1,
      },
    ],
    others: {
      subtotal: 0,
      deliveryFee: 2,
      total: 0,
    },
  };

  function renderItems(state) {
    let jsx = [];

    for (let item of state.items) {
      jsx.push(
        <div className="cart-box padding mb-4" id={item.id} key={item.id}>
          <div className="cart-item mb-2">
            <img className="img" src={item.image} alt="egg" />
            <div>{item.name}</div>
            <div className="cart-item-price">S$ {item.price}</div>
          </div>
          <div className="cart-item-quantity">
            <img
              className="cart-remove"
              id={item.id}
              src={rubbishbinImage}
              alt="rubbish bin"
              onClick={deleteItem}
            />
            <div className="cart-item-numbers">
              <img
                className="padding"
                src={subtractImage}
                id={item.id}
                alt="subtract button"
                onClick={subtractOne}
              />
              <input
                className="cart-item-input"
                type="number"
                id={item.id}
                name="quantity"
                defaultValue={1}
                onChange={updatePrices}
              ></input>
              <img
                className="padding"
                src={addImage}
                id={item.id}
                alt="add button"
                onClick={addOne}
              />
            </div>
          </div>
        </div>
      );
    }
    return jsx;
  }

  function deleteItem(item) {
    const idToBeDeleted = item.target.id;
    const itemToBeDeleted = document.getElementsByClassName("cart-box");
    for (let cartItem of itemToBeDeleted) {
      if (cartItem.id === idToBeDeleted) {
        cartItem.remove();
        state.items[idToBeDeleted].quantity = 0;
      }
      updatePrices();
    }
  }

  function addOne(item) {
    const idToBeAdded = item.target.id;
    const inputBox = document.getElementsByClassName("cart-item-input");
    for (let cartItem of inputBox) {
      if (cartItem.id === idToBeAdded) {
        cartItem.value++;
        state.items[idToBeAdded].quantity = +cartItem.value;
      }
      updatePrices();
    }
  }

  function subtractOne(item) {
    const idToBeSubtracted = item.target.id;
    const inputBox = document.getElementsByClassName("cart-item-input");
    for (let cartItem of inputBox) {
      if (cartItem.id === idToBeSubtracted) {
        cartItem.value--;
        state.items[idToBeSubtracted].quantity = +cartItem.value;
      }
      if (cartItem.value < 1) {
        deleteItem(item);
      }
      updatePrices();
    }
  }

  function updatePrices() {
    // get the prices of all the items in the cart
    let cartPrices = document.getElementsByClassName("cart-item-price");
    let cartItemPrices = [];
    for (let cartItem of cartPrices) {
      let cartItemPriceHTML = cartItem.innerHTML;
      let cartItemPrice = cartItemPriceHTML.substring(
        cartItemPriceHTML.indexOf(" ") + 1
      );
      cartItemPrices.push(Number(cartItemPrice));
    }

    // get the quantity of all the items in the cart
    const inputBoxes = document.getElementsByClassName("cart-item-input");
    const cartItemQuantities = [];
    for (let cartItem of inputBoxes) {
      cartItemQuantities.push(cartItem.value);
    }

    // calculate subtotal
    let subtotal = 0;
    for (let i = 0; i < cartItemPrices.length; i++) {
      subtotal += cartItemPrices[i] * cartItemQuantities[i];
    }

    // calculate total
    let deliveryCost = 0;
    if (subtotal === 0) {
      deliveryCost = 0;
      let deliveryCostHTML = document.getElementsByClassName(
        "cart-details-delivery-fee-money"
      )[0];
      deliveryCostHTML.innerHTML = 0;
    } else {
      deliveryCost = state.others.deliveryFee;
    }
    let total = subtotal + deliveryCost;

    // update subtotal and total
    let subTotalHTML = document.getElementsByClassName(
      "cart-details-subtotal-value"
    )[0];
    subTotalHTML.innerHTML = subtotal;
    let totalHTML = document.getElementsByClassName("cart-total-value")[0];
    totalHTML.innerHTML = total;
    state.others.subtotal = subtotal;
    state.others.total = total;
  }

  window.onload = function() {
    setTimeout(updatePrices(), 1000);
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
              <div>
                <div className="inline">S$</div>
                <div className="cart-details-subtotal-value inline margin-left">
                  {state.others.subtotal}
                </div>
              </div>
            </div>
            <div className="cart-details-delivery-fee mt-1">
              <div>Delivery fee</div>
              <div>
                <div className="inline">S$</div>
                <div className="cart-details-delivery-fee-money inline margin-left">
                  {state.others.deliveryFee}
                </div>
              </div>
            </div>
            <div className="cart-details-total mt-1">
              <div>
                <b>Total</b>
              </div>
              <div>
                <div className="inline">S$</div>
                <div className="cart-total-value inline margin-left">
                  {state.others.total}
                </div>
              </div>
            </div>
          </div>
          <Link
            className="d-grid padding mt-1"
            to="/checkout"
            style={{ textDecoration: "none" }}
            state={state}
          >
            <button className="padding btn pink">Submit order</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
