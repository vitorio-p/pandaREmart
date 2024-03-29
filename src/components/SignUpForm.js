import React from "react";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" method="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link to={"/users/login"} style={{ textDecoration: "none" }}>
              <span className="link-primary">Log In</span>
            </Link>
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
            <input type="number" className="form-control mt-1" name="phone" />
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
            <button type="submit" className="btn pink">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
