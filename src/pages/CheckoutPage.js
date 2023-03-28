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

  // const state = {
  //   recurringOrderDetails: {
  //     id: 0,
  //     name: "Order 1",
  //     days: ["mon", "tue"],
  //     time: "1400",
  //     repeat: "1 week",
  //     ends: "never",
  //   },
  //   paymentMethod: "",
  // };

  return (
    <React.Fragment>
      <NavBar />
      <div className="checkout">
        <CartDetails state={cart} />
        <DeliveryDetails />
        <PersonalDetails />
        <PaymentDetails />
        {/* POST API to store order into db */}
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
