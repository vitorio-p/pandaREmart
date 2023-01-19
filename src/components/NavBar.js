import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UserSVG } from "../svg/user.svg";
import { ReactComponent as LikedSVG } from "../svg/liked.svg";
import { ReactComponent as CartSVG } from "../svg/cart.svg";
import { ReactComponent as FoodpandaLogoSVG } from "../svg/foodpanda-logo-plain.svg";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar bg-white border">
          <div className="container-fluid">
            <UserSVG />
            <FoodpandaLogoSVG />
            <LikedSVG />
            <Link to="/cart">
              <CartSVG />
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
