import React from "react";
import "./styles.css";
import milkImage from "./img/meiji-2l-milk.png";
import eggImage from "./img/dasoon-eggs.webp";

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
    ],
  };

  renderItems() {
    let jsx = [];

    for (let item of this.state.items) {
      jsx.push(
        <div
          key={item.id}
          className="card mb-3"
          style={{
            width: 13 + "rem",
          }}
        >
          <img
            src={item.image}
            className="card-img-top photo mx-auto"
            alt={item.name}
          ></img>
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
        <div className="border">
          <h1 className="text-center">pandamart (RedHill)</h1>
          <h2><b>Popular Products</b></h2>
          {this.renderItems()}
        </div>
      </React.Fragment>
    );
  }
}
