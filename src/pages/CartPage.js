import React from "react";
import { useParams, Link } from "react-router-dom";
import ItemModal from "../components/ItemModal";
import Item from "../components/Item";
import { ReactComponent as CloseSVG } from "../svg/ic-close.svg";

export default function CartPage(props) {
  let cart = useParams();
  return (
    <React.Fragment>
      <Link to="/">
        <CloseSVG className="position-absolute top-0 end-0" />
      </Link>
      <p>Time logo</p>
      <h5>Your order from pandamart</h5>
      <p>Insert items here</p>
      <h4>Subtotal</h4>
      <h4>Minimum order</h4>
      <h4>Small order fee</h4>
      <h4>Delivery fee</h4>
      <h4>Platform fee</h4>
      <h4>Including GST</h4>

      {/* {props.items.map((eachItem) => {
        return (
          <Item
            key={eachItem._id}
            id={eachItem._id}
            name={eachItem.name}
            type={eachItem.type}
            price={eachItem.price}
          />
        );
      })} */}
    </React.Fragment>
  );
}
