import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import NavBar from "../components/NavBar";

export default function AuthenticationPage() {
  return (
    <React.Fragment>
      <NavBar />
      <AuthenticationForm />
    </React.Fragment>
  );
}
