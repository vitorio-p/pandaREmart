import React from "react";

export default class CartBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="border d-grid">
          <button className="btn pink" type="button">
            View Cart
          </button>
        </div>
      </React.Fragment>
    );
  }
}
