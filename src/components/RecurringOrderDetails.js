import React from "react";
import { Link } from "react-router-dom";

export default function RecurringOrderDetails() {
  const state = {
    items: [
      {
        id: 0,
        name: "Dasoon Premium Fresh Egg 15S",
        price: 5,
        quantity: 1,
      },
      {
        id: 1,
        name: "Meiji Fresh Milk 2L",
        price: 7,
        quantity: 1,
      },
      {
        id: 2,
        name: "Gardenia Jumbo 600 Enriched White Bread",
        price: 3,
        quantity: 1,
      },
    ],
    others: {
      subtotal: 15,
      deliveryFee: 2,
      total: 17,
    },
  };

  function renderItems() {
    let jsx = [];
    let id = 1;

    for (let item of state.items) {
      if (item.quantity !== 0) {
        jsx.push(
          <div className="cart-box padding" id={id}>
            <div className="cart-details-item">
              <div>{item.quantity} ×</div>
              <div className="padding">{item.name}</div>
              <div className="cart-item-price">S$ {item.price}</div>
            </div>
          </div>
        );
        id++;
      }
    }
    return jsx;
  }

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
      <div className="card recurring-order-page ">
        <h3 className="padding">Order 1</h3>
        <div className="card checkout-page orders">
          <h3>Cart details</h3>
          <div className="cart-content">{renderItems(state)}</div>
          <div className="side-by-side">
            <div>Subtotal</div>
            <div>S$ {state.others.subtotal}</div>
          </div>
          <div className="side-by-side">
            <div>Delivery fee</div>
            <div>S$ {state.others.deliveryFee}</div>
          </div>
          <div className="side-by-side">
            <div>Total</div>
            <div>S$ {state.others.total}</div>
          </div>
        </div>

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
