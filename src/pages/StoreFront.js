import React from "react";
import CartPanel from "../components/CartPanel";
import DeliveryBar from "../components/DeliveryBar";
import NavBar from "../components/NavBar";
import PopularProducts from "../components/PopularProducts";

export default function StoreFront() {
  return (
    <React.Fragment>
      <NavBar />
      <DeliveryBar />
      <PopularProducts />
      <CartPanel />
    </React.Fragment>
  );
}
