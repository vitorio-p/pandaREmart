import React from "react";

export default function DeliveryDetails() {
  return (
    <React.Fragment>
      <div className="card checkout-page">
        <h3>Delivery details</h3>
        <h5>Delivery address</h5>
        <div>1 Alexandra View #03-69</div>
        <div>Singapore 369963</div>
        <h5>Recurring order</h5>
        {/* <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input checkbox-pink"
            type="checkbox"
            id="flexSwitchCheckReverse"
          />
          <label className="form-check-label" for="flexSwitchCheckReverse">
            Recurring order
          </label>
        </div> */}
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox-pink"
              type="checkbox"
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
              className="form-check-input checkbox-pink"
              type="checkbox"
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
              className="form-check-input checkbox-pink"
              type="checkbox"
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
              className="form-check-input checkbox-pink"
              type="checkbox"
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
              className="form-check-input checkbox-pink"
              type="checkbox"
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
              className="form-check-input checkbox-pink"
              type="checkbox"
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
              className="form-check-input checkbox-pink"
              type="checkbox"
              name="inlineRadioOptions"
              id="day"
              value="sun"
            />
            <label className="form-check-label" for="inlineRadio3">
              Sun
            </label>
          </div>

          <div className="cart-details-item">
            <div>Time</div>
            <input type="time" id="order-time" name="order-time" />
          </div>

          <div>Repeat every</div>

          <div>
            Ends
            <div className="form-check">
              <input
                className="form-check-input checkbox-pink"
                type="radio"
                name="flexRadioDefaultEnding"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Never
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input checkbox-pink"
                type="radio"
                name="flexRadioDefaultEnding"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                On
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input checkbox-pink"
                type="radio"
                name="flexRadioDefaultEnding"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                After
              </label>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
