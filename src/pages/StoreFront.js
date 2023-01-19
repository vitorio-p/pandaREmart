import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import PopularProducts from "../components/PopularProducts";
import DeliveryBar from "../components/DeliveryBar";
import CartBar from "../components/CartBar";

export default function StoreFront() {
  return (
    <React.Fragment>
      <NavBar />
      <DeliveryBar />
      <PopularProducts />
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <CartBar />
      </Link>
    </React.Fragment>
  );
}
