import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import PopularProducts from "../components/PopularProducts";
import DeliveryBar from "../components/DeliveryBar";
import CheckoutBar from "../components/CheckoutBar";

export default function CheckoutPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div>Delivery details</div>
      <div>Personal details</div>
      <div>Payment</div>
      <div>Cart details</div>
      <DeliveryBar />
      <PopularProducts />
      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <CheckoutBar />
      </Link>
    </React.Fragment>
  );
}
