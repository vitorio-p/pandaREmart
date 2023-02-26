import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UserSVG } from "../svg/user.svg";
// import { ReactComponent as LikedSVG } from "../svg/liked.svg";
import { ReactComponent as CartSVG } from "../svg/cart.svg";
import { ReactComponent as FoodpandaLogoSVG } from "../svg/foodpanda-logo-plain.svg";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar container-fluid border px-2 position-relative">
          <UserSVG />
          <FoodpandaLogoSVG className="position-absolute start-50 translate-middle-x"/>
          {/* <LikedSVG /> */}
          <Link to="/cart">
            <CartSVG />
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}
