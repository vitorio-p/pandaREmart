import React from "react";

export default class DeliveryBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="container-fluid border col">
            <div className="text-center pinkFont">DELIVERING TO:</div>
            <div className="text-center">
              <b className="pinkFont">Home</b> <b>Singapore 158748</b>
            </div>
          </div>
          <div className="container-fluid border col">
            <div className="text-center">WHEN:</div>
            <div className="text-center">
              <b>ASAP</b>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
