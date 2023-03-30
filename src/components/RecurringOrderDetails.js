import axios from "axios";
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
        quantity: 2,
      },
      {
        id: 2,
        name: "Gardenia Jumbo 600 Enriched White Bread",
        price: 3,
        quantity: 1,
      },
    ],
    others: {
      subtotal: 22,
      deliveryFee: 2,
      total: 24,
    },
  };

  const ordersState = {
    orders: [
      {
        id: 0,
        date: "6 April 2023",
        time: "2:00 PM",
      },
      {
        id: 1,
        date: "13 April 2023",
        time: "2:00 PM",
      },
      {
        id: 2,
        date: "20 April 2023",
        time: "2:00 PM",
      },
    ],
  };

  axios
    .get("/orders/1")
    .then(function (response) {
      console.log("response is", response);
    })
    .catch(function (error) {
      console.log("error is", error);
    })
    .finally(function () {
      console.log("axios is working");
    });

  function renderItems() {
    let jsx = [];
    for (let item of state.items) {
      if (item.quantity !== 0) {
        jsx.push(
          <div className="cart-box padding" id={item.id}>
            <div className="cart-details-item">
              <div>{item.quantity} ×</div>
              <div className="padding">{item.name}</div>
              <div className="cart-item-price">S$ {item.price}</div>
            </div>
          </div>
        );
      }
    }
    return jsx;
  }

  function renderOrders() {
    let jsx = [];
    for (let order of ordersState.orders) {
      jsx.push(
        <tr id={order.id} className="orders">
          <td>{order.date}</td>
          <td>{order.time}</td>
          <td>
            <button className="btn pink" id={order.id} onClick={cancelOrder}>
              Cancel
            </button>
          </td>
        </tr>
      );
    }
    return jsx;
  }

  const cancelOrder = (order) => {
    const idToBeCancelled = order.target.id;
    const orderToBeCancelled = document.getElementsByClassName("orders");
    for (let orderItem of orderToBeCancelled) {
      if (orderItem.id === idToBeCancelled) {
        orderItem.remove();
        if (orderToBeCancelled.length === 3) {
          const orders = document.querySelectorAll(".orders");
          orders.forEach((order) => {
            order.remove();
          });
        }
      }
    }
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
        <div className="card checkout-page orders" name="change">
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
          <table className="table table-striped orders">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>{renderOrders(ordersState)}</tbody>
          </table>
        </div>
        <button className="btn pink orders">Show more </button>
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
