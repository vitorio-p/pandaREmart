import React from "react";
import { Link } from "react-router-dom";
import ItemModal from "./ItemModal";
import "../styles.css";
import milkImage from "../img/meiji-2l-milk.png";
import eggImage from "../img/dasoon-eggs.webp";
import breadImage from "../img/bread.jpeg";
import { ReactComponent as AddSVG } from "../svg/ic-add.svg";
import { ReactComponent as PandaMart } from "../svg/pandamart-white.svg";

export default class PopularProducts extends React.Component {
  state = {
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
      {
        id: 3,
        name: "Gardenia Jumbo 600 Enriched White Bread",
        price: 3,
        image: breadImage,
      },
    ],
  };

  renderItems() {
    let jsx = [];

    for (let item of this.state.items) {
      jsx.push(
        <div
          key={item.id}
          className="card"
          onClick={ItemModal}
        >
          <Link to="/item/:id">
            <img
              src={item.image}
              className="card-img-top"
              alt={item.name}
            ></img>
          </Link>
          <Link to="/cart">
            <AddSVG className="plusButton" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">S$ {item.price}</h5>
            <h6 className="card-text">{item.name}</h6>
          </div>
        </div>
      );
    }

    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <div className="border pink px-2">
          <PandaMart /> <br></br>
          in 20 minutes
        </div>
        <div className="px-2">
          <h2>
            <b>Popular Products</b>
          </h2>
          <div className="d-flex">{this.renderItems()}</div>
        </div>
      </React.Fragment>
    );
  }
}
