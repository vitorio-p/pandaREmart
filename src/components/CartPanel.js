import React from "react";
import { Link } from "react-router-dom";
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
        quantity: 0,
      },
      {
        id: 1,
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

    for (let item of state.items) {
      jsx.push(
        <div className="cart-box padding mb-4" id={item.id}>
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
      }
    }
  }

  function addOne(item) {
    const idToBeAdded = item.target.id;
    const inputBox = document.getElementsByClassName("cart-item-input");
    for (let cartItem of inputBox) {
      if (cartItem.id === idToBeAdded) {
        cartItem.value++;
      }
    }
  }

  function subtractOne(item) {
    const idToBeSubtracted = item.target.id;
    const inputBox = document.getElementsByClassName("cart-item-input");
    for (let cartItem of inputBox) {
      if (cartItem.id === idToBeSubtracted) {
        cartItem.value--;
      }
      if (cartItem.value < 1) {
        deleteItem(item);
      }
    }
  }

  function updatePrices() {
    console.log("updating prices");
    let cartContent = document.getElementsByClassName("cart-content")[0];
    console.log("cartcontent", cartContent);
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
