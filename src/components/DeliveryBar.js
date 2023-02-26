import React from "react";

export default class DeliveryBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col border">
              <div className="text-center">DELIVERING TO:</div>
              <div className="text-center">
                <b className="pinkFont">Home</b> <b>Singapore 158748</b>
              </div>
            </div>
            <div className="col border">
              <div className="text-center">WHEN:</div>
              <div className="text-center">
                <b>ASAP</b>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
