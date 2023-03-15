import React from "react";

export default function PersonalDetails() {
  let name = "Vitorio Pandinata";
  let email = "vp@gmail.com";
  let phone = "+65 88160390";

  return (
    <React.Fragment>
      <div className="card checkout-page">
        <h3>Personal details</h3>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    </React.Fragment>
  );
}
