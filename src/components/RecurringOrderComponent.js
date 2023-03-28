import React from "react";
import { Link } from "react-router-dom";

export default function RecurringOrderComponent() {
  const state = {
    orders: [
      {
        id: 1,
        name: "Order 1",
        price: 15,
      },
    ],
  };

  const cancelOrder = () => {
    const order = document.getElementById("order");
    order.remove();
  };

  function renderItems(state) {
    let jsx = [];

    for (let item of state.orders) {
      jsx.push(
        <tbody id="order">
          <tr>
            <td>{item.name}</td>
            <td>
              <Link
                to={`/recurring-order/${item.id}`}
                style={{ textDecoration: "none" }}
                state={state}
              >
                <button className="btn pink">View</button>
              </Link>
            </td>
            <td>
              <div className="form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckReverse"
                  checked
                />
              </div>
            </td>
            <td>
              <button className="btn pink" onClick={cancelOrder}>
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      );
    }
    return jsx;
  }

  return (
    <React.Fragment>
      <div className="card recurring-order-page">
        <h3 className="padding">Recurring order</h3>
        <div className="rop-component">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Details</th>
                <th scope="col">Active</th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            {renderItems(state)}
          </table>
        </div>
        <Link
          className="d-grid mt-2 "
          to="/"
          style={{ textDecoration: "none" }}
        >
          <button className="padding btn btn-secondary">Back to Store</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
