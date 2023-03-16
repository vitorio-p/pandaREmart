import React from "react";
import { Link } from "react-router-dom";
import cartLogo from "../svg/cart.svg";
import { ReactComponent as FoodpandaLogoSVG } from "../svg/foodpanda-logo-plain.svg";
import { ReactComponent as UserSVG } from "../svg/user.svg";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar container-fluid border px-2 position-relative">
          <UserSVG />
          <FoodpandaLogoSVG className="position-absolute start-50 translate-middle-x" />
          <Link to="/cart">
            <img src={cartLogo} alt="cart" />
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}
