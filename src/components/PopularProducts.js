import React from "react";
import { Link } from "react-router-dom";
import eggImage from "../img/dasoon-eggs.webp";
import milkImage from "../img/meiji-2l-milk.png";
import "../styles.css";
import addToCartButton from "../svg/ic-add.svg";
import { ReactComponent as PandaMart } from "../svg/pandamart-white.svg";
import ItemModal from "./ItemModal";

export default function PopularProducts() {
  // GET data from backend. this should be independent from CartPanel.js
  const state = {
    items: [
      {
        id: 1,
        name: "Dasoon Premium Fresh Egg 15S",
        price: 5,
        image: eggImage,
      },
      {
        id: 2,
        name: "Meiji Fresh Milk 2L",
        price: 7,
        image: milkImage,
      },
    ],
  };

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
