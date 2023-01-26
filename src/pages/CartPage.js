import React from "react";
import { useParams, Link } from "react-router-dom";
import ItemModal from "../components/ItemModal";
import Item from "../components/Item";
import { ReactComponent as CloseSVG } from "../svg/ic-close.svg";
import CartBar from "../components/CartBar";
import CheckoutBar from "../components/CheckoutBar";

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

      <div className="form-check form-switch form-check-reverse">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
        />
        <label className="form-check-label" for="flexSwitchCheckReverse">
          Recurring order
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="day"
          value="mon"
        />
        <label className="form-check-label" for="inlineRadio1">
          Mon
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="day"
          value="tue"
        />
        <label className="form-check-label" for="inlineRadio2">
          Tue
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="day"
          value="wed"
        />
        <label className="form-check-label" for="inlineRadio3">
          Wed
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="day"
          value="thu"
        />
        <label className="form-check-label" for="inlineRadio3">
          Thu
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="day"
          value="fri"
        />
        <label className="form-check-label" for="inlineRadio3">
          Fri
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="day"
          value="sat"
        />
        <label className="form-check-label" for="inlineRadio3">
          Sat
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="day"
          value="sun"
        />
        <label className="form-check-label" for="inlineRadio3">
          Sun
        </label>
      </div>

      <div>Time</div>

      <div>Repeat every</div>

      <div>
        Ends
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Never
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" for="flexRadioDefault2">
            On
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            After
          </label>
        </div>
      </div>
      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <CheckoutBar />
      </Link>

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
