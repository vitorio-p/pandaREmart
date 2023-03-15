import React from "react";

export default class DeliveryBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col padding border">
              <div>DELIVERING TO:</div>
              <div>
                <b className="pinkFont">Home</b> <b>Singapore 158748</b>
              </div>
            </div>
            <div className="col padding border">
              <div>WHEN:</div>
              <b>ASAP</b>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
