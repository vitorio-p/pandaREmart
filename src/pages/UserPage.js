import React from "react";
import NavBar from "../components/NavBar";
import PersonalDetails from "../components/PersonalDetails";
import RecurringOrderComponent from "../components/RecurringOrderComponent";

export default function UserPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="otp">
        <PersonalDetails />
        <RecurringOrderComponent />
      </div>
    </React.Fragment>
  );
}
