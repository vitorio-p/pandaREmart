import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import PopularProducts from "../components/PopularProducts";
import DeliveryBar from "../components/DeliveryBar";
import CheckoutBar from "../components/CheckoutBar";
import DeliveryDetails from "../components/DeliveryDetails";
import PersonalDetails from "../components/PersonalDetails";
import PaymentDetails from "../components/PaymentDetails";

export default function CheckoutPage() {
  return (
    <React.Fragment>
      <NavBar />
      <DeliveryDetails />
      <PersonalDetails />
      <PaymentDetails />
      <div>Cart details</div>
      <DeliveryBar />
      <PopularProducts />
      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <CheckoutBar />
      </Link>
    </React.Fragment>
  );
}
