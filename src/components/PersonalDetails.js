import React from "react";

export default function PersonalDetails() {

let name = "Vitorio Pandinata"
let email = "vp@gmail.com"
let phone = "+65 88160390"

  return (
    <React.Fragment>
      <h1>Personal details</h1>
      <h6>{name}</h6>
      <h6>{email}</h6>
      <h6>{phone}</h6>
    </React.Fragment>
  );
}
