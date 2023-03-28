import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthenticationForm(props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const createAccount = (props) => {
    console.log(props);
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input type="text" className="form-control mt-1" />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" className="form-control mt-1" />
            </div>
            <Link to="/">
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn pink">
                  Submit
                </button>
              </div>
            </Link>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" method="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input type="text" className="form-control mt-1" name="username" />
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              name="first_name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input type="text" className="form-control mt-1" name="last_name" />
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control mt-1"
              name="phone_no"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input type="email" className="form-control mt-1" name="email" />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              name="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn pink"
              onClick={createAccount(props)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
