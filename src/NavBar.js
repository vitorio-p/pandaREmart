import React from "react";
import {ReactComponent as UserSVG} from './svg/user.svg'
import {ReactComponent as LikedSVG} from './svg/liked.svg'
import {ReactComponent as CartSVG} from './svg/cart.svg'
import {ReactComponent as FoodpandaLogoSVG} from './svg/foodpanda-logo.svg'
import foodpandalogo from './svg/foodpanda-logo.svg'

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar bg-white border">
          <div className="container-fluid">
            <UserSVG />
            <img
              src={foodpandalogo}
              style={{width: 120}}
              alt="foodpanda logo"
              />
            <LikedSVG />
            <CartSVG />
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
