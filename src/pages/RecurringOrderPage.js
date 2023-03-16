import React from "react";
import NavBar from "../components/NavBar";
import RecurringOrderComponent from "../components/RecurringOrderComponent";

export default function RecurringOrderPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="rop">
        <RecurringOrderComponent />
      </div>
    </React.Fragment>
  );
}
