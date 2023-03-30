import React from "react";
import { Link } from "react-router-dom";
import cartLogo from "../svg/cart.svg";
import pandaREmart from "../img/foodpandaREmart.png";
import { ReactComponent as UserSVG } from "../svg/user.svg";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar container-fluid px-2 position-relative">
          <Link to="/users/login">
            <UserSVG />
          </Link>
          <Link to="/">
            <img
              src={pandaREmart}
              alt="logo"
              className="foodpandaLogo translate-middle-x pandaREmart"
            />
          </Link>
          <Link to="/recurring-order">
            <img src={cartLogo} alt="recurring order" />
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}
