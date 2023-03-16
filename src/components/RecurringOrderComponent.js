import React from "react";
import { Link } from "react-router-dom";

export default function RecurringOrderComponent() {
  return (
    <React.Fragment>
      <div className="card rop-component">
        <h3>Recurring Order</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Cart</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>23 Mar 2023</td>
              <td>4:00 PM</td>
              <td>Click here</td>
              <td>
                <Link to="/">
                  <button className="btn pink">Edit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>30 Mar 2023</td>
              <td>4:00 PM</td>
              <td>Click here</td>
              <td>
                <Link to="/">
                  <button className="btn pink">Edit</button>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>7 Apr 2023</td>
              <td>4:00 PM</td>
              <td>Click here</td>
              <td>
                <Link to="/">
                  <button className="btn pink">Edit</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn pink">Cancel recurring order</button>
      </div>
    </React.Fragment>
  );
}
