import React from "react";
import { Link, useLocation } from "react-router-dom";
import CartDetails from "../components/CartDetails";
import DeliveryDetails from "../components/DeliveryDetails";
import NavBar from "../components/NavBar";
import PaymentDetails from "../components/PaymentDetails";
import PersonalDetails from "../components/PersonalDetails";
import axios from "axios";

export default function CheckoutPage() {
  const location = useLocation();
  const cart = location.state;
  console.log('cart is', cart)

  function postToBE() {
    axios
      .post("/orders", cart)
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="checkout">
        <CartDetails state={cart} />
        <DeliveryDetails />
        <PersonalDetails />
        <PaymentDetails />
        <Link
          className="d-grid mt-2"
          to="/order-tracking"
          style={{ textDecoration: "none" }}
        >
          <button className="padding btn pink" onClick={postToBE}>
            Place order
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
}
