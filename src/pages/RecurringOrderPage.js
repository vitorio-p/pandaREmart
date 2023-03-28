import React from "react";
import NavBar from "../components/NavBar";
import RecurringOrderComponent from "../components/RecurringOrderComponent";

export default function RecurringOrderPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="recurring-order">
        <RecurringOrderComponent />
      </div>
    </React.Fragment>
  );
}
