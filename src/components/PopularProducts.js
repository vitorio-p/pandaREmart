import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { storeMock } from "../storeMock";
import "../styles.css";
import addToCartButton from "../svg/ic-add.svg";
import { ReactComponent as PandaMart } from "../svg/pandamart-white.svg";
import ItemModal from "./ItemModal";

export default function PopularProducts() {
  const state = storeMock;

  axios
    .get("/products")
    .then(function (response) {
      console.log("response is", response);
    })
    .catch(function (error) {
      console.log("error is", error);
    })
    .finally(function () {
      console.log("axios is working");
    });

  function renderItems(state) {
    let jsx = [];

    for (let item of state.items) {
      jsx.push(
        <div key={item.id} className="card item" onClick={ItemModal}>
          <Link to="/item/:id">
            <img src={item.image} className="card-img-top" alt={item.name} />
          </Link>
          <div className="add-to-cart">
            <img src={addToCartButton} alt="add to cart" />
          </div>
          <div className="card-body">
            <h5 className="card-title">S$ {item.price}</h5>
            <h6 className="card-text">{item.name}</h6>
          </div>
        </div>
      );
    }

    return jsx;
  }

  return (
    <React.Fragment>
      <div className="popular-product">
        <div className="border pink px-2">
          <PandaMart /> <br></br>
          in 20 minutes
        </div>
        <div className="px-2">
          <h2>
            <b>Popular Products</b>
          </h2>
          <div className="d-flex">{renderItems(state)}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
