import React from "react";
import { Link, useLocation } from "react-router-dom";
import CartDetails from "../components/CartDetails";
import DeliveryDetails from "../components/DeliveryDetails";
import NavBar from "../components/NavBar";
import PaymentDetails from "../components/PaymentDetails";
import PersonalDetails from "../components/PersonalDetails";

export default function CheckoutPage() {
  const location = useLocation();
  const cart = location.state;

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
          <button className="padding btn pink">Place order</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
