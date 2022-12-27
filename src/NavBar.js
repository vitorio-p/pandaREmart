import React from "react";
import user from "./img/user.png";
import cart from "./img/cart.png";
import foodpanda from "./img/foodpanda.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar bg-white border">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={user}
                alt="User"
                class="d-inline-block align-text-top"
              />
            </a>
            <a className="navbar-brand" href="#">
              <img
                src={foodpanda}
                alt="Logo"
                class="d-inline-block align-text-top"
              />
            </a>
            <a className="navbar-brand" href="#">
              <img
                src={cart}
                alt="Cart"
                class="d-inline-block align-text-top"
              />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
