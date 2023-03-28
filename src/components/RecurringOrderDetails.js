import React from "react";
import { Link } from "react-router-dom";

export default function RecurringOrderDetails() {
  const cancelOrder = () => {
    const order = document.getElementById("order");
    order.remove();
  };

  const cancelAllOrder = () => {
    const orders = document.querySelectorAll(".orders");
    orders.forEach((order) => {
      order.remove();
    });
  };

  return (
    <React.Fragment>
      <div className="card recurring-order-page">
        <h3 className="padding">Order 1</h3>
        <div className="rop-component">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>
              <tr id="order" className="orders">
                <td>6 April</td>
                <td>4:00 PM</td>
                <td>
                  <button className="btn pink" onClick={cancelOrder}>
                    Cancel
                  </button>
                </td>
              </tr>
              <tr id="order" className="orders">
                <td>13 April</td>
                <td>4:00 PM</td>
                <td>
                  <button className="btn pink" onClick={cancelOrder}>
                    Cancel
                  </button>
                </td>
              </tr>
              <tr id="order" className="orders">
                <td>20 April</td>
                <td>4:00 PM</td>
                <td>
                  <button className="btn pink" onClick={cancelOrder}>
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn pink orders" onClick={cancelAllOrder}>
          Cancel all recurring order
        </button>
        <Link
          className="d-grid mt-2 "
          to="/recurring-order"
          style={{ textDecoration: "none" }}
        >
          <button className="padding btn btn-secondary">Back</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
