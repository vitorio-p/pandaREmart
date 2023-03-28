import React, { useState } from "react";
import Datetime from "react-datetime";

export default function DeliveryDetails() {
  const [isShown, setIsShown] = useState(false);

  const timeConstraints = {
    minutes: {
      step: 30,
    },
  };

  return (
    <React.Fragment>
      <div className="card checkout-page">
        <div>
          <h3>Delivery details</h3>
          <h5>Delivery address</h5>
          <div>1 Alexandra View #03-69</div>
          <div>Singapore 369963</div>
        </div>
        <div className="form-check form-switch form-check-reverse margin-top">
          <input
            className="form-check-input checkbox-pink"
            type="checkbox"
            id="flexSwitchCheckReverse"
            onChange={() => {
              setIsShown(!isShown);
            }}
          />
          <label
            className="form-check-label side-by-side"
            for="flexSwitchCheckReverse"
          >
            <h5>Recurring order</h5>
          </label>
        </div>
        {isShown && (
          <div id="#collapseExample">
            <div>
              <b>Name</b>
              <input
                type="text"
                class="form-control"
                id="recurring-order-name"
                placeholder="Order 1"
              />
            </div>
            <div>
              <b>Days</b>
            </div>
            <div className="space-between">
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
            </div>

            <div className="space-between">
              <b>Time</b>
              <Datetime dateFormat={false} timeConstraints={timeConstraints} />
            </div>

            <div className="space-between">
              <div>
                <b>Repeat</b>
              </div>
              <select className="form-select dropdown">
                <option selected>Choose one option</option>
                <option value="1">Every week</option>
                <option value="2">Every 2 weeks</option>
                <option value="3">Every 3 weeks</option>
                <option value="4">Every 4 weeks</option>
              </select>
            </div>

            <div className="space-between">
              <b>Ends</b>
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
        )}
      </div>
    </React.Fragment>
  );
}
