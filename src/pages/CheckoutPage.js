import React from "react";
import { Link } from "react-router-dom";
import DeliveryDetails from "../components/DeliveryDetails";
import NavBar from "../components/NavBar";
import PaymentDetails from "../components/PaymentDetails";
import PersonalDetails from "../components/PersonalDetails";
import CartDetails from "../components/CartDetails"

export default function CheckoutPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="checkout">
        <CartDetails />
        <DeliveryDetails />
        <PersonalDetails />
        <PaymentDetails />
        <Link
          className="d-grid mt-2"
          to="/order-tracking"
          style={{ textDecoration: "none" }}
        >
          <button className="padding btn pink">Place order</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
