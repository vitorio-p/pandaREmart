import React from "react";

export default class DeliveryBar extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="container-fluid border">
            <div className="text-center">DELIVERING TO:</div>
            <div className="text-center">New Address: <b>Singapore 158748</b></div>
          </div>
      </React.Fragment>
    );
  }
}
