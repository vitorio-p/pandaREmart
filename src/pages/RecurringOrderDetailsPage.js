import React from "react";
import NavBar from "../components/NavBar";
import RecurringOrderDetails from "../components/RecurringOrderDetails";

export default function RecurringOrderDetailsPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="recurring-order">
        <RecurringOrderDetails />
      </div>
    </React.Fragment>
  );
}
